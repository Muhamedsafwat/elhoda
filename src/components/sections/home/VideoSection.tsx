import React from "react";

import RevealAnimation from "@/components/RevealAnimation";

const Video = async () => {
  //fetch data from payload cms
  const data = {
    description:
      "تقدم الهدي جروب مجموعة متنوعة من الخدمات الطبية تشمل العلاج الطبيعي للعضلات والمفاصل، إعادة التأهيل بعد الإصابات والعمليات الجراحية، والرعاية المنزلية للأفراد من جميع الأعمار. وتركز المؤسسة على تلبية احتياجات المرضى بطرق مبتكرة وفعّالة، مع الحرص على توفير بيئة مريحة وآمنة تضمن راحة المرضى ورضاهم.",
    YouTubeLink:
      "https://www.youtube.com/embed/kD_ovC4ltoQ?si=beic13QCOTTQAIeL",
  };

  return (
    <div className="bg-white py-5">
      <section className="container flex flex-col md:flex-row items-center md:my-24 justify-between gap-16">
        <div className="md:w-1/2">
          <RevealAnimation fromY={-50}>
            <h2 className="text-3xl font-bold text-primary-dark mb-5">
              نظرة عن المركز
            </h2>
          </RevealAnimation>
          <RevealAnimation fromY={50}>
            <p>{data.description}</p>
          </RevealAnimation>
        </div>
        <div className="md:w-1/2 w-full h-96">
          <RevealAnimation fromX={-50}>
            <iframe
              className="w-full h-96 rounded-lg shadow-2xl"
              src={data.YouTubeLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </RevealAnimation>
        </div>
      </section>
    </div>
  );
};

export default Video;
