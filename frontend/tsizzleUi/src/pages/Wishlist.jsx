export default function Wishlist () {
    return(
        <div>
            <div className="flex flex-col text-center text-sm my-60 w-80 mx-auto relative">
            <span className="font-medium mx-auto mb-10">Wishlist</span>
            <div className="mx-auto">
                <p className="mb-6 font-light">Your wishlist is empty.</p>
                <p className="mb-6 font-light">Save the items you like the most so you don't loose sight of them.</p>
            </div>
            <div className="mt-4 text-white">
                        <button type="submit" className="flex items-center justify-center h-11 w-full border text-sm font-medium bg-black">
                            <span>Get inspired</span>
                        </button>
            </div>
            </div>
        </div>
    )
}