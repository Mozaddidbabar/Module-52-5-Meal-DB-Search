import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';
import ItemDetails from './components/ItemDetails/ItemDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: '/restaurant',
    element: <Restaurant></Restaurant>,
  },
  {
    path: '/restaurant/:id',
    element: <ItemDetails></ItemDetails>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
