import { ReactNode } from "react";
import "./global.css";
import NavBar from "@/components/navigation/NavBar";
import Footer from "@/components/navigation/Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <head>
        <title>El Hoda Group</title>
        <meta name="description" content="Description goes here" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        dir="rtl"
        className="w-screen left-0 overflow-x-hidden relative bg-[#E9EFF4]"
      >
        <NavBar />
        <main className="w-screen overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
