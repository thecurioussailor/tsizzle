import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();
    return(
        <div>
            <div>
            <div className="flex w-full h-[78vh] justify-center">
                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-no-repeat bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1575939238474-c8ada13b2724?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] from-purple-500 to-pink-500">
                            
                        </div >
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Women</a>
                             </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-[78vh] justify-center">
                    <div className="w-full mx-px mt-px relative">
                        <div className="w-full h-full bg-cover bg-[url('https://cdn.pixabay.com/photo/2023/03/22/15/40/man-7869911_1280.jpg')] from-cyan-500 to-blue-500">
                            
                        </div>
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Men</a>
                             </div>
                        </div>
                    </div>

                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1541518926503-a6fdabd94147?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] from-purple-500 to-pink-500">
                            
                        </div>
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Teen</a>
                             </div>
                        </div>
                    </div>
                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-cover bg-[url('https://images.unsplash.com/photo-1689858409211-7181a198d59c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] from-purple-500 to-pink-500">
                            
                        </div>
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Kids</a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}