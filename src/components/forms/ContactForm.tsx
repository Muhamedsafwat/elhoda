"use client";

import { User, Phone, Mail, Stethoscope, SendHorizontal } from "lucide-react";
import React, { useState, useEffect } from "react";

interface ContactFormProps {
  isMessage: boolean;
  buttonText: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ isMessage, buttonText }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [clinic, setClinic] = useState("إِختر العيادة");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState("");

  const [isValid, setIsValid] = useState(false);

  const clinics = [
    { id: 1, name: "clinic 1" },
    { id: 2, name: "clinic 2" },
    { id: 3, name: "clinic 3" },
  ];

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setClinic(event.target.value);
  };

  useEffect(() => {
    if (name && phone && email && clinic && message) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, phone, email, clinic, message]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (isValid) {
      alert("Form submitted successfully!");
      // Clear form fields
      setName("");
      setPhone("");
      setEmail("");
      setClinic("");
      setMessage("");
    }
  };

  return (
    <div className="flex justify-center ">
      <form
        onSubmit={handleSubmit}
        className=" mt-8 w-full flex-col text-lg bg-transparent [&>input]:rounded-lg [&>input]:border-[1px] [&>input]:border-blue-600  [&>input]:bg-opacity-20 [&>input]:px-4 [&>input]:py-2"
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col md:flex-row justify-between pb-[5%]">
            <div className="relative md:m-0 mb-[5%] flex flex-row items-center h-10 md:w-[48%] ">
              <input
                className="form-border w-full pr-10 bg-u"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="الاسم"
                required
              />
              <User className="form-icon" />
            </div>
            <div className="relative h-10 md:w-[48%] flex flex-row items-center ">
              <input
                dir="rtl"
                className="form-border w-full pr-10 bg-u"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="رقم الهاتف"
                required
              />
              <Phone className="form-icon" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between pb-5">
            <div className="relative md:m-0 mb-[5%] flex flex-row items-center h-10 md:w-[48%] ">
              <input
                className="form-border w-full pr-10 bg-u"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="البريد الإِلكتروني"
                required
              />
              <Mail className="form-icon" />
            </div>
            <div className="relative h-full md:m-0 mb-[5%] flex flex-row items-center md:w-[48%] ">
              <select
                className="form-border h-full w-full pr-10 bg-u"
                value={clinic}
                onChange={handleChange}
                required
              >
                <option value="إِختر العيادة" disabled hidden>
                  إِختر العيادة
                </option>
                {clinics.map((clinic) => (
                  <option key={clinic.id} value={clinic.name}>
                    {clinic.name}
                  </option>
                ))}
              </select>
              <Stethoscope className="form-icon" />
            </div>
          </div>
        </div>

        {isMessage ? (
          <div className="pt-5 pb-5">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="الرسالة ......"
              className="w-full resize-none form-border h-28 pr-3"
            />
          </div>
        ) : (
          <div className=" flex justify-center">
            <div className="relative flex w-full md:w-[48%]  pb-10">
              <label className="absolute right-10 pt-1 text-gray-400 z-10">
                التاريخ
              </label>
              <input
                dir="rtl"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-1/2 resize-none form-border h-10 pr-3 "
                required
              />
            </div>
          </div>
        )}

        <div className="flex justify-center flex-row ">
          <div className="flex align-middle justify-center rounded-lg btn-solid gap-4 w-full md:w-1/3	">
            {isMessage && (
              <SendHorizontal className="pt-2 h-full cursor-pointer" />
            )}
            <button type="submit" disabled={!isValid}>
              {buttonText}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
