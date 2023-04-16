import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";

const PortfolioItem = ({ title, imgUrl, stack, link, github }) => {
  return (
    <div className="border-2 border-slate-900 dark:border-slate-300 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:48 object-cover object-top cursor-pointer filter hover:scale-105 duration-300 transition-all"
      />
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <h2 className="portfolio-h2 mb-4 dark:text-white">{title}</h2>
          <div className="flex mb-4 space-x-2">
            <a href={github} target="_blank">
              <VscGithub className="w-6 h-6" />
            </a>
            <a href={link} target="_blank">
              <HiOutlineExternalLink className="w-6 h-6" />
            </a>
          </div>
        </div>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack?.map((item, i) => (
            <span
              key={i}
              className="inline-block px-2 py-1 font-semibold border-2 border-slate-900 dark:border-white rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
