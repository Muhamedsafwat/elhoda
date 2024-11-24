// --------- Contact us page (Frame #3 in Figma) --------- //
import React from "react";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import ContactCard from "@/components/cards/ContactCard";

import logo from "public/vectors/elHodaLogo 4.svg";

const page = () => {
  return (
    <div className="md:flex container py-24 justify-between flex-row">
      <div className=" w-1/4 hidden md:flex align-middle justify-center flex-col mb-8">
        <ContactCard />
      </div>
      <div className="flex flex-col md:w-2/3 justify-center">
        <div className="flex justify-center py-6">
          <Image
            src={logo}
            width={150}
            height={100}
            className=" object-cover shadow-[0px_4.94px_4.94px_0px"
            alt="Elhoda Logo"
          />
        </div>
        <p className="font-almarai text-4xl font-normal leading-[38px] text-center  decoration-skip-none text-[#1A1B1C]">
          كيف يمكن أن نساعدك ؟
        </p>
        <div>
          <ContactForm buttonText="إِرسال" isMessage={true} />
        </div>
      </div>
    </div>
  );
};
export default page;
