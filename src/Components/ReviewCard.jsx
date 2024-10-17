import { star } from "../assets/icons";
const ReviewCard = ({ imgURL, customerName, feedBack, rating }) => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <img
        src={imgURL}
        alt="customer"
        className="mt-12 rounded-full object-contain w-[120px] h-[120px]"
      />
      <h3 className="font-palanquin text-3xl font-bold text-center mt-1">
        {customerName}
      </h3>
      <p className="mt-6 max-w-sm text-center info-text">{feedBack}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          width={24}
          height={24}
          alt="rating"
          className="m-0 object-contain"
        />
        <p className="font-montserrat text-xl text-slate-gray">{rating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
