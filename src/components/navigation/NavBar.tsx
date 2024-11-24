"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import images
import logo from "public/vectors/elHodaLogo 4.svg";
//import icons
import { Home, Info, Phone, Menu, XIcon } from "lucide-react";

const navItems = [
  {
    label: "الرئيسية",
    icon: <Home />,
    href: "/",
  },
  {
    label: "من نحن",
    icon: <Info />,
    href: "/about-us",
  },
  {
    label: "اتصل بنا",
    icon: <Phone />,
    href: "/contact",
  },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="gradient-l py-3 top-0 w-screen box-border z-20 shadow-xl fixed opacity-90 hover:opacity-100 duration-200">
      <div className="container flex flex-row-reverse justify-between items-center">
        {/*link & logo*/}
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-white font-medium text-2xl mt-[-5px]">
            الهدي جروب
          </h1>
        </Link>
        {/*desktop navbar*/}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-white hover:text-primary-light duration-150"
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        {/*mobile nav*/}
        <div className="block md:hidden">
          <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className={menuOpen ? "opacity-0" : "opacity-100"} />
          </button>

          <ul
            className={` duration-300 space-y-5 w-screen h-screen absolute top-0 right-0 z-30 bg-white bg-opacity-75 p-5 px-10  ${
              menuOpen ? "translate-x-0" : "translate-x-[200rem] "
            }`}
          >
            <button
              className="text-primary-dark"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <XIcon />
            </button>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex text-lg items-center gap-1 text-primary-dark hover:text-primary-light duration-150"
                >
                  {item.icon} {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
