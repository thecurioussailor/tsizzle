import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionBanner from "../components/SectionBanner";
import axios from "axios";
import SectionHeading from "../components/SectionHeading";
import PageTop from "../components/PageTop";
import { useNavigate } from "react-router-dom";

export default function Teen () {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tsizzle.onrender.com/user/products");
                const productArr = response.data.products;

                setProducts(productArr);
                
                console.log(productArr); // Assuming color is a property of the product
    
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    },[])
    
    const handleClick = (productId) => {
        // console.log("Product to pass:", product); // Check if product exists
        navigate(`/product?id=${encodeURIComponent(productId)}`);
      };

    return(
        <div>
            <SectionBanner bannerName={'Teen'} imageLink={"https://images.unsplash.com/photo-1608175603065-03370f178b10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></SectionBanner>
            <SectionHeading heading={"TEEN TSHIRTS"}/>
            <div className="my-0 mx-auto">
                <ul className="grid gap-0.5 list-none grid-cols-4 w-full min-w-[1024px] max-w-[2560px]">
                    
                    {products.filter((product) => product.tag === 'teen').map((product) => (<li key={product._id} className="w-full">
                        <button onClick={()=>handleClick(product._id)}><ProductCard product={product}/></button>
                        </li>))}

                </ul>
                
            </div>
            <PageTop/>
        </div>
    )
}