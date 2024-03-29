import React from "react";

const Modal = ({ toggleModal }) => {
  return (
    <div>
      {/* Blurred background
      <div
        className={`fixed inset-0 z-[9998] ${
          toggleModal ? "bg-blur backdrop-blur-sm" : ""
        }`}
      ></div> */}

      <div className={toggleModal ? "" : "hidden"}>
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="bg-white w-[70%] h-[80%] rounded-3xl shadow-lg overflow-hidden">
            <div className="relative justify-between items-center border-b pb-4 mb-4">
              <h3 className="mt-3 mx-3 my-3 text-xl font-semibold text-[#00418C] p-2">
                INTRODUCTION TO MACHINE LEARNING AND NEURAL NETWORKS
              </h3>
              <button
                onClick={toggleModal}
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
              ></button>
            </div>
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              <div className="my-4">
                <h4 className="text-black p-2">Description</h4>
                <p className="text-black mx-auto">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>

              <div className="my-4">
                <h2 className="mt-2 p-2">Day 2</h2>
                <p className="text-black">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2">Day 3</h2>
                <p className="text-black">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
              <div className="my-4">
                <h2 className="mt-2 p-2">Prerequisites</h2>
                <p className="text-black">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups. Lorem ipsum is placeholder text commonly used
                  in the graphic, print, and publishing industries for
                  previewing layouts and visual mockups.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
