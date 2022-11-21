import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export const Comment1 = () => {
  const { locale } = useRouter();
  return (
    <motion.div
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
      initial={{ opacity: 0, y: 50 }}
      className="hidden xl:flex flex-col items-end absolute top-10 left-5"
    >
      <div className="bg-white shadow-lg py-2 px-4  w-[300px] border-[1px] border-slate-200 rounded-lg flex flex-col">
        <p className="font-bold">
          {locale === "id-ID" ? "Centang Biru" : "Blue Check"} ?
        </p>
        <p>
          {locale === "id-ID"
            ? "Verifikasi Bahwa Guru Telah Teruji & Terverifikasi 100%"
            : "Verify That Teacher Is 100% Tested & Verified"}
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
      className="hidden xl:flex flex-col items-start absolute top-0 lg:top-[0px] right-5 md:w-[200px] lg:w-[250px]"
    >
      <div className="bg-white shadow-lg py-2 px-4  border-[1px] border-slate-200 rounded-lg flex flex-col">
        <p className="font-bold">
          {locale === "id-ID" ? "Jaminan Keamanan" : "Security Guarantee"} ?
        </p>
        <p>
          {locale === "id-ID"
            ? "Semua Guru, sudah melewati Proses, Screening & Interview"
            : "All Teachers have gone through the Process, Screening and Interview"}
        </p>
      </div>
      <div className="w-[20px] h-[20px] rounded-full mt-2 bg-white shadow-lg border-[1px] border-slate-200" />
    </motion.div>
  );
};
