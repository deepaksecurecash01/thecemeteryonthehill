import { Open_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const opensans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-opensans",
  weight: ["300", "400", "500", "600", "700", "800"],
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

export const metadata = {
  title: "The Cemetery on the Hill",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${opensans.className} ${roboto.variable} ${eliyamoliscript.variable} ${trajanpro3.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
