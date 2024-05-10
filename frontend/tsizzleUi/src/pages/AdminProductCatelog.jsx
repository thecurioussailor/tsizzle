import { useEffect, useState } from "react"
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminProductCatelog() {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get("https://tsizzle.onrender.com/admin/products", {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("admintoken")
                    }
                });
                const productArr = response.data.products;

                setProducts(productArr);
                
                console.log(productArr); // Assuming color is a property of the product
    
            } catch (error) {
                console.log(error);
            }
        };
    
        fetchData();
    },[])

    function handleAddItems() {

        navigate("/admin/additems");

    }
    return (
        <div className="mt-16">
        
            <div className="mx-auto my-0 max-w-4xl">
                <div className="px-10 py-8 w-full min-h-40">
                    <h6 className="mx-auto text-center text-base font-medium">PRODUCT CATALOG</h6>
                    <p className="text-center text-xs">Hello, Here you can add, edit, review products.</p>
                </div>
                <div className="w-full mx-auto flex justify-center mb-10">
                    <button onClick={handleAddItems} className="border px-5 py-2 text-sm">Add Item</button>
                </div>
                <div className="my-0 mx-auto">
                    <ul className="grid gap-0.5 list-none grid-cols-2 w-full min-w-[1024px] max-w-[2560px]">
                    
                        {products.map((product) => (<li key={product._id} className="w-full">
                            <button onClick={() =>{navigate("/admin/productreview")}}><ProductCard product={product}/></button>
                            </li>))}
                        
                    </ul>
                
                </div>
            </div>
        </div>
    )

}