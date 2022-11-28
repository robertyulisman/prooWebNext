import React from "react";
import Navbar from "../../components/Navbar";

import Image from "next/image";
import Head from "next/head";
import Router, { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";
import {
  HiLocationMarker,
  HiOutlineBookOpen,
  HiArrowSmLeft,
  HiStar,
} from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";

import { MdVerified } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiUrl } from "../../service/api";
import ReactLoading from "react-loading";
import Modal from "../../components/Modal";
import moment from "moment/moment";
import "moment/locale/id";

const Search = () => {
  const { lesson, city } = useSelector((state) => state.data);
  const { locale, query } = useRouter();

  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  const [dataCity, setDataCity] = React.useState([]);
  const [dataCityFilter, setDataCityFilter] = React.useState([]);
  const [dataGuru, setDataGuru] = React.useState([]);
  const [guruSelected, setGuruSelected] = React.useState(null);
  console.log("guruSelected", guruSelected);

  const [showPelajaran, setShowPelajaran] = React.useState(false);
  const [showLocation, setShowLocation] = React.useState(false);
  const inputRef = React.useRef(null);
  const inputLocationRef = React.useRef(null);
  const [loading, setLoading] = React.useState(true);

  const [pelajaran, setPelajaran] = React.useState(query.pelajaran);
  const [location, setLocation] = React.useState(query.lokasi);

  const [modalOpen, setModalOpen] = React.useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  React.useEffect(() => {
    handleGetGuru();
    setDataCity(city);
    setDataCityFilter(city);
  }, []);

  const handleGetGuru = async () => {
    const { data } = await axios.get(
      `${apiUrl}/api/guru/find_guru?lesson=${pelajaran}&city=${location}`
    );

    setDataGuru(data);
    setLoading(false);
  };

  const handleSubmitSearch = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `${apiUrl}/api/guru/find_guru?lesson=${pelajaran}&city=${location}`
    );

    setDataGuru(data);
    setLoading(false);
  };

  const handleBack = () => {
    Router.push("/");
  };

  const handleOnchangeLocation = (e) => {
    setLocation(e.target.value);
    const dataFilter = dataCityFilter.filter(
      (item) =>
        item.kota.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1
    );

    setDataCity(dataFilter);
  };

  const handleOpenGuruDetail = (item) => {
    console.log("item guru", item);
    setGuruSelected(item);
    open();
  };

  const Paragraf = ({ keyItem, valueItem }) => (
    <div className="flex justify-between py-2">
      <div className="flex-[0.6]">
        <p>{keyItem}</p>
      </div>
      <span className="px-1">:</span>
      <div style={{ whiteSpace: "pre-line" }} className="flex-1">
        <p>{valueItem}</p>
      </div>
    </div>
  );

  const handlePilihGuru = () => {
    const { nama, _id } = guruSelected;
    const noWa = "62895617957291";
    const message = `Hallo Telemarketing Proo,

Saya mau Pesan Private untuk Pelajaran ${pelajaran} di ${location}
dengan Nama Ustadz/ Ustadzah ${nama} dan dengan ID USER ${_id}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=${noWa}&text=${message}`,
      "_blank"
    );
  };

  return (
    <div>
      <Head>
        <title>
          Cari Guru Private Proo untuk Pelajaran {pelajaran} di {location}
        </title>
        <meta
          name="description"
          content="Aplikasi Private Ngaji | Aplikasi Private Offline, Guru Datang kerumah, Jaminan Keamanan dan Guru Tersertifikasi"
        />
      </Head>
      <Navbar back />
      <div className="pt-[70px] px-4 md:px-20 max-w-[900px]  m-auto relative">
        {/* search bar start */}
        <div className="flex mt-[100px] items-center hover:cursor-pointer">
          <div className="bg-white shadow-2xl border-[1px] border-slate-200 py-2 px-2 rounded-xl flex  ">
            <div className="flex w-full">
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="flex items-center"
              >
                <HiOutlineBookOpen
                  size={24}
                  color={showPelajaran ? "#e6a087" : "#0f172a"}
                />
                <input
                  ref={inputRef}
                  onFocus={() => {
                    setShowPelajaran(true);
                    setShowLocation(false);
                  }}
                  onBlur={() =>
                    setTimeout(() => {
                      setShowPelajaran(false);
                    }, 200)
                  }
                  className="w-full md:w-[250px] p-2 focus:outline-none"
                  type="text"
                  value={pelajaran}
                  placeholder={
                    locale === "id-ID"
                      ? "Butuh Guru Apa ?"
                      : "What teacher do you need ?"
                  }
                />
              </motion.div>

              {/* <div className="bg-slate-300 w-[1px] h-full " /> */}
              <motion.div
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -50 }}
                className="flex items-center"
              >
                <HiLocationMarker
                  size={24}
                  color={showLocation ? "#e6a087" : "#0f172a"}
                />
                <input
                  ref={inputLocationRef}
                  onFocus={() => {
                    if (location === "Online") {
                      inputRef.current.focus();
                      setPelajaran("");
                      setLocation("");
                    } else {
                      setShowPelajaran(false);
                      setTimeout(() => {
                        setShowLocation(true);
                      }, 300);
                    }
                  }}
                  onBlur={() =>
                    setTimeout(() => {
                      setShowLocation(false);
                    }, 200)
                  }
                  value={location}
                  onChange={handleOnchangeLocation}
                  className="w-full md:w-[200px] p-2 focus:outline-none"
                  type="text"
                  placeholder={locale === "id-ID" ? "Lokasi" : "Location"}
                />
              </motion.div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmitSearch}
              className={`ml-2 ${
                locale === "id-ID" ? "w-[150px] " : " w-[100px] sm:w-[220px] "
              } py-1  bg-primary rounded-md text-slate-100 font-bold`}
            >
              {locale === "id-ID" ? "Cari Guru " : "Find a Teacher"}
            </motion.button>
          </div>
        </div>

        {/* search bar finish */}
        {/* showLesson start */}
        <AnimatePresence>
          {showPelajaran && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: -20 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white shadow-xl mt-2 rounded-xl border-[1px] md:ml-[0px] border-slate-200 overflow-hidden w-[250px] absolute z-[999]"
            >
              {lesson.map((item, index) => (
                <p
                  onClick={() => {
                    if (item.nama === "Bahasa Mandarin") {
                      setPelajaran(item.nama);
                      setShowPelajaran(false);
                      setTimeout(() => {
                        setLocation("Online");
                      }, 300);
                    } else {
                      setPelajaran(item.nama);
                      setShowPelajaran(false);
                      setTimeout(() => {
                        inputLocationRef.current.focus();
                        setShowLocation(true);
                      }, 300);
                    }

                    Router.replace(
                      {
                        pathname: "/search",
                        query: {
                          pelajaran: item.nama,
                          lokasi:
                            item.nama === "Bahasa Mandarin"
                              ? "Online"
                              : location,
                        },
                      },
                      undefined,
                      {
                        shallow: true,
                      }
                    );
                  }}
                  className="py-2 px-4 hover:cursor-pointer hover:bg-primary hover:text-slate-100 "
                  key={index}
                >
                  {item.nama}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {showLocation && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            className="bg-white shadow-xl mt-2 ml-[150px] md:ml-[300px] rounded-xl border-[1px] border-slate-200  w-[140px] md:w-[250px] absolute max-h-[300px] overflow-scroll scrollbar-hide
            z-[998]"
          >
            {dataCity.map((item, index) => (
              <p
                onClick={() => {
                  setLocation(item.kota);
                  setShowLocation(false);
                  Router.replace(
                    {
                      pathname: "/search",
                      query: {
                        pelajaran: pelajaran,
                        lokasi: item.kota,
                      },
                    },
                    undefined,
                    {
                      shallow: true,
                    }
                  );
                }}
                className="py-2 px-4 hover:cursor-pointer hover:bg-primary hover:text-slate-100"
                key={index}
              >
                {item.kota}
              </p>
            ))}
          </motion.div>
        )}
        {/* showLesson finish */}
      </div>

      {/* show Teacher Here */}
      {loading ? (
        <div className="w-full m-auto flex items-center justify-center mt-[100px]">
          <ReactLoading
            type="spinningBubbles"
            color={"#e6a087"}
            height={70}
            width={70}
          />
        </div>
      ) : (
        <div
          className={`grid ${
            dataGuru.length === 0
              ? "grid-cols-1"
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          } max-w-[900px]  m-auto mt-6 gap-3  `}
        >
          {dataGuru.length > 0 ? (
            dataGuru.map((item) => (
              <div
                key={item._id}
                className="flex flex-col items-center mb-5 hover:-translate-y-1 ease-in-out duration-200"
              >
                <div className="w-[120px] sm:w-[150px]  md:h-[250px] object-cover rounded-xl overflow-hidden">
                  <Image
                    className="hover:scale-[110%] ease-in-out duration-200 hover:cursor-pointer z-[-999]"
                    src={`https://admin.proo.co.id/${item.image}`}
                    alt="Picture of the author"
                    width={200}
                    height={500}
                  />
                </div>

                <div className="flex">
                  <p className="text-center font-bold">{item.nama}</p>
                  {item.isVerified && (
                    <MdVerified className="text-sky-500 text-[24px]" />
                  )}
                </div>

                {/* <div className="flex mb-4">
                  <HiStar size={24} color={"#f59e0b"} />
                  <span className="text-center ml-2">{item.rating}</span>
                </div> */}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleOpenGuruDetail(item)}
                  className="hover:border-b-2 hover:border-b-primary save-button"
                >
                  Lihat Detail
                </motion.button>
              </div>
            ))
          ) : (
            <div className="max-w-[900px] flex items-center justify-center m-auto py-10 flex-col mt-5">
              <span className="text-slate-500 font-bold text-[24px]">
                Belum ada Guru
              </span>
              <span className="text-slate-500">
                untuk Pelajaran {pelajaran} di Kota {location}
              </span>
              <span className="text-slate-500">
                Silahkan cari untuk Pelajaran yang lain atau Kota yang berbeda
              </span>
            </div>
          )}
        </div>
      )}

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            handleClose={close}
            content={
              <div className="w-[95%] h-[95vh] lg:w-[700px] bg-white mx-auto p-5 my-4 rounded-md relative overflow-scroll scrollbar-hide">
                <div className="mb-[50px]">
                  <Image
                    className="m-auto rounded-lg"
                    src={`https://admin.proo.co.id/${guruSelected?.image}`}
                    alt="Picture of the author"
                    width={100}
                    height={300}
                  />
                  <Paragraf keyItem="Nama" valueItem={guruSelected?.nama} />
                  {/* <Paragraf
                    keyItem="TTL"
                    valueItem={`${guruSelected?.tempatLahir}, ${guruSelected?.tanggalLahir}`}
                  /> */}
                  {/* <Paragraf
                    keyItem="email"
                    valueItem={`${guruSelected?.email.toLowerCase()}`}
                  /> */}
                  <Paragraf
                    keyItem="Kelurahan"
                    valueItem={`${guruSelected?.kelurahan}`}
                  />
                  {/* <Paragraf
                    keyItem="Kabupaten / Kota"
                    valueItem={`${guruSelected?.kabupaten_kota}`}
                  /> */}
                  {/* <Paragraf
                    keyItem="Provinsi"
                    valueItem={`${guruSelected?.provinsi}`}
                  /> */}
                  <Paragraf
                    keyItem="Pendidikan Terakhir"
                    valueItem={`${guruSelected?.pendidikanTerakhir}`}
                  />
                  <Paragraf
                    keyItem="Profile Pendidikan"
                    valueItem={`${guruSelected?.profile}`}
                  />

                  <Paragraf
                    keyItem="Lain - lain"
                    valueItem={`${guruSelected?.kemampuanLainLain || "-"}`}
                  />
                  <Paragraf
                    keyItem="Pengalaman"
                    valueItem={`${guruSelected?.pengalaman || "-"}`}
                  />
                  <Paragraf
                    keyItem="Non Akademis"
                    valueItem={guruSelected?.nonAkademis || "-"}
                  />

                  <div className="">
                    {guruSelected?.reviews?.map((item) => (
                      <div
                        key={item._id}
                        className="bg-slate-100 rounded-xl p-4 mt-2"
                      >
                        <div className="flex">
                          <Image
                            width={60}
                            height={60}
                            src={`${apiUrl}/${item.user.image}`}
                            className="bg-slate-300 rounded-full w-[70px] h-[70px]"
                          />
                          <div className="ml-4">
                            <p className="font-bold text-[22px]">
                              {item.user.nama}{" "}
                              <span className="text-[14px] font-normal hidden md:inline-block">
                                / {item.user.kelurahan}, {item.user.kecamatan}
                              </span>
                            </p>
                            <span className="text-[14px] font-normal flex md:hidden mb-3">
                              {item.user.kelurahan}, {item.user.kecamatan}
                            </span>
                            {/* show Rating / Start */}
                            <div className="flex gap-2">
                              {item.jumlahRating === 1 ? (
                                <AiFillStar className="text-orange-500" />
                              ) : item.jumlahRating === 2 ? (
                                <>
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                </>
                              ) : item.jumlahRating === 3 ? (
                                <>
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                </>
                              ) : item.jumlahRating === 4 ? (
                                <>
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                </>
                              ) : (
                                <>
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                  <AiFillStar className="text-orange-500" />
                                </>
                              )}
                            </div>

                            <p className="text-[14px] text-slate-500">
                              {moment(item.createdAt).fromNow()}
                            </p>
                          </div>
                        </div>

                        <p className="bg-white mt-4 p-4 rounded-md">
                          {item.komentar}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-center gap-4 h-[40px] px-5">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={close}
                    className="px-4 bg-rose-500 text-white rounded-md"
                  >
                    Tutup
                  </motion.button>
                  <motion.button
                    onClick={handlePilihGuru}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 bg-green-500 text-white rounded-md"
                  >
                    Pilih Guru
                  </motion.button>
                </div>
              </div>
            }
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Search;
