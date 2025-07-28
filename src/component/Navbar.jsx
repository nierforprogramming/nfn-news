import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaSearch, FaTwitter } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";

const sections = [
  ["Home", "home"],
  ["Business", "business-news"],
  ["Entertainment", "entertainment-news"],
  ["General", "general-news"],
  ["Health", "health-news"],
  ["Science", "science-news"],
  ["Sports", "sports-news"],
  ["Technology", "technology-news"],
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [open, setOpen] = useState(false);

  const handleClick = () => setOpen((prev) => !prev);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.5,
      }
    );

    requestAnimationFrame(() => {
      sections.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      });
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-container relative">
      <div className="nav-wrapper mx-auto px-32 fixed top-0 w-full bg-white z-50  border-b border-gray-300">
        <header className="flex justify-between pt-5 pb-5">
          <div className="nav nav-search-bar flex items-center px-3 border-1 border-gray-400 rounded-full">
            <div className="search-bar-icon p-2">
              <FaSearch className="text-gray-400 text-xs" />
            </div>
            <input
              className="nav-search-input outline-none border-none w-full py-1"
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
          </div>

          <div className="nav nav-logo">
            <a href="#home" className="text-2xl font-bold cursor-pointer">
              NF<span className=" inline text-[var(--accent-color)]">N</span>{" "}
              NEWS
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
                <RxHamburgerMenu className="text-4xl" onClick={handleClick} />
              </div>
              <div
                className={`side-bar-container pt-14 pl-12 fixed top-0 right-0 h-full w-[250px] bg-white z-40 shadow-lg transform transition-transform duration-300 ease-in-out ${
                  open ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <div className="close-siderbar-icon absolute top-4 right-4 text-2xl cursor-pointer">
                  <FaX onClick={handleClick} />
                </div>
                <div className="side-bar-links flex flex-col gap-2">
                  {sections.map(([label, id]) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={handleClick}
                      className={`side-bar-link text-lg font-medium cursor-pointer transition-colors duration-200 ${
                        activeSection === id
                          ? "text-[var(--accent-color)] font-semibold"
                          : "text-gray-700 hover:text-[var(--accent-color)]"
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
