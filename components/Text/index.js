import React from "react";

const TextHeading = ({ title, className }) => {
  return (
    <h1
      className={`font-bold text-[36px] md:text-[40px] xl:text-[50px] leading-4 ${className}`}
    >
      {title}
    </h1>
  );
};

export { TextHeading };
