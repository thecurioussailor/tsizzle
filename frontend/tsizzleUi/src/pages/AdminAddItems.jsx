import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function AdminAddItems() {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [imageLink, setImageLink] = useState([]);
    const [imageItem, setImageItem] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState("");
    const [colorCode, setColorCode] = useState("")
    const [size, setSize] = useState([]);
    const [sizeItem, setSizeItem] = useState("");
    const [tag, setTag] = useState('women');
    const [isPublished, setIsPublished] = useState(false);

    function submitImage(e, index){
    
            e.preventDefault();
            const newArr = [...imageLink.slice(0,index), imageItem, ...imageLink.slice(index,imageLink.length)]
            setImageLink([imageItem,...imageLink]);

       
    }

    function submitSize(e){
        e.preventDefault();
        setSize([sizeItem,...size]);

    }
    function removeSize(e){
        e.preventDefault();
        const newArr = size.pop();
        setSize(size);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        try{
             axios.post("https://tsizzle.onrender.com/admin/products", {
                title,
                description:desc,
                imageLink,
                price,
                tag,
                size,
                isPublished
             },{
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('admintoken')
                }
             })
                .then(
                    (response) =>{
                        console.log(response.data);
                        
                        navigate("/admin/productcatelog");
                    }
                )
        } catch (err) {
            console.log(err);
        }
    }
    return(
        <div className="mt-24 mb-1">
            <form onSubmit={submitHandler}>
                <div className="flex">
                    <div className="w-[66.6%] relative">
                        <ul className="grid grid-cols-2 gap-0.5 relative w-full">
                            <li>
                                <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("${imageLink[0]}")`}}>
                                    <div className="flex justify-between">
                                        <input onChange={(e) =>{setImageItem(e.target.value)}} className="w-full outline-none" placeholder="Image Link"></input>
                                        <button onClick={submitImage} className="w-[50px] text-xs bg-black border-1 border-solid text-white">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("${imageLink[1]}")`}}>
                                    <div className="flex justify-between">
                                    <input onChange={(e) =>{setImageItem(e.target.value)}} className="w-full outline-none" placeholder="Image Link"></input>
                                    <button onClick={submitImage} className="w-[50px] text-xs bg-black border-1 border-solid text-white">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("${imageLink[2]}")`}}>
                                    <div className="flex justify-between">
                                        <input onChange={(e) =>{setImageItem(e.target.value)}} className="w-full outline-none" placeholder="Image Link"></input>
                                        <button onClick={submitImage} className="w-[50px] text-xs bg-black border-1 border-solid text-white">Add</button>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("${imageLink[3]}")`}}>
                                    <div className="flex justify-between">
                                        <input onChange={(e) =>{setImageItem(e.target.value)}} className="w-full outline-none" placeholder="Image Link"></input>
                                        <button onClick={submitImage} className="w-[50px] text-xs bg-black border-1 border-solid text-white">Add</button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="h-auto w-[33.3%] p-[56px] relative float-left">
                        <div className="mb-[40px] grid grid-cols-2 gap-0.5">
                            <div className="inline-block">
                                <div className="px-2 border">
                                    <input onChange={(e) =>{setTitle(e.target.value)}} className="w-[180px] outline-none text-lg my-0.5 block leading-7 tracking-[.3px] font-medium" placeholder="Title"></input> 
                                </div>
                                <h1 className="text-lg my-0.5 block leading-7 tracking-[.3px] font-medium">{title}</h1>
                            
                                <span className="text-[#666] text-[10px] leading-4 tracking-[1px]">REF. 67035981-AMALFI-LH</span>
                            </div>
                            <div className="mt-[5px]">
                                <div className="flex flex-col items-end">
        
                                    <div className="px-2 border">
                                        <input onChange={(e) =>{setPrice(e.target.value)}} className="w-[150px] font-medium text-xl outline-none" placeholder="Price in Rs."></input>
                                    </div>
                                    <span className="font-medium text-xl">Rs. {price}</span>
                                </div>
                            </div>
                        </div>
                        <div className="m-[5px] mb-4">
                                <div className="flex flex-col items-start">
                                    <div className="w-full flex justify-center p-4">
                                       <select className="border p-2" value={tag} onChange={(e) => setTag(e.target.value)}>
                                           <option value={'women'}>Women</option>
                                           <option value={'men'}>Men</option>
                                           <option value={'teen'}>Teen</option>
                                           <option value={'kids'}>Kids</option>
                                       </select>
                                    </div>
                                    <div>{tag}</div>
                                    
                                </div>
                            </div>
                        <div className="flex justify-between w-full mb-[28px]">
                            <div className="w-[64%] pl-[2px]">
                                <div className="px-2 border">
                                    <input onChange={(e) =>{setColorCode(e.target.value)}} className="w-[150px] font-medium text-xl outline-none" placeholder="Color"></input>
                                </div>
                                <div className="w-[20px] h-[20px]" style={{background:`${colorCode}`}}></div>
                            </div>
                            <div className="flex flex-col w-[36%] justify-end">
                                    <div className="px-2 border">
                                        <input onChange={(e) =>{setColor(e.target.value)}} className="w-[120px] font-medium text-xl outline-none" placeholder="Color"></input>
                                    </div>
                                    <span className="">{color}</span>
                            </div>
                        </div>
                        <div className="w-full mb-[24px]">
                            <div>
                                <div className="flex flex-row items-center">
                                    <p className="mb-[20px] text-sm">
                                        Size guide
                                    </p>
                                </div>
                                <div className="mb-[32px]">
                                    <div className="mb-[4px] border-t border-b border-black">
                                        <div className="flex justify-between mt-2">
                                            <input onChange={(e) =>{setSizeItem(e.target.value)}} className="w-[120px] p-1 font-medium border text-xl outline-none focus:border-black focus:border" placeholder="Size"></input>

                                            <div className="ml-4 mr-2">
                                                <button onClick={submitSize} className="mx-auto text-white px-2 py-1 bg-black">Add</button>
                                            </div>
                                            <div className="">
                                                <button onClick={removeSize} className="mx-auto text-white px-2 py-1 bg-black">Remove</button>
                                            </div>
                                        </div>
                                        <ul className="list-none">                                    
                                            {size.map((value,index)=>{
                                                return <li key={index} className="relative flex items-center w-full h-10 px-2 cursor-pointer text-left">{value}</li>
                                            })}
                                    </ul>

                                </div>
                            </div>
                            <div className="flex justify-between w-full">
                                <button className="flex items-center text-center w-full justify-center h-11 px-4 bg-[#121314] text-white text-xs font-medium tracking-wide">
                                    <span>Add to shoping bag</span>
                                </button>
                                <div className="ml-2 float-left">
                                    <button className="flex items-center justify-center w-11 h-11 bg-[#121314] text-white text-sm font-medium">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between w-full flex-row">
                        <div className="w-1/2 flex pt-[20px] text-sm ">
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>

                            </span>
                            <button className="pl-3 font-medium">Delivery and returns</button>
                        </div>
                        <div className="w-1/2 flex pt-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75" />
                            </svg>
                            <button className="pl-3 text-sm font-medium">Product details</button>
                        </div>
                        <div className="w-1/2 flex pt-[20px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                            </svg>
                            <button className="pl-3 font-medium">Share</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" mb-1 z-10 h-auto w-full py-[56px] tracking-wide">
                <div className=" flex h-auto w-3/4 mx-auto">
                    <div className="w-[60%] mr-[10px]">
                        <h2 className="mb-4 text-sm font-medium leading-3 tracking-wide text-[#121314]">Description</h2>
                        <input className="p-1 border" placeholder="description" onChange={(e)=>setDesc(e.target.value)} type="text" size={80} height={30}></input>
                        <p className="mt-5 text-xs">{desc}</p>
                    </div>
                    <div className="">
                        <div>
                            <h2 className="mb-4 text-sm font-medium leading-3">COMPOSITION, ORIGIN AND CARE GUIDELINES</h2>
                            <p className="text-xs">Composition: 99% cotton,1% elastane</p>
                            <p className="text-xs">Designed in Barcelona</p>
                            <div>
                                <p className="text-sm">Origin</p>
                            </div>
                            <div>
                                <p className="text-sm">Manufacture: Bangladesh</p>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center p-4">
                <select className="border p-2" value={isPublished} onChange={(e) => setIsPublished(e.target.value)}>
                    <option value={true}>Publish</option>
                    <option value={false}>Hide</option>
                </select>
            </div>

            <div className="w-full flex justify-center">
                <button type="submit" className="mx-auto text-white px-4 py-2 bg-black">Submit</button>
            </div>
            
            </form>
        </div>
    )
}