import { Select } from "@chakra-ui/react";
import { useCurrencyContext, Currency } from "./currencyProvider";

export const CurrencySelector: React.FC = () => {
  const { setCurrency, currency, currencies } = useCurrencyContext();

  return (
    <Select
      name="currency"
      value={currency}
      aria-label="currency"
      w={16}
      variant="unstyled"
      onChange={(e) => {
        const value = e.target.value as Currency;
        setCurrency(value);
      }}
    >
      {currencies.map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </Select>
  );
};
