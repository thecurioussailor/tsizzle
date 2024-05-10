import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import SectionBanner from "../components/SectionBanner";
import axios from "axios";
import SectionHeading from "../components/SectionHeading";
import PageTop from "../components/PageTop";

export default function Teen () {

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
            <SectionBanner bannerName={'Teen'}></SectionBanner>
            <SectionHeading heading={"TEEN TSHIRTS"}/>
            <div className="my-0 mx-auto">
                <ul className="grid gap-0.5 list-none grid-cols-4 w-full min-w-[1024px] max-w-[2560px]">
                    
                    {products.filter((product) => product.tag === 'teen').map((product) => (<li key={product._id} className="w-full">
                        <ProductCard product={product}/>
                        </li>))}

                </ul>
                
            </div>
            <PageTop/>
        </div>
    )
}