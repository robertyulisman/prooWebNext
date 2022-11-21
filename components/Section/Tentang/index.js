import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useRouter } from "next/router";
import Person from "../../../public/asset/women2.png";
import Playstore from "../../../public/asset/playstore.png";
import Appstore from "../../../public/asset/appstore.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import StoreLogo from "../../StoreLogo";
import { TextHeading } from "../../Text";

const Tentang = () => {
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  return (
    <section
      id="tentang"
      className="px-4 lg:pl-20 pt-0 lg:pt-[100px] h-full md:h-[100vh] flex flex-col md:flex-row bg-indigo-300"
    >
      <div className="md:w-[400px] lg:w-[50%] hidden md:flex items-end">
        <Image
          className=" bottom-0"
          src={Person}
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div className="w-full lg:w-[900px] mt-10 lg:mt-0 md:pl-10">
        <Fade left>
          <TextHeading
            className="text-white mt-10"
            title={translate("Tentang Kami", "About Us")}
          />
        </Fade>
        <Fade left>
          <h2 className="mt-4 lg:mt-8 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[28px] text-white">
            {translate(
              "Platform Penyedia Guru Private Offline Terbaik Di Indonesia - Lebih Dari 20 Kota",
              "Platform Penyedia Guru Private Offline Terbaik Di Indonesia - Lebih Dari 20 Kota"
            )}
          </h2>
        </Fade>

        <Fade left>
          <div className="flex items-center mt-10 ">
            <BsFillPatchCheckFill className="mr-2 text-white text-[32px]" />
            <p className="text-[18px] text-white ">
              {translate(
                "Jaminan Keamanan dan Refund.",
                "We are a company engaged in education."
              )}
            </p>
          </div>
        </Fade>
        <Fade left delay={100}>
          <div className="flex items-center mt-4 ">
            <BsFillPatchCheckFill className="mr-2 text-white text-[32px]" />
            <p className="text-[18px] text-white ">
              {translate(
                "Guru Telah Lulus Uji Kompetensi.",
                "We are a company engaged in education."
              )}
            </p>
          </div>
        </Fade>
        <Fade left delay={100}>
          <div className="flex items-center mt-4 ">
            <BsFillPatchCheckFill className="mr-2 text-white text-[32px]" />
            <p className="text-[18px] text-white ">
              {translate(
                "Harga Transparan & Terbaik.",
                "We are a company engaged in education."
              )}
            </p>
          </div>
        </Fade>
        <Fade left delay={100}>
          <div className="flex items-center mt-4 ">
            <BsFillPatchCheckFill className="mr-2 text-white text-[32px]" />
            <p className="text-[18px] text-white ">
              {translate(
                "420 Guru + 1.200 Murid.",
                "We are a company engaged in education."
              )}
            </p>
          </div>
        </Fade>
        <StoreLogo />
        {/* <div className="flex my-5">
          <Image
            className=" bottom-0"
            src={Playstore}
            alt="playstore logo"
            width={150}
            height={70}
            style={{ objectFit: "contain" }}
          />
          <Image
            className=" bottom-0"
            src={Appstore}
            alt="appstore logo"
            width={150}
            height={70}
            style={{ objectFit: "contain" }}
          />
        </div> */}
      </div>
    </section>
  );
};

export default Tentang;
