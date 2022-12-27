import { Input } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function ContactInput({ placeholder }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Input
      data-aos="fade-up"
      border="2px solid #161616"
      px="25px"
      py="12px"
      outlineColor="transparent"
      placeholder={placeholder}
      color="#161616"
      _placeholder={{ color: "#161616" }}
      borderRadius="0"
      variant={"unstyled"}
      my="10px"
      fontWeight="600"
      w="100%"
    />
  );
}

export default ContactInput;
