// --------- Branch page (Frame #2 in Figma, EX: Konoz El Hoda) --------- //
import React from "react";
import Container from "@/components/sections/branchPage/Container";

import cover from "public/test/branchcover.png";
import logo from "public/home/nawah.png";
import icon from "public/vectors/specalities/icon1.png";

const page = async () => {
  const data = {
    cover,
    logo,
    title: "  مؤسسة نواه",
    description:
      "كنز الرعاية الطبية في عيادات كنوز الهدي، بنوفر لك رعاية طبية متكاملة مع فريق طبي على أعلى مستوى من الخبرة، وعيادات مجهزة بأحدث الأجهزة لضمان أفضل خدمة. بين الخبرة والتطور، هنضمن لك ولعيلتك أعلى معايير الرعاية الصحية. من الفحص للتشخيص والعلاج",
    adresses: [
      "العاشر من رمضان : منطقه االردنيه - مول سينكو ٢٠٠٠ - أعلى تكنوسكان للأشعه خلف مكتبه الأسكندريه",
    ],
    specialities: [
      {
        title: "أمراض جراحة العظام",
        icon,
      },
      {
        title: "أمراض جراحة العظام",
        icon,
      },
    ],
  };

  return <Container branchData={data} />;
};

export default page;
