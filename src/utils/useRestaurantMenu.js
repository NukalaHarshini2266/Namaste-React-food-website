import { useEffect, useState } from "react";
import resmenu from "./restaurantMenu.json";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        //const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=699984&catalog_qa=undefined&submitAction=ENTER");
     
        //const json = await data.json();
        
        const json=resmenu?.array;

        console.log(json);
        const filtered = json.find((element) => {
            return element.data.cards[2].card.card.info.id === resId;
        });


    setResInfo(filtered?.data);

    }

    return resInfo;
}
export default useRestaurantMenu;