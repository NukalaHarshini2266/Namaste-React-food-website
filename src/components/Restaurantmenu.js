import Shimmer from "./Shimmer";
import {useParams} from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {

  const [showIndex,setshowIndex]=useState(null);
  const {resId}=useParams();

  const resInfo=useRestaurantMenu(resId);

  /*
  const [resInfo,setResInfo]=useState(null);  
  useEffect(()=>{
    fetchMenu();
  } ,[]); 

  const fetchMenu=async()=>{
    //const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=699984&catalog_qa=undefined&submitAction=ENTER");
     
    //const json = await data.json();

    const json=resmenu?.array;

    console.log(json);
    const filtered = json.find((element) => {
        return element.data.cards[2].card.card.info.id === resId;
      });


    setResInfo(filtered?.data);
    
    //setResInfo(json[1].data);
   
  };
  */

  if(resInfo==null) return <Shimmer /> ;

  const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info||{};

  // const {itemCards}=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card||{};
  const itemCards =
  resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];

  //console.log(resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  
  const categories=resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  //console.log(categories);
  

  return(
    <div className='text-center'>
       <h1 className="font-bold my-6">Name:{name}</h1>
     <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>
     {/* <ul>{
      itemCards.map((item) =>(
      <li key={item.card.info.id}>
        {item.card.info.name}-Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
      ))} 
     </ul>  */}
     {/* categories accordian*/}
     {categories.map((category,index)=>(
      <RestaurantCategory 
      key={category?.card?.card?.title}
      data={category?.card?.card}
      showItems={index==showIndex?true:false}
      setshowIndex={()=>{
        index==showIndex?setshowIndex(null):
        setshowIndex(index);

      }}/>
     ))}
    </div>
  )
}

export default Restaurantmenu;
