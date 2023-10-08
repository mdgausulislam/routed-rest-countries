import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Countries from './components/Countries/Countries.jsx';
import Country from './components/Country/Country.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Countries></Countries>,
        loader:()=>fetch('https://restcountries.com/v3.1/all')
      },
      {
        path:'/country/:countryId',
        element:<Country></Country>,
        loader:(params)=>fetch(`https://restcountries.com/v3.1/${params.countryId}`)
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
