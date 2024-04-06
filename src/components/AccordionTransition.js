/*global chrome*/
import React, { useEffect, useState } from 'react';
import { LiaAmazon } from "react-icons/lia";
import Rating from '@mui/material/Rating';
import { FaAngleDown } from "react-icons/fa";
import Overview from './Accordions/Overview';
import Dimension from './Accordions/Dimension';
import RanksPrices from './Accordions/RanksPrices';
import Lookup from './Accordions/Lookup';
import Variations from './Accordions/Variations';
import Alerts from './Accordions/Alerts';
import ProfitCalculator from './Accordions/ProfitCalculator';
import ROI from './Accordions/ROI';
import Offers from './Accordions/Offers';
export default function AccordionTransition({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const [imageDataUrl, setImageDataUrl] = useState(null);

  const handleExpansion = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };
  
  // useEffect(() => {
  //   console.log(data?.image, 'image in accordion-transition');
  //   // Function to send a message to content.js
  //   function sendMessageToContentScript(message, callback) {
  //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //       chrome.tabs.sendMessage(tabs[0].id, message, function (response) {
  //         console.log("Response from content.js:", response);
  //         // Call the callback function with the response
  //         callback(response);
  //       });
  //     });
  //   }

  //   // Call the function with the image URL
  //   const imageUrl = data?.image;
  //   sendMessageToContentScript({ action: "fetchImage", imageUrl }, function(response) {
  //     // Update the state with the fetched image data URL
  //     setImageDataUrl(response.imageDataUrl);
  //   });
  // }, []);

  const basicInfo = data?.basicInfo;
  console.log('imageDataUrl in  accordion-transition', imageDataUrl);
  return (
    <div className='w-[310px] p-3 bg-secondary'>
      <div class="inline-block top-20 left-20 gap-0 rounded-t-lg bg-primary-light border-0 border-b-4 border-primary mb-6 p-2"
        style={{
        }}>
        <div className='flex'>
          <div class="w-6 h-6 bg-gray-200 rounded-lg ml-2 flex justify-center items-center text-primary">
            <LiaAmazon />
          </div>
          <div class="w-6 h-6 bg-gray-200 rounded-lg ml-2 flex justify-center items-center text-primary">
            <LiaAmazon />
          </div>
          <div class="w-6 h-6 bg-gray-200 rounded-lg ml-2 flex justify-center items-center text-primary">
            <LiaAmazon />
          </div>
          <div class="w-6 h-6 bg-gray-200 rounded-lg ml-2 flex justify-center items-center text-primary">
            <LiaAmazon />
          </div>

        </div>
        <img src={data?.image} alt="Product 1" class="w-[80%] m-auto mt-4 rounded-t-lg" />
      </div>

      <div className='text-primary text-left'>
        <div style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
        }}>
          {basicInfo?.brand && basicInfo?.brand}
        </div>
        <div style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>
          {basicInfo?.productName && basicInfo?.productName}
        </div>
        <div>
          <Rating name="read-only" value={'4.5'} readOnly style={{
            color: 'green',
          }} />
        </div>
        <div className='mt-2 flex' style={{
          fontSize: '0.7rem',
        }}>
          <div className=''>ASIN: {data?.asin ? data?.asin : '-'}</div>
          <div className='ml-4'>EAN: {data?.eanList? data?.eanList : '-'}</div>
        </div>
      </div>

      <Overview data={data?.overview} />
      <Dimension data={data?.dimensions} />
      <RanksPrices data={data?.ranksandprices} />
      <Alerts data={data?.alerts} />
      <Offers data={data?.offers} />
      <Lookup />
      <ROI />
      <Variations />
      <ProfitCalculator data={data?.profitCalculator} />
    </div>
  );
}
