import React from "react";
import Image from "next/image";

import { Speciality } from "@/types/Speciality";

interface Props {
  specalities: Speciality[];
}

const Specialities = ({ specalities }: Props) => {
  return (
    <section className="container my-20">
      <h2 className="text-center text-3xl font-semibold mb-5">
        التخصصات والخدمات
      </h2>
      <div className="flex md:flex-row flex-col justify-center flex-wrap">
        {specalities.map((item, index) => (
          <div
            className="bg-white mt-5 rounded-xl shadow-lg md:m-5 p-10 w-full md:min-w-[28%] flex-1 md:max-w-[30%] flex flex-col items-center gap-5 hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer duration-150"
            key={index}
          >
            <Image src={item.icon} width={80} height={80} alt={item.title} />
            <p className="text-xl text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Specialities;
