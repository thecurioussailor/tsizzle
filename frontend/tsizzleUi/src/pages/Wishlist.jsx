export default function Wishlist () {
    return(
        <div>
            <div className=" text-center my-60 w-80 mx-auto relative">
            <span>Wishlist</span>
            <div>
                <p>Your wishlist is empty</p>
                <p>Save the items you like the most so you don't loose sight of them</p>
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