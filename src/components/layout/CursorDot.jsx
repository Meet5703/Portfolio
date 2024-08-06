import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const MotionBox = motion(Box);

const CursorDot = () => {
  const [dotPosition, setDotPosition] = useState({ x: 10, y: 10 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setDotPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to(".cursor-dot", {
      x: dotPosition.x - 5,
      y: dotPosition.y - 5,
      duration: 0.1,
      ease: "power2.out",
    });
  }, [dotPosition]);

  // useEffect(() => {
  //     const handleMouseEnter = () => {
  //         gsap.to(".cursor-dot", {
  //             width: "10ch",
  //             height: "3ch",
  //             backgroundColor: "rgba(128, 0, 128, 0.2)",
  //             duration: 0.2,
  //             borderRadius: "10%",
  //         });
  //     };

  //     const handleMouseLeave = () => {
  //         gsap.to(".cursor-dot", {
  //             width: 10,
  //             height: 10,
  //             backgroundColor: "purple.500",
  //             duration: 0.2,
  //             borderRadius: "50%",
  //         });
  //     };
  // )

  //     document.addEventListener("mouseenter", handleMouseEnter);
  //     document.addEventListener("mouseleave", handleMouseLeave);
  //     return () => {
  //       document.removeEventListener("mouseenter", handleMouseEnter);
  //       document.removeEventListener("mouseleave", handleMouseLeave);
  //     };
  //   }, [dotPosition]);

  return (
    <MotionBox
      className="cursor-dot"
      position="fixed"
      width="10px"
      height="10px"
      bg="purple.500"
      borderRadius="50%"
      pointerEvents="none"
      zIndex="1000"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  );
};

export default CursorDot;
