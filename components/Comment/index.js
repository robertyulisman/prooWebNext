import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Comment1 = () => {
  const { locale } = useRouter();
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 50 }}
      className="hidden xl:flex flex-col items-end"
    >
      <div className="bg-white shadow-lg py-2 px-4  w-[300px] border-[1px] border-slate-200 rounded-lg flex flex-col">
        <p>
          {locale === "id-ID" ? "Butuh" : "Need"}{" "}
          <span className="font-bold">
            {locale === "id-ID"
              ? "Guru Private Offline"
              : "Offline Private Teacher"}
          </span>{" "}
          ?
        </p>
        <p>
          {locale === "id-ID" ? "Ingat Proo yaa.." : "Just Remember Proo.."}
        </p>
      </div>
      <div className="w-[20px] h-[20px] rounded-full mt-2 bg-white shadow-lg border-[1px] border-slate-200" />
    </motion.div>
  );
};

export const Comment2 = () => {
  const { locale } = useRouter();
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 50 }}
      className="hidden xl:flex flex-col items-end mt-8"
    >
      <div className="bg-white shadow-lg py-2 px-4  w-[320px] border-[1px] border-slate-200 rounded-lg flex flex-col">
        <p>
          {locale === "id-ID" ? "Hadir di" : "Present in"}{" "}
          <span className="font-bold">
            {" "}
            {locale === "id-ID" ? "50 kota" : "50 cities"} - Proo
          </span>
        </p>
        <p className="font-bold">
          {" "}
          {locale === "id-ID"
            ? "Kursus Online yang Profesional"
            : "Proffesional for Online course"}
        </p>
      </div>
      <div className="w-[20px] h-[20px] rounded-full mt-2 bg-white shadow-lg border-[1px] border-slate-200" />
    </motion.div>
  );
};
