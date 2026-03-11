import { useState ,useEffect, useContext} from "react";
import LOGO_URL from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Header=()=>{
    const [btnname,setbtnname]=useState("Login");

    const onlinestatus=useOnlineStatus();

    const {loggedInuser}=useContext(userContext);


    //selector

    const cartItems=useSelector((store)=>store.cart.items)

    // useEffect(()=>{
    //     console.log("useeffect called");
    // },[])
    return(
        <div className="flex justify-between bg-pink-200 shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-40 h-40 object-cover rounded-full" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4 font-medium">online Status:{onlinestatus?"✅":"❌"}</li>
                    <li className="px-4 font-medium"><Link to="/">Home</Link></li>
                    <li className="px-4 font-medium"><Link to="/about">About us</Link></li>
                    <li className="px-4 font-medium"><Link to="/contact">contact us</Link></li>
                    <li className="px-4 font-medium"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-medium"><Link to="/cart">cart({cartItems.length} items)</Link></li>
                    <button className="login font-medium" onClick={()=>{
                         btnname==="Login" ?setbtnname("Logout"):setbtnname("Login");
                    }}>{btnname}</button>
                    <li className="px-4 font-bold">{loggedInuser}</li>
                </ul>

            </div>
        </div>
    );
};

export default Header;