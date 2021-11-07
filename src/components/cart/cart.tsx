import { DeleteIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  Divider,
  VStack,
  Flex,
  NumberDecrementStepper,
  HStack,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Button,
  IconButton,
} from "@chakra-ui/react";
import currency from "currency.js";
import Lottie from "lottie-react";
import { useCartContext, CartItem } from "../providers/cartProvider";
import { useCurrencyContext } from "../providers/currencyProvider";
import Tumbleweed from "./tumbleweed.json";

export const Cart: React.FC = () => {
  const { items, totalPrice, clearCart } = useCartContext();
  const { currencySymbol, currency } = useCurrencyContext();
  const isCartEmpty = items.length === 0;

  if (isCartEmpty) {
    return (
      <VStack align="stretch" spacing={4}>
        <Box m={4}>
          <Lottie animationData={Tumbleweed} autoplay={true} loop={true} />
        </Box>
        <Text textAlign="center" fontSize="small">
          Nothing to see here, your cart is empty
        </Text>
        <Button colorScheme="brand">Start shopping!</Button>
      </VStack>
    );
  }

  return (
    <VStack role="list" spacing={4} align="stretch" divider={<Divider />}>
      {items.map((i) => (
        <CartItemRow key={i.product.productId} item={i} />
      ))}

      <Text fontWeight="bold" fontSize={20} mt={4}>
        Total: {currencySymbol}
        {totalPrice} {currency}
      </Text>

      <VStack spacing={3} align="stretch">
        <Button
          variant="ghost"
          colorScheme="red"
          onClick={() => {
            if (window.confirm(`Are you sure you want to clear your cart?`)) {
              clearCart();
            }
          }}
        >
          Clear cart
        </Button>
        <Button colorScheme="brand">Proceed to checkout</Button>
      </VStack>
    </VStack>
  );
};

interface CartItemProps {
  item: CartItem;
}

const CartItemRow: React.FC<CartItemProps> = ({ item }) => {
  const { upsertItem, removeItem } = useCartContext();
  const { convertPrice, currencySymbol } = useCurrencyContext();
  const { product, quantity } = item;

  const unitPrice = convertPrice(product.unitPrice);

  return (
    <Flex
      role="listitem"
      direction="row"
      align="center"
      justify="space-between"
    >
      <Box>
        <Text fontSize={18} flexGrow={1}>
          {product.name}
        </Text>
        <Text fontSize={14}>
          {currencySymbol}
          {unitPrice} each
        </Text>
        <Text fontWeight="bold">
          Subtotal: {currencySymbol}
          {currency(unitPrice).multiply(quantity).toString()}
        </Text>
      </Box>
      <HStack spacing={0}>
        <NumberInput
          w={20}
          name="quantity"
          aria-label="quantity"
          defaultValue={quantity}
          min={0}
          max={product.maximumQuantity || Infinity}
          onChange={(_string, number) => upsertItem(product, number)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <IconButton
          aria-label="remove item"
          type="button"
          onClick={() => {
            removeItem(product.productId);
          }}
          icon={<DeleteIcon />}
        />
      </HStack>
    </Flex>
  );
};
