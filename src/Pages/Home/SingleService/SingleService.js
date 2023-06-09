import React from "react";

const SingleService = ({ singleService }) => {
  const { serviceName, price, rating, descriptions, picture } = singleService;
  return (
    <div className="card w-96 bg-base-100 shadow-xl text-left">
      <figure>
        <img
          style={{
            height: "300px",
            width: "100%",
          }}
          src={picture}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{serviceName}</h2>
        <p>{descriptions.substring(0, 100)}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">
            Ratings:<span className="font-bold">{rating}</span>
          </div>
          <div className="badge badge-outline">
            Price: <span className="font-bold">${price}</span>
          </div>
        </div>
        <button className="btn btn-primary mt-5 text-white">
          View Details
        </button>
      </div>
    </div>
  );
};

export default SingleService;
