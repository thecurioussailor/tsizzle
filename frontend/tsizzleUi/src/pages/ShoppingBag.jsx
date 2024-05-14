import { useNavigate } from "react-router-dom";
import EmptyShoppingBag from "../components/EmptyShoppingBag";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ShoppingBag () {


    const [items, setItems] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function getItem(){
            try{
                const response = await axios.get("https://tsizzle.onrender.com/cart",{
                headers:{
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            })
                console.log(response.data.items);
                setItems(response.data.items)
           
            } catch(error){
                console.log(error)
            }
        }
        getItem();
        
    },[])

    const handleClick = (productId) => {
        // console.log("Product to pass:", product); // Check if product exists
        navigate(`/product?id=${encodeURIComponent(productId)}`);
      };
    return(
        <div>
            {/* <EmptyShoppingBag/> */}
            {items.length === 0 ? (
                <EmptyShoppingBag/>
            ) : <div>
                <div className="flex flex-col text-center text-sm my-24 relative">
                <span className="font-medium mx-auto mb-10">Shopping Bag</span>
                <div className="my-0 mx-auto">
                    <ul className="grid gap-0.5 list-none grid-cols-4 w-full min-w-[1024px] max-w-[2560px]">
                    
                        {items.map((item,index) => (<li key={index} className="w-full">
                            {item.product && (
                                <button onClick={()=>handleClick(item.product._id)}><ProductCard product={item.product}/></button>)
                            }
                            </li>))}

                    </ul>
                
                </div>
                </div>
            </div>
            }
        </div>


    )
}