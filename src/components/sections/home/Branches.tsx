import React from "react";
import Image from "next/image";
import Link from "next/link";

//import images
import logo1 from "public/home/logo1.png";
import logo2 from "public/home/logo2.png";
import logo3 from "public/home/logo3.png";

const Branches = async () => {
  const branchesData = [
    {
      logo: logo1,
      slug: "al-hoda-center",
    },
    {
      logo: logo2,
      slug: "konoz-elhoda",
    },
    {
      logo: logo3,
      slug: "nawah",
    },
  ];
  return (
    <section className="container">
      {/*Title*/}
      <div className="flex items-center justify-center gap-2">
        <div className="flex-1 h-[2px] bg-primary-dark" />
        <h2 className="text-3xl font-bold text-primary-dark">فروعنا</h2>
        <div className="flex-1 h-[2px] bg-primary-dark" />
      </div>
      {/*logos*/}
      <div className="flex justify-between my-16">
        {branchesData.map((item, index) => (
          <div
            key={index}
            className="rounded-full overflow-hidden p-5 bg-white"
          >
            <Link href={`/${item.slug}`}>
              <Image
                key={index}
                width={200}
                height={200}
                alt="logo"
                src={item.logo}
                className="grayscale hover:grayscale-0 duration-200 cursor-pointer aspect-square"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Branches;
