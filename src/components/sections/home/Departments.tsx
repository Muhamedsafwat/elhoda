import React from "react";
import Image from "next/image";

//import images
import bg from "public/backgrounds/departmentsBG.svg";
import icon1 from "public/vectors/specalities/icon1.png";
import icon2 from "public/vectors/specalities/icon2.png";
import icon3 from "public/vectors/specalities/icon3.png";
import icon4 from "public/vectors/specalities/icon4.png";
import icon5 from "public/vectors/specalities/icon5.png";
import icon6 from "public/vectors/specalities/icon6.png";

const Departments = async () => {
  const departments = [
    {
      icon: icon1,
      title: "جراحة العظام",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
    {
      icon: icon2,
      title: "المخ والاعصاب",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
    {
      icon: icon3,
      title: "الجهاز الهضمي",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
    {
      icon: icon4,
      title: " الاشعة والتحاليل",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
    {
      icon: icon5,
      title: " الطوارئ",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
    {
      icon: icon6,
      title: "العلاج الطبيعي",
      description:
        "آلام العظام وخشونة المفاصل. إصابات الملاعب. معالجة التهابات الأعصاب والشلل. وحدة خاصة لتفتيت الدهون. تأهيل ما بعد عمليات الركبة والكتف.",
    },
  ];

  return (
    <section className="relative w-full  gradient-r my-16 md:my-24 shadow-2xl  ">
      <Image src={bg} fill alt="bg-texture" className="object-cover" />
      <div className="container py-16 relative">
        <h2 className="text-center font-medium text-white text-5xl">الأقسام</h2>
        <div className="flex flex-col md:flex-row flex-wrap mt-10">
          {departments.map((item, index) => (
            <div
              className="bg-[#E9EFF4] rounded-xl overflow-hidden shadow-lg my-4 md:m-4 p-8 md:min-w-[28%] w-full flex-1 md:max-w-[30%] flex relative flex-col items-center md:items-start text-center md:text-startx hover:shadow-2xl hover:translate-y-[-5px] cursor-pointer duration-150"
              key={index}
            >
              <Image src={item.icon} width={70} height={70} alt={item.title} />
              <Image
                src={item.icon}
                width={200}
                height={200}
                alt={item.title}
                className="absolute bottom-[-1rem] right-[-1rem] z-0 grayscale opacity-10"
              />

              <p className="text-2xl font-normal z-10">{item.title}</p>
              <p className=" mt-3 z-10">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
