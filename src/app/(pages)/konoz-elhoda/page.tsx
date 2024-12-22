// --------- Branch page (Frame #2 in Figma, EX: Konoz El Hoda) --------- //
import React from "react";
import Container from "@/components/sections/branchPage/Container";

import cover from "public/test/branchcover.png";
import logo from "public/home/logo1.png";
import icon from "public/vectors/specalities/icon1.png";

const page = async () => {
  const data = {
    cover,
    logo,
    title: " كنوز الهدي",
    description:
      "مجمع عيادات الهدي التخصصية يقدم رعاية طبية شاملة بأعلى المعايير، مع فريق طبي متخصص في مختلف المجالات، منها العظام، المخ والأعصاب، الطب النفسي، الأطفال، الجلدية والتجميل، الباطنة، القلب، النساء والتوليد، وغيرها، لتلبية جميع احتياجاتك الصحية تحت سقف واحد بأحدث التقنيات الطبية.",
    adresses: [
      "العاشر من رمضان: مول سينكو بجوار موقف الأردنية - اعلي تكنو سكان",
    ],
    contact: ["01066088070"],
    specialities: [
      {
        title: "أمراض و جراحة العظام",
        icon,
      },
      {
        title: "المخ والاعصاب",
        icon,
      },
      {
        title: "الطب النفسي والقسطرة المخية",
        icon,
      },
      {
        title: "الأطفال وحديثي الولادة",
        icon,
      },
      {
        title: "الجلدية والتجميل والليزر",
        icon,
      },
      {
        title: "الجراحة العامة والأطفال",
        icon,
      },
      {
        title: "الباطنة والجهاز الهضمي والكبد والمناظير",
        icon,
      },
      {
        title: "جراحات السمنة والسمنة الموضعية",
        icon,
      },
      {
        title: "القلب  والأوعية الدموية ",
        icon,
      },
      {
        title: "النساء والتوليد وتأخر الانجاب",
        icon,
      },
      {
        title: "الرمد وجراحة العيون والليزر",
        icon,
      },
      {
        title: "الأنف والأذن والحنجرة",
        icon,
      },
      {
        title: "المسالك البولية وامراض الذكورة",
        icon,
      },
      {
        title: "الروماتيزم والمناعة",
        icon,
      },
      {
        title: " الاشعة وموجات صوتية تشخيصة ورسم عصب",
        icon,
      },
    ],
  };

  return <Container branchData={data} />;
};

export default page;
