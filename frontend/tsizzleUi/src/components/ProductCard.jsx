
export default function ProductCard ({product}) {

    // const [imageUrl, setImageUrl] = useState('https://images.pexels.com/photos/1188748/pexels-photo-1188748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    
    return(
        <div className="relative h-[660.93] w-[379.8] isolate">
            <div>
                <div className={`h-[530.92px] w-[379.8px] border bg-cover bg-center`} style={{backgroundImage: `url(${product.imageLink[0]})`}}>
                    
                </div>
                <div className="h-[130px] w-[379.8px] opacity-100 pt-3.5 px-3.5 pb-4">
                    <div className="m-w-none w-full my-0 mx-auto bg-white pb-4">
                        <div className="flex flex-wrap content-start box-border">
                            <div className="flex-col">
                                <div className="flex-wrap content-start">{product.title}</div>
                                <div className="flex-wrap content-start"><span>Rs. {product.price}</span></div>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex flex-col">
                                <div className="relative cursor-pointer">
                                    <button className="w-11 h-11 items-start justify-end">
                                        <span className="flex justify-end ml-4 mb-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}