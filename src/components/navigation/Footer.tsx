import Image from "next/image";
import React from "react";
import { Facebook, Instagram, Mail, X } from "lucide-react";

import Socialmedia from "../media/Socialmedia";
import Logo from "../Logo/Logo";
import elHodaLogo from "public/vectors/elHodaLogo 4.svg";
export const socialmediaIcons = [
  {
    name: "Facebook",
    icon: <Facebook className="text-white" />,
    link: "#",
  },
  {
    name: "Instagram",
    icon: <Instagram className="text-white" />,
    link: "#",
  },
  {
    name: "x",
    icon: <X className="text-white" />,
    link: "#",
  },
  {
    name: "Gmail",
    icon: <Mail className="text-white" />,
    link: "#",
  },
];

const Footer = () => {
  return (
    <footer className=" flex flex-col gradient-r text-white font-almarai">
      <div className="md:flex md:flex-row justify-between ">
        <div className="hidden md:block">
          <Logo />
        </div>
        <div className="flex flex-col pt-10 pb-3 md:align-middle md:justify-between md:w-4/5">
          <div className="flex md:flex-row flex-col ">
            {/* first col div */}
            <div className="md:w-2/3">
              <div className="flex flex-col justify-center md:w-fit">
                {/* Logo and company name */}
                <div className="flex flex-col-reverse items-center md:flex-row gap-1 md:gap-4 text-2xl justify-center">
                  {/* company name dev */}
                  <div
                    dir="ltr"
                    className="flex flex-col items-center md:items-start"
                  >
                    AL HODA
                    <span className="hidden md:inline">HEALTHCARE GROUP</span>
                  </div>
                  {/* logo div */}
                  <Image
                    src={elHodaLogo}
                    width={70}
                    height={60}
                    className=" object-cover shadow-[0px_4.94px_4.94px_0px"
                    alt="Elhoda Logo"
                  />
                  {/* social media icon  */}
                </div>
                <div className="flex py-4 justify-evenly flex-row">
                  {socialmediaIcons.map((socialIcon) => (
                    <Socialmedia
                      isRounded={false}
                      key={socialIcon.name}
                      img={socialIcon.icon}
                      iconSize={32}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* second col dev */}
            <hr className="hidden md:block h-2 mt-8  border-0 dark:bg-white"></hr>
            <div className="hidden md:flex flex-row md:w-full justify-between md:pt-0 pt-5 px-5">
              <div className="flex flex-col md:pr-24 md:justify-center md:w-fit text-2xl">
                <div className="text-xl md:text-2xl">الروابط المهمه</div>
                <div className="text-lg cursor-pointer md:w-fit pt-5 ">
                  <div className="pb-2">الفروع</div>
                  <div className="pb-2">الاقسام</div>
                  <div className="pb-2">من نحن</div>
                  <div>الرئيسيه</div>
                </div>
              </div>

              {/* third col dev */}
              <div className="flex flex-col h-full md:w-1/3 text-sm">
                <div className="flex flex-col md:w-fit text-xl md:text-2xl">
                  <div>معلومات التواصل</div>
                  <div className="text-lg pt-5">
                    <div className="pb-2">201060055753+</div>
                    <div>0552356780</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs">
            {/* all right */}
            <div className="flex pt-8 md:pt-0 justify-center md:justify-end md:items-end text-gray-300 ">
              Copyright © 2024 - All rights reserved
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <Logo />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
