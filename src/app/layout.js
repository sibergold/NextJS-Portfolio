import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
   subsets: ["latin"],
   variable: "--font-inter",
  });

export const metadata = {
  title: "Omer Meric | Portfolio",
  description: "My Portfolio Web App",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable,"bg-background text-foreground font-inter")}>
        {children}
        <FireFliesBackground/>
        <Sound/>
        <div id="my-modal"/>
        </body>
    </html>
  );
}
