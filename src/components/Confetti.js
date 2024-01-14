import React from "https://esm.run/react@18";
import trophycup from "../images/trophycup.svg";
import confetti from "https://esm.run/canvas-confetti@1";
import { Button } from "@nextui-org/react";
export default function Confetti() {
  function onClick() {
    confetti({
      particleCount: 150,
      spread: 60,
    });
  }

  return (
    <Button
      color="danger"
      size="lg"
      variant="shadow"
      className="lg:w-[15rem] m-5"
      id="root"
      onClick={onClick}
    >
      <img src={trophycup} alt="" />
      Register Now!
    </Button>
  );
}
