import React from "react";
import Image, { StaticImageData } from "next/image";

const Header = ({
  coverImgUrl,
  logoUrl,
}: {
  coverImgUrl: StaticImageData;
  logoUrl: StaticImageData;
}) => {
  return (
    <section>
      {/*cover*/}
      <div className="w-screen h-80 relative mt-16">
        <Image
          src={coverImgUrl}
          alt="branch cover"
          fill
          className="object-cover"
        />
      </div>
      {/*logo*/}
      <div className="mx-auto aspect-square rounded-full overflow-hidden w-60 md:w-72 relative top-[-50%] translate-y-[-50%] bg-white shadow-xl p-5 flex items-center justify-center">
        <Image
          src={logoUrl}
          fill
          alt="logo"
          className="object-contain w-[80%] h-[80%]"
        />
      </div>
    </section>
  );
};

export default Header;
