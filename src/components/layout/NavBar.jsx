import { Container, HStack, Image, Link, Text, Box } from "@chakra-ui/react";
import React, { useState } from "react";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <Box
      as="nav"
      py={4}
      boxShadow="md"
      bg="white"
      position="fixed"
      width="100%"
      zIndex="1000"
    >
      <Container
        maxW={["400px", "500px", "700px", "900px", "1600px", "1800px"]}
        px={8}
      >
        <HStack justifyContent="space-between">
          <HStack spacing={4} alignItems="center">
            <Image src={logo} boxSize="50px" objectFit="contain" />
            <Text
              letterSpacing={3}
              fontWeight="600"
              color="purple.600"
              fontSize="xl"
              textTransform="uppercase"
            >
              MEET KHETANI
            </Text>
          </HStack>
          <HStack
            as="ul"
            spacing={2}
            fontWeight="500"
            textTransform="uppercase"
            listStyleType="none"
          >
            {["Home", "About", "Skills", "Projects", "Contact"].map((link) => (
              <Box
                as="li"
                key={link}
                className={`nav-link ${
                  activeLink === link.toLowerCase() ? "active" : ""
                }`}
                _hover={{ color: "#f3eef8" }}
                onClick={() => handleLinkClick(link.toLowerCase())}
              >
                <Link
                  className="animateLink"
                  _hover={{ transform: "scale(1.1)" }}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </Link>
              </Box>
            ))}
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default NavBar;
