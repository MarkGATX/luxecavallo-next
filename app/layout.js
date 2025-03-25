'use client'
import { Federo, Oswald, Nunito } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/providers/menuContext/menuContext";
import { SizeProvider } from "@/providers/screenSizeContext/screenSizeContext";
import ResponsiveHeader from "./components/ResponsiveHeader/responsiveHeader";
import { useState } from "react";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


const federo = Federo({
  variable: "--font-federo",
  subsets: ["latin"],
  weight: '400'
});

// export const metadata = {
//   title: "Luxe Cavallo - Next",
//   description: "A fictional boutique",
// };



export default function RootLayout({ children }) {
  const [headerLoaded, setHeaderLoaded] = useState(false);


  return (
    <html lang="en">
      <MenuProvider>
        <SizeProvider>
          <body className={`${nunito.variable} ${federo.variable}`}>
            <ResponsiveHeader onLoad={() => setHeaderLoaded(true)}/>
            {children}
          </body>
        </SizeProvider>
      </MenuProvider>
    </html>
  );
}
