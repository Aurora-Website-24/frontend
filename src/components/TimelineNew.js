import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import neuralnetworks from "../images/neuralnetworks.png";

export default function TimelineNew(){
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "#fff",
          color: "#fff",
          borderRadius: "10px",
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#000" }}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle">?</h4>
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle">?</h4>
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
        iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        // icon={<WorkIcon />}
      >
        <div>
          <h2 className="vertical-timeline-element-title">05:30PM - 08:00PM</h2>
          <h2>4th January, 2024</h2>
          <h4 className="vertical-timeline-element-subtitle">?</h4>
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