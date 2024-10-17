import { offer } from "../assets/images/index";
import Button from "../Components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex  items-center max-xl:flex-col-reverse  gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          width={773}
          height={687}
          alt="offer"
          className="w-fll object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col max-container">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg  font-bold ">
          <span className=" bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-transparent bg-clip-text">
            Exclusive
          </span>
          {"  "}Deal
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Experience premium comfort and style with our carefully crafted
          footwear, designed to enhance your journey with exceptional quality,
          innovation, and a hint of sophistication.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our focus on detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-10 flex jus gap-4 items-center">
          {" "}
          <Button label="Buy Now" iconURL={arrowRight} iconAlt="buy now" />
          <Button label="Learn More" className="background" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
