import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel w-full img-height">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="img-gradient">
          <img
            src="https://i.ibb.co/JrxK9m4/young-handsome-physician-medical-robe-with-stethoscope-11zon.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute bottom-28 lg:bottom-40 left-24 lg:left-32 text-left">
          <small className="text-primary font-semibold uppercase font-sans text-lg">
            Inspiring Better Health
          </small>
          <hr className="w-10 mb-4" />
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Healthy Heart <br /> Peaceful Life
          </h2>
          <p className="w-1/2 text-gray-400 mt-3">
            To ensure good health: eat lightly, breathe deeply, live moderately,
            cultivate cheerfulness, and maintain an interest in life.
          </p>
          <button className="btn btn-primary mt-2 lg:mt-5 text-white">
            Know More
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="img-gradient">
          <img
            src="https://i.ibb.co/0hQ5Sfc/portrait-friendly-male-doctor-11zon.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute bottom-28 lg:bottom-40 left-24 lg:left-32 text-left">
          <small className="text-primary font-semibold uppercase font-sans text-lg">
            Refreshment of Mind
          </small>
          <hr className="w-10 mb-4" />
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Healthy Mind <br /> Refreshes our Soul
          </h2>
          <p className="w-1/2 text-gray-400 mt-3">
          Health is a state of complete harmony of the body, mind and spirit. When one is free from physical disabilities and mental distractions, the gates of the soul open
          </p>
          <button className="btn btn-primary mt-2 lg:mt-5 text-white">
            Know More
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="img-gradient">
          <img
            src="https://i.ibb.co/D1mMXrT/senior-man-his-doctor-shaking-hands-while-greeting-hallway-medical-clinic-focus-is-doctor-11zon.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute bottom-28 lg:bottom-40 left-24 lg:left-32 text-left">
          <small className="text-primary font-semibold uppercase font-sans text-lg">
            Health is Wealth
          </small>
          <hr className="w-10 mb-4" />
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Good Wealth is <br />a Assets of Life
          </h2>
          <p className="w-1/2 text-gray-400 mt-3">
            Time and health are two precious assets that we don't recognize and
            appreciate until they have been depleted
          </p>
          <button className="btn btn-primary mt-2 lg:mt-5 text-white">
            Know More
          </button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-primary text-white">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-primary text-white">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
