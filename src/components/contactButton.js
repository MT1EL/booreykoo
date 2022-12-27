import { Box, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function ContactButton({ mode, bottom }) {
  useEffect(() => {
    Aos.init({
      startEvent: "load",
      once: true,
    });
  }, []);
  return (
    <Box
      data-aos="fade-down"
      data-aos-delay="200"
      w="190px"
      h="54px"
      bg="transparent"
      border={`3px solid #CDC152`}
      borderWidth="3px"
      position="absolute"
      bottom={bottom ? "74px" : "0px"}
      display="flex"
      alignItems="center"
      _hover={{
        bg: "#CDC152",
      }}
      cursor="pointer"
      as="a"
      href="/Contact"
    >
      <Text
        mx="auto"
        fontWeight="700"
        fontSize="20px"
        color={mode === "dark" ? "#000" : "#fff"}
      >
        contact us
      </Text>
    </Box>
  );
}

export default ContactButton;
