import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Review from "../Review/Review";

const ServiceDetails = () => {
  const services = useLoaderData();
  const { serviceName, price, rating, descriptions, picture, _id } = services;

  const [reviews,setReviews] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res=>res.json())
    .then(data=>{
        setReviews(data)
    })
  },[])


  return (
    <div className=" py-10">
      <div className="hero min-h-screen py-10 ">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture} alt=""
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="text-left">
          <h3 className="text-2xl text-secondary font-semibold mb-4">Price: ${price}</h3>
            <h1 className="text-5xl font-bold">{serviceName}</h1>
            
            <p className="py-6 text-neutral">
              {descriptions}
            </p>
            <p className="font-bold">Ratings: {rating}</p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-2xl">Customers Review:</h2>
        <hr className="w-12 mx-auto  bg-primary h-1" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6 justify-items-center px-10">
            {
                reviews.map(reviews=><Review key={reviews._id} reviews={reviews}></Review>)
            }
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
