import React from "react";
import Image from "next/image";
import Logo from "../../../public/asset/logoPutih.png";

const Footer = () => {
  return (
    <section className="bg-gradient-to-l from-slate-800 to-slate-900">
      <div className="py-10 max-w-[1420px] m-auto px-4 grid grid-cols-3">
        <div>
          <div className="w-[80px] md:w-[120px] h-auto hover:cursor-pointer">
            <Image
              title="Proo Private Ngaji"
              src={Logo}
              alt="Picture of the author"
              width={120}
              height={500}
              style={{ color: "white" }}
            />
          </div>
          <p className="text-white mt-4 w-[80%]">
            Platform Penyedia Guru Private Offline Terbaik Di Indonesia
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="text-white hover:underline ease-in-out duration-300 cursor-pointer">
            Tentang Kami
          </p>
          <p className="text-white hover:underline ease-in-out duration-300 cursor-pointer">
            Pendaftaran Guru
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
