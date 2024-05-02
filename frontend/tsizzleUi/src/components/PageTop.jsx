export default function PageTop(){
    
    return(
        <div className="block fixed bottom-36 z-[2] box-border right-[33px]">
                <button className="w-11 h-11 min-w-0 p-0 flex items-center justify-center bg-black cursor-pointer outline-none">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                        </svg>

                    </span>
                </button>
            </div>
    )
}