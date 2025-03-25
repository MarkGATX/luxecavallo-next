import { Federo, Oswald } from "next/font/google";
import "./globals.css";
import { MenuProvider } from "@/providers/menuContext/menuContext";
import { SizeProvider } from "@/providers/screenSizeContext/screenSizeContext";
import ResponsiveHeader from "./components/ResponsiveHeader/responsiveHeader";



const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const federo = Federo({
  variable: "--font-federo",
  subsets: ["latin"],
  weight:'400'
});

export const metadata = {
  title: "Luxe Cavallo - Next",
  description: "A fictional boutique",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MenuProvider>
        <SizeProvider>
          <body className={`${oswald.variable} ${federo.variable}`}>
            <ResponsiveHeader />
            {children}
          </body>
        </SizeProvider>
      </MenuProvider>
    </html>
  );
}
