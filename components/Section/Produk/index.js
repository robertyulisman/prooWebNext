import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useRouter } from "next/router";
import { TextHeading } from "../../Text";
import { MdVerified } from "react-icons/md";
import { motion } from "framer-motion";

const Produk = () => {
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  const [paketSelected, setPaketSelected] = React.useState("private");
  const [pelajaranSelected, setPelajaranSelected] = React.useState(
    "Iqra + Bimbel (Req)"
  );

  const dataPrivate = [
    {
      _id: 1,
      durasi: "1 Bulan",
      pertemuan: "8 Pertemuan",
      service: [
        "1 Guru 1 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Bimbel (Req)",
      ],
      harga: 600,
      isPopuler: false,
    },
    {
      _id: 2,
      durasi: "1 Bulan",
      pertemuan: "10 Pertemuan",
      service: [
        "1 Guru 1 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Bimbel (Req)",
      ],
      harga: 649,
      isPopuler: true,
    },
    {
      _id: 3,
      durasi: "1 Bulan",
      pertemuan: "15 Pertemuan",
      service: [
        "1 Guru 1 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Ngaji (Req)",
      ],
      harga: 825,
      isPopuler: false,
    },
  ];
  const dataBerdua = [
    {
      _id: 1,
      durasi: "1 Bulan",
      pertemuan: "8 Pertemuan",
      service: [
        "1 Guru 2 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Bimbel (Req)",
      ],
      harga: 800,
      isPopuler: false,
    },
    {
      _id: 2,
      durasi: "1 Bulan",
      pertemuan: "10 Pertemuan",
      service: [
        "1 Guru 2 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Bimbel (Req)",
      ],
      harga: 849,
      isPopuler: true,
    },
    {
      _id: 3,
      durasi: "1 Bulan",
      pertemuan: "15 Pertemuan",
      service: [
        "1 Guru 2 Murid",
        "1 Jam Pertemuan",
        "Jaminan Keamanan",
        "Gratis Ngaji (Req)",
      ],
      harga: 1125,
      isPopuler: false,
    },
  ];

  const dataPelajaran = [
    {
      _id: 1,
      nama: "Iqra + Bimbel (Req)",
    },
    {
      _id: 2,
      nama: "Al-Qur an + Bimbel (Req)",
    },
    {
      _id: 3,
      nama: "Calistung",
    },
    {
      _id: 4,
      nama: "Temenin Belajar",
    },
    {
      _id: 5,
      nama: "B.Inggris + Bimbel (Req)",
    },
    {
      _id: 6,
      nama: "B.Arab + Bimbel (Req)",
    },
  ];

  const [data, setData] = React.useState(dataPrivate);

  const handleChangePaket = (item) => {
    setPelajaranSelected(item.nama);
    setPaketSelected("private");
    setData([]);
    setTimeout(() => {
      setData(dataPrivate);
    }, 100);
  };

  return (
    <section
      id="produk"
      className="px-4 lg:pl-20 pt-0 lg:pt-[100px] md:h-[100vh] flex flex-col md:flex-row bg-gradient-to-r from-green-500 to-green-600"
    >
      <div className="w-full lg:w-[40%] mt-10 lg:mt-0 md:pl-10 flex flex-col items-center justify-start">
        <div className="mb-5">
          <Fade left>
            <TextHeading
              className="text-slate-900 mt-10 leading-[40px] lg:leading-[50px]"
              title={translate(
                "Semua Guru Telah Lulus Uji Kompetensi",
                "All Teachers Have Passed the Competency Test"
              )}
            />
          </Fade>
          <Fade left>
            <h2 className="mt-4 lg:mt-8 text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] text-slate-900 ">
              {translate(
                "Tidak ada tambahan Pembayaran di luar Proo",
                "Tidak ada tambahan Pembayaran di luar Proo"
              )}{" "}
              <span className="font-bold text-[20px] sm:text-[24px] md:text-[24px] lg:text-[24px] text-slate-900">
                {translate(
                  "+ Gratis Biaya Pendaftaran",
                  "+ Gratis Biaya Pendaftaran"
                )}
              </span>
            </h2>
          </Fade>
        </div>
        <Fade bottom>
          <div className="flex gap-2 w-full flex-wrap">
            {dataPelajaran.map((item) => (
              <button
                key={item._id}
                onClick={() => handleChangePaket(item)}
                className={`font-bold ${
                  pelajaranSelected === item.nama
                    ? "bg-slate-900 text-white"
                    : "bg-white"
                } px-4 py-2 rounded-3xl shadow-lg hover:scale-105 ease-in-out duration-300`}
              >
                {item.nama}
              </button>
            ))}
          </div>
        </Fade>
        <Fade bottom>
          <div className="w-full my-4">
            <p className="text-[18px]">
              <span className="font-bold">(Req)</span> Bunda bisa{" "}
              <span className="font-bold">Request</span>, Pelajaran apa sebagai
              Bonusnya
            </p>
          </div>
        </Fade>
      </div>
      <div className="w-full lg:w-[60%] mt-10 lg:mt-0 md:pl-10 flex flex-col items-center  min-h-[500px] ">
        <div className="flex gap-6 mt-0 lg:mt-10 ">
          <button
            onClick={() => {
              setPaketSelected("private");
              setData([]);
              setTimeout(() => {
                setData(dataPrivate);
              }, 100);
            }}
            className={`font-bold  ${
              paketSelected === "private"
                ? "bg-slate-900 text-white scale-125"
                : "bg-white"
            } px-4 py-2 rounded-3xl shadow-lg hover:scale-105 ease-in-out duration-300 cursor-pointer text-[14px]`}
          >
            Paket Private
          </button>
          <button
            onClick={() => {
              setPaketSelected("berdua");

              setData([]);
              setTimeout(() => {
                setData(dataBerdua);
              }, 100);
            }}
            className={`font-bold  ${
              paketSelected === "berdua"
                ? "bg-slate-900 text-white scale-125"
                : "bg-white"
            } px-4 py-2 rounded-3xl shadow-lg hover:scale-105 ease-in-out duration-300 cursor-pointer text-[14px]`}
          >
            Paket Berdua
          </button>
        </div>
        <div className="flex flex-col gap-4 md:gap-5 my-10">
          {data.map((item, index) => (
            <Fade key={item._id} bottom delay={index * 100}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className={`${
                  item.isPopuler ? "bg-slate-900 text-white -mx-4" : "bg-white"
                } rounded-2xl shadow-xl border-l-[4px] border-l-sky-600 p-3 hover:cursor-pointer`}
              >
                <h2 className="text-[21px]">
                  {item.durasi}{" "}
                  <span className="font-bold">({item.pertemuan})</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-4">
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {item.service.map((i) => (
                      <div className="flex gap-2" key={i}>
                        <MdVerified className="text-green-500 text-[22px]" />
                        <span>{i}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    Rp
                    <span className="font-bold text-[52px]">{item.harga}</span>K
                  </p>
                </div>
              </motion.div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Produk;
