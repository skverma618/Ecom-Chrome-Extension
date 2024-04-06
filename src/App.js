/*global chrome*/
import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './Main';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: ":asin?",
      element: <Main />,
    },
  ]);


  return (
    <React.Fragment>
      <RouterProvider router={router} />
    </React.Fragment>
  );
}

export default App;