/*global chrome*/
import React, { useState, useEffect } from 'react';
import './App.css';
import SidebarContent from './components/SidebarContent';
import AccordionTransition from './components/AccordionTransition';
import { IoLogoChrome } from "react-icons/io";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Main() {
  const asin  = useParams()?.asin;
  const [productId, setProductId] = useState('');
  const [productDetails, setProductDetails] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = () => {
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const productId = e.target[0].value;
    const data = [
      { id: '100', name: 'Product 1', price: 100 },
      { id: '101', name: 'Product 2', price: 200 },
      { id: '103', name: 'Product 3', price: 300 },
    ].find(product => product.id === productId);

    setProductDetails(data);
  };

  const fetchProductDetails = async (asin) => {
    try {
      // Define the data to be sent in the request body
      const data = {
        asin: asin,
      };
  
      console.log("Fetching product details for ASIN:", asin);
      // Define the headers including the JWT token
      const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUwLCJ1c2VySWQiOiJzdXNoaWxpb25pbyIsInRpbWUiOiJUaHUgTWFyIDI4IDIwMjQgMTM6MDc6MDggR01UKzA1MzAgKEluZGlhIFN0YW5kYXJkIFRpbWUpIiwiaWF0IjoxNzExNjExNDI4fQ.QOUDaHT-L_U1OGyU1I_40DuXqXFHc42fxLx3aAxUIB8',
        'Content-Type': 'application/json'
      };
  
      // Send the POST request using async/await
      const response = await axios.post('https://vm1.getionio.com/api/productinfo', data, { headers });
  
      // Update the state with the product details
      setProductDetails(response.data);
    } catch (error) {
      console.error('Error:', error);
      // Handle errors
    }
  };
  
  // const getAsin = async () => {
  //   // Send a message to content.js requesting the DOM
  //   chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //     chrome.tabs.sendMessage(tabs[0].id, { action: "getDOM" }, function (response) {
  //       if (chrome.runtime.lastError) {
  //         console.error("Error:", chrome.runtime.lastError.message);
  //       } else {
  //         console.log("Received response from content.js:", response);
  //         if (response && response.asin) {
  //           setAsin(response.asin);
  //           console.log("Received DOM from content.js:", response.dom);
  //           // Call fetchProductDetails after setting the asin state
  //           fetchProductDetails(response.asin);
  //         } else {
  //           console.error("No DOM received from content.js");
  //         }
  //       }
  //     });
  //   });
  // };
  
  useEffect(() => {
    // getAsin();
    if (asin) {
      fetchProductDetails(asin);
    }
  }, []);
  

  console.log(asin, "asin");
  console.log(productDetails, "productDetails");
  return (
    <div className="App">
      <header className="w-full bg-blue-100 text-blue-600 p-4 flex items-center justify-between" style={{
        zIndex: 1000,
      }}>
        <div className="flex items-center">
          <IoLogoChrome className="text-2xl mr-2 w-8 h-8" />
          <h1 className="text-xl font-bold">Chrome Extension</h1>
        </div>
      </header>
      <div className="p-4" style={{
        marginTop: '100px',
      }} >
        {!submitted ? (
          <>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <input
                type="text"
                placeholder="Enter Product ID"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md mt-2 hover:bg-blue-600 transition duration-300" onClick={submitHandler}>Submit</button>
            </form>
          </>
        ) : (
          productDetails && <AccordionTransition data={productDetails} />
        )}
      </div>
    </div>
  );
}

export default Main;