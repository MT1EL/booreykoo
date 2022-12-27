import { Box, Grid, GridItem, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import title from "../assets/TitleBlack.png";
import ContactButton from "../components/contactButton";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <Box bg="#fff" position={"relative"} minH="100vh" pb="20px">
      <Img
        src={title}
        alt="title"
        mx="auto"
        py="6.875em"
        maxW="90%"
        data-aos="zoom-in"
      />

      <Grid
        templateColumns={["repeat(1fr)", "repeat(1fr)", "repeat(2, 1fr)"]}
        gap={4}
        color="#161616"
        w="90%"
        maxW={1100}
        mx="auto"
        data-aos="zoom-in"
      >
        <GridItem colSpan={[1, 1, 2]}>
          <Text fontWeight={"700"}>About us</Text>
          <Box w="13px" bg="#333333" h="3px" my="15px" />
        </GridItem>
        <GridItem>
          <Text textAlign={"justify"}>
            Booreykoo is a branding, web development, design, and marketing firm
            with more than fourteen years of industry experience, serving
            clients worldwide. Welcome to the future of design. Lorem ipsum
            dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
            wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
            suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis
            autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, delenit vel illum dolore delenit eu feugiat
            nulla facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit augue duis dolore te delenit
            feugait nulla se molestie consequat, delenit vel illum dolore
            delenit eu feugiat nulla facilisis at vero eros et accumsan et iusto
            odio dignissim qui blandit praesent luptatum zzril delenit augue
            duis dolore te delenit feugait nulla elit esse delenit molestie cet
            facilisi
          </Text>
        </GridItem>

        <GridItem rowSpan={[1, 2]}>
          <Text textAlign={"justify"}>
            Booreykoo is a branding, web development, design, and marketing firm
            with more than fourteen years of industry experience, serving
            clients worldwide. Welcome to the future of design ut laoreet dolore
            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
            nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip
            ex ea commodo consequat. Duis autem vel eum iriure dolor in
            hendrerit in vulputate velit esse. Molestie consequat, delenit vel
            illum dolore delenit eu feugiat nulla facilisis at vero eros et
            accumsan et iusto odio dignissim qui blandit praesent luptatum zzril
            delenit augue duis dolore te delenit feugait nulla se molestie
            consequat, delenit vel illum dolore delenit eu feugiat nulla
            facilisis at vero eros et accumsan et iusto odio dignissim qui
            blandit praesent luptatum zzril delenit.
          </Text>
        </GridItem>
      </Grid>
      <Box mx="auto" position="relative" w="190px" h="90px">
        <ContactButton mode={"dark"} bottom={false}>
          contact us
        </ContactButton>
      </Box>
    </Box>
  );
}

export default About;
