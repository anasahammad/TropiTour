import {
    createBrowserRouter
    
   } from "react-router-dom"; 
import Root from "../Layoutes/Root";

  export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root/>
    }, 
   ]); 