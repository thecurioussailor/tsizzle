import { useNavigate } from "react-router-dom";
import EmptyShoppingBag from "../components/EmptyShoppingBag";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import CardCard from "../components/CartCard";

export default function ShoppingBag () {

    const [cart, setCart] = useState({});
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
                setCart(response.data)
           
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
                <div className="flex w-full max-w-5xl mx-auto mt-4 mb-0">
                    <div className="basis-3/5 list-none overscroll-contain">
                        <div className="flex flex-col-reverse text-left">
                            <p className="font-medium w-full pb-6 leading-6">Shopping Bag ({items.length})</p>
                        </div>
                        <ul>
                            {items.map((item,index) => (<li key={index} className="w-full">
                                    {item.product && (
                                        <a onClick={()=>handleClick(item.product._id)}><CardCard item={item}/></a>)
                                    }
                                </li>))}
                        </ul>
                    </div>
                    <div className="basis-2/5 sticky list-none overscroll-contain text-left ml-7">
                        <p className="font-medium pb-6">Summary</p>
                        <div className="flex flex-col font-medium">
                            <div className="w-full flex justify-between mt-1">
                                <div>Subtotal</div>
                                <div>Rs. {cart.totalPrice}</div>
                            </div>
                            <div className="flex mt-4 justify-between text-xs text-gray-500 w-full">
                                <span>Delivery</span>
                                <span>Free</span>
                            </div>
                            
                        </div>
                        <div>
                            <button className="flex justify-center w-full h-11 items-center mt-3.5 border border-black text-sm text-white bg-black">
                                <span className="font-medium">Checkout</span>
                            </button>
                        </div>
                        <div className="flex justify-center font-medium mt-2 text-xs text-gray-500 w-full">Taxes Included</div>
                        <section className="flex flex-col my-10">
                            <div className="text-gray-500 text-xs my-2 flex justify-start items-center">
                                <span>
                                <svg fill="#555150" width="30px" height="30px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Delivery_Truck" data-name="Delivery Truck">
                                    <g>
                                        <path d="M21.47,11.185l-1.03-1.43a2.5,2.5,0,0,0-2.03-1.05H14.03V6.565a2.5,2.5,0,0,0-2.5-2.5H4.56a2.507,2.507,0,0,0-2.5,2.5v9.94a1.5,1.5,0,0,0,1.5,1.5H4.78a2.242,2.242,0,0,0,4.44,0h5.56a2.242,2.242,0,0,0,4.44,0h1.22a1.5,1.5,0,0,0,1.5-1.5v-3.87A2.508,2.508,0,0,0,21.47,11.185ZM7,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,7,18.935Zm6.03-1.93H9.15a2.257,2.257,0,0,0-4.3,0H3.56a.5.5,0,0,1-.5-.5V6.565a1.5,1.5,0,0,1,1.5-1.5h6.97a1.5,1.5,0,0,1,1.5,1.5ZM17,18.935a1.25,1.25,0,1,1,1.25-1.25A1.25,1.25,0,0,1,17,18.935Zm3.94-2.43a.5.5,0,0,1-.5.5H19.15a2.257,2.257,0,0,0-4.3,0h-.82v-7.3h4.38a1.516,1.516,0,0,1,1.22.63l1.03,1.43a1.527,1.527,0,0,1,.28.87Z"/>
                                        <path d="M18.029,12.205h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"/>
                                    </g>
                                    </g>
                                </svg>
                                  
                                </span>
                                <span className="ml-2">Free delivery for orders over Rs. 6,500</span>
                            </div>
                            <div className="text-gray-500 text-xs flex justify-start items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="1px" y="1px" width="20px" height="20px" viewBox="0 0 50 50">
                                    <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.355469 20 6 21.355469 6 23 L 6 47 C 6 48.644531 7.355469 50 9 50 L 41 50 C 42.644531 50 44 48.644531 44 47 L 44 23 C 44 21.355469 42.644531 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 9 22 L 41 22 C 41.554688 22 42 22.445313 42 23 L 42 47 C 42 47.554688 41.554688 48 41 48 L 9 48 C 8.445313 48 8 47.554688 8 47 L 8 23 C 8 22.445313 8.445313 22 9 22 Z M 25 30 C 23.300781 30 22 31.300781 22 33 C 22 33.898438 22.398438 34.6875 23 35.1875 L 23 38 C 23 39.101563 23.898438 40 25 40 C 26.101563 40 27 39.101563 27 38 L 27 35.1875 C 27.601563 34.6875 28 33.898438 28 33 C 28 31.300781 26.699219 30 25 30 Z"></path>
                                    </svg>
                                </span>
                                <span className="ml-5">Secure Payment</span>
                            </div>
                        </section>
                        <section className="my-16">
                            <h2 className="text-sm font-medium opacity-80 pl-1 mx-2">We accept</h2>
                            <ul className="flex flex-row flex-wrap items-start my-3">
                                <li className="mr-1">
                                    <img className="cover" width={"70px"} height={"40px"} src="https://www.logo.wine/a/logo/Visa_Inc./Visa_Inc.-Logo.wine.svg"></img>
                                </li>
                                <li className="mr-3">
                                    <img width={"60px"} height={"40px"} src="https://imageio.forbes.com/blogs-images/steveolenski/files/2016/07/Mastercard_new_logo-1200x865.jpg?format=jpg&width=1440"></img>
                                </li>
                                <li>
                                   <img width={"60px"} height={"40px"} src="https://banner2.cleanpng.com/20180324/apw/kisspng-visa-electron-credit-card-debit-card-payment-mastercard-5ab6ff0de763e2.6395189915219422859478.jpg"></img> 
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
                </div>
            </div>
            }
        </div>


    )
}