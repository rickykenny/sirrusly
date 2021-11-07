import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/karla/400.css";
import "@fontsource/karla/700.css";
import React from "react";
import theme from "../theme";
export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      {children}
    </ChakraProvider>
  );
};
