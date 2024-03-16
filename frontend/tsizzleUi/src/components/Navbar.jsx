import { useNavigate } from "react-router-dom"

export default function Navbar(){

    const navigate = useNavigate();
    return(
        <div>
            <div className='flex h-16 w-full min-h-16 z-10 justify-between font-normal'>
                <nav>
                    <ul className="flex items-center ml-4 h-full space-x-4 justify-around font-sans text-xs">
                        <li className="ml-4"><a className="hover:underline hover:text-underline-offset-8">Women</a></li>
                        <li className="ml-4"><a className="hover:underline hover:text-underline-offset-8">Men</a></li>
                        <li className="ml-4"><a className="hover:underline hover:text-underline-offset-8">Teen</a></li>
                        <li className="ml-4"><a className="hover:underline hover:text-underline-offset-8">Kids</a></li>
                    </ul>
                </nav>

                <div className="items-center">
                    <a className="flex items-center h-full" onClick={() => {navigate('/')}}>
                        <span  className="text-4xl font-normal">tsizzle</span>
                    </a>
                </div>

                <div className="flex items-center mr-4 space-x-4 font-normal text-xs">
                    <button className="w-16 mr-4"><span>Search</span></button>
                    <button className="w-16 mr-4" onClick={() => {navigate('/signin')}}><span>My account</span></button>
                    <button className="w-16 mr-4"><span>Wishlist</span></button>
                    <button className="w-20 mr-4"><span>Shopping bag</span></button>
                </div>
            </div>
        </div>
    )
}