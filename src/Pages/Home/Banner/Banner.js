import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div
      style={{
        height: "650px",
      }}
      className="carousel w-full "
    >
      <div id="slide1" className="carousel-item relative w-full ">
        
        <div className="img-gradient">
        
          <img
            src="https://i.ibb.co/JrxK9m4/young-handsome-physician-medical-robe-with-stethoscope-11zon.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="absolute bottom-60 left-32 text-left">
            <h2 className="text-5xl font-bold text-white">Health Care <br /> Peaceful Life</h2>
            <button className="btn btn-primary mt-5 text-white">Know More</button>
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
        <div className="absolute bottom-60 left-32 text-left">
            <h2 className="text-5xl font-bold text-white">Health Care <br /> Peaceful Life</h2>
            <button className="btn btn-primary mt-5 text-white">Know More</button>
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
        <div className="absolute bottom-60 left-32 text-left">
            <h2 className="text-5xl font-bold text-white">Health Care <br /> Peaceful Life</h2>
            <button className="btn btn-primary mt-5 text-white">Know More</button>
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
