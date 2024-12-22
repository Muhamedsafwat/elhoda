import React from "react";
import Image from "next/image";
import Link from "next/link";
// import images
import logo from "public/vectors/elHodaLogo 4.svg";
//import icons
import { Home, Info, ClipboardPlus, Phone } from "lucide-react";

const navItems = [
  {
    label: "الرئيسية",
    icon: <Home />,
    href: "/",
  },
  {
    label: "الأقسام",
    icon: <ClipboardPlus />,
    href: "/#departments",
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
  return (
    <header className="gradient-l py-3 top-0 w-screen box-border overflow-hidden z-20 shadow-xl fixed opacity-90 hover:opacity-100 duration-200">
      <div className="container flex flex-row-reverse justify-between items-center">
        {/*link & logo*/}
        <Link href="/" className="flex items-center gap-1">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h1 className="text-white font-medium text-2xl mt-[-5px]">
            مجموعة الهدي
          </h1>
        </Link>
        <nav>
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
      </div>
    </header>
  );
};

export default NavBar;
