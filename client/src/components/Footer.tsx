import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            We specialize in solar planset designing and permitting across the USA, ensuring compliance with regulations.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="text-sm space-y-2">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm">📍 123 Solar Street, CA, USA</p>
          <p className="text-sm">📧 info@solarpermit.com</p>
          <p className="text-sm">📞 +1 (123) 456-7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Solar Permit. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
