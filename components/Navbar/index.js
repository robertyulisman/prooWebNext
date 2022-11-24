import React from "react";
import Image from "next/image";
import Logo from "../../public/asset/logo.png";
import Link from "next/link";
import { Link as LinkScroll } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowLeftLine } from "react-icons/ri";
import Router, { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar({ home, back }) {
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);
  const { locale, locales, asPath } = useRouter();
  const [showDrawer, setShowDrawer] = React.useState(false);

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

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

  const handleClickLogo = () => {
    Router.push({
      pathname: "/",
    });
  };

  return (
    <>
      {showDrawer && (
        <div
          onClick={() => setShowDrawer(false)}
          className="fixed w-[100vw] h-[100vh] z-[998] bg-[rgb(0,0,0,0.5)] lg:hidden"
        />
      )}

      <AnimatePresence>
        {showDrawer && (
          <motion.aside
            className="w-[100vw] h-[100vh] lg:hidden fixed bg-gradient-to-t from-black to-slate-700 z-[999]"
            initial={{ width: 0 }}
            animate={{ width: "70%" }}
            exit={{
              width: 0,
              transition: { duration: 0.1 },
            }}
          >
            <motion.div
              className="flex pt-[100px] flex-col"
              initial={{
                transition: {
                  staggerChildren: 0.2,
                  staggerDirection: -1,
                },
              }}
              animate={{
                transition: {
                  staggerChildren: 0.2,
                  staggerDirection: 1,
                },
              }}
            >
              <LinkScroll
                onClick={() => setShowDrawer(false)}
                className={`   text-white hover:cursor-pointer hover:text-amber-300 hover:font-bold py-4 px-4  ${
                  backgroundwhite ? "" : ""
                } ease-in-out all duration-200 `}
                to="home"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>{locale === "id-ID" ? "Cari Guru" : "Search"}</span>
              </LinkScroll>
              <LinkScroll
                onClick={() => setShowDrawer(false)}
                className={`   text-white hover:cursor-pointer hover:text-amber-300 hover:font-bold py-4 px-4  ${
                  backgroundwhite ? "" : ""
                } ease-in-out all duration-200 `}
                to="tentang"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>{locale === "id-ID" ? "Tentang Kami" : "About Us"}</span>
              </LinkScroll>
              <LinkScroll
                onClick={() => setShowDrawer(false)}
                className={`   text-white hover:cursor-pointer hover:text-amber-300 hover:font-bold py-4 px-4  ${
                  backgroundwhite ? "" : ""
                } ease-in-out all duration-200 `}
                to="produk"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>{locale === "id-ID" ? "Produk" : "Product"}</span>
              </LinkScroll>
              <LinkScroll
                onClick={() => setShowDrawer(false)}
                className={`   text-white hover:cursor-pointer hover:text-amber-300 hover:font-bold py-4 px-4  ${
                  backgroundwhite ? "" : ""
                } ease-in-out all duration-200 `}
                to="blog"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span>{locale === "id-ID" ? "Blog" : "Blog"}</span>
              </LinkScroll>

              <LinkScroll
                onClick={() => setShowDrawer(false)}
                className={`   text-white hover:cursor-pointer hover:text-amber-300 hover:font-bold py-4 px-4  ${
                  backgroundwhite ? "" : ""
                } ease-in-out all duration-200 `}
                to="kontak"
                spy={true}
                smooth={true}
                duration={500}
              >
                <span> {locale === "id-ID" ? "Kontak" : "Contact"}</span>
              </LinkScroll>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      <div
        className={`w-full fixed z-[999] transition-all duration-700 bg-white ${
          backgroundwhite
            ? "backdrop-blur-sm shadow-lg !py-1 bg-[#fffdfdc2]"
            : ""
        }`}
      >
        <div className="flex items-center justify-between px-4 lg:px-20 h-[70px]">
          {back && (
            <motion.button
              onClick={handleClickLogo}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              initial={{ opacity: 0, scale: 0, x: 100 }}
              className="p-4 hover:bg-white rounded-full hover:shadow-xl mr-2 hover:border-[1px] hover:border-slate-200 duration-300 ease-in-out"
            >
              <RiArrowLeftLine size={24} color={"#0f172a"} />
            </motion.button>
          )}

          <div
            onClick={handleClickLogo}
            className="w-[80px] md:w-[120px] h-auto hover:cursor-pointer"
          >
            <Image
              title="Proo Private Ngaji"
              src={Logo}
              alt="Picture of the author"
              width={120}
              height={500}
            />
          </div>
          <div className="gap-2 hidden md:flex">
            {home && (
              <>
                <LinkScroll
                  className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-100 hover:font-bold py-2 px-4 rounded-full ${
                    backgroundwhite ? "shadow-md" : ""
                  } ease-in-out all duration-200 `}
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span>{locale === "id-ID" ? "Cari Guru" : "Search"}</span>
                </LinkScroll>
                <LinkScroll
                  className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-100 hover:font-bold py-2 px-4 rounded-full ${
                    backgroundwhite ? "shadow-md" : ""
                  } ease-in-out all duration-200 `}
                  to="tentang"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span>
                    {locale === "id-ID" ? "Tentang Kami" : "About Us"}
                  </span>
                </LinkScroll>
                <LinkScroll
                  className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-100 hover:font-bold py-2 px-4 rounded-full ${
                    backgroundwhite ? "shadow-md" : ""
                  } ease-in-out all duration-200 `}
                  to="produk"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span>{locale === "id-ID" ? "Produk" : "Product"}</span>
                </LinkScroll>
                <LinkScroll
                  className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-100 hover:font-bold py-2 px-4 rounded-full ${
                    backgroundwhite ? "shadow-md" : ""
                  } ease-in-out all duration-200 `}
                  to="blog"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span>{locale === "id-ID" ? "Blog" : "Blog"}</span>
                </LinkScroll>

                <LinkScroll
                  className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-100 hover:font-bold py-2 px-4 rounded-full ${
                    backgroundwhite ? "shadow-md" : ""
                  } ease-in-out all duration-200 `}
                  to="kontak"
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  <span> {locale === "id-ID" ? "Kontak" : "Contact"}</span>
                </LinkScroll>
              </>
            )}

            <div>
              <div
                className={`flex flex-row py-2 px-4 gap-2 bg-white rounded-full ${
                  backgroundwhite ? "shadow-md" : ""
                }`}
              >
                {locales.map((l, index) => {
                  return (
                    <div key={index}>
                      {index === 1 && <span className="pr-2">|</span>}
                      <span
                        className={
                          l === locale
                            ? "border-b-2 border-b-primary text-slate-900 font-bold"
                            : "text-slate-500"
                        }
                      >
                        <Link href={asPath} locale={l}>
                          {l === "id-ID" ? "id" : "en"}
                        </Link>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {!showDrawer ? (
            <div
              onClick={() => setShowDrawer(true)}
              className="flex md:hidden hover:cursor-pointer"
            >
              <HiMenu size={30} color={"#0f172a"} />
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setShowDrawer(false)}
              className="flex md:hidden hover:cursor-pointer"
            >
              <HiX size={30} color={"#0f172a"} />
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
