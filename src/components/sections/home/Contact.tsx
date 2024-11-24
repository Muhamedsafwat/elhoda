import React from "react";
import Image from "next/image";
//import images
import contactImg from "public/home/contact.png";
//import icons
import { PhoneCall } from "lucide-react";
const Contact = async () => {
  const phoneNumbers = ["01016596908"];

  return (
    <section className="relative w-screen h-96 md:h-[500px] shadow-2xl">
      <Image src={contactImg} alt="doctors" fill className="object-cover" />
      <div className="absolute text-2xl md:text-3xl flex flex-col items-center gap-4 top-1/2 translate-x-[-50%] translate-y-[-50%] left-1/2 z-10  text-white text-center">
        <PhoneCall className="size-10 md:size-16" />
        <h2 className=" text-3xl md:text-4xl font-bold">ابق علي تواصل معنا</h2>
        <div className="w-full h-[2px] bg-white" />
        <p>خدمة العملاء</p>
        {phoneNumbers?.length ? (
          <a
            href={`tel:${phoneNumbers[0]}`}
            className="hover:text-primary-light duration-200"
          >
            {phoneNumbers[0]}
          </a>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Contact;
