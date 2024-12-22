import React from "react";
import Image, { StaticImageData } from "next/image";
//import images
import contactImg from "public/home/contact.png";
//import icons
import { PhoneCall } from "lucide-react";
const Contact = ({
  logo,
  numbers,
}: {
  logo: StaticImageData;
  numbers: string[];
}) => {
  return (
    <section className="relative flex items-center w-screen h-[400px] shadow-2xl mt-20">
      <Image src={contactImg} alt="doctors" fill className="object-cover" />
      <div className="flex flex-col-reverse gap-5 md:flex-row justify-around items-center top-0 container relative">
        {/*Content*/}
        <div className=" text-3xl flex flex-col items-center md:items-start gap-4  z-10  text-white text-start">
          <div className="flex gap-2 items-center text-center md:text-start">
            <PhoneCall size={30} />
            <h2 className="text-4xl font-medium">أرقام الحجز والتواصل</h2>
          </div>
          <div className="w-full h-[2px] bg-white" />
          {numbers.map((item, index) => (
            <li
              key={index}
              className="hover:text-primary-light duration-200 cursor-pointer list-none text-2xl"
            >
              {item}
            </li>
          ))}
        </div>
        <div className="rounded-full overflow-hidden bg-white aspect-square flex items-center justify-center">
          <Image src={logo} alt="logo" width={200} height={200} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
