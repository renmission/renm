import React, { useState } from "react";
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';
import Title from "./Title";

const Timeline = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null)
    }

    setOpen(index);
  }

  // year, title, duration, details, toggle, open

  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Timeline</Title>
        {timeline?.map((item, i) => (
          <TimelineItem
            key={i}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            open={i === open}
            toggle={() => toggle(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
