import { Box, Flex, FlexProps } from "@chakra-ui/react";
import { Content } from "./content";

interface HeroProps extends FlexProps {}
export const Hero: React.FC<HeroProps> = ({ children, ...rest }) => {
  const { backgroundImage, ...flexProps } = rest;
  return (
    <Flex
      direction="column"
      align="center"
      className="hero"
      color="white"
      position="relative"
      w={"100%"}
      pt={8}
      sx={{
        mark: {
          backgroundColor: "gray.800",
          color: "white",
          boxDecorationBreak: "clone",
          p: "4px 8px",
        },
        "::before": {
          zIndex: -1,
          backgroundImage: backgroundImage,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          content: "''",
          filter:
            "sepia(100%) hue-rotate(190deg) saturate(350%) brightness(90%)",
        },
      }}
      {...flexProps}
    >
      <Content>
        <Box>{children}</Box>
      </Content>
    </Flex>
  );
};
