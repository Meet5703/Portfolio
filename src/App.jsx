import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import ScrollContainer from "./components/layout/ScrollContainer";
import CursorDot from "./components/layout/CursorDot";
import NavBar from "./components/layout/NavBar";
import Home from "./components/Home/Home";

const App = () => {
  useEffect(() => {
    gsap.from("h1", { opacity: 0, duration: 1, y: -50 });
  }, []);

  return (
    <ScrollContainer>
      <Box>
        <NavBar />
        <CursorDot />
        <Home />
      </Box>
    </ScrollContainer>
  );
};

export default App;
