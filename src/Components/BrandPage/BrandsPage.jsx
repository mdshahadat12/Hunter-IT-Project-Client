import ProductCard from "./ProductCard";
import Slider from "./Slider";

const BrandsPage = () => {
    return (
        <div>
            <Slider></Slider>
            <h1 className="text-center font-bold text-3xl mb-5">Products</h1>
            <div className="grid grid-cols-2 gap-5 my-10">
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
                <ProductCard></ProductCard>
            </div>
        </div>
    );
};

export default BrandsPage;