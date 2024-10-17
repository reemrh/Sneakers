const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] w-full rounded-[20px] shadow-3xl px-10 sm:min-w-[350px] py-16 ">
      <div className="bg-gradient-to-r from-pink-400 to-purple-500 flex w-11 h-11 justify-center items-center rounded-full ">
        <img src={imgURL} alt={label} w={24} height={24} />
      </div>
      <h3 className="font-palanquin text-3xl font-bold mt-5 leading-normal">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
