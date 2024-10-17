import React from "react";
import Logo from "../assets/images/sneaker.png";
import Menu from "../assets/icons/menu.svg";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="absolute w-full z-10 ">
      <nav className="flex px-16  py-8 justify-between items-center">
        <div className=" flex items-end mb-4">
          <img src={Logo} className=" w-12 h-12" />
          <p className="text-2xl text-fuchsia-600 bg-gradient-to-r from-pink-500 via purple-300 to-purple-500 text-transparent bg-clip-text">
            Sneakers
          </p>
        </div>
        <img
          src={Menu}
          alt="menu"
          className="hidden w-8 h-8 max-lg:block mt-3 "
        />
        <ul className="flex flex-1 w-full justify-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <i key={item.label} className="cursor-pointer">
              <a
                href={item.href}
                className={`text-purple-500 text-lg font-montserrat leading-normal `}
              >
                {item.label}
              </a>
            </i>
          ))}
        </ul>
        <a className="text-lg cursor-pointer bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text font-montserrat font-semibold leading-normal max-lg:hidden">
          Join Us / Explore more
        </a>
      </nav>
    </header>
  );
};

export default Nav;
