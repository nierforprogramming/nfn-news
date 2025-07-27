import React from "react";
import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="nav-container border-b border-gray-400">
      <div className="nav-wrapper mx-auto px-32">
        <header className="flex justify-between pt-5 pb-5">
          <div className="nav nav-search-bar flex items-center px-3 border-1 border-gray-400 rounded-full">
            <div className="search-bar-icon p-2">
              <FaSearch className="text-gray-400 text-xs" />
            </div>
            <input
              className="outline-none border-none w-full py-1"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>

          <div className="nav nav-logo">
            <a href="#home" className="text-2xl font-bold cursor-pointer">
              NFN NEWS
            </a>
          </div>

          <div className="third flex gap-2">
            <div className="nav nav-social-links flex items-center gap-4 p-2 pr-0 md:pr-20 lg:pr-40">
              <div className="social-icon cursor-pointer">
                <FaTwitter />
              </div>
              <div className="social-icon cursor-pointer">
                <FaInstagram />
              </div>
              <div className="social-icon cursor-pointer">
                <FaFacebook />
              </div>
            </div>

            <div className="nav hamburger-menu">
              <div className="ham-icon cursor-pointer">
                <RxHamburgerMenu className="text-4xl" />
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
