import Image from "next/image";
import React from "react";
import Playstore from "../../public/asset/playstore.png";
import Appstore from "../../public/asset/appstore.png";

const StoreLogo = () => {
  return (
    <div className="flex gap-4 my-5">
      <Image
        className=" bottom-0"
        src={Playstore}
        alt="playstore logo"
        width={150}
        height={70}
        style={{ objectFit: "contain" }}
      />
      <Image
        className=" bottom-0"
        src={Appstore}
        alt="appstore logo"
        width={150}
        height={70}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default StoreLogo;
