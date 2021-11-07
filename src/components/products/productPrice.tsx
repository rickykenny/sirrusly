import { Center, Text, TextProps } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/react";
import { useCurrencyContext } from "../providers/currencyProvider";

interface ProductPriceProps extends TextProps {
  unitPrice: number;
}

export const ProductPrice: React.FC<ProductPriceProps> = (props) => {
  const { unitPrice, ...textProps } = props;
  const { isLoading, convertPrice, currencySymbol } = useCurrencyContext();

  if (isLoading) {
    return (
      <Center aria-label={textProps["aria-label"]} minW={10}>
        <Spinner size="xs" />
      </Center>
    );
  }

  return (
    <Text {...textProps}>
      {currencySymbol}
      {convertPrice(unitPrice)}
    </Text>
  );
};

// TODO: Refactor to use currency.js to avoid floating point issues
