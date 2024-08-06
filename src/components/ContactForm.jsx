// src/components/ContactForm.jsx
import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  useToast,
} from "@chakra-ui/react";

const ContactForm = () => {
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent.",
      description: "Thank you for contacting me. I will get back to you soon.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box
      as="form"
      p={4}
      borderWidth={1}
      borderRadius="lg"
      shadow="md"
      onSubmit={handleSubmit}
    >
      <VStack spacing={4}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your email" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your message" />
        </FormControl>
        <Button mt={4} colorScheme="teal" type="submit">
          Send
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
