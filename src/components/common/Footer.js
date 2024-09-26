import Image from "next/image";
import Link from "next/link";
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
      {/* Ellipse backgrounds */}
      <div className="absolute bg-ellipse-1 bg-cover bg-no-repeat bottom-0 right-0 h-full w-full -z-10" />
      <div className="absolute bg-ellipse-2 bg-cover bg-no-repeat top-0 left-0 h-full w-full -z-10" />
      {/* Footer content */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 py-8 px-6 md:px-6 lg:px-20 space-y-6 md:space-y-0">
        {/* Logo */}
        <div className="col-span-1 w-full flex flex-col items-center">
          <Image
            src="/images/logo-full.png"
            width={300}
            height={250}
            alt="Logo"
            className="rounded-t-2xl object-cover"
          />
        </div>
        {/* Navigation */}
        <div className="col-span-1 lg:col-span-2 flex md:flex-col md:space-y-2 lg:flex-row w-full items-start justify-between">
          {/* Explore */}
          <div className="w-full flex justify-center">
            <div className="lg:space-y-8 space-y-4 md:space-y-2 md:w-36 lg:w-auto">
              {/* Explore heading */}
              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold font-display text-primary">
                Explore
              </h3>
              {/* Explore links */}
              <ul className="font-roboto text-base md:text-sm lg:text-base text-secondary font-normal space-y-2 md:space-y-1 lg:space-y-4">
                {/* Map links */}
                {[
                  { href: "/", label: "Home" },
                  {
                    href: "/history-vision",
                    label: "Our Vision & History",
                  },
                  { href: "/biography", label: "Biography" },
                  { href: "/purchase-plot", label: "Purchase a Plot" },
                  { href: "/expired-leases", label: "Expired Leases" },
                  { href: "/our-records", label: "Our Records" },
                  { href: "/contac-us", label: "Contact Us" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} passHref>
                      <span className={`cursor-pointer hover:text-primary`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Services */}
          <div className="w-full flex justify-center">
            <div className="lg:space-y-8 space-y-4 md:space-y-2 md:w-36 lg:auto">
              {/* Services heading */}
              <h3 className="text-2xl md:text-xl lg:text-2xl font-bold font-display text-primary">
                Services
              </h3>
              {/* Services links */}
              <ul className="font-roboto text-base md:text-sm lg:text-base text-secondary font-normal space-y-2 md:space-y-1 lg:space-y-4">
                {/* Service links */}
                {[
                  { href: "/services/burials", label: "Burials" },
                  { href: "/services/ashes", label: "Ashes" },
                  { href: "/services/pet-interments", label: "Pet Interments" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} passHref>
                      <span className={`cursor-pointer hover:text-primary`}>
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Contact information */}
        <div className="col-span-1 flex flex-col items-start">
          {/* Google Maps */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.1477849003113!2d138.50003237665305!3d-35.17786897275395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab1242340d6e6fb%3A0xac8894133a19b671!2s30%20Church%20Hill%20Rd%2C%20Old%20Noarlunga%20SA%205168%2C%20Australia!5e0!3m2!1sen!2s!4v1715746856781!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-md w-full h-full md:h-40 lg:h-full"
          ></iframe>
          {/* Contact details */}
          <div className="space-y-4 mt-4 md:mr-8">
            {/* Address */}
            <p className="flex items-center space-x-3 md:space-x-1 xl:space-x-3 text-paragraph hover:text-primary cursor-pointer">
              <FaLocationArrow className="text-base md:text-sm lg:text-base" />
              <span className="text-base md:text-sm lg:text-base">
                <Link
                  target="_blank"
                  href="https://maps.app.goo.gl/c8CpaK84pwKiaBGZA"
                >
                  30 Church Hill Road, Old Noarlunga, SA 5168
                </Link>
              </span>
            </p>
            {/* Phone */}
            <p className="flex items-center space-x-3 md:space-x-1 xl:space-x-3 text-paragraph hover:text-primary cursor-pointer">
              <FaPhoneAlt className="text-base md:text-sm lg:text-base" />
              <span className="text-base md:text-sm lg:text-base">
                <Link href="tel:08-8317-6044">08 8317 6044</Link>
              </span>
            </p>
            {/* Email */}
            <p className="flex items-center space-x-3 md:space-x-1 xl:space-x-3 text-paragraph hover:text-primary cursor-pointer">
              <FaEnvelope className="text-base md:text-sm lg:text-base" />
              <span className="text-base md:text-sm lg:text-base">
                <Link href="mailto:hello@thecemeteryonthehill.com.au">
                  hello@thecemeteryonthehill.com.au
                </Link>
              </span>
            </p>
            {/* Social media */}
            <div className="flex items-center gap-4">
              <FaFacebook
                className="text-lg md:text-base lg:text-lg text-paragraph hover:text-primary cursor-pointer"
                title="Facebook"
              />
              <FaInstagram
                className="text-lg md:text-base lg:text-lg text-paragraph hover:text-primary cursor-pointer"
                title="Instagram"
              />
              <FaTiktok
                className="text-lg md:text-base lg:text-lg text-paragraph hover:text-primary cursor-pointer"
                title="TikTok"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer copyright */}
      <p className="tracking-wider font-roboto text-center text-[0.85rem] lg:text-sm bg-primary text-white py-4 px-6">
        {
          '©2024 THE CEMETERY ON THE HILL PRESERVATION SOCIETY LIMITED ABN 33672485442 - Trading as "The Cemetery on The Hill"'
        }
      </p>
    </div>
  );
};

export default Footer;
