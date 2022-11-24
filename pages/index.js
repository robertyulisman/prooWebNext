import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Tentang from "../components/Section/Tentang";
import SearchTeacher from "../components/Section/SearchTeacher";
import Kontak from "../components/Section/Kontak";
import Testimoni from "../components/Section/Testimoni";
import Produk from "../components/Section/Produk";
import { RiWhatsappFill, RiArrowUpLine } from "react-icons/ri";
import { AnimatePresence, motion } from "framer-motion";
import Scroll from "react-scroll";
import Blog from "../components/Section/Blog";
import Footer from "../components/Section/Footer";
const scroll = Scroll.animateScroll;

export default function Home() {
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);

  const handleWindowScroll = () => {
    const height = window.scrollY;
    const tresholdHeight = 400;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);
  const handleSentWa = () => {
    const noWa = "6282173893175";
    const message = `Hallo Admin Proo`;

    window.open(
      `https://web.whatsapp.com/send?phone=${noWa}&text=${message}`,
      "_blank"
    );
  };

  const handleToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="w-full h-full">
      <Head>
        <title>Proo | Cari Guru Private Profesional</title>
        <meta
          name="description"
          content="Aplikasi Private Ngaji | Aplikasi Private Offline, Guru Datang kerumah, Jaminan Keamanan dan Guru Tersertifikasi"
        />
      </Head>
      <main>
        <Navbar home />
        <SearchTeacher />

        <Tentang />
        <Testimoni />
        <Produk />
        <Blog />
        <Kontak />
        <Footer />
        <AnimatePresence>
          {backgroundwhite && (
            <motion.button
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 70 }}
              onClick={handleToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-4 left-4 bg-slate-500  p-2 rounded-md text-[12px] text-white text-center shadow-md"
            >
              <div className="flex">
                <RiArrowUpLine className="text-[32px]" />
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        <motion.button
          onClick={handleSentWa}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-4 right-4 bg-gradient-to-r from-green-500 to-green-700  p-2 rounded-md text-[12px] text-white text-center shadow-md"
        >
          <div className="flex">
            <RiWhatsappFill className="text-[32px]" />
            <p className="w-[200px]">
              <span className="font-bold underline text-[14px]">
                Klik disini
              </span>{" "}
              untuk Demo dan Penjelasan Tentang Aplikasi
            </p>
          </div>
        </motion.button>
      </main>
    </div>
  );
}
