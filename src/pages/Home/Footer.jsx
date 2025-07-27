import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-container pb-20 pt-24">
      <div className="footer-wrapper">
        <div className="footer-cta bg-gray-300">
          <div className="f-cta-heading text-2xl font-bold">
            <h1>Subscribe to newsletter</h1>
          </div>
          <div className="f-cta-inputs">
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              id="email"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-social-links flex flex-col items-center pt-16">
          <div className="sl-icons flex gap-2 pb-8">
            <div className="sl-icon bg-gray-300 p-3 cursor-pointer hover:bg-[var(--accent-color)] hover:text-white rounded-lg">
              <FaFacebook />
            </div>

            <div className="sl-icon bg-gray-300 p-3 cursor-pointer hover:bg-[var(--accent-color)] hover:text-white rounded-lg">
              <FaTwitter />
            </div>

            <div className="sl-icon bg-gray-300 p-3 cursor-pointer hover:bg-[var(--accent-color)] hover:text-white rounded-lg">
              <FaLinkedin />
            </div>

            <div className="sl-icon bg-gray-300 p-3 cursor-pointer hover:bg-[var(--accent-color)] hover:text-white rounded-lg">
              <FaYoutube />
            </div>
          </div>
          <div className="f-rights text-sm">
            <p className="f-copyright text-gray-400 text-center pb-8">
              Copyright ©2025 All rights reserved | NFN News
            </p>
            <p className="f-terms text-gray-400 text-center">
              Terms & Conditions/ Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
