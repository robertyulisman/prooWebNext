import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { apiUrl } from "../../service/api";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import axios from "axios";
import moment from "moment";

const BlogDetail = () => {
  const router = useRouter();

  const [data, setData] = React.useState(null);
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);
  const shareUrl = `https://proo.co.id/blog_detail=${router.query._id}&title=${router.query.title}`;
  console.log("shareUrl", shareUrl);

  const handleWindowScroll = () => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  React.useEffect(() => {
    if (!router.isReady) return;

    axios
      .get(`${apiUrl}/api/info/${router.query._id}`)
      .then((res) => {
        setData(res.data);
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [router.isReady, router.query]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <div>
      <Head>
        <title>{data?.nama}</title>
        <meta
          name="description"
          content="Aplikasi Private Ngaji | Aplikasi Private Offline, Guru Datang kerumah, Jaminan Keamanan dan Guru Tersertifikasi"
        />
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&family=Montserrat:wght@200;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {backgroundwhite && (
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Navbar back />
        </motion.div>
      )}

      <div className="max-w-[700px] min-h-[100vh]  h-full m-auto bg-gradient-to-t from-slate-100 to-white relative">
        <div className="absolute -left-[50px] top-[100px] ">
          <div className="flex flex-col gap-2">
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
              <FacebookShareButton url={shareUrl} quote={data?.title}>
                <FaFacebookF className="text-sky-500 text-[22px]" />
              </FacebookShareButton>
            </div>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
              <LinkedinShareButton url={shareUrl} quote={data?.title}>
                <FaLinkedin className="text-blue-700 text-[22px]" />
              </LinkedinShareButton>
            </div>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
              <TwitterShareButton url={shareUrl} quote={data?.title}>
                <FaTwitter className="text-cyan-400 text-[22px]" />
              </TwitterShareButton>
            </div>
            <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
              <WhatsappShareButton url={shareUrl} quote={data?.title}>
                <FaWhatsapp className="text-green-500 text-[22px]" />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
        <h1 className="text-left py-4 text-[18px] md:text-[28px] lg:text-[38px] lg:leading-[40px] mt-10 font-bold">
          {data?.nama}
        </h1>
        <Image
          alt={data?.nama}
          width={700}
          height={300}
          src={`${apiUrl}/${data?.image}`}
        />
        <p className="ml-4 mt-2 text-sm">
          di tulis {moment(data?.createdAt).fromNow()}
        </p>
        <div
          className="p-4"
          dangerouslySetInnerHTML={{ __html: data?.konten }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
