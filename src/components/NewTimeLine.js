import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import neuralnetworks from "./images/neuralnetworks.png";
import reactworkshop from "./images/reactworkshop.png";

import { Button } from "@nextui-org/react";
import trophycup from "./images/trophycup.svg";
import TimelineCard from "./TimelineCard";

const NewTimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "10px",
          fontSize: 20,
          fontFamily: "Roboto, sans-serif",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={
          <span
            style={{
              color: "#338EF7",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Neural Networks And Computer Vision
            <p>Lorem16</p>
          </span>
        }
        iconStyle={{
          background: "#fff",
          color: "#000",
          boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
        }}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <h4 style={{ color: "#000" }}>Neural Networks And Computer Vision</h4>
          <img
            src={neuralnetworks}
            alt="Neural Networks and Computer Vision"
            style={{ width: "fit-content", height: "auto" }}
          />
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "10px",
          fontSize: 20,
          fontFamily: "Roboto, sans-serif",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={
          <span
            style={{
              color: "#338EF7",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Neural Networks And Computer Vision
            <p>Lorem16</p>
          </span>
        }
        iconStyle={{
          background: "#fff",
          color: "#000",
          boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
        }}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <h4 style={{ color: "#000" }}>Neural Networks And Computer Vision</h4>
          <img
            src={neuralnetworks}
            alt="Neural Networks and Computer Vision"
            style={{ width: "fit-content", height: "auto" }}
          />
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "10px",
          fontSize: 20,
          fontFamily: "Roboto, sans-serif",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={
          <span
            style={{
              color: "#338EF7",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Neural Networks And Computer Vision
            <p>Lorem16</p>
          </span>
        }
        iconStyle={{
          background: "#fff",
          color: "#000",
          boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
        }}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <h4 style={{ color: "#000" }}>Neural Networks And Computer Vision</h4>
          <img
            src={neuralnetworks}
            alt="Neural Networks and Computer Vision"
            style={{ width: "fit-content", height: "auto" }}
          />
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "10px",
          fontSize: 20,
          fontFamily: "Roboto, sans-serif",
        }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        date={
          <span
            style={{
              color: "#338EF7",
              fontSize: "18px",
              fontWeight: "bold",
            }}
          >
            Neural Networks And Computer Vision
            <p>Lorem16</p>
          </span>
        }
        iconStyle={{
          background: "#fff",
          color: "#000",
          boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
        }}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle"></h4>
          <h4 style={{ color: "#000" }}>Neural Networks And Computer Vision</h4>
          <img
            src={neuralnetworks}
            alt="Neural Networks and Computer Vision"
            style={{ width: "fit-content", height: "auto" }}
          />
        </div>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default NewTimeLine;
