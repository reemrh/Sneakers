import React from "react";
import Button from "../Components/Button";
import { shoe8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between max-container items-center max-lg:flex-col gap-10 w-full"
    >
      <div className="flex flex-1 flex-col ">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg  font-bold ">
          We provide you{" "}
          <span className=" bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-transparent bg-clip-text">
            Super Quality
          </span>{" "}
          Products
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="mt-10">
          {" "}
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={shoe8}
          alt="shoe8"
          width={570}
          height={520}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
