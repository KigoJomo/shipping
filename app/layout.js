import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shipping",
  description: "Consolidation, clearing & forwarding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center relative">
        <Header />
        <main>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
