import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <div className="w-full bg-black p-0 m-0">
      <section className="max-container text-white py-16">
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our <span className="text-coral-red">Customers</span> Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg text-center info-text">
          Discover heartfelt testimonials from our loyal customers about the outstanding service and memorable experiences they've had with us.
        </p>

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CustomerReviews;
