import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useRouter } from "next/router";
import Person from "../../../public/asset/women3.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { TextHeading } from "../../Text";

const Testimoni = () => {
  const reffSlider = React.useRef(null);
  const { locale } = useRouter();
  const translate = (id, en) => {
    if (locale === "id-ID") return id;
    else return en;
  };

  const data = [
    {
      _id: 1,
      video: "FWiAwjnnSY8",
    },
    {
      _id: 2,
      video: "Mjzq-7RDQVc",
    },
    {
      _id: 3,
      video: "kd9RAXXM15o",
    },
    {
      _id: 4,
      video: "Ewb6sl9wFr0",
    },
    {
      _id: 5,
      video: "sLN15RNALLI",
    },
    {
      _id: 6,
      video: "axCMUAk9fzM",
    },
  ];

  const scroll = (scrollOffset) => {
    reffSlider.current.scrollLeft += scrollOffset;
  };

  const slideLeft = () => {
    scroll(-220);
  };

  const slideRight = () => {
    scroll(220);
  };

  return (
    <section
      id="testimoni"
      className="px-4 lg:pl-20 pt-0 lg:pt-[100px] md:h-[100vh] flex flex-col md:flex-row bg-gradient-to-r from-indigo-500 to-indigo-600"
    >
      <div className="w-full lg:w-[50%] mt-10 lg:mt-0 md:pl-10">
        <div className="mb-5">
          <Fade left>
            <TextHeading
              className="text-white mt-10"
              title={translate("Testimoni Kami", "Our Testimonial")}
            />
          </Fade>
          <Fade left>
            <h2 className="mt-4 lg:mt-8 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[28px] text-white">
              {translate(
                "Kami Selalu Menjaga Kualitas Guru Kami dalam setiap Proses",
                "We always maintain the quality of our teachers in every process"
              )}
            </h2>
          </Fade>
        </div>
        <div className="relative flex items-center">
          <MdChevronLeft
            className="hover:cursor-pointer hover:bg-white rounded-full ease-in-out duration-300"
            onClick={slideLeft}
            size={40}
          />
          <div
            ref={reffSlider}
            id="slider"
            className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {data.map((item) => (
              <div
                key={item._id}
                className="w-[220px] h-[300px] rounded-md inline-block m-2 cursor-pointer hover:scale-105 ease-in-out duration-300 bg-slate-700 overflow-hidden"
              >
                <iframe
                  width={220}
                  height={300}
                  frameBorder={0}
                  allowFullScreen
                  title="video testimoni"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  src={`https://www.youtube.com/embed/${item.video}`}
                ></iframe>
              </div>
            ))}
          </div>
          <MdChevronRight
            className="hover:cursor-pointer hover:bg-white rounded-full ease-in-out duration-300"
            onClick={slideRight}
            size={40}
          />
        </div>
      </div>
      <div className="md:w-[400px] lg:w-[50%] hidden md:flex items-end justify-center relative">
        <Image
          className="self-end"
          src={Person}
          alt="Picture of the author"
          width={600}
          height={300}
        />
      </div>
    </section>
  );
};

export default Testimoni;
