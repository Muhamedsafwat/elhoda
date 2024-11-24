import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

interface CardProps {
  title: string;
  icon: string;
  description: string;
  isIcon: boolean;
}

const Card = ({ title, icon, description, isIcon }: CardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:min-w-[28%] flex-1 md:max-w-[30%] flex flex-col hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer duration-150">
      {isIcon && <Image src={icon} width={70} height={70} alt={title} />}
      <p className="text-2xl font-normal">{title}</p>
      <p className=" mt-3">{description}</p>
    </div>
  );
};
export default Card;
