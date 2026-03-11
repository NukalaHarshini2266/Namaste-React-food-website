import React,{lazy,Suspense, useEffect, useState} from "react";
import ReactDOM from "react-dom/client";
import {Header} from "./components/Header";
import Body from "./components/Body";
import RestaurantCard from "./components/RestaurantCard";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Restaurantmenu from "./components/Restaurantmenu";
import userContext from "./utils/userContext";
import {Provider} from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
//import Grocery from "./components/Grocery";
const AppLayout=()=>{
  const [userName,setuserName]=useState();  
  useEffect(()=>{
      const data={name:"Harshiniii",
      };
      setuserName(data.name);

    },[])
    return(
      <Provider store={appStore}>
        <userContext.Provider value={{loggedInuser:userName,setuserName}} >
          <div className="app">
            <Header/>
            {/* <Body /> */}

            <Outlet/>
        </div>
        </userContext.Provider>
      </Provider>
    );
};

// const appRouter=createBrowserRouter([
//     {
//         path:"/",
//         element:<AppLayout/>
//     },{
//         path:"/about",
//         element:<About/>
//     }
    
// ])

//for code splitting
const Grocery=lazy(()=> import("./components/Grocery"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement:<Error/>,
    children: [
      {
        index: true,     // 👈 instead of path: "/"
        element: <Body />,
      },
      {
        path: "about",   // 👈 no leading slash in v7
        element: <About />,
      },
      {
        path:"contact",
        element:<Contact />,
      },{
        path:"restaurant/:resId",
        element:<Restaurantmenu/>,
      },
      {
        path:"grocery",
        element:<Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense>,
      },{
        path:"cart",
        element:<Cart/>
      }
    ],
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout/>);

root.render(<RouterProvider router={router} />);