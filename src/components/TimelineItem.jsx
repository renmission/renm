import React from "react";
import { Collapse } from "react-collapse";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function TimelineItem({ year, title, duration, details, toggle, open }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-slate-200 dark:border-slate-700">
      <li className="mb-10 ml-4" onClick={toggle}>
        <div className="absolute w-3 h-3 bg-slate-800 rounded-full mt-1.5 -left-1.5 border border-white dark:border-slate-600 dark:bg-slate-700" />
        <div className="flex gap-4 flex-col items-start justify-start mb-6 text-xs md:text-sm">
          <div className="flex items-center justify-center gap-4">
            <span className="inline-block px-2 py-1 font-semibold text-white dark:text-slate-900 bg-slate-900 dark:bg-white rounded-md">
              {year}
            </span>
            <div className="my-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
              {duration}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {title}
            </h3>
            {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
        </div>
        {details?.map((d, i) => (
          <Collapse
            isOpened={open}
            key={i}
            className="my-2 text-base font-normal py-6 text-slate-800 dark:text-slate-300"
          >
            {d}
          </Collapse>
        ))}
      </li>
    </ol>
  );
}

export default TimelineItem;
