import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-accent text-white">
        <div>
        <img width='190' src={logo} alt="" />
          <p className="">
            Providing reliable service since 1992
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link to="/" className="link link-hover">
            Branding
          </Link>
          <Link to="/" className="link link-hover">
            Design
          </Link>
          <Link to="/" className="link link-hover">
            Marketing
          </Link>
          <Link to="/" className="link link-hover">
            Advertisement
          </Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            About us
          </Link>
          <Link to="/" className="link link-hover">
            Contact
          </Link>
          <Link to="/" className="link link-hover">
            Jobs
          </Link>
          <Link to="/" className="link link-hover">
            Press kit
          </Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link to="/" className="link link-hover">
            Terms of use
          </Link>
          <Link to="/" className="link link-hover">
            Privacy policy
          </Link>
          <Link to="/" className="link link-hover">
            Cookie policy
          </Link>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#091027] text-neutral">
        <div>
          <p>Copyright © 2023 - All right reserved by Cure Plus</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
