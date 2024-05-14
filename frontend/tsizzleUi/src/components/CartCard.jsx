export default function CardCard({item}) {

    return(
        <div>
            <div className="flex">
                <div className="mr-2 w-[170px] h-[190px] bg-cover" style={{backgroundImage:`url(${item.product.imageLink[0]})`}}>
                    
                </div>
                <div className="flex flex-row justify-between w-full items-start text-gray-700">
                    <div className="flex h-full flex-col justify-start text-left px-3">
                        <a className="font-medium pb-1">{item.product.title}</a>
                        <p className="text-gray-500">
                            <span>Quantity: </span>
                            <span>{item.quantity}</span>
                        </p>
                        <p className="text-gray-500">
                            <span>Size: </span>
                            <span>{item.size}</span>
                        </p>
                        <p className="text-gray-500">{item.color}</p>
                    </div>
                    <div className="flex h-full font-medium text-sm">Rs. {item.product.price}</div>
                </div>
            </div>
            <div className="flex text-gray-700">
                    <button className="w-auto pt-1 pb-4 pr-6">Remove</button>
            </div>
        </div>
    )
}