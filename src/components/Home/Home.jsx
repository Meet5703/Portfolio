import { Container, HStack, Image, Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import myimg from "../../assets/mypic.png";

// Register the TextPlugin with GSAP
gsap.registerPlugin(TextPlugin);

const Home = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2 });

    const text1 = "Meet Khetani.";
    const text2 = "a Full Stack Web Developer";

    // Write first text
    tl.to(textRef.current, {
      duration: text1.length * 0.1,
      text: text1,
      ease: "power2.inOut",
    });

    // Pause
    tl.to(textRef.current, { opacity: 1, duration: 1 });

    // Erase first text
    tl.to(textRef.current, {
      duration: text1.length * 0.1,
      text: "",
      ease: "power2.inOut",
    });

    // Write second text
    tl.to(textRef.current, {
      duration: text2.length * 0.1,
      text: text2,
      ease: "power2.inOut",
    });

    // Pause
    tl.to(textRef.current, { opacity: 1, duration: 1 });

    // Erase second text
    tl.to(textRef.current, {
      duration: text2.length * 0.1,
      text: "",
      ease: "power2.inOut",
    });
  }, []);

  return (
    <Container
      maxW={["400px", "500px", "700px", "900px", "1600px", "1800px"]}
      minH={"100vh"}
      pt={["50px", "30px"]}
    >
      <Stack
        mx={"auto"}
        w={"90%"}
        justifyContent={"space-between"}
        flexDir={["column", "column", "column", "row"]}
        px={8}
      >
        <Box
          fontFamily="Inconsolata, monospace"
          fontSize={["3xl", "4xl", "5xl"]}
          fontWeight={"bold"}
        >
          <Box as="span" color={"purple.600"}>
            Hello, I am{" "}
          </Box>
          <Box as="span" color={"purple.600"} ref={textRef}></Box>
        </Box>
        <Image src={myimg} />
      </Stack>
    </Container>
  );
};

export default Home;
