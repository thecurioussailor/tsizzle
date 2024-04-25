import InputBox from "./InputBox";

export default function Footer() {

    return(
        <div>
            <footer className="border border-gray-300 border-solid mt-[5%]">
                <div className="pt-11">
                    <div className="my-0 mx-auto px-4">
                        <div className="w-full h-auto mx-auto">
                            <p className="mx-auto text-center text-sm font-medium leading-4">Receive exclusive promotions, private sales and news</p>
                            <form className="flex flex-col max-w-80 mx-auto">
                                <div className="flex">
                                    
                                    <InputBox boxText={'Enter your e-mail'} bottomText={'Check the format of your e-mail address (e.g. yourname@example.com)'}></InputBox>
                                </div>
                                <div className="flex flex-row mt-10">
                                    <button type="submit" className="w-full border bg-slate-950 h-11 text-white">
                                        <span className="text-sm font-medium">Subscribe</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div>
                            <div className="flex w-full my-6 justify-center">
                                <div className="flex">
                                    <span className="mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </span>
                                    <span>India</span>
                                </div>
                            </div>
                            <div>
                                <ul className=" block text-center mx-auto mt-[15px] max-w-xl">
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Help</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>My purchases</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Returns</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Shops</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Apps</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Company</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Franchises</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Work for t-Sizzle</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Press</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Site map</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Sustainability</a></span></li>
                                    <li className="text-sm inline-block mb-1 mx-2.5 leading-5 font-medium"><span><a>Ethics Channel</a></span></li>
                                </ul>
                            </div>
                            <div className="flex justify-center items-center pt-[15px] pb-[33px] w-full mx-auto">
                                <span className="px-[10px] text-center"><span><a><svg xmlns="http://www.w3.org/2000/svg" width={"30"} height={"30"} viewBox="0 0 100 100" id="facebook"><path d="M50.8,3.57A45.75,45.75,0,1,0,96.54,49.32,45.8,45.8,0,0,0,50.8,3.57ZM63.49,30.71a.69.69,0,0,1-.69.69H57.3a2.45,2.45,0,0,0-2.45,2.44V39.6h7.83a.69.69,0,0,1,.68.75l-.68,8.12a.69.69,0,0,1-.69.63H54.85V76.05a.69.69,0,0,1-.69.69H44.31a.69.69,0,0,1-.69-.69V49.1H38.7a.69.69,0,0,1-.69-.69V40.29a.69.69,0,0,1,.69-.69h4.92V31.78A9.88,9.88,0,0,1,53.5,21.9h9.3a.69.69,0,0,1,.69.69Z"></path></svg></a></span></span>
                                <span className="px-[10px] text-center"><span><a><svg xmlns="http://www.w3.org/2000/svg" width={"30"} height={"30 "} viewBox="0 0 19.2 19.2" id="instagram"><path d="M13.498 6.651a1.656 1.656 0 0 0-.95-.949 2.766 2.766 0 0 0-.928-.172c-.527-.024-.685-.03-2.02-.03s-1.493.006-2.02.03a2.766 2.766 0 0 0-.929.172 1.656 1.656 0 0 0-.949.95 2.766 2.766 0 0 0-.172.928c-.024.527-.03.685-.03 2.02s.006 1.493.03 2.02a2.766 2.766 0 0 0 .172.929 1.656 1.656 0 0 0 .95.949 2.766 2.766 0 0 0 .928.172c.527.024.685.03 2.02.03s1.493-.006 2.02-.03a2.766 2.766 0 0 0 .929-.172 1.656 1.656 0 0 0 .949-.95 2.766 2.766 0 0 0 .172-.928c.024-.527.03-.685.03-2.02s-.006-1.493-.03-2.02a2.766 2.766 0 0 0-.172-.929zM9.6 12.168A2.568 2.568 0 1 1 12.168 9.6 2.568 2.568 0 0 1 9.6 12.168zm2.669-4.637a.6.6 0 1 1 .6-.6.6.6 0 0 1-.6.6z"></path><circle cx="9.6" cy="9.6" r="1.667"></circle><path d="M9.6 0a9.6 9.6 0 1 0 9.6 9.6A9.6 9.6 0 0 0 9.6 0zm4.97 11.662a3.67 3.67 0 0 1-.233 1.213 2.556 2.556 0 0 1-1.462 1.462 3.67 3.67 0 0 1-1.213.233c-.534.024-.704.03-2.062.03s-1.528-.006-2.062-.03a3.67 3.67 0 0 1-1.213-.233 2.556 2.556 0 0 1-1.462-1.462 3.67 3.67 0 0 1-.233-1.213c-.024-.534-.03-.704-.03-2.062s.006-1.528.03-2.062a3.67 3.67 0 0 1 .233-1.213 2.556 2.556 0 0 1 1.462-1.462 3.67 3.67 0 0 1 1.213-.233c.534-.024.704-.03 2.062-.03s1.528.006 2.062.03a3.67 3.67 0 0 1 1.213.233 2.556 2.556 0 0 1 1.462 1.462 3.67 3.67 0 0 1 .233 1.213c.024.534.03.704.03 2.062s-.006 1.528-.03 2.062z"></path></svg></a></span></span>
                                <span className="px-[10px] text-center"><span><a><svg xmlns="http://www.w3.org/2000/svg" width="30" height={"30"} viewBox="0 0 16 16" id="twitter"><path d="M16 3.539a6.839 6.839 0 0 1-1.89.518 3.262 3.262 0 0 0 1.443-1.813 6.555 6.555 0 0 1-2.08.794 3.28 3.28 0 0 0-5.674 2.243c0 .26.022.51.076.748a9.284 9.284 0 0 1-6.761-3.431 3.285 3.285 0 0 0 1.008 4.384A3.24 3.24 0 0 1 .64 6.578v.036a3.295 3.295 0 0 0 2.628 3.223 3.274 3.274 0 0 1-.86.108 2.9 2.9 0 0 1-.621-.056 3.311 3.311 0 0 0 3.065 2.285 6.59 6.59 0 0 1-4.067 1.399c-.269 0-.527-.012-.785-.045A9.234 9.234 0 0 0 5.032 15c6.036 0 9.336-5 9.336-9.334 0-.145-.005-.285-.012-.424A6.544 6.544 0 0 0 16 3.539z"></path></svg></a></span></span>
                                <span className="px-[10px] text-center"><span><a><svg xmlns="http://www.w3.org/2000/svg" width="30" height={"30"} viewBox="0 0 32 32" id="youtube"><g><path d="M13.83 19.259L19.262 16l-5.432-3.259z"></path><path d="M16 0C7.164 0 0 7.163 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.688 16.701c0 1.5-.174 3-.174 3s-.17 1.278-.69 1.839c-.661.738-1.401.742-1.741.786-2.432.186-6.083.192-6.083.192s-4.518-.044-5.908-.186c-.387-.077-1.254-.055-1.916-.792-.521-.562-.69-1.839-.69-1.839s-.174-1.499-.174-3v-1.406c0-1.5.174-2.999.174-2.999s.17-1.278.69-1.841c.661-.739 1.401-.743 1.741-.785 2.431-.188 6.079-.188 6.079-.188h.008s3.648 0 6.079.188c.339.042 1.08.046 1.741.784.521.563.69 1.841.69 1.841s.174 1.5.174 3v1.406z"></path></g></svg></a></span></span>
                            </div>
                            <div className="mx-auto pt-[33px] pb-[10px] text-center">
                                <span>
                                    <span className="text-[10px] mr-2">© 2024 t-Sizzle</span>
                                    <span className="text-[10px] mr-2">All rights reserved</span>
                                    <span className="text-[10px] mr-2">Privacy Policy and Cookies</span>
                                    <span className="text-[10px] mr-2">|</span>
                                    <span className="text-[10px] mr-2">Terms & Conditions</span>
                                </span>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}