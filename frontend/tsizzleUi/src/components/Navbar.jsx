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
                    <button className="flex flex-col items-center w-16 mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        <span className="w-full">Search</span>
                        </button>
                    <button className="flex flex-col items-center w-16 mr-4" onClick={() => {navigate('/signin')}}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <span>My account</span>
                        </button>
                    <button className="flex flex-col items-center w-16 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>

                        <span>Wishlist</span>
                        </button>
                    <button className="flex flex-col items-center w-20 mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <span>Shopping bag</span>
                    </button>
                </div>
            </div>
        </div>
    )
}