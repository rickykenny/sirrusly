import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Link, useRouteMatch } from "react-router-dom";
import { MenuProps, NavLink } from "./appLayout";
import { CartButton } from "../cart/cartButton";

const MobileMenu: React.FC<MenuProps> = ({ links, logo }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <HStack flexGrow={1}>
      <Box flex="1 0 auto" pl={4}>
        {logo}
      </Box>
      <Box>
        <CartButton />

        <IconButton
          aria-label="open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          colorScheme="brand"
          size="lg"
          h="64px"
          w="64px"
        />
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex align="center">
            <Flex
              align="center"
              flex="1 0 auto"
              h="64px"
              borderBottomWidth="1px"
              p={4}
            ></Flex>
            <IconButton
              aria-label="close menu"
              color="white"
              backgroundColor="black"
              icon={<CloseIcon />}
              w="64px"
              h="64px"
              onClick={onClose}
            />
          </Flex>

          <DrawerBody>
            {links.map((link) => (
              <MenuLink key={link.link} onClick={onClose} {...link} />
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
};

export default MobileMenu;

const MenuLink: React.FC<NavLink & { onClick: () => void }> = ({
  text,
  link,
  onClick,
}) => {
  let match = useRouteMatch({
    path: link,
    exact: false,
  });

  return (
    <Link onClick={onClick} key={link} to={link}>
      <Text
        fontWeight={match ? 700 : "initial"}
        color={match ? "brand.600" : "initial"}
        fontSize={26}
      >
        {text}
      </Text>
    </Link>
  );
};
