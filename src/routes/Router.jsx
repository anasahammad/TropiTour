import {
    createBrowserRouter
    
   } from "react-router-dom"; 
import Root from "../Layoutes/Root";
import Home from "../pages/Home";
import AllTouristSpot from "../pages/AllTouristSpot";
import AddTouristSpot from "../pages/AddTouristSpot";
import MyList from "../pages/MyList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SpotDetails from "../components/SpotDetails";
import UpdateSpot from "../components/UpdateSpot";
import Countries from "../components/Countries";
import SpotByCountry from "../components/SpotByCountry";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoutes from "../components/privateroutes/PrivateRoutes";

  export const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root/>, 
    errorElement: <ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/all-tourist-spot",
            element: <AllTouristSpot/>
        },
        {
            path: "/add-tourist-spot",
            element:<PrivateRoutes><AddTouristSpot/></PrivateRoutes> 
        },
        {
            path: "/myList",
            element:<PrivateRoutes><MyList/></PrivateRoutes> 
        },
        {
            path: "/login",
            element: <Login/>
        },
        {
            path: "/register",
            element: <Register/>
        },
        {
            path: "/spot-details/:id",
            element:<PrivateRoutes><SpotDetails/></PrivateRoutes> ,
            loader: ({params})=> fetch(`https://tropi-tour-server.vercel.app/spots/${params.id}`)
        },
        {
            path:"/spots-update/:id",
            element: <UpdateSpot/>,
            loader: ({params})=> fetch(`https://tropi-tour-server.vercel.app/spots/${params.id}`)
        },
        {
            path: "/countries/:countryName",
            element: <SpotByCountry/>
           
        }
    ]
    }, 
   ]); 