import { Button } from '@nextui-org/react';
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import neuralnetworks from "../images/neuralnetworks.png";
import trophycup from '../images/whitetrophy.svg';

const TimelineNew = () => {
  return (
    <div>
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
            <h4 className="vertical-timeline-element-subtitle">.</h4>
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
            <h4 className="vertical-timeline-element-subtitle">.</h4>
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
            <h4 className="vertical-timeline-element-subtitle">.</h4>
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
            <h4 className="vertical-timeline-element-subtitle">.</h4>
            <h4 style={{ color: "#000" }}>Neural Networks And Computer Vision</h4>
            <img
              src={neuralnetworks}
              alt="Neural Networks and Computer Vision"
              style={{ width: "fit-content", height: "auto" }}
            />
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div className='border-[#11A8E4] border-solid border-3 rounded-lg w-fit mx-auto m-10'>
        <div className='text-center text-white'>
          <h4 className='p-5 text-[#11A8E4] font-semibold'>Unlock Your Potential, Elevate Your Skills, Ignite Your Passion!</h4>
          <h4 className='p-5 font-bold'>Register Now for AURORA's Ultimate Experience!</h4>
          <Button color="primary" size="lg" variant="shadow"
            className="lg:w-[15rem] m-5"
            onClick={() => { console.log('clicked register') }}>
            <img src={trophycup} alt="" />
            Register Now!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TimelineNew;