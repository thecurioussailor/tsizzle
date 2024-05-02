export default function AdminAddItems() {

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
                                <p className="">
                                    Size guide
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            <div className="relative float-left z-10 h-auto w-full py-[56px]"></div>
        </div>
    )
}