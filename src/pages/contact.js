import { Text, Box, Textarea, Button, Flex, Img } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ContactInput from "../components/contactInput";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagramLogo.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({ startEvent: "load", once: true });
    Aos.refresh();
  }, []);
  return (
    <Box
      // h="100vh"
      // overflowY={"hidden"}
      bg="#CDC152"
      px={["1em", "1em", "131px"]}
      py="68px"
      display={["block", "block", "flex"]}
      alignItems="center"
    >
      <Box w={["100%", "100%", "50%"]}>
        <Box data-aos-delay="100" data-aos="fade-up">
          <ContactInput placeholder="Name*" />
        </Box>
        <Box data-aos-delay="200" data-aos="fade-up">
          <ContactInput placeholder="Company*" />
        </Box>
        <Box data-aos-delay="300" data-aos="fade-up">
          <ContactInput placeholder="Mobile*" />
        </Box>
        <Box data-aos-delay="400" data-aos="fade-up">
          <ContactInput placeholder="Email*" />
        </Box>
        <Box data-aos-delay="500" data-aos="fade-up">
          <Textarea
            data-aos="fade-up"
            borderRadius="0"
            border="2px solid #161616"
            variant="unstyled"
            placeholder="Question*"
            _placeholder={{
              color: "#161616",
            }}
            fontWeight="600"
            px="25px"
            py="12px"
            color="#161616"
          />
        </Box>
        <Box data-aos-delay="600" data-aos="fade-up">
          <Button
            variant="unstyled"
            w="181px"
            h="44px"
            border="3px solid #161616"
            borderRadius="0"
            color="#161616"
            fontWeight={"700"}
            mt="10px"
            data-aos="fade-up"
          >
            Send
          </Button>
        </Box>
      </Box>
      <Flex
        color=" #161616"
        w={["100%", "100%", "50%"]}
        flexDirection="column"
        alignItems={"flex-end"}
        gap="2em"
      >
        <Text
          fontWeight="700"
          textAlign="right"
          fontSize="48px "
          data-aos="fade-up"
          data-aos-delay="700"
        >
          Just be yourself!
        </Text>
        <Box>
          <Text textAlign="right" data-aos="fade-in" data-aos-delay="800">
            Contact us: +1 (533) 6454 45454 12/53 Towers Ave., 19726,
            California, USA
          </Text>
          <Text
            textAlign="right"
            fontWeight="700"
            data-aos="fade-in"
            data-aos-delay="900"
          >
            info@booreykoo.com
          </Text>
        </Box>
        <Flex gap="1em">
          <Img src={facebook} alt="facebook" />
          <Img src={instagram} alt="instagram" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Contact;
