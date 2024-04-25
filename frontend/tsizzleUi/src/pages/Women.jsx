import ProductCard from "../components/ProductCard";
import SectionBanner from "../components/SectionBanner";

export default function Women () {

    return(
        <div>
            <SectionBanner bannerName={'Women'}></SectionBanner>
            <div>
                <header className="text-center text-sm">
                    <h1 className="mt-8 mb-5 px-5 font-medium leading-5 tracking-wide">WOMEN'S TSHIRTS</h1>
                </header>
            </div>
            <div>
                <ProductCard/>
            </div>
        </div>
    )
}