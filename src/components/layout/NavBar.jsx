import {
  Container,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  Box,
} from "@chakra-ui/react";
import React from "react";
import logo from "../../assets/logo.png";

const NavBar = () => {
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
            spacing={8}
            fontWeight="500"
            textTransform="uppercase"
            listStyleType="none"
          >
            <Box as="li">
              <Link
                _hover={{ color: "purple.600", transform: "scale(1.1)" }}
                href="#home"
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </Box>
            <Box as="li">
              <Link
                _hover={{ color: "purple.600", transform: "scale(1.1)" }}
                href="#about"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </Box>
            <Box as="li">
              <Link
                _hover={{ color: "purple.600", transform: "scale(1.1)" }}
                href="#skills"
                smooth={true}
                duration={500}
              >
                Skills
              </Link>
            </Box>
            <Box as="li">
              <Link
                _hover={{ color: "purple.600", transform: "scale(1.1)" }}
                href="#projects"
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </Box>
            <Box as="li">
              <Link
                _hover={{ color: "purple.600", transform: "scale(1.1)" }}
                href="#contact"
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </Box>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
};

export default NavBar;
