import React from "react";
import Image from "next/image";
import { ClipboardPlus } from "lucide-react";

import { Speciality } from "@/types/Speciality";

interface Props {
  specalities: Speciality[];
}

const Specialities = ({ specalities }: Props) => {
  return (
    <section className="container my-20">
      <div className="flex items-center gap-2">
        <ClipboardPlus className="text-primary-dark" size={30} />
        <h2 className="text-3xl">التخصصات</h2>
      </div>
      <div className="flex md:flex-row flex-col flex-wrap">
        {specalities.map((item, index) => (
          <div
            className="bg-white mt-5 rounded-xl shadow-lg md:m-5 p-10 w-full md:min-w-[28%] flex-1 md:max-w-[30%] flex flex-col items-center gap-5 hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer duration-150"
            key={index}
          >
            <Image src={item.icon} width={80} height={80} alt={item.title} />
            <p className="text-xl">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialities;
