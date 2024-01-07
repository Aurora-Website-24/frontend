import React, { useEffect, useState } from "react";
import "../index.css";
import TimelineCard from "./TimelineCard";

const TimelineAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [inViewItems, setInViewItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowDistance = window.scrollY;
      const windowHeight = window.innerHeight / 2;
      const timelineDistance = document.querySelector(".timeline").offsetTop;

      if (windowDistance >= timelineDistance - windowHeight) {
        const line = windowDistance - timelineDistance + windowHeight;

        if (line <= dottedLineHeight) {
          setScrollPosition(line + 20);
        }
      }

      // Update in-view items
      const updatedInViewItems = cards.map((card, index) => {
        const cardPosition = card.offsetTop;

        return {
          index,
          inView: scrollPosition > cardPosition,
        };
      });

      setInViewItems(updatedInViewItems);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  const cards = document.querySelectorAll(".timeline-card");

  return (
    <div className="timeline-container">
      <div className="timeline-dotted-line"></div>
      <div
        className="timeline-animated-line"
        style={{ height: `${scrollPosition}px` }}
      ></div>
      <ul>
        {Array.from(cards).map((card, index) => (
          <li
            key={index}
            className={inViewItems[index]?.inView ? "in-view" : ""}
          >
            <TimelineCard
              time={card.dataset.time}
              date={card.dataset.date}
              title={card.dataset.title}
              image={card.dataset.image}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineAnimation;
