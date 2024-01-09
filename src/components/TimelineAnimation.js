import React, { useEffect, useState } from "react";
import neuralnetworks from "../images/neuralnetworks.png";
import reactworkshop from "../images/reactworkshop.png";
import timelinetitle from "../images/timelinetitle.svg";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    const maxTimelineHeight =
      (document.querySelectorAll(".my-container").length - 1) * 100;
    setTimelineHeight(maxTimelineHeight);
  }, []);

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / timelineHeight) * 65;
    const adjustedPercentage = Math.min(100, scrollPercentage);

    document.querySelector(
      ".timeline-line"
    ).style.height = `${adjustedPercentage}%`;
    document.querySelector(
      ".timeline-image"
    ).style.top = `${adjustedPercentage}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [timelineHeight]);

  return (
    <div className="relative">
      <div className="absolute w-2 translate-y-[25rem] h-[70rem] bg-white"></div>
      <div className="lg:mx-96 mx-7 grid lg:grid-cols-3 grid-cols-2">
        <div className="mx-auto col-span-3 lg:col-start-1 col-start-2 lg:p-20 pb-7">
          <img src={timelinetitle} alt="" />
        </div>
        <div className="py-5 col-span-3 lg:col-start-1 col-start-3">
          <TimelineCard
            title="Neural Networks and Computer Vision"
            time="05:30PM - 08:00PM"
            date="4th January, 2024"
            image={neuralnetworks}
          />
        </div>
        <div className="py-5 col-span-3 col-start-3">
          <TimelineCard
            title="React Workshop"
            time="05:30PM - 08:00PM"
            date="4th January, 2024 - 5th January, 2024"
            image={reactworkshop}
          />
        </div>
        <div className="py-5 col-span-3 lg:col-start-1 col-start-3">
          <TimelineCard
            title="UI Design Workshop"
            time="05:30PM - 08:00PM"
            date="4th January, 2024"
            image={reactworkshop}
          />
        </div>
        <div className="py-5 col-span-3 col-start-3">
          <TimelineCard
            title="CSS Frameworks"
            time="05:30PM - 08:00PM"
            date="4th January, 2024"
            image={reactworkshop}
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
