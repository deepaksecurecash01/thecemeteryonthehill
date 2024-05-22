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

const Footer = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute bg-elipse1 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-elipse2 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      <div className="flex flex-col md:flex-row justify-between py-10 px-6 md:px-12 lg:px-20 space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3 flex flex-col items-center">
          <Image
            src="/images/logo-full.png"
            width={250}
            height={250}
            alt="Logo"
            className="rounded-t-2xl object-cover"
          />
          <div className="flex flex-col mt-6 md:hidden">
            <h3 className="text-2xl font-bold font-trajanpro3 text-burgundy text-center">
              Explore
            </h3>
            <ul className="font-roboto text-lg text-gold font-normal space-y-2 text-center">
              <li>Home</li>
              <li>Our Vision & History</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Purchase a Plot</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="hidden md:flex flex-col w-full md:w-1/3 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-trajanpro3 text-burgundy text-center md:text-left">
              Explore
            </h3>
            <ul className="font-roboto text-lg text-gold font-normal space-y-2 text-center md:text-left">
              <li>Home</li>
              <li>Our Vision & History</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Purchase a Plot</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-trajanpro3 text-burgundy text-center md:text-left">
              Services
            </h3>
            <ul className="font-roboto text-lg text-gold font-normal space-y-2 text-center md:text-left">
              <li>Burials</li>
              <li>Ashes</li>
              <li>Pet Interments</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 items-start">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1477849003113!2d138.50003237665305!3d-35.17786897275395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab1242340d6e6fb%3A0xac8894133a19b671!2s30%20Church%20Hill%20Rd%2C%20Old%20Noarlunga%20SA%205168%2C%20Australia!5e0!3m2!1sen!2s!4v1715746856781!5m2!1sen!2s"
            width="100%"
            height="270"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
          <div className="space-y-4 mt-4">
            <p className="flex items-center space-x-3 text-grey hover:text-gold cursor-pointer">
              <FaLocationArrow className="text-base" />
              <span className="text-base">
                <a href="tel:08-8317-6044">
                  30 Church Hill Road, Old Noarlunga, SA 5168
                </a>
              </span>
            </p>
            <p className="flex items-center space-x-3 text-grey hover:text-gold cursor-pointer">
              <FaPhoneAlt className="text-base" />
              <span className="text-base">
                <a href="tel:08-8317-6044">08 8317 6044</a>
              </span>
            </p>
            <p className="flex items-center space-x-3 text-grey hover:text-gold cursor-pointer">
              <FaEnvelope className="text-base" />
              <span className="text-base text-grey">
                <a href="mailto:hello@thecemeteryonthehill.com.au">
                  hello@thecemeteryonthehill.com.au
                </a>
              </span>
            </p>
            <div className="flex items-center gap-4">
              <FaFacebook className="text-lg text-grey hover:text-gold cursor-pointer" />
              <FaInstagram className="text-lg text-grey hover:text-gold cursor-pointer" />
              <FaTiktok className="text-lg text-grey hover:text-gold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <p className="tracking-wider font-roboto text-center text-[0.85rem] lg:text-sm bg-burgundy text-white py-4 px-6">
        {
          '©2024 THE CEMETERY ON THE HILL PRESERVATION SOCIETY LIMITED ABN 33672485442 "Trading as The Cemetery on The Hill"'
        }
      </p>
    </div>
  );
};

export default Footer;
