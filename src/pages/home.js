import React from "react";

import logo from "../assets/homeTitle.png";
import { Img, Flex, Text, Box } from "@chakra-ui/react";
import ContactButton from "../components/contactButton";
function Home() {
  return (
    <Box bg="#161616" position="relative" h="100vh">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="calc(100% - 45.5px)"
      >
        <Img src={logo} alt="title" maxW="90%" />
        <Text color="#fff" textAlign="center" fontSize="12px" mt="3.5em">
          BUREIKOU - [BOO-REY-KOO] JAPANESE 無礼講 <br /> putting everything
          aside to be yourself
        </Text>
        <ContactButton mode="light" bottom={true}>
          contact us
        </ContactButton>
      </Flex>
    </Box>
  );
}

export default Home;