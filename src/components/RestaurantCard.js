import { CDN_URl } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props
    const {cloudinaryImageId,name,cuisines,avgRating,sla}=resData?.info;
    const { deliveryTime } = sla || {};
    return(
        <div className="m-4 p-4 w-[220px] h-110 rounded-lg bg-gray-200 hover:bg-gray-400" 
        // style={stylecard}
        //style={{backgroundColor:"#f0f0f0"}} 
        >
            <img className="res-logo rounded-lg h-58 w-110" alt="res-logo" src={CDN_URl + cloudinaryImageId }/>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
        </div>
    );

};

export const withpromotedlabel=(RestaurantCard)=>{
        
        return (props)=>{
            return(
                <div>
                    <label className="absolute bg-black text-white m-2 p-2 rounded-lg">promoted</label>
                    <RestaurantCard {...props}/>
                    </div>
            )
        }
    }

export default RestaurantCard;