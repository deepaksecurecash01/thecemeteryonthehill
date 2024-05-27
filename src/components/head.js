'use client';
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Headroom from "react-headroom";

const Header = () => {
 

    return (
      <Headroom>
        <nav
          className={`navbar fixed-top navbar-toggleable-md navbar-inverse bg-primary ${
            'n' ? "block" : "hidden"
          }`}
        >
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link href="/" passHref>
            Projects{" "}
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link href="#aboutMe" passHref>
                  Projects{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#projects" passHref>
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#pipeline" passHref>
                  Projects{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contactMe" passHref>
                  Projects{" "}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Headroom>
    );
};

export default Header;
