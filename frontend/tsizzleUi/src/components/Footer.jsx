import InputBox from "./InputBox";

export default function Footer() {

    return(
        <div>
            <footer className="border-t-1 border-gray-300 border-solid mt-[5%]">
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                        </svg>
                                    </span>
                                    <span>India</span>
                                </div>
                            </div>
                            <div>
                                <ul className=" block text-center mx-auto mt-[15px] max-w-xl">
                                    <li className="text-sm"><span><a>Help</a></span></li>
                                    <li className="text-sm"><span><a>My purchases</a></span></li>
                                    <li className="text-sm"><span><a>Returns</a></span></li>
                                    <li className="text-sm"><span><a>Shops</a></span></li>
                                    <li className="text-sm"><span><a>Apps</a></span></li>
                                    <li className="text-sm"><span><a>Company</a></span></li>
                                    <li className="text-sm"><span><a>Franchises</a></span></li>
                                    <li className="text-sm"><span><a>Work for t-Sizzle</a></span></li>
                                    <li className="text-sm"><span><a>Press</a></span></li>
                                    <li className="text-sm"><span><a>Site map</a></span></li>
                                    <li className="text-sm"><span><a>Sustainability</a></span></li>
                                    <li className="text-sm"><span><a>Ethics Channel</a></span></li>
                                </ul>
                            </div>
                            <div>
                                <span><span><a>facebook</a></span></span>
                                <span><span><a>instagram</a></span></span>
                                <span><span><a>x</a></span></span>
                            </div>
                        </div>
                    </div>

                </div>

            </footer>
        </div>
    )
}