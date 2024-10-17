import { Open_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import ReduxProvider from "@/redux/provider";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

const jolydisplay = localFont({
  src: "../../public/fonts/JolyDisplay/fonnts.com-Joly_Display_Regular.otf",
  variable: "--font-jolydisplay",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
});

const eliyamoliscript = localFont({
  src: "../../public/fonts/EliyamoliScript/eliyamoliscript.otf",
  variable: "--font-eliyamoliscript",
});

const trajanpro3 = localFont({
  src: "../../public/fonts/TrajanPro3SemiBold.ttf",
  variable: "--font-trajanpro3",
});

// Metadata for SEO
export const metadata = {
  title: {default: "The Cemetery on The Hill", template:"%s - The Cemetery on The Hill"},
  description:
    "Learn more about The Cemetery on The Hill, a state heritage site in South Australia, offering ashes interments, burials, memorials, and pre-planning in a peaceful, historic setting.",
  keywords:
    "cemetery, church, Old Noarlunga, Onkaparinga River, historical site",
  author: "SecureCash",
  canonical: "https://www.thecemeteryonthehill.com.au/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jolydisplay.className} ${roboto.variable} ${eliyamoliscript.variable} ${trajanpro3.variable}`}
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
