import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { x: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(menuRef.current, { x: "-100%", duration: 0.5, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <nav className="bg-blue-600 text-white p-4 relative">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Solar Permit</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-xl">
          ☰
        </button>
      </div>

      {/* Sliding Menu */}
      <div ref={menuRef} className="fixed top-0 left-0 h-full w-64 bg-blue-800 text-white p-6 transform -translate-x-full">
        <button onClick={() => setIsOpen(false)} className="text-white text-2xl mb-4">✖</button>
        <ul className="space-y-4">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)}>Services</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
