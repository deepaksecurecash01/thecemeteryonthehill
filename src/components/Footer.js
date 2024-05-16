import Image from "next/image";
import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLocationArrow,
} from "react-icons/fa";
import { FaLocationDot, FaLocationPin, FaLocationPinLock } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="relative  w-full">
      <div className="absolute bg-elipse1 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-elipse2 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="flex justify-between py-20">
        <div className="flex justify-center items-center col-span-1 w-full">
          <Image
            src="/images/logo-full.png"
            width={350}
            height={350}
            alt="Picture of the author"
            className="rounded-t-2xl object-cover"
          />
        </div>
        <div className=" col-span-1 flex flex-col justify-start items-center w-full">
          <div className=" space-y-12">
            <h3 className="text-2xl font-bold text-start font-trajanpro3 text-burgundy">
              Explore
            </h3>
            <ul className=" font-roboto text-lg text-gold font-normal space-y-2">
              <li>Home</li>
              <li> Our Vision & History</li>
              <li>Services</li>
              <li>Pricing</li>
              <li> Purchase a Plot</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className=" col-span-1 flex flex-col justify-start items-center w-full">
          <div className="space-y-12">
            <h3 className="text-2xl font-bold text-start font-trajanpro3 text-burgundy">
              Services
            </h3>
            <ul className=" font-roboto text-lg text-gold font-normal space-y-2">
              <li>Burials</li>
              <li>Ashes</li>
              <li>Pet Interments</li>
            </ul>
          </div>
        </div>
        <div className=" col-span-1 flex flex-col justify-start items-center font-roboto space-y-6 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1477849003113!2d138.50003237665305!3d-35.17786897275395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab1242340d6e6fb%3A0xac8894133a19b671!2s30%20Church%20Hill%20Rd%2C%20Old%20Noarlunga%20SA%205168%2C%20Australia!5e0!3m2!1sen!2s!4v1715746856781!5m2!1sen!2s"
            width="350"
            height="270"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="space-y-2">
            <p className="flex justify-start items-center space-x-3  text-grey hover:text-gold cursor-pointer">
              <FaLocationArrow className="text-base" />

              <span className="text-base">
                <a href="tel:08-8317-6044">
                  30 Church Hill Road, Old Noarlunga, SA 5168
                </a>
              </span>
            </p>
            <p className="flex justify-start items-center space-x-3  text-grey hover:text-gold cursor-pointer">
              <FaPhoneAlt className="text-base" />

              <span className="text-base">
                <a href="tel:08-8317-6044">08 8317 6044</a>
              </span>
            </p>
            <p className="flex justify-start items-center space-x-3  text-grey hover:text-gold cursor-pointer">
              <FaEnvelope className="text-base" />

              <span className="text-base ">
                <a href="mailto:hello@thecemeteryonthehill.com.au">
                  hello@thecemeteryonthehill.com.au
                </a>
              </span>
            </p>
            <div className="flex justify-start items-center gap-4">
              <FaFacebook className="text-lg text-grey hover:text-gold cursor-pointer" />
              <FaInstagram className="text-lg text-grey hover:text-gold cursor-pointer" />
              <FaTiktok className="text-lg text-grey hover:text-gold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <p className=" tracking-wider font-roboto text-center bg-burgundy text-white py-2">
        {
          ' ©2024 THE CEMETERY ON THE HILL PRESERVATION SOCIETY LIMITED ABN 33672485442 "Trading as The Cemetery on The Hill"'
        }
      </p>
    </div>
  );
};

export default Footer;
