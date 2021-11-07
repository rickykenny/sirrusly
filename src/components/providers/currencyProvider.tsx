import currency from "currency.js";
import { createContext, useContext, useEffect, useState } from "react";

/** A currency exchange rate */
export interface CurrencyRate {
  sourceCurrency: string;
  targetCurrency: string;
  rate: number;
}

export enum Currency {
  AUD = "AUD",
  GBP = "GBP",
  USD = "USD",
}

export type CurrencyConverterFunction = (price: number) => number;

interface CurrencyProviderState {
  isLoading: boolean;
  currencies: Currency[];
  /** the selected currency */
  currency: Currency;
  /** set the selected currency */
  setCurrency: (currency: Currency) => void;
  currencySymbol: string;
  /** all avaliable exchange rates */
  rates?: CurrencyRate[];
  /** the current exchange rate */
  rate?: CurrencyRate;
  convertPrice: CurrencyConverterFunction;
}

const CurrencyContext = createContext<CurrencyProviderState>({
  isLoading: true,
  currencies: [],
  currency: Currency.AUD,
  setCurrency: () => {},
  currencySymbol: "",
  convertPrice: (price: number) => 0,
});

export const CurrencyProvider: React.FC = ({ children }) => {
  const [isLoading] = useState(false);
  const [currency, setCurrency] = useState(Currency.AUD);
  const [rates] = useState<CurrencyRate[]>([
    {
      sourceCurrency: "AUD",
      targetCurrency: "USD",
      rate: 0.75,
    },
    {
      sourceCurrency: "USD",
      targetCurrency: "AUD",
      rate: 1.33,
    },
    {
      sourceCurrency: "AUD",
      targetCurrency: "GBP",
      rate: 0.55,
    },
    {
      sourceCurrency: "GBP",
      targetCurrency: "AUD",
      rate: 1.82,
    },
  ]);
  const [rate, setRate] = useState<CurrencyRate | undefined>();

  // update current exchange rate when currency is changed
  useEffect(() => {
    const activeRate = rates?.find(
      (rate) =>
        rate.sourceCurrency === Currency.AUD && rate.targetCurrency === currency
    );
    setRate(activeRate);
  }, [currency, rates]);

  return (
    <CurrencyContext.Provider
      value={{
        isLoading,
        currencies: [Currency.AUD, Currency.GBP, Currency.USD],
        currency,
        setCurrency,
        rates,
        rate,
        convertPrice: (price: number) => convertPrice(price, rate),
        currencySymbol: getCurrencySymbol(currency),
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrencyContext = () => useContext(CurrencyContext);

/** Converts the price into the desired currency, using the provided Currency Rate */
export function convertPrice(price: number, rate?: CurrencyRate) {
  return rate ? currency(price).multiply(rate?.rate).value : price;
}

export function getCurrencySymbol(currency: Currency) {
  if (currency === Currency.GBP) {
    return "£";
  } else {
    return "$";
  }
}
