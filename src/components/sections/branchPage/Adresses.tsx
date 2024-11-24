import React from "react";
//icons
import { MapPin } from "lucide-react";

const Addresses: React.FC<{
  addresses: string[];
}> = ({ addresses }) => {
  return (
    <section className="container my-20">
      <div className="flex items-center gap-2">
        <MapPin className="text-primary-dark" size={30} />
        <h2 className="text-3xl">العناوين</h2>
      </div>
      {addresses.map((item, index) => (
        <p className="text-xl mt-5 mx-5" key={index}>
          {item}
        </p>
      ))}
    </section>
  );
};

export default Addresses;
