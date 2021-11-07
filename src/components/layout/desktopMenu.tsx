import { LinkBox, Flex, Stack } from "@chakra-ui/react";
import { MenuProps } from "./appLayout";
import { NavMenuItem } from "./navMenu";
import { CartButton } from "../cart/cartButton";

const DesktopMenu: React.FC<MenuProps> = ({ links, logo }) => {
  return (
    <>
      <LinkBox>
        <Flex h={"100%"} w={"260px"} justify="center" align="center">
          {logo}
        </Flex>
      </LinkBox>

      <Stack
        direction="row"
        flexGrow={1}
        flexWrap={"wrap"}
        as="nav"
        borderLeft="1px solid"
        borderColor="gray.100"
      >
        {links.map((link) => (
          <NavMenuItem key={link.link} to={link.link}>
            {link.text}
          </NavMenuItem>
        ))}
      </Stack>

      <Stack
        flexGrow={0}
        direction="row"
        borderLeft="1px solid"
        borderColor="gray.100"
      >
        <CartButton />
      </Stack>
    </>
  );
};

export default DesktopMenu;
