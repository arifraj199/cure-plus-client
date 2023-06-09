import React from "react";

const Review = ({ reviews }) => {
  const { name, picture, review, rating, Date_of_experience } = reviews;
  return (
    <div>
      <figure className="max-w-screen-md mx-auto text-center">
        <svg
          aria-hidden="true"
          className="w-12 h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <blockquote className="bg-accent p-8 text-left">
          <p className="text-2xl italic font-medium text-neutral">
            {review.substring(0, 100)}
          </p>
          <h4 className="text-sm mt-5 text-right text-gray-300 mr-6">
            <em>Ratings: {rating}</em>
          </h4>
        </blockquote>
        <figcaption className="flex items-center justify-center mt-6 space-x-3">
          <img className="w-16 h-16 rounded-full" src={picture} alt="" />
          <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
            <cite className="pr-3  font-semibold">{name} </cite>
            <cite className="pl-3  font-semibold">{Date_of_experience}</cite>
          </div>
        </figcaption>
      </figure>
      
    </div>
  );
};

export default Review;
