import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="container mx-auto px-2 flex items-center justify-between">
        <h1 className="text-lg font-heading">FI</h1>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex flex-col gap-1"
        >
          <span
            className={`w-6 h-[2px] bg-dark-text transition-all duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-dark-text transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[2px] bg-dark-text transition-all duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      <ul
        id="mobile-menu"
        className={`flex flex-col gap-4 mt-4 text-center transform origin-top transition-all duration-300 ease-in-out ${
          open ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#wohnungen">Wohnungen</a>
        </li>
        <li>
          <a href="#about">Über uns</a>
        </li>
        <li>
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
