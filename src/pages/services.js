import { Text, Box, Flex, Grid } from "@chakra-ui/react";
import React, { useEffect } from "react";
import ContactButton from "../components/contactButton";
import Aos from "aos";
import "aos/dist/aos.css";
function Services() {
  const data = [
    {
      title: "Logo and Brand identity pack",
      content:
        "Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "SEO - Search engine optimization",
      content:
        "More than 3 billion searches a day on Google alone. We leave no resources to make sure that your website is optimized accordingly to Google standards. ",
    },
    {
      title: "Content marketing",
      content:
        "Producing content that does not return results is simply a waste of resources. We create engaging and effective content for you.",
    },
    {
      title: "Web design and development",
      content:
        "Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "Social media management",
      content:
        "Ut wisi enim ad minim corper suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "CRO - Conversion rate optimization",
      content:
        "lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "App design and development",
      content:
        "Search engine optimization suscipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "PPC",
      content:
        "Pay-per-click (PPC) advertising ipit lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
    {
      title: "Review management",
      content:
        "lobortis nis. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.",
    },
  ];
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Box bg="#fff" minH="100vh" pt="5em">
      <Box color="#161616" maxW="1300px" mx="auto" px="5%" data-aos="fade-up">
        <Box>
          <Text fontWeight={"700"}>Services</Text>
          <Box w="13px" bg="#333333" h="3px" my="15px" />
        </Box>
        <Text textAlign={"justify"}>
          Booreykoo is a branding, web development, design, and marketing firm
          with more than fourteen years of industry experience, serving clients
          worldwide. Welcome to the future of design. Our main goal is not only
          to rank your website higher but also maintain its high rank once
          achieved.
        </Text>
      </Box>
      <Flex mt="2em" flexDirection={["column", "column", "row"]}>
        <Flex
          bg={"#CDC152"}
          w={["100%", "100%", "40%"]}
          maxW={["100%", "100%", "220px"]}
          py={["5", "5", "0"]}
          justifyContent="center"
          alignItems={"center"}
        >
          <Text
            color="#161616"
            fontWeight={"700"}
            transform={["0", "0", "rotate(-90deg)"]}
          >
            just be yourself
          </Text>
        </Flex>
        <Grid
          gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
          gap="5em"
          bg="#161616"
          color="#fff"
          px="3em"
          pt="112px"
          pb="69px"
        >
          {data.map((item) => (
            <Box key={item.title} data-aos="fade-up">
              <Text fontSize={"22px"}>{item.title}</Text>
              <Text mt="10px">{item.content}</Text>
              <Box w="13px" bg="#fff" h="3px" my="15px" />
            </Box>
          ))}
        </Grid>
      </Flex>
      <Box position="relative" bg="#fff" h="20" w="190px" mx="auto">
        <ContactButton mode="dark">contact us</ContactButton>
      </Box>
    </Box>
  );
}

export default Services;
