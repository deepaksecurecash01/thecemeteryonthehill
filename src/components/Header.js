"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="relative px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center bg-white font-roboto">
        <Link href="/" passHref>
          <Image
            src="/images/logo.png"
            width={200}
            height={200}
            alt="Logo"
            className="text-3xl font-bold leading-none"
          />
        </Link>
        <div className="lg:hidden w-full flex justify-end">
          <button
            className="navbar-burger flex items-center text-burgundy p-3"
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
        <ul
          className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-4 xl:flex xl:space-x-6 ${"hidden"}`}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/ourhistoryandvision", label: "Our Vision & History" },
            { href: "/services", label: "Services" },
            { href: "/pricing", label: "Pricing" },
            { href: "/purchaseplot", label: "Purchase a Plot" },
            { href: "/expiredleases", label: "Expired Leases" },
          ].map((item) => (
            <li key={item.href}>
              <Link href={item.href} passHref>
                <span
                  className={`text-sm ${
                    pathname === item.href
                      ? "text-burgundy font-bold"
                      : "text-gray-400 hover:text-gray-500"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/contact" passHref>
          <span className="hidden lg:inline-block py-2 px-6 bg-gold hover:bg-burgundy text-sm text-white font-bold rounded-md transition duration-200">
            Contact us
          </span>
        </Link>
      </nav>
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
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" passHref>
              <Image
                src="/images/logo.png"
                width={200}
                height={200}
                alt="Logo"
                className="mr-auto text-3xl font-bold leading-none"
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
              { href: "/services", label: "Services" },
              { href: "/pricing", label: "Pricing" },
              { href: "/purchaseplot", label: "Purchase a Plot" },
              { href: "/expiredleases", label: "Expired Leases" },
            ].map((item) => (
              <li key={item.href}>
                <Link href={item.href} passHref>
                  <span
                    className={`block p-4 text-sm font-semibold rounded ${
                      pathname === item.href
                        ? "text-burgundy font-bold"
                        : "text-gray-400 hover:bg-gold/10 hover:text-burgundy"
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
                <span className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-gold hover:bg-burgundy rounded-xl">
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
