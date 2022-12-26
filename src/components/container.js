import React from "react";
import { Box } from "@chakra-ui/react";
function Container({ children }) {
  return (
    <Box bg="#161616" position="relative">
      {children}
    </Box>
  );
}

export default Container;
