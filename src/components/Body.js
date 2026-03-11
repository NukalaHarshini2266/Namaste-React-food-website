import RestaurantCard,{withpromotedlabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import maindata from "../utils/mainData.json";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
const Body=()=>{
    //super powerful react variable is state variable(maintains state of componenet)
    //to create super powerful variable we use react hooks called statehook
    //hook is also a normal js function
    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredrestaurant,setfilteredrestaurant]=useState([]);
    const [searchtext,setsearchtext]=useState("");

    //can update value like this or using props form app.js
    //const {loggedInuser}=useContext(userContext);
    const {loggedInuser,setuserName}=useContext(userContext);
    
    const RestaurantCardPromoted=withpromotedlabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData=async  ()=>{

        // const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"); 
        
        // const json=await data.json();

        // console.log(json);
        const json=maindata;
        //console.log(json);
        
        // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
        // setfilteredrestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants||[]);
        //or
        // console.log(json?.data?.cards?.find((item)=>
        //     item?.card?.card?.id?.includes("restaurant_grid"))?.card?.card?.gridElements?.infoWithStyle?.restaurants);  

        setListOfRestaurants(json?.data?.cards?.find((item)=>(
            item?.card?.card?.id?.includes("restaurant_grid")
        ))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
        setfilteredrestaurant(json?.data?.cards?.find((item)=>(
            item?.card?.card?.id?.includes("restaurant_grid")
        ))?.card?.card?.gridElements?.infoWithStyle?.restaurants);
          
    };
    
    const onlinestatus=useOnlineStatus();
    if(onlinestatus==false){
        return <h1>Looks like your offline!please check your internet connection</h1>
    }
    
    return ListOfRestaurants.length==0?(<Shimmer/>):(
        <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" className="border border-solid border-black p-1" value={searchtext} onChange={(e)=>{
                        setsearchtext(e.target.value);
                    }}/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                    onClick={()=>{
                        const searchfilter=ListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchtext));
                        setfilteredrestaurant(searchfilter);
                    }}>search</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-200 rounded-lg" onClick={()=>{
                    //filter logic
                    //if this is runned using js variable it filters but not displayed on ui 
                    //due to faster dom manipulation
                    // ListOfRestaurants=ListOfRestaurants.filter((res)=>res.info.avgRating>4);
                    // console.log(ListOfRestaurants);

                    const filteredlist=ListOfRestaurants.filter((res)=>res.info.avgRating>4.5);
                    setfilteredrestaurant(filteredlist);
                }}>Top rated Restaurant</button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <label>userName:</label>
                    <input className="border border-black p-1" type="text"  value={loggedInuser} 
                    onChange={(e)=>{
                        setuserName(e.target.value);
                      //{loggedInuser:e.target.value}  
                    }}/>
                </div>
            
            </div>
            <div className="flex flex-wrap "> 
                {/* Restaurant card */}
              
                {filteredrestaurant.map((restaurant) => (
    <Link key={restaurant.info.id} 
    to={"/restaurant/"+restaurant.info.id}>
        {/* if promoted is true add promoted label to it */}
        {restaurant.info.promoted?(<RestaurantCardPromoted  resData={restaurant} />):
        (<RestaurantCard  resData={restaurant} />) }
        </Link>
))}

                
            </div>
        </div>
    );
};

export default Body;