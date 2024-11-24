import React from "react";

import Image from "next/image";
import bg from "public/backgrounds/blobsBG.svg";
import logo from "public/vectors/elHodaLogo 4.svg";
import RevealAnimation from "@/components/RevealAnimation";

const WhyChooseUs = () => {
  return (
    <RevealAnimation fromX={-50}>
      <section className="flex justify-end">
        <div className="md:w-2/3 rounded-tr-[2rem] md:rounded-tr-[10rem] overflow-hidden shadow-2xl">
          <div className="gradient-r text-white p-8 md:p-20 flex flex-col relative gap-5 right-0 top-0">
            <Image
              src={bg}
              fill
              className="object-cover opacity-50"
              alt="texture"
            ></Image>
            <div className="flex items-center gap-20">
              <div>
                <h2 className="text-2xl mb-5">لماذا تختار مركز الهدي ؟</h2>
                <p>
                  نقدم رعاية صحية شاملة بجودة عالية، بفضل فريق متخصص من الأطباء
                  والمعالجين ذوي الخبرة. نحرص على تلبية احتياجات كل مريض من خلال
                  خدمات علاجية متكاملة تشمل العلاج العضلي والمفصلي وإعادة
                  التأهيل، مع التركيز على راحتكم ورضاكم.
                </p>
              </div>
              <Image
                src={logo}
                width={150}
                height={150}
                alt="El Hoda group logo"
                className="hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>
    </RevealAnimation>
  );
};

export default WhyChooseUs;
