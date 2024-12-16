import React from "react";
import { FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          Food<span className="text-orange-500">tuck</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#"
              className="text-orange-500 font-semibold hover:text-orange-400 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Pages
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-orange-500 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4 items-center">
          <FiSearch className="cursor-pointer text-xl hover:text-orange-500 transition" />
          <FiUser className="cursor-pointer text-xl hover:text-orange-500 transition" />
          <FiShoppingBag className="cursor-pointer text-xl hover:text-orange-500 transition" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
