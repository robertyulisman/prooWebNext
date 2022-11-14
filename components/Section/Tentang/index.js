import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useRouter } from "next/router";
import Person from "../../../public/asset/person.png";
import PersonFemale from "../../../public/asset/personRight.png";
import Peta from "../../../public/asset/peta.png";

const Tentang = () => {
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  return (
    <section
      id="tentang"
      className="px-4 lg:pl-20 pt-0 lg:pt-[100px] h-full md:h-[100vh] flex flex-col md:flex-row"
    >
      <div className="md:w-[400px] lg:w-[400px] hidden md:flex items-end">
        <Image
          className=" bottom-0"
          src={Person}
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div className="md:w-[400px] lg:w-[400px] flex md:hidden items-end justify-end">
        <Image
          className=" bottom-0"
          src={PersonFemale}
          alt="Picture of the author"
          width={400}
          height={300}
        />
      </div>
      <div className="w-full lg:w-[900px]">
        <Fade left>
          <h1 className="font-bold text-[24px] md:text-[28px] lg:text-[28px]">
            Proo -{" "}
            {translate(
              "Kursus Offline yang Profesional",
              "Profesional For Offline Course"
            )}
          </h1>
        </Fade>

        <Fade left delay={400}>
          <p className="mt-4 text-[18px] text-slate-600 ">
            {translate(
              "Kami Adalah Perusahaan yang bergerak dibidang Pendidikan.",
              "We are a company engaged in education."
            )}
          </p>
          <p className="mt-4 text-[18px] text-slate-600 ">
            {translate(
              "Berusaha mempertemukan antara",
              "Trying to reconcile between."
            )}
            <span className="font-bold text-slate-900">
              {" "}
              {translate("Murid", "Student")}{" "}
            </span>
            {translate(
              "yang membutuhkan Guru Private - dengan",
              "who need a Private Teacher - with Best"
            )}
            <span className="font-bold text-slate-900">
              {" "}
              {translate("Guru Private", "Private teacher")}
            </span>{" "}
            {translate("Terbaik.", "")}
          </p>
          <p className="mt-4 text-[18px] text-slate-600 ">
            {translate(
              "Terfokus kepada Pembelajaran Offline yang menjadi Ruh kami.",
              "Focused on Offline Learning which is our Spirit."
            )}
          </p>
          <p className="mt-4 text-[18px] text-slate-600 ">
            {translate(
              "Dengan Visi Membangun Negri melalui Pendidikan yang Merata & Mudah didapatkan.",
              "With the Vision of Building the Nation through Equitable & Easy-to-Get Education."
            )}
          </p>
        </Fade>

        <div className="flex gap-2 mt-10 justify-between">
          <Fade bottom>
            <div className="py-2 px-4 bg-primary rounded-2xl flex flex-col items-center flex-1">
              <span className="text-slate-900 text-[24px] font-bold">10</span>
              <span className="text-slate-900">
                {locale === "id-ID" ? "Kota" : "Cities"}
              </span>
            </div>
          </Fade>
          <Fade bottom delay={200}>
            <div className="py-2 px-4 bg-primary rounded-2xl flex flex-col items-center flex-1">
              <span className="text-slate-900 text-[24px] font-bold">
                2.210
              </span>
              <span className="text-slate-900">
                {locale === "id-ID" ? "Kursus" : "Private"}
              </span>
            </div>
          </Fade>
          <Fade bottom delay={400}>
            <div className="py-2 px-4 bg-primary rounded-2xl flex flex-col items-center flex-1">
              <span className="text-slate-900 text-[24px] font-bold">400</span>
              <span className="text-slate-900">
                {locale === "id-ID" ? "Guru" : "Teacher"}
              </span>
            </div>
          </Fade>
          <Fade bottom delay={600}>
            <div className="py-2 px-4 bg-primary rounded-2xl flex flex-col items-center flex-1">
              <span className="text-slate-900 text-[24px] font-bold">
                1.050
              </span>
              <span className="text-slate-900">
                {locale === "id-ID" ? "Murid" : "Student"}
              </span>
            </div>
          </Fade>
        </div>
      </div>
      <div className="hidden lg:flex items-center">
        <Image
          // className="absolute top-[200px]"
          src={Peta}
          alt="Picture of the author"
          width={600}
          style={{
            objectFit: "contain",
            position: "relative",

            opacity: "40%",
          }}
          // height={300}
        />
      </div>
    </section>
  );
};

export default Tentang;
