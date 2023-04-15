import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png";
import { AuthProvider } from "../../context/AuthContext";

const Header = () => {
  const { user, logOut } = useContext(AuthProvider);
  const navigate = useNavigate();
  const menu = [
    <li>
      <Link to="/">Home</Link>
    </li>,
    <li>
      <Link to="/services">Services</Link>
    </li>,
    <li>
      <Link to="/blog">Blog</Link>
    </li>,
    <li>
      <Link to="/contact">Contact</Link>
    </li>,
  ];

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar bg-accent sticky top-0 z-30 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-accent rounded-box w-52"
          >
            {menu}
            {user?.email ? (
              <li className="btn">
                <Link onClick={handleSignOut} to="">
                  SignOut
                </Link>
              </li>
            ) : (
              <li className="btn">
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img width="170" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menu}
          {user?.email ? (
            <li className="btn">
              <Link onClick={handleSignOut} to="">
                SignOut
              </Link>
            </li>
          ) : (
            <li className="btn">
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
