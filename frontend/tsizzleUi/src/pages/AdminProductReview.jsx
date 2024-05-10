import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default function AdminProductReview(){

    const options = [
        'one', 'two', 'three'
      ];
    const defaultOption = options[0];


    return(
        <div className="mt-24 mb-1">
            <div className="flex">
                <div className="w-[66.6%] relative">
                    <ul className="grid grid-cols-2 gap-0.5 relative w-full">
                        <li>
                            <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}></div>
                        </li>
                        <li>
                            <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}></div>
                        </li>
                        <li>
                            <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}></div>
                        </li>
                        <li>
                            <div className={`h-[706.92px] w-[504.8px] border bg-cover bg-center mr-[2px]`} style={{backgroundImage: `url("https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`}}></div>
                        </li>
                    </ul>
                </div>
                <div className="h-auto w-[33.3%] p-[56px] relative float-left">
                    <div className="mb-[40px] grid grid-cols-2 gap-0.5">
                        <div className="inline-block">
                            <h1 className="text-lg my-0.5 block leading-7 tracking-[.3px] font-medium">100% linen slim-fit suit jacket</h1>
                            <span className="text-[#666] text-[10px] leading-4 tracking-[1px]">REF. 67035981-AMALFI-LH</span>
                        </div>
                        <div className="mt-[5px]">
                            <div className="flex flex-col items-end">
                                <span className="font-medium text-xl">Rs. 15,490.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between w-full mb-[28px]">
                        <div className="w-[64%] pl-[2px]">
                            <div className="w-[20px] h-[20px] bg-[#000435]"></div>
                        </div>
                        <div className="flex w-[36%] justify-end">
                            <span className="">Dark Navy</span>
                        </div>
                    </div>
                    <div className="w-full mb-[24px]">
                        <form>
                            <div className="flex flex-row items-center">
                                <p className="mb-[20px] text-sm">
                                    Size guide
                                </p>
                            </div>
                            <div className="mb-[32px]">
                                <div className="mb-[4px] border-t border-b border-black">
                                    <ul className="list-none">                                    
                                        <li>
                                            
                                                <div>
                                                    <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
                                                </div>
                                        
                                        </li>
                                        <li>
                                            <button className="relative flex items-center w-full h-10 px-2 cursor-pointer text-left">
                                                <span className="">
                                                    XXS
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="relative flex items-center w-full h-10 px-2 cursor-pointer text-left">
                                                <span className="">
                                                    XXS
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="relative flex items-center w-full h-10 px-2 cursor-pointer text-left">
                                                <span className="">
                                                    XXS
                                                </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button className="relative flex items-center w-full h-10 px-2 cursor-pointer text-left">
                                                <span className="">
                                                    XXS
                                                </span>
                                            </button>
                                        </li>
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
                            
                        </form>
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
                        <p className="text-xs">Denim style cotton fabric. Short design. Medium waist. Straight design. Five pockets. Zip and one button fastening. The model is 172 cm tall and is wearing a size M.</p>
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
        </div>
    )
}