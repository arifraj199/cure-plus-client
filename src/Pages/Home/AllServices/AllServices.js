import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleService from "../SingleService/SingleService";

const AllServices = () => {
  const allService = useLoaderData();
  console.log(allService);
  return (
    <div>
      <div className="mt-10 my-12">
        <h2 className="font-semibold text-lg text-primary">All Services</h2>
        <hr className="w-8 font-bold mx-auto" />
        <h1 className="text-3xl font-semibold">Provide Best Service</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 gap-6 justify-items-center">
        {allService.map((singleService) => (
          <SingleService
            key={singleService._id}
            singleService={singleService}
          ></SingleService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
