import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const serviceData = useLoaderData();
  return (
    <div>
      <Banner></Banner>
      <div className="mt-20">
        <h2 className="font-semibold text-lg text-primary">Services</h2>
        <hr className="w-8 font-bold mx-auto" />
        <h1 className="text-3xl font-semibold">Claim Professional Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-6 justify-items-center">
          {serviceData.map((service) => (
            <Services key={service._id} service={service}></Services>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
