"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <Headroom className="z-50">
        <nav
          className={`relative px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-white font-roboto`}
        >
          <div className="xl:hidden absolute inset-y-1/3 flex justify-start">
            <button
              className="navbar-burger flex items-center text-primary p-3"
              onClick={toggleMenu}
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <Link
            href="/"
            passHref
            className="flex xl:block justify-center items-center w-full xl:w-fit"
          >
            <Image
              src="/images/logo.png"
              width={200}
              height={64}
              alt="Logo"
              className="text-3xl font-bold leading-none"
            />
          </Link>

          <ul
            className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 xl:flex xl:space-x-6 ${
              menuOpen ? "flex flex-col items-center" : "hidden"
            }`}
          >
            {[
              { href: "/", label: "Home" },
              { href: "/ourhistoryandvision", label: "Our Vision & History" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span
                    className={`text-base ${
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-paragraph hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            {/* Dropdown menu */}
            <li
              className="relative"
              onClick={toggleDropdown}
              //onMouseLeave={toggleDropdown}
            >
              <span
                className={`text-base cursor-pointer ${
                  dropdownOpen ? "text-secondary " : "text-paragraph"
                }`}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414zM10 14a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {/* Dropdown content */}
              {dropdownOpen && (
                <div className="absolute bg-white py-2 mt-2 space-y-2 w-44 shadow-lg rounded-md">
                  <Link href="/services/burials" passHref>
                    <span
                      className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200"
                      onClick={toggleDropdown}
                    >
                      Burials
                    </span>
                  </Link>
                  <Link href="/services/ashes" passHref>
                    <span
                      className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200"
                      onClick={toggleDropdown}
                    >
                      Ashes
                    </span>
                  </Link>
                  <Link href="/services/memorials" passHref>
                    <span
                      className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-200"
                      onClick={toggleDropdown}
                    >
                      Memorials
                    </span>
                  </Link>
                </div>
              )}
            </li>
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/purchaseplot", label: "Purchase a Plot" },
              { href: "/expiredleases", label: "Expired Leases" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span
                    className={`text-base ${
                      pathname === item.href
                        ? "text-primary font-bold"
                        : "text-paragraph hover:text-secondary"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {/* Contact link */}
          <Link href="/contact" passHref>
            <span className="hidden xl:inline-block py-2 px-6 bg-secondary hover:bg-primary text-sm text-white font-bold rounded-md transition duration-200">
              Contact us
            </span>
          </Link>
        </nav>
      </Headroom>
    </>
  );
};

export default Header;
