import React from "react";

const MyReviewItem = ({ reviewItem,handleDeleteReview }) => {
  const { serviceName, review, rating,_id } = reviewItem;
  return (
    <div className="card w-96 bg-accent text-gray-300 shadow-md ">
      <div className="card-body items-center ">
        <h2 className="card-title text-left ">
          Service: {serviceName ? serviceName : "Service"}
        </h2>
        <div className="text-left">
          <small className=" text-gray-400">
            <span className="font-bold underline">Review:</span>{" "}
            {review.substring(0, 200)}
          </small>
          <br />
          <small>
            {" "}
            <span className="underline"> Ratings:</span> {rating}
          </small>
        </div>
        <div className="card-actions justify-end ">
          <button className="btn btn-secondary border-0 rounded-sm text-white">Edit Review</button>
          <button onClick={()=>handleDeleteReview(_id)} className="btn bg-red-700 hover:bg-red-800 border-0 rounded-sm text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyReviewItem;
