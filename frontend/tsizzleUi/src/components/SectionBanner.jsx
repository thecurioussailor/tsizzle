export default function SectionBanner({bannerName, imageLink}) {

    return(
        <div>
            <div className="flex w-full h-[78vh] justify-center">
                    <div className="w-full mx-px mt-px relative">
                        <div className=" w-full h-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${imageLink})`}}>
                            
                        </div >
                        <div className="bottom-14 absolute flex justify-center items-center w-full">
                
                            <div className="w-32 h-10 mx-1 flex justify-center items-center text-black bg-white hover:opacity-50 hover:cursor-pointer">
                                <a>{bannerName}</a>
                             </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}