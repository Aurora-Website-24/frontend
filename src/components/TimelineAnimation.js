import React, { useEffect, useState } from "react";
import "../index.css";
const dottedLineHeight = document.querySelector(
  ".timeline-dotted-line"
).offsetHeight;

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
      const updatedInViewItems = items.map((item, index) => {
        const circlePosition = item.offsetTop;

        return {
          index,
          inView: scrollPosition > circlePosition,
        };
      });

      setInViewItems(updatedInViewItems);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition]);

  return (
    <div className="timeline-container">
      <div className="timeline-dotted-line"></div>
      <div
        className="timeline-animated-line"
        style={{ height: `${scrollPosition}px` }}
      ></div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={inViewItems[index]?.inView ? "in-view" : ""}
          >
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimelineAnimation;
