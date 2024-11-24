// -------- About us page (Frame #4 in Figma "Design in progress") ------- //
import Image from "next/image";
import React from "react";
import Card from "@/components/cards/Cards";
import VideoSection from "@/components/sections/home/VideoSection";
import drAhmed from "public/drAhmed.png";
import bg from "public/about.png";

const page = async () => {
  const aboutData = {
    cover: bg,
    title: "من نحن",
    description:
      "في مجموعات الهدى، بنوفر لك رعاية طبية متكاملة مع فريق طبي على أعلى مستوى من الخبرة، وعيادات مجهزة بأحدث الأجهزة لضمان أفضل خدمة. بين الخبرة والتطور، هنضمن لك ولعيلتك أعلى معايير الرعاية الصحية، صحتك أمانة في إيدينا.",
    image: drAhmed,
    slogan: "خليك دايما مع الهدي جروب",
    docs: [
      {
        title: "التطور المستمر",
        description: "عشان نقدر نقدم لكم افضل خدمات فا ضرورى التطور",
      },
      {
        title: " التواجد فى كل مكان",
        description:
          " بما اننا قدرنا نفتح فرعنا فى محافظات كتير هنكون معاكم ديما",
      },
      {
        title: " راحه العميل",
        description: "من حيث العنايه الكامله بالمريض وحتى ادق التفاصيل",
      },
    ],
  };

  return (
    <div>
      <div className="relative h-[60vh] w-full shadow-lg">
        <Image
          src={aboutData.cover}
          className="inset-0 object-cover"
          alt="image"
          fill
        />
      </div>
      <div className="container py-10">
        {/* first row */}
        <div className="flex items-center flex-row justify-between gap-5 pt-10 pb-20 w-full">
          {/* paragraph */}
          <div className="flex flex-wrap relative flex-col md:w-1/2 gap-4 font-almarai">
            <p className="text-4xl "> {aboutData.title}</p>
            <p className="text-xl">{aboutData.description}</p>
          </div>
          {/* photo */}
          <div className="w-1/3 left-5 aspect-square h-fit hidden md:block relative">
            <Image
              src={aboutData.image}
              alt="image"
              fill
              className="z-10 shadow-xl"
            />
            <div className="absolute shadow-xl z-0 m-5 box-border bg-[#3D7FBFC2] w-full aspect-square right-0 bottom-0"></div>
          </div>
        </div>
        {/* second row */}
        <div className="flex flex-row gap-4 items-center">
          <div className="w-0 h-0 border-t-[15px] border-t-transparent border-r-[20px] border-[#3D7FBF] border-b-[15px] border-b-transparent "></div>
          <div className="flex text-4xl font-almarai">أهدافنا</div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-10 gap-5 w-full">
          {aboutData.docs.map((item, index) => (
            <Card
              key={index}
              isIcon={false}
              title={item.title}
              description={item.description}
              icon=""
            />
          ))}
        </div>
        {/* third row */}
        <VideoSection />
        {/* fourth row */}
        <div>
          <div className="text-4xl md:text-5xl pb-10 text-[#3D7FBF] text-center md-text-start ">
            {aboutData.slogan}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
