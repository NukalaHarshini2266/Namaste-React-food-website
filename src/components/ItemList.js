
import { useDispatch } from "react-redux";
import { CDN_URl } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList=({items})=>{
    //console.log(items);
    const dispatch=useDispatch();
    const handleAddItem=(item)=>{
        //dispatch an item
        dispatch(addItem(item))

    }
    return (
    <div>
        {items.map((item)=>(
            <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                    <span className="font-medium">{item.card.info.name}</span>
                    <span>- ₹ {item.card.info.price?item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                </div>
                <p>{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
                <div className="absolute">
                <button className="py-2 px-4 mx-7 my-16 rounded-lg bg-green-200 shadow-lg"
                onClick={()=>handleAddItem(item)}>Add +</button>
                </div>
                <img src={CDN_URl+item.card.info.imageId} className="h-auto rounded-lg"/>
                </div>
            </div>

        ))}
    </div>
    );
}
export default ItemList;