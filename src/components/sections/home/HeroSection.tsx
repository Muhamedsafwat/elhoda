import React from "react";
import Image from "next/image";

//import icons
import { Phone } from "lucide-react";
//components
import RevealAnimation from "@/components/RevealAnimation.jsx";
import hero from "public/home/hero.png";
import Link from "next/link";

const Hero = async () => {
  const heroData = {
    title: "مجموعة الهدي الطبية",
    description:
      "الهدي جروب للخدمات الطبية والعلاج الطبيعي تقدم رعاية صحية شاملة وعلاج طبيعي متميز، عبر فريق متخصص من الأطباء والمعالجين. توفر خدمات علاجية متنوعة تشمل إعادة التأهيل والعلاج العضلي والمفصلي، مع التركيز على تلبية احتياجات المرضى بطرق مبتكرة وفعّالة لضمان راحتهم ورضاهم.",
    image: hero,
  };
  return (
    <section className="flex items-center relative md:mt-16">
      {/* content */}
      <div className="flex flex-col container absolute text-white md:text-gray-800  z-10 left-1/2 translate-x-[-50%] justify-center items-center md:items-start text-center md:text-start">
        <RevealAnimation fromY={-50}>
          <h1 className="text-4xl font-bold mb-8">{heroData.title}</h1>
        </RevealAnimation>
        <RevealAnimation fromY={0}>
          <p className="text-xl font-medium max-w-[450px]">
            {heroData.description}
          </p>
        </RevealAnimation>
        <RevealAnimation fromY={50}>
          <div className="flex items-center gap-5 mt-5">
            <button>
              <Link
                href="/contact"
                className="btn-solid flex items-center gap-2"
              >
                <p>تواصل معنا</p>
                <Phone />
              </Link>
            </button>
          </div>
        </RevealAnimation>
      </div>
      {/* image */}
      <div className="w-full md:w-[60%] relative mr-auto h-[90vh] overflow-hidden ">
        <Image
          src={heroData.image}
          fill
          alt="Hero image"
          className="md:skew-x-[-12deg] md:translate-x-[-4rem] md:brightness-100 brightness-50 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
