// --------- Branch page (Frame #2 in Figma, EX: Konoz El Hoda) --------- //
import React from "react";

import Header from "@/components/sections/branchPage/Header";
import Contact from "@/components/sections/branchPage/Contact";
import Addresses from "@/components/sections/branchPage/Adresses";
import Specialities from "@/components/sections/branchPage/Specialities";
import Description from "./Description";
import { Speciality } from "@/types/Speciality";
import { StaticImageData } from "next/image";

interface BranchData {
  specialities: Speciality[];
  logo: StaticImageData;
  cover: StaticImageData;
  title: string;
  description: string;
  adresses: string[];
  contact: string[];
}

interface Props {
  branchData: BranchData;
}

const Container = async ({ branchData }: Props) => {
  return (
    <>
      <Header coverImgUrl={branchData.cover} logoUrl={branchData.logo} />
      <Description
        title={branchData.title}
        description={branchData.description}
      />
      <Specialities specalities={branchData.specialities} />
      <Addresses addresses={branchData.adresses || []} />
      <Contact logo={branchData.logo} numbers={branchData.contact} />
    </>
  );
};

export default Container;
