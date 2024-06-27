"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Function to toggle dropdown visibility
  };

  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const dropdownButton = () => {
    toggleMenu();
    toggleDropdown();
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
          <div className="flex xl:block justify-center items-center w-full xl:w-fit">
            <Link href="/" passHref>
              <Image
                src="/images/logo.png"
                width={200}
                height={64}
                alt="Logo"
                className="text-3xl font-bold leading-none"
              />
            </Link>
          </div>

          <ul
            className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:items-center lg:w-auto lg:space-x-6 xl:flex xl:space-x-4 2xl:space-x-6 ${
             "hidden"
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
            <div className="relative group">
              <li
                className="relative"
                //onMouseLeave={toggleDropdown}
              >
                <span
                  className={`text-base cursor-pointer
                   text-paragraph   ${
                     pathname.startsWith("/services/")
                       ? "text-primary font-bold"
                       : " group-hover:text-secondary"
                   }
                `}
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
                <div className="absolute z-10 hidden group-hover:block">
                  <div className=" bg-white py-2 space-y-4 mt-10 w-auto  shadow-xl rounded-md">
                    <Link href="/services/burials" passHref>
                      <span
                        className={`block px-12 text-paragraph py-2 my-1 text-base ${
                          pathname === "/services/burials"
                            ? "text-primary font-bold "
                            : " hover:text-primary hover:bg-secondary/10 "
                        }`}
                      >
                        Burials
                      </span>
                    </Link>
                    <Link href="/services/ashes" passHref>
                      <span
                        className={`block px-12 text-paragraph py-2 my-1 text-base ${
                          pathname === "/services/ashes"
                            ? "text-primary font-bold "
                            : " hover:text-primary hover:bg-secondary/10 "
                        }`}
                      >
                        Ashes
                      </span>
                    </Link>
                    <Link href="/services/memorials" passHref>
                      <span
                        className={`block px-12 text-paragraph py-2 my-1 text-base ${
                          pathname === "/services/memorials"
                            ? "text-primary font-bold "
                            : " hover:text-primary hover:bg-secondary/10 "
                        }`}
                      >
                        Memorials
                      </span>
                    </Link>
                  </div>
                </div>
              </li>
            </div>
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
          <Link href="/contact" passHref>
            <span
              className={`            hidden xl:inline-block py-2 px-6 hover:bg-primary text-sm  ${
                pathname === "/contact" ? "bg-primary " : "bg-secondary "
              } text-white font-bold rounded-md transition duration-200
`}
            >
              Contact us
            </span>
          </Link>
        </nav>
      </Headroom>

      {/* Mobile Menu */}
      <div
        className={`navbar-menu fixed inset-0 z-50 ${
          menuOpen ? "block" : "hidden"
        } xl:hidden`}
      >
        <div
          className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
          onClick={toggleMenu}
        />
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-hidden mobile-menu">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" passHref onClick={toggleMenu}>
              <Image
                src="/images/logo.png"
                width={200}
                height={64}
                alt="Logo"
                className=" text-3xl font-bold leading-none"
              />
            </Link>
            <button className="navbar-close" onClick={toggleMenu}>
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul>
            {[
              { href: "/", label: "Home" },
              { href: "/ourhistoryandvision", label: "Our Vision & History" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span
                    className={`block p-4 text-sm font-semibold rounded ${
                      pathname === item.href &&
                      "text-primary font-bold bg-secondary/10"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
            <li className="relative group" onClick={toggleDropdown}>
              <span
                className={`p-4 text-sm font-semibold rounded flex justify-between ${
                  pathname.startsWith("/services/") &&
                  "text-primary font-bold bg-secondary/10"
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
              <div
                className={`relative z-10 ${dropdownOpen ? "block" : "hidden"}`}
              >
                <div className="bg-white py-2 space-y-2 mt-0 w-auto shadow-sm rounded">
                  <Link href="/services/burials" passHref>
                    <span
                      onClick={dropdownButton}
                      className={`block px-8 py-4 text-sm text-gray-800 hover:bg-secondary/10 hover:text-primary rounded ${
                        pathname === "/services/burials" &&
                        "text-primary font-bold bg-secondary/10"
                      }`}
                    >
                      Burials
                    </span>
                  </Link>
                  <Link href="/services/ashes" passHref>
                    <span
                      onClick={dropdownButton}
                      className={`block px-8 py-4 text-sm text-gray-800 hover:bg-secondary/10 hover:text-primary rounded ${
                        pathname === "/services/ashes" &&
                        "text-primary font-bold bg-secondary/10"
                      }`}
                    >
                      Ashes
                    </span>
                  </Link>
                  <Link href="/services/memorials" passHref>
                    <span
                      onClick={dropdownButton}
                      className={`block px-8 py-4 text-sm text-gray-800 hover:bg-secondary/10 hover:text-primary rounded ${
                        pathname === "/services/memorials" &&
                        "text-primary font-bold bg-secondary/10"
                      }`}
                    >
                      Memorials
                    </span>
                  </Link>
                </div>
              </div>
            </li>

            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/purchaseplot", label: "Purchase a Plot" },
              { href: "/expiredleases", label: "Expired Leases" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span
                    className={`block p-4 text-sm font-semibold rounded ${
                      pathname === item.href &&
                      "text-primary font-bold bg-secondary/10"
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-auto">
            <div className="pt-6">
              <Link href="/contact" passHref>
                <span
                  onClick={toggleMenu}
                  className={`                  block px-4 py-3 mb-2 leading-loose text-sm text-center text-white font-semibold rounded-xl  ${
                    pathname === "/contact" ? "bg-primary " : "bg-secondary "
                  }
`}
                >
                  Contact us
                </span>
              </Link>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2024</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
