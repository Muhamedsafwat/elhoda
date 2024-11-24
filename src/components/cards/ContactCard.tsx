import { Phone } from "lucide-react";
import React from "react";

const ContactCard = () => {
  return (
    <div className="flex flex-row gradient-l h-4/5 rounded-md">
      <div className=" font-almarai flex flex-col justify-center gap-4 text-center text-lg font-bold leading-tight tracking-tight text-white">
        <p className="text-2xl">معلومات التواصل</p>
        <p className="text-sm px-2">
          لا تتردد بالاتصال بفريق العمل إذا كان لديك أي استفسار طبي.
        </p>
        <span className="py-10" />
        <div className="flex justify-center">
          <Phone />
        </div>
        <p className="text-2xl">أرقام الحجز والتواصل</p>
        <p className="text-md">0554366622 </p>
        <p className="">01066088070</p>
      </div>
    </div>
  );
};
export default ContactCard;
