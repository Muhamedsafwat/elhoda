// --------- Branch page (Frame #2 in Figma, EX: Konoz El Hoda) --------- //
import React from "react";
import Container from "@/components/sections/branchPage/Container";

import cover from "public/test/branchcover.png";
import logo from "public/home/logo3.png";
import icon from "public/vectors/specalities/icon1.png";

const page = async () => {
  const data = {
    cover,
    logo,
    title: " مؤسسة نواه",
    description:
      "مؤسسة نواة لخدمات كبار السن وذوي الاصابات الحركية تقدم رعاية منزلية متكاملة مصممة خصيصًا لتلبية احتياجات كبار السن وذوي الاصابات الحركية. تشمل خدماتنا التمريض المنزلي، العلاج الطبيعي، الفحوصات والتحاليل الطبية، الأشعة المنزلية، بالإضافة إلى توفير الجبائر والأطراف الصناعية. نعمل على توفير رعاية صحية شاملة تضمن الراحة والاهتمام داخل منزلكم.",
    adresses: ["الزقازيق: طريق موقف المنصورة - ٣ ش النجار - برج المهندس"],
    contact: [
      "فرع الزقازيق : 01092811136",
      "او من خلال مركز الهدي: 01010218349",
    ],
    specialities: [
      {
        title: "رعاية منزلية متكاملة",
        icon,
      },
      {
        title: "خدمات تمريضية وطبية منزلية",
        icon,
      },
      {
        title: "تحاليل وأشعة منزلية",
        icon,
      },
      {
        title: "جبائر وأطراف صناعية",
        icon,
      },
      {
        title: "علاج طبيعي منزلي",
        icon,
      },
      {
        title: "أحدث اجهزة العلاج والتأهيل",
        icon,
      },
    ],
  };

  return <Container branchData={data} />;
};

export default page;
