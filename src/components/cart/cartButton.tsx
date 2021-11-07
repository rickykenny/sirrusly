import {
  Badge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { useEffect, useRef, useState } from "react";
import { useCartContext } from "../providers/cartProvider";
import { CurrencySelector } from "../providers/currencySelector";

import { Cart } from "./cart";
import cartInIcon from "./cart-in-out.json";
import addItemAnimation from "./cart-loop.json";

export const CartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="view cart"
        icon={<CartIcon />}
        size="lg"
        h="64px"
        w="64px"
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            Shopping cart
            <Flex fontSize="medium" fontWeight="normal" align="center">
              Show prices in{" "}
              <Box ml={1}>
                <CurrencySelector />
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Cart />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface CartIconProps {
  /** the width of the icon */
  size?: string;
}

export const CartIcon: React.FC<CartIconProps> = ({ size }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const [animation, setAnimation] = useState<any>(cartInIcon);

  // play animation after delay
  useEffect(() => {
    setTimeout(() => {
      lottieRef?.current?.playSegments([0, 70], true);
    }, 500);
  }, []);

  const { totalPrice, items } = useCartContext();

  // play add animation if items or quantity changes
  useEffect(() => {
    if (totalPrice !== "0.00") {
      setAnimation(addItemAnimation);
      // allow `setAnimation` change to propagate
      setTimeout(() => {
        lottieRef?.current?.goToAndPlay(60);
      }, 1);
    }
  }, [totalPrice]);

  return (
    <Box width={size || "30px"} position="relative">
      <Lottie
        lottieRef={lottieRef}
        autoplay={false}
        loop={false}
        animationData={animation}
      />
      {!!items.length && (
        <Badge colorScheme="brand" position="absolute" top={-2} right={-2}>
          {items.length}
        </Badge>
      )}
    </Box>
  );
};
