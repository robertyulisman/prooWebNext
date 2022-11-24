import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useRouter } from "next/router";
import Person from "../../../public/asset/illustration1.png";
import Playstore from "../../../public/asset/playstore.png";
import Appstore from "../../../public/asset/appstore.png";
import { BsFillPatchCheckFill } from "react-icons/bs";
import StoreLogo from "../../StoreLogo";
import { TextHeading } from "../../Text";
import { motion } from "framer-motion";

const Kontak = () => {
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  const [form, setForm] = React.useState({
    nama: "",
    email: "",
    pesan: "",
  });

  const handleChangeText = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmitMessage = () => {
    const whatsappNumber = "62895617957291";
    const message = `
    Nama : ${form.nama}
    Email : ${form.email}
    Pesan : ${form.pesan}`;

    window.open(
      `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${message}`,
      "_blank"
    );
    setForm({
      ...form,
      nama: "",
      email: "",
      pesan: "",
    });
  };

  return (
    <section
      id="kontak"
      className="  bg-gradient-to-r from-green-200 to-green-300"
    >
      <div className="max-w-[1420px] m-auto px-4 lg:pl-20 pt-0 lg:pt-[100px]  md:h-[100vh] flex flex-col md:flex-row">
        <div className="w-full lg:w-[50%] mt-10 lg:mt-0">
          <Fade left>
            <TextHeading
              className="mt-10"
              title={translate("Hubungi Kami", "Contact Us")}
            />
          </Fade>
          <Fade left>
            <h3 className="mt-4 lg:mt-10 text-[18px] sm:text-[20px] md:text-[20px] lg:text-[20px] text-slate-900">
              {translate("Kantor Pusat", "Central Office")}
            </h3>
          </Fade>
          <Fade left>
            <h3 className="font-bold mt-0 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[28px] text-slate-900">
              PT. ASIA PROO TEKNOLOGI
            </h3>
          </Fade>
          <Fade bottom>
            <p className="text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] text-slate-900">
              Bengkong Nusantara 2 Blok D No. 8, Batam - Indonesia
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-[18px] text-slate-900 mt-5">
              proo.official20@gmail.com
            </p>
          </Fade>
          <Fade bottom>
            <p className="text-[18px] text-slate-900 font-bold ">
              www.proo.co.id
            </p>
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

        <div className="w-full lg:w-[50%] flex">
          <div className="flex max-h-[500px] flex-col bg-gradient-to-b from-white to-slate-100 rounded-2xl md:rounded-[50px]  lg:mx-14 mb-14 mt-8 w-full p-10 shadow-2xl">
            <span className="mt-4 font-bold">Nama</span>
            <input
              name="nama"
              className="shadow-xl rounded-lg mt-2 h-[50px] px-3 py-2 outline-none"
              type="text"
              placeholder="Masukkan Nama Kamu"
              onChange={handleChangeText}
              value={form.nama}
            />
            <span className="mt-4 font-bold">Email</span>
            <input
              name="email"
              className="shadow-xl rounded-lg mt-2 h-[50px] px-3 py-2 outline-none"
              type="text"
              placeholder="masukkan Email Kamu"
              onChange={handleChangeText}
              value={form.email}
            />
            <span className="mt-4 font-bold">Pesan</span>
            <textarea
              className="shadow-xl rounded-lg mt-2 p-3 outline-none"
              name="pesan"
              id=""
              cols="30"
              rows="4"
              onChange={handleChangeText}
              value={form.pesan}
              placeholder="Tulis Pesan Kamu"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmitMessage}
              className={`mt-6 self-end  ${
                locale === "id-ID" ? "w-[150px] " : " w-[100px] sm:w-[220px] "
              } py-1  bg-primary rounded-md text-slate-100 font-bold`}
            >
              {translate("Kirim Pesan", "Sent Message")}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
