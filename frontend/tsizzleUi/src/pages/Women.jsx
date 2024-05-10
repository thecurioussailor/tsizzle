import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionBanner from "../components/SectionBanner";
import axios from "axios";
import SectionHeading from "../components/SectionHeading";
import PageTop from "../components/PageTop";

export default function Women () {

    const [products, setProducts] = useState([]);

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
    


    return(
        <div>
            <SectionBanner bannerName={'Women'} imageLink={"https://images.unsplash.com/photo-1575939238474-c8ada13b2724?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></SectionBanner>
            <SectionHeading heading={"WOMENS TSHIRTS"}/>
            <div className="my-0 mx-auto">
                <ul className="grid gap-0.5 list-none grid-cols-4 w-full min-w-[1024px] max-w-[2560px]">
                    
                    {products.filter((product) => product.tag === 'women').map((product) => (<li key={product._id} className="w-full">
                        <ProductCard product={product}/>
                        </li>))}

                </ul>
                
            </div>
            <PageTop/>
        </div>
    )
}