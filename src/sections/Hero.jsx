import { useState } from "react";

import { shoes, statistics } from "../constants";
import Button from "../Components/Button";
import ShoeCard from "../Components/ShoeCard";
import { bigShoe } from "../assets/images";
import { arrowRight } from "../assets/icons/";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe);

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 "
    >
      <div className="relative z-15  xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-purple-500 font-montserrat text-2xl leading-2 mb-[20px] max-sm:mb-[0px] mt-2 ">
          Our new Collection
        </p>
        <h1 className="  max-sm:leading-[70px] max-sm:mt-[-4px] max-sm:bg-transparent mt-6 mb-4 z-15 text-[90px] leading-[100px] font-palanquin max-sm:text-[40px] max-sm:leading-16 bg-white  font-bold ">
          <span className="bg-white-500">The New Arrival</span>
          <br />
          <span className=" mt-20px bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-transparent bg-clip-text">
            SNEAKERS
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 max-sm:mt-2  max-sm:mb-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label="Shop now" iconURL={arrowRight} iconAlt="arrow" />

        <div className=" flex justify-start items-start  w-full mt-20 gap-12">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className=" max-sm:text-lg  text-4xl font-palanquin font-bold">
                {stat.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className={` relative flex-1 flex justify-center items-center  xl:min-h-screen max-xl:py-40  bg-cover bg-center`}
      >
        <img
          src={bigShoeImg}
          alt="shoe colletion"
          width={610}
          height={502}
          className="object-contain relative"
        />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
