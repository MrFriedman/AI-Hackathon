"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="container mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl text-black font-bold">ActiveGuard</h2>

        {/* Hamburger Menu for Small Screens */}
        <button
          className="md:hidden text-black focus:outline-none pr-5"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon size={28} /> : <MenuIcon size={28} />}
        </button>

        {/* Horizontal Menu for Larger Screens */}
        <div className="hidden md:flex gap-5">
          <NavLinks />
        </div>
      </div>

      {/* Dropdown Menu (Small Screens) */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4">
          <NavLinks />
        </div>
      )}
    </div>
  );
}

// Reusable Navigation Links Component
const NavLinks = () => (
  <div className="flex flex-col md:flex-row items-center gap-4">
    <Link
      href="/dashboard"
      className="w-40 flex justify-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Home
    </Link>
    <Link
      href="/account"
      className="w-40 flex justify-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Manage Account
    </Link>
    <Link
      href="/notifications"
      className="w-40 flex justify-center bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Notifications
    </Link>
  </div>
);

export default Menu;
