import React from "react";

const About = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-2/5">
          <img
            src="https://i.ibb.co/CnK5nPx/My-project-1.png"
            alt=""
            className="max-w-xl rounded-lg"
          />
        </div>
        <div className="text-left">
          <small className="text-primary font-semibold uppercase font-sans text-lg">
            About Me
          </small>
          <hr className="w-10 mb-4" />
          <h1 className="text-5xl font-bold uppercase">Cardiologist</h1>
          <p className="py-6">
            The career that I want to pursue is to be a cardiologist. A
            cardiologist is a doctor that specializes in all things heart
            including the blood vessels. This means that if a patient went to
            visit their primary physician and the physician detected a problem
            with the patient’s heart. The physician will then give a referral to
            the patient so that the patient can go to a cardiologist. The
            cardiologist will then will review the patient history and perform
            many tests such as a physical exam, ECG (electro cardiogram), blood
            test and an X-ray.
          </p>
          <p className=" mt-4">
            <span className="font-bold">Arif Hossain</span> <br />
            Specialist at{" "}
            <span className="text-primary font-semibold">
              Heart surgery
            </span>{" "}
            <br />
            <small className="text-gray-400">Founder & CEO</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
