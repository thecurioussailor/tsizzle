import { useNavigate } from "react-router-dom"

export default function Home(){

    const navigate = useNavigate();
    return(
        <div>
            <div>
            <div className="flex w-full h-[78vh] justify-center">
                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-gradient-to-r from-purple-500 to-pink-500">
                            
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
                        <div className="w-full h-full bg-gradient-to-r from-cyan-500 to-blue-500">
                            
                        </div>
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Men</a>
                             </div>
                        </div>
                    </div>

                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-gradient-to-r from-purple-500 to-pink-500">
                            
                        </div>
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>Teen</a>
                             </div>
                        </div>
                    </div>
                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-gradient-to-r from-purple-500 to-pink-500">
                            
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