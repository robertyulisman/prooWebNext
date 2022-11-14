import React from "react";
import Image from "next/image";
import Person from "../../../public/asset/personRight.png";
import Typed from "react-typed";
import { Comment1, Comment2 } from "../../Comment";
import Router, { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

// icon
import { HiLocationMarker, HiOutlineBookOpen } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getDataCity, getDataLesson } from "../../../redux/actions/dataAction";

const SearchTeacher = () => {
  const dispatch = useDispatch();
  const { lesson, city } = useSelector((state) => state.data);

  const { locale } = useRouter();
  const [showInput, setShowInput] = React.useState(false);
  const [showPelajaran, setShowPelajaran] = React.useState(false);
  const [showLocation, setShowLocation] = React.useState(false);
  const inputRef = React.useRef(null);
  const inputLocationRef = React.useRef(null);

  const [pelajaran, setPelajaran] = React.useState("");
  const [location, setLocation] = React.useState("");

  const handleClickInput = () => {
    setShowInput(true);
    setTimeout(() => {
      inputRef.current.focus();
      setShowPelajaran(true);
    }, 300);
  };

  React.useEffect(() => {
    dispatch(getDataLesson());
    dispatch(getDataCity());
  }, []);

  const handleSubmitSearch = () => {
    if (pelajaran === "" && location === "") {
      return (
        setShowInput(true),
        setTimeout(() => {
          inputRef.current.focus();
          setShowPelajaran(true);
        }, 300)
      );
    }
    Router.push({
      pathname: "/search",
      query: {
        pelajaran: pelajaran,
        lokasi: location,
      },
    });
  };

  return (
    <section
      id="home"
      className="px-2 md:px-4 lg:px-20 pt-[200px] pb-[20px] md:py-0 h-[100%] md:h-[100vh] flex flex-col md:flex-row "
    >
      <div className="w-full flex mt-0 lg:mt-[200px] justify-center md:justify-start ml-0 md:ml-6 ">
        <div>
          <h1 className="font-bold text-[26px] md:text-[32px] xl:text-[50px] leading-4">
            {locale === "id-ID"
              ? "Cari Guru Private"
              : "Find a Private Teacher"}
          </h1>
          <div className="mt-8">
            <Typed
              className="text-[24px] text-slate-600 "
              strings={
                locale === "id-ID"
                  ? [
                      "Guru Datang kerumah...",
                      "Jaminan Keamanan...",
                      "Guru Lulus Uji Kompetensi...",
                    ]
                  : [
                      "Teacher comes home...",
                      "Security Guarantee...",
                      "Teacher Passed Competency Test...",
                    ]
              }
              typeSpeed={100}
              backSpeed={10}
              loop
            />
          </div>

          {/* search bar start */}
          <div
            className={`bg-white shadow-2xl border-[1px]  py-2 px-2 rounded-xl flex mt-6 w-full`}
          >
            {!showInput ? (
              <button onClick={handleClickInput} className={`w-full p-2 flex `}>
                {locale === "id-ID"
                  ? "Butuh Guru Apa ?"
                  : "What teacher do you need ?"}
              </button>
            ) : (
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
                    // onBlur={() => setShowPelajaran(false)}
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
                      setShowPelajaran(false);
                      setTimeout(() => {
                        setShowLocation(true);
                      }, 300);
                    }}
                    onKeyDown={(event) => {
                      event.preventDefault();
                    }}
                    value={location}
                    onBlur={() => console.log("blur")}
                    className="w-full md:w-[200px] p-2 focus:outline-none"
                    type="text"
                    placeholder={locale === "id-ID" ? "Lokasi" : "Location"}
                  />
                </motion.div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleSubmitSearch}
              className={`ml-2 ${
                locale === "id-ID" ? "w-[150px] " : " w-[100px] sm:w-[220px] "
              } py-1  bg-primary rounded-md text-slate-800 font-bold`}
            >
              {locale === "id-ID" ? "Cari Guru " : "Find a Teacher"}
            </motion.button>
          </div>
          {/* search bar finish */}
          {/* showLesson start */}
          <AnimatePresence>
            {showPelajaran && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-white shadow-xl mt-2 rounded-xl border-[1px] border-slate-200 overflow-hidden w-[250px]"
              >
                {lesson.map((item, index) => (
                  <p
                    onClick={() => {
                      setPelajaran(item.nama);
                      setShowPelajaran(false);
                      setTimeout(() => {
                        inputLocationRef.current.focus();
                        setShowLocation(true);
                      }, 300);
                    }}
                    className="py-2 px-4 hover:cursor-pointer hover:bg-primary "
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
              className="bg-white shadow-xl mt-2 ml-[150px] md:ml-[280px] rounded-xl border-[1px] border-slate-200 w-[140px] h-[300px] overflow-scroll scrollbar-hide md:w-[250px] z-[999]"
            >
              {city.map((item, index) => (
                <p
                  onClick={() => {
                    setLocation(item.kota);
                    setShowLocation(false);
                  }}
                  className="py-2 px-4 hover:cursor-pointer hover:bg-primary "
                  key={index}
                >
                  {item.kota}
                </p>
              ))}
            </motion.div>
          )}

          {/* showLesson finish */}
        </div>
      </div>
      <div className="hidden lg:flex  md:w-[500px] lg:w-[500px] items-end relative pt-[100px]">
        <div className="absolute bottom-[300px] left-[-180px] ">
          <Comment1 />
          <Comment2 />
        </div>

        <Image
          className="flex bottom-0"
          src={Person}
          alt="Picture of the author"
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default SearchTeacher;
