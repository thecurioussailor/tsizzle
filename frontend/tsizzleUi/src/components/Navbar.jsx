import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate();
    return(
        <div className="fixed top-0 w-full bg-white z-50 shadow-md">
            <div className='flex h-16 w-full min-h-16 z-10 justify-between font-medium relative'>
                <nav>
                    <ul className="flex items-center ml-4 h-full space-x-4 justify-around font-sans text-sm">
                        <li className="flex items-center ml-4 h-full"><a className="hover:underline underline-offset-8">Women</a></li>
                        <li className="flex items-center ml-4 h-full"><a className="hover:underline underline-offset-8">Men</a></li>
                        <li className="flex items-center ml-4 h-full"><a className="hover:underline underline-offset-8">Teen</a></li>
                        <li className="flex items-center ml-4 h-full"><a className="hover:underline underline-offset-8">Kids</a></li>
                    </ul>
                </nav>

                <div className="hover:cursor-pointer items-center w-36 ml-[144px]">
                    <a className="flex justify-center absolue text-center items-center w-full h-full" onClick={() => {navigate('/')}}>
                        <span  className="tracking-wide text-4xl font-medium">t-Sizzle</span>
                    </a>
                </div>

                <div className="flex items-center mr-4 space-x-4 font-medium text-xs">
                    <button className="w-16 mr-4"><span>Search</span></button>
                    <button className="w-16 mr-4" onClick={() => {navigate('/signin')}}><span>My account</span></button>
                    <button className="w-16 mr-4"><span>Wishlist</span></button>
                    <button className="w-20 mr-4"><span>Shopping bag</span></button>
                </div>
            </div>
        </div>
    )
}