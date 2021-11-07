import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Karla",
    body: "Karla",
  },
  colors: {
    brand: {
      "50": "#E8EEFC",
      "100": "#BFCFF7",
      "200": "#96B0F2",
      "300": "#6D92ED",
      "400": "#4573E8",
      "500": "#1C54E3",
      "600": "#1643B6",
      "700": "#113288",
      "800": "#0B225B",
      "900": "#06112D",
    },
  },
});

export default theme;
