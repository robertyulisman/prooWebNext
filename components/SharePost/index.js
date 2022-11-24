import React from "react";
import { FaFacebookF, FaWhatsapp, FaTwitter, FaLinkedin } from "react-icons/fa";

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

const SharePost = ({ shareUrl, data }) => {
  return (
    <>
      <div className="hidden md:flex flex-col gap-2 absolute -left-[50px] top-[20vh] ">
        <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
          <FacebookShareButton url={shareUrl} quote={data?.title}>
            <FaFacebookF className="text-sky-500 text-[22px]" />
          </FacebookShareButton>
        </div>
        <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
          <LinkedinShareButton
            url={shareUrl}
            source={shareUrl}
            title={data?.title}
          >
            <FaLinkedin className="text-blue-700 text-[22px]" />
          </LinkedinShareButton>
        </div>
        <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
          <TwitterShareButton url={shareUrl} quote={data?.title}>
            <FaTwitter className="text-cyan-400 text-[22px]" />
          </TwitterShareButton>
        </div>
        <div className="w-[50px] h-[50px] bg-white flex items-center justify-center rounded-l-md shadow-md hover:w-[70px] ease-in-out duration-300 hover:-translate-x-[20px] hover:cursor-pointer">
          <WhatsappShareButton
            title={`${data?.nama}\n\n`}
            url={shareUrl}
            quote={data?.title}
          >
            <FaWhatsapp className="text-green-500 text-[22px]" />
          </WhatsappShareButton>
        </div>
      </div>

      {/* mobile view */}
      <div className="flex md:hidden flex-col items-start ml-4 mb-4 ">
        <div className="flex flex-row gap-2 mt-2">
          <span>Share :</span>
          <FacebookShareButton url={shareUrl} quote={data?.title}>
            <FaFacebookF className="text-sky-500 text-[22px]" />
          </FacebookShareButton>

          <LinkedinShareButton
            url={shareUrl}
            source={shareUrl}
            title={data?.title}
          >
            <FaLinkedin className="text-blue-700 text-[22px]" />
          </LinkedinShareButton>
          <TwitterShareButton url={shareUrl} quote={data?.title}>
            <FaTwitter className="text-cyan-400 text-[22px]" />
          </TwitterShareButton>
          <WhatsappShareButton
            title={`${data?.nama}\n\n`}
            url={shareUrl}
            quote={data?.title}
          >
            <FaWhatsapp className="text-green-500 text-[22px]" />
          </WhatsappShareButton>
        </div>
      </div>
    </>
  );
};

export default SharePost;
