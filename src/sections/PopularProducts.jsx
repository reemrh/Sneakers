import { products } from "../constants";
import ProductCard from "../Components/ProductCard";
const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our{" "}
          <span className="bg-gradient-to-tr from-pink-500 to-purple-500 text-transparent bg-clip-text">
            Top-selling
          </span>{" "}
          Product.{" "}
        </h2>
        <p className="lg:max-w-lg ">
          Explore exceptional quality and style with our highly coveted
          selections. Immerse yourself in a world of comfort, design, and great
          value.
        </p>
        <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
