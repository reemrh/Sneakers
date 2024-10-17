import Button from "../Components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-6"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-l font-palanquin">
        Subscribe for the Latest{" "}
        <span className=" bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-transparent bg-clip-text">
          {" "}
          Updates
        </span>{" "}
        & Newsletter{" "}
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="email@sneakers.com" className="input" />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign up" fullwidth />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
