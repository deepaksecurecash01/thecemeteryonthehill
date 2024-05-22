/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["var(--font-opensans)"], //Default font for paragraphs.
        roboto: ["var(--font-roboto)"], //Applied to navigation menus, contact details, buttons, and all clickable links.
        eliyamoliscript: ["var(--font-eliyamoliscript)"], //Used for sub-headings.
        trajanpro3: ["var(--font-trajanpro3)"], //Used for headings.
      },
      colors: {
        burgundy: "#933d38", //Primary Colour
        gold: "#9e8034", //Secondary Colour
        black: "#030000", //Tertiary Colour
        grey: "#58595b", //Paragraph text
      },
      backgroundImage: {
        herosection: "url('/images/contact-bg.jpg')",
        intro_overly: "url('/images/intro-overly.png')",
        testimonials_overly: "url('/images/testimonials-overly.png')",
        elipse1: "url('/images/Ellipse-140.png')",
        elipse2: "url('/images/Ellipse-139.png')",
        services_bg_1: "url('/images/services_bg_1.png')",
        services_bg_2: "url('/images/services_bg_2.png')",
        services_bg_3: "url('/images/services_bg_3.png')",
        banner_bg: "url('/images/banner_bg.jpg')",
        testi_bg: "url('/images/demo.png')",
      },
    },
 
  },
  plugins: [],
};
