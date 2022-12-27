import { Grid, Img, Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import image1 from "../assets/portfolio1.png";
import image2 from "../assets/portfolio2.jpg";
import image3 from "../assets/portfolio3.png";
import image4 from "../assets/portfolio4.png";
import image5 from "../assets/portfolio5.png";
import Aos from "aos";
import "aos/dist/aos.css";
function Portfolio() {
  const [count, setCount] = useState(null);
  const data = [image1, image2, image3, image4, image5, image5];
  const animation = [
    "zoom-in-up",
    "zoom-in-up",
    "zoom-in-up",
    "zoom-in-up",
    "zoom-in-up",
    "zoom-in-up",
  ];
  useEffect(() => {
    Aos.init({ startEvent: "load", once: true });
    Aos.refresh();
  }, []);
  return (
    <Box px="5%" bg="#fff" mx="auto" py="6em">
      <Flex gap="0.2em" w="fit-content" mx="auto" pb="1em">
        {data.map((item, index) => (
          <Box
            key={index}
            w="7.56px"
            h="7.56px"
            borderRadius="50%"
            bg={count === index ? "#161616" : "#c4c4c4c4"}
          />
        ))}
      </Flex>

      <Grid gridTemplateColumns={["1fr", "1fr", "repeat(3, 1fr)"]} gap="21px">
        {data.map((item, index) => (
          <Box
            position="relative"
            key={index.toString()}
            role="group"
            cursor={"pointer"}
            data-aos={animation[index]}
          >
            <Img
              src={item}
              alt="portfolioPic"
              onMouseEnter={() => setCount(index)}
            />
            <Box
              _groupHover={{ display: "block" }}
              display="none"
              position="absolute"
              inset="0 0 0 0"
              bg="#161616"
              opacity="0.9"
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
}

export default Portfolio;
