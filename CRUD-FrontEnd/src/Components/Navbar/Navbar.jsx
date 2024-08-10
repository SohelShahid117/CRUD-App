import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <div className="flex">
      <li className="mr-5 focus:bg-info">
        {/* <NavLink to={"/"}>Home</NavLink> */}
      </li>
      <li className="mr-5 text-3xl font-bold bg-orange-500">
        <NavLink to={"/addUser"}>Add User</NavLink>
      </li>
    </div>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 mr-5"
          >
            {navLinks}
          </ul>
        </div>
        <NavLink to="/" className="btn text-2xl bg-green-500 font-bold">
          JS All Users
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 mr-5">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
