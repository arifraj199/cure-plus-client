import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Link, useLoaderData } from "react-router-dom";
import About from "../About/About";

const Home = () => {
  const serviceData = useLoaderData();


  // const handleDetails = id =>{
  //   fetch(`http://localhost:5000/allservices/${id}`)
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //   })
  // }

  return (
    <div>

      <Banner></Banner>
      <About></About>
      <div className="mb-20">
        <h2 className="font-semibold text-lg text-primary">Services</h2>
        <hr className="w-8 font-bold mx-auto h-1" />
        <h1 className="text-3xl font-semibold">Claim Professional Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6 justify-items-center">
          {serviceData.map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>
        <div className="text-right mr-6">
        <Link to='/services'> <button className="btn btn-primary text-white">View All Services</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
