import { star } from "../assets/icons";
const ProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full ">
      <img src={imgURL} alt={name} className="w-[280p] h-[280px]" />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-500">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl font-palanquin leading-normal font-semibold">
        {name}
      </h3>
      <p className="font-montserrat font-semibold mt-2 leading-normal text-coral-red">
        {price}
      </p>
    </div>
  );
};

export default ProductCard;
