import { Flex } from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";

interface NavigationMenuItemProps {
  to: string;
}
export const NavMenuItem: React.FC<NavigationMenuItemProps> = ({
  children,
  to,
}) => {
  let match = useRouteMatch({
    path: to,
    exact: false,
  });

  return (
    <Flex
      as={Link}
      to={to}
      borderBottom={"3px solid"}
      borderBottomColor={match ? "brand.600" : "transparent"}
      color={match ? "brand.600" : "inherit"}
      padding={"0 16px"}
      minWidth={"80px"}
      _hover={{
        borderBottom: "3px solid",
        borderBottomColor: "brand.500",
      }}
      fontWeight={700}
      justify="center"
      align="center"
    >
      {children}
    </Flex>
  );
};
