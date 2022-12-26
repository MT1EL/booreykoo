import { Flex, Box, Text } from "@chakra-ui/react";
import React from "react";

const NavigationItem = ({ children }) => {
  return (
    <Flex position="relative" alignItems="center" role="group" cursor="pointer">
      <Box
        w="21px"
        h="4px"
        bg="#161616"
        opacity="0"
        _groupHover={{ opacity: "1" }}
      />
      <Text
        href={children}
        as="a"
        ml={"15px"}
        color="#161616"
        fontSize="32px"
        textAlign="justify"
        _groupHover={{ fontWeight: "700" }}
      >
        {children}
      </Text>
    </Flex>
  );
};

export default NavigationItem;
