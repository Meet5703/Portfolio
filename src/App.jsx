// src/App.jsx
import React, { useEffect } from "react";
import {
  Box,
  VStack,
  Heading,
  Text,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollContainer from "./components/layout/ScrollContainer";
import ContactForm from "./components/ContactForm";
import NavBar from "./components/layout/NavBar";

const MotionBox = motion(Box);

const App = () => {
  useEffect(() => {
    gsap.from("h1", { opacity: 0, duration: 1, y: -50 });
  }, []);

  return (
    <ScrollContainer>
      <Box>
        <NavBar />
      </Box>
    </ScrollContainer>
  );
};

export default App;
