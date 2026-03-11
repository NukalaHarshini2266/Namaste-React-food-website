import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setshowIndex})=>{
    //uncontrolled component
    //const [showItems,setshowItems]=useState(false);
    //console.log(data);
     const handleClick=()=>{
    //     setshowItems(!showItems);
            setshowIndex();
     }
    return(
        <div>
            <div className="w-6/12 mx-auto my-6 bg-gray-50 shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            {/* Header */}   
            <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
            <span >⬇️</span>
            </div>
            {/* Accordian body */}
            {showItems && <ItemList items={data.itemCards}
            />}
            </div>
            
            
      
        </div>
    );
}

export default RestaurantCategory;