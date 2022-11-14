import React from "react";
import Image from "next/image";
import Logo from "../../public/asset/logo.png";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
import { HiMenu } from "react-icons/hi";

export default function Navbar({ home }) {
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);
  const { locale, locales, asPath } = useRouter();

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

  return (
    <div
      className={`w-full fixed z-[999] transition-all duration-700 ${
        backgroundwhite ? "backdrop-blur-sm shadow-lg !py-3" : ""
      }`}
    >
      <div className="flex items-center justify-between px-4 lg:px-20 h-[70px]">
        <div className="w-[80px] md:w-[120px] h-auto">
          <Image
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
                className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-900 hover:font-bold py-2 px-4 rounded-full ${
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
                className={` bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-900 hover:font-bold py-2 px-4 rounded-full ${
                  backgroundwhite ? "shadow-md" : ""
                } ease-in-out all duration-200 `}
                to="tentang"
                spy={true}
                smooth={true}
                offset={60}
                duration={500}
              >
                <span>{locale === "id-ID" ? "Tentang Kami" : "About Us"}</span>
              </LinkScroll>
              <span
                className={`bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-900 hover:font-bold py-2 px-4 rounded-full ${
                  backgroundwhite ? "shadow-md" : ""
                } ease-in-out all duration-200`}
              >
                {locale === "id-ID" ? "Produk" : "Product"}
              </span>

              <span
                className={`bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-900 hover:font-bold py-2 px-4 rounded-full ${
                  backgroundwhite ? "shadow-md" : ""
                } ease-in-out all duration-200`}
              >
                {locale === "id-ID" ? "Blog" : "Blog"}
              </span>
              <span
                className={`bg-white hover:bg-primary text-slate-500 hover:cursor-pointer hover:text-slate-900 hover:font-bold py-2 px-4 rounded-full ${
                  backgroundwhite ? "shadow-md" : ""
                } ease-in-out all duration-200`}
              >
                {locale === "id-ID" ? "Kontak" : "Contact"}
              </span>
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
        <div className="flex md:hidden">
          <HiMenu size={30} color={"#0f172a"} />
        </div>
      </div>
    </div>
  );
}
