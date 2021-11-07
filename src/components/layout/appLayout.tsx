import { Box, Flex, useBreakpointValue } from "@chakra-ui/react";
import { Footer } from "./footer";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";
import { Link } from "react-router-dom";

enum MenuMode {
  mobile,
  desktop,
}

export interface NavLink {
  link: string;
  text: string;
}

export interface MenuProps {
  logo: React.ReactElement;
  links: NavLink[];
}

const navLinks: NavLink[] = [
  {
    link: "/home",
    text: "home",
  },
  {
    link: "/products",
    text: "products",
  },
];

const menuProps: MenuProps = {
  links: navLinks,
  logo: (
    <Link to="/home">
      <Box as="span" fontSize={"32px"} color="brand.500" fontWeight={700}>
        _cirrusly
      </Box>
    </Link>
  ),
};

export const AppLayout: React.FC = ({ children }) => {
  const mode = useBreakpointValue({
    xs: MenuMode.mobile,
    md: MenuMode.desktop,
  });

  return (
    <>
      <Flex direction="column" height="100%">
        <Flex
          as="header"
          flex="0 0 auto"
          borderColor="gray.100"
          height={16}
          boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
          flexWrap="wrap"
        >
          {mode === MenuMode.desktop ? (
            <DesktopMenu {...menuProps} />
          ) : (
            <MobileMenu {...menuProps} />
          )}
        </Flex>
        <Flex id="app-content" overflowY="auto" direction="column" flexGrow={1}>
          <Box flexGrow={1}>{children}</Box>
          <Footer />
        </Flex>
      </Flex>
    </>
  );
};
