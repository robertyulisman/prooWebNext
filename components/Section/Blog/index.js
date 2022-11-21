import Image from "next/image";
import React from "react";
import Router from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getBlog, getCategoryBlog } from "../../../redux/actions/dataAction";
import { apiUrl } from "../../../service/api";
import { motion } from "framer-motion";
import moment from "moment";
import "moment/locale/id";

const Blog = () => {
  const dispatch = useDispatch();
  const { kategoriBlog, dataBlog } = useSelector((state) => state.data);

  const [blogSelected, setBlogSelected] = React.useState("");
  const [dataBlogArtikel, setDataBlogArtikel] = React.useState([]);
  console.log("blogSelected", blogSelected);

  const data = [
    {
      _id: 1,
      judul: "Mudahnya Pesan Guru Proo",
      penulis: "Robert",
      image:
        "https://admin.proo.co.id/asset/images/16425677112497.-31-des-2021-wawancara-guru.png",
    },
    {
      _id: 2,
      judul: "Mudahnya Pesan Guru Proo",
      penulis: "Robert",
      image:
        "https://admin.proo.co.id/asset/images/16425677112497.-31-des-2021-wawancara-guru.png",
    },
    {
      _id: 3,
      judul: "Mudahnya Pesan Guru Proo",
      penulis: "Robert",
      image:
        "https://admin.proo.co.id/asset/images/16425677112497.-31-des-2021-wawancara-guru.png",
    },
    {
      _id: 4,
      judul: "Mudahnya Pesan Guru Proo",
      penulis: "Robert",
      image:
        "https://admin.proo.co.id/asset/images/16425677112497.-31-des-2021-wawancara-guru.png",
    },
  ];

  React.useEffect(() => {
    Promise.all([dispatch(getBlog()), dispatch(getCategoryBlog())]);
  }, []);

  React.useEffect(() => {
    if (kategoriBlog.length > 0) {
      setBlogSelected(kategoriBlog[0].kategori);

      const blogFiltered = dataBlog.filter(
        (item) => item.kategori === kategoriBlog[0].kategori
      );
      console.log("blogFiltered", blogFiltered);
      setDataBlogArtikel(blogFiltered);
    }
  }, [kategoriBlog]);

  const handleClikKategori = (data) => {
    console.log("item kategori", data);
    setBlogSelected(data.kategori);

    setDataBlogArtikel([]);
    setTimeout(() => {
      const blogFiltered = dataBlog.filter(
        (item) => item.kategori === data.kategori
      );
      setDataBlogArtikel(blogFiltered);
    }, 100);
  };

  const handleDetailBlog = (item) => {
    Router.push({
      pathname: "/blog_detail",
      query: {
        _id: item._id,
        title: item.nama,
      },
    });
  };

  return (
    <section id="blog" className=" bg-green-400 pt-[50px] md:pt-[100px] ">
      <div className="max-w-[1420px] m-auto pb-10 md:py-10 px-4">
        <div className="flex gap-6 justify-center pt-0 md:pt-4 pb-10">
          {kategoriBlog.map((item) => (
            <button
              onClick={() => handleClikKategori(item)}
              className={`font-bold  ${
                blogSelected === item.kategori
                  ? "bg-slate-900 text-white scale-125"
                  : "bg-white"
              } px-4 py-2 rounded-3xl shadow-lg hover:scale-105 ease-in-out duration-300 cursor-pointer text-[14px]`}
            >
              {item.kategori}
            </button>
          ))}
        </div>

        <div className="sm:hidden h-full min-h-[300px] overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide my-3">
          {dataBlogArtikel.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 * index } }}
              className=" w-[80%] inline-block bg-white shadow-lg rounded-md overflow-hidden hover:scale-105 duration-300 ease-in-out hover:cursor-pointer mr-4"
            >
              <Image src={`${apiUrl}/${item.image}`} width={500} height={250} />
              <div className="p-3">
                <h2 className="text-slate-900 font-bold text-[16px] md:text-[20px] mt-2">
                  {item.nama}
                </h2>
                <p className="text-[12px] text-slate-700">{item.createdAt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className=" hidden min-h-[300px] sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {dataBlogArtikel.map((item, index) => (
            <motion.div
              onClick={() => handleDetailBlog(item)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.3 * index } }}
              className="flex flex-col items-start bg-white shadow-lg rounded-md overflow-hidden hover:scale-105 duration-300 ease-in-out hover:cursor-pointer"
            >
              <div className="w-full h-[200px]">
                <Image
                  src={`${apiUrl}/${item.image}`}
                  width={500}
                  height={300}
                  style={{ objectFit: "fill" }}
                />
              </div>

              <div className="p-3">
                <h2 className="text-slate-900 font-bold text-[16px] md:text-[20px] mt-2">
                  {item.nama}
                </h2>
                <p className="text-[12px] text-slate-700">
                  {moment(item.createdAt).fromNow()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
