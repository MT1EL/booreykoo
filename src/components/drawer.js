import React from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Img,
  useDisclosure,
  Text,
  Box,
} from "@chakra-ui/react";
import Burger from "../assets/Burger.png";
import NavigationItem from "./navigationItem";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagramLogo.png";
function MainDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex justifyContent="flex-end" bg="#161616">
      <Button
        ref={btnRef}
        bg="transparent"
        onClick={onOpen}
        alignSelf="flex-end"
        position="fixed"
        top="10px"
        right="10px"
        zIndex={2}
      >
        <Img src={Burger} alt="burger" bg="#000" p="2" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={["full", "xs"]}
      >
        <DrawerOverlay />
        <DrawerContent bg="#CDC152" py="1.59375em">
          <DrawerCloseButton color="#161616" />
          <DrawerBody mt="68px" ml="15px">
            <NavigationItem>Home</NavigationItem>
            <NavigationItem>About</NavigationItem>
            <NavigationItem>Services</NavigationItem>
            <NavigationItem>Portfolio</NavigationItem>
            <NavigationItem>Contact</NavigationItem>
            <Text color="#161616" fontWeight="700" ml={"40px"} mt="5em">
              Just be yourself
            </Text>
          </DrawerBody>

          <DrawerFooter justifyContent="center">
            <Box mr="13.565px" cursor="pointer">
              <Img src={facebook} alt="facebook" />
            </Box>
            <Box ml="13.565px" cursor="pointer">
              <Img src={instagram} alt="instagram" />
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default MainDrawer;
