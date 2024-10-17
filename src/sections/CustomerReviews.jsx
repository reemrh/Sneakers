import ReviewCard from "../Components/ReviewCard";
import { reviews } from "../constants/index";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Our{" "}
        <span className=" bg-gradient-to-r from-pink-500 to-purple-500 bg-purple-500 text-transparent bg-clip-text">
          Customers{" "}
        </span>{" "}
        Reviews
      </h3>
      <p className="info-text m-auto max-w-lg mt-4 text-center">
        Listen to authentic testimonials from our happy customers about their
        outstanding experiences with us.
      </p>
      <div className="flex flex-1 mt-24 justify-evenly items-center max-lg:flex-col gp-14">
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            rating={review.rating}
            customerName={review.customerName}
            feedBack={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
