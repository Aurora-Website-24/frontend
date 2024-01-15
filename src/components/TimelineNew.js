import React, { useState, useRef, useEffect } from "react";
import { Button } from "@nextui-org/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import neuralnetworks from "../images/neuralnetworks.png";

import trophycup from "../images/whitetrophy.svg";
import Modal_1 from "./Modal_1";
import Modal_2 from "./Modal_2";
import { useInView } from "react-intersection-observer";
import Confetti from "./Confetti";

const TimelineNew = () => {
  const [isModalOpen_1, setIsModalOpen_1] = useState(false);
  const [isModalOpen_2, setIsModalOpen_2] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [ref, inView] = useInView();
  const confettiRef = useRef();


  const toggleModal_1 = () => {
    setIsModalOpen_1(!isModalOpen_1);
  };
  const toggleModal_2 = () => {
    setIsModalOpen_2(!isModalOpen_2);
  };

  useEffect(() => {
    if (inView) {
      setConfettiActive(true);

      // Pass the button element to initBurst
      if (confettiRef.current) {
        window.initBurst(confettiRef.current);
      }
    }
  }, [inView]);

  return (

    <div
      className={`fixed inset-0 z-[9998] ${
        isModalOpen_1 ? "backdrop-blur-lg" : ""
      }`}
      onClick={toggleModal_1}
    >
      <div>
        {/* <VerticalTimeline onTimelineEnd={handleTimelineEnd}> */}
        <VerticalTimeline className="">
          <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
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
                <p>
                  <button onClick={toggleModal_1} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal_1 toggleModal={isModalOpen_1} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
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
                <p>
                  <button onClick={toggleModal_1} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal_1 toggleModal={isModalOpen_1} />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work relative"
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
                <p>
                  <button onClick={toggleModal_2} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal_2 toggleModal={isModalOpen_2} />
          </VerticalTimelineElement>
          {/* <VerticalTimelineElement
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
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
                <p>
                  <button onClick={toggleModal} className="read-more-button">
                    Read More
                  </button>
                </p>
              </span>
            }
            iconStyle={{
              background: "#fff",
              color: "#000",
              boxShadow: "0 0 10px 5px rgba(51, 142, 247,0.5)",
            }}
          >
            <div ref={ref}>
              <h2 className="vertical-timeline-element-title">
                05:30PM - 08:00PM
              </h2>
              <h2>4th January, 2024</h2>
              <h4 className="vertical-timeline-element-subtitle">.</h4>
              <h4 style={{ color: "#000" }}>
                Neural Networks And Computer Vision
              </h4>
              <img
                src={neuralnetworks}
                alt="Neural Networks and Computer Vision"
                style={{ width: "fit-content", height: "auto" }}
              />
            </div>
            <Modal toggleModal={isModalOpen} />
          </VerticalTimelineElement> */}
        </VerticalTimeline>
        <div className="border-[#11A8E4] border-solid border-3 rounded-lg w-fit mx-auto m-10">
          <div className="text-center text-white">
            <h4 className="p-5 text-[#11A8E4] font-semibold">
              Unlock Your Potential, Elevate Your Skills, Ignite Your Passion!
            </h4>
            <h4 className="p-5 font-bold">
              Register Now for AURORA's Ultimate Experience!
            </h4>
           
            <Confetti />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineNew;
