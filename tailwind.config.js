/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  variants: {
    display: ["responsive", "group-hover", "group-focus"],
  },
  theme: {
    screens: {
      xs: { max: "460px" },
      sm: { min: "461px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
      "3xl": { min: "1792px" },
      "4xl": { min: "2048px" },
      "5xl": { min: "2304px" },
      "6xl": { min: "2560px" },
      "7xl": { min: "2816px" },
      "8xl": { min: "3072px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-opensans)"], // Default font for paragraphs
        roboto: ["var(--font-roboto)"], // Navigation menus, contact details, buttons, and all clickable links
        script: ["var(--font-eliyamoliscript)"], // Sub-headings
        display: ["var(--font-trajanpro3)"], // Headings
      },
      colors: {
        primary: "#933d38", // Burgundy
        secondary: "#9e8034", // Gold
        tertiary: "#030000", // Black
        paragraph: "#58595b", // Grey
      },
      backgroundImage: (theme) => ({
        "hero-section": "url('/images/contact-bg.jpg')",
        "intro-overlay": "url('/images/intro-overly.png')",
        "testimonials-overlay": "url('/images/testimonials-overly.png')",
        "contact-overlay": "url('/images/Ellipse-141.png')",
        "ellipse-1": "url('/images/Ellipse-140.png')",
        "ellipse-2": "url('/images/Ellipse-139.png')",
        "services-bg-1": "url('/images/services_bg_1.png')",
        "services-bg-2": "url('/images/services_bg_2.png')",
        "services-bg-3": "url('/images/services_bg_3.png')",
        "banner-bg": "url('/images/banner_bg.jpg')",
        "banner-bg-2": "url('/images/banner_bg_2.jpeg')",
        "ourhistoryandvision-bg": "url('/images/ourhistoryandvision_bg.jpeg')",
        "service-overlay-bg": "url('/images/service-page-overly.png')",

        "contact-form-bg": "url('/images/contact_form_bg.png')",
      }),
    },
  },
  plugins: [],
};
