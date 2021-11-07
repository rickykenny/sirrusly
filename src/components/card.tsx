import { BoxProps, Flex } from "@chakra-ui/react";
interface CardProps extends BoxProps {}
export const Card: React.FC<CardProps> = ({ children, ...boxProps }) => {
  return (
    <Flex
      direction="column"
      borderRadius={8}
      position="relative"
      top={0}
      boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px"
      transition="all 0.3s"
      _hover={{
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        ...boxProps._hover,
      }}
      {...boxProps}
    >
      {children}
    </Flex>
  );
};
