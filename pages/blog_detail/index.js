import React from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Image from "next/image";
import { apiUrl } from "../../service/api";
import { AnimatePresence, motion } from "framer-motion";
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
import SharePost from "../../components/SharePost";

const BlogDetail = () => {
  const router = useRouter();

  const [data, setData] = React.useState(null);
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);
  const shareUrl = `https://proo.co.id/blog_detail?_id=${router.query._id}`;
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
      </Head>
      <AnimatePresence>
        {backgroundwhite && (
          <div className="-mt-10">
            <Navbar back />
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-[700px] min-h-[100vh]  h-full m-auto bg-gradient-to-t from-slate-100 to-white relative">
        <h1 className="text-left px-4 pt-4 pb-0 md:pb-4 text-[24px] md:text-[28px] lg:text-[38px] leading-[30px] lg:leading-[40px] mt-10 font-bold">
          {data?.nama}
        </h1>
        <SharePost data={data} shareUrl={shareUrl} />
        <Image
          alt={data?.nama}
          width={700}
          height={300}
          src={`${apiUrl}/${data?.image}`}
        />
        <p className="ml-6 mt-2 text-sm">
          di tulis {moment(data?.createdAt).fromNow()}
        </p>
        <div
          className="py-4 px-6"
          dangerouslySetInnerHTML={{ __html: data?.konten }}
        />
      </div>
    </div>
  );
};

export default BlogDetail;
