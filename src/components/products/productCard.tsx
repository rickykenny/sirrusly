import {
  Box,
  BoxProps,
  Button,
  Divider,
  Heading,
  Text,
  VStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  HStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { Card } from "../card";
import { CurrencySelector } from "../providers/currencySelector";
import { ProductPrice } from "./productPrice";

export interface ProductCardProps extends BoxProps {
  product: Product;
  quantityInCart: number | undefined;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  quantityInCart,
  onAddToCart,
  ...boxProps
}) => {
  const { name, description, unitPrice, maximumQuantity } = product;
  const isOutOfStock = !maximumQuantity;

  const [quantity, setQuantity] = useState(quantityInCart || 1);

  // sync quantity with quantityInCart
  useEffect(() => {
    if (quantityInCart) {
      setQuantity(quantityInCart);
    }
  }, [quantityInCart]);

  return (
    <Card
      as="section"
      border={"1px solid"}
      borderColor="gray.200"
      {...boxProps}
    >
      <VStack
        spacing={4}
        align="stretch"
        justify="space-between"
        p={4}
        flexGrow={1}
      >
        <VStack spacing={4} align="stretch" flexGrow={1}>
          <Box>
            <Heading fontSize={24} aria-label="Product name">
              {name}
            </Heading>
            <HStack align="center">
              <ProductPrice
                aria-label={"price"}
                fontSize={20}
                fontWeight={700}
                unitPrice={unitPrice}
              />
              <CurrencySelector />
            </HStack>
          </Box>
          <Text aria-label="Product description">{description}</Text>
        </VStack>
        <Divider />
        <Wrap
          direction="row"
          justify="space-between"
          align="center"
          alignItems="flex-end"
        >
          <WrapItem aria-label="Stock level">
            {isOutOfStock ? (
              <Text color="red.500">Out of stock</Text>
            ) : (
              <Text>{maximumQuantity} available</Text>
            )}
          </WrapItem>
          <WrapItem>
            <HStack spacing={2} w="100%">
              {quantityInCart}
              <NumberInput
                w={20}
                name="quantity"
                aria-label="quantity"
                defaultValue={quantity}
                min={0}
                max={maximumQuantity || Infinity}
                isDisabled={isOutOfStock}
                value={quantity}
                onChange={(_string, number) => setQuantity(number)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                w={140}
                variant={
                  quantityInCart && quantityInCart > 0 ? "solid" : "outline"
                }
                colorScheme={"brand"}
                _hover={{ colorScheme: "brand" }}
                isDisabled={isOutOfStock}
                onClick={() => onAddToCart(product, quantity)}
              >
                {quantityInCart
                  ? quantityInCart === quantity
                    ? "Added to cart"
                    : "Update"
                  : "Add to cart"}
              </Button>
            </HStack>
          </WrapItem>
        </Wrap>
      </VStack>
    </Card>
  );
};
