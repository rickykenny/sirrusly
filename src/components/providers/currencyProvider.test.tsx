import { convertPrice, Currency, getCurrencySymbol } from "./currencyProvider";

describe("convertPrice", () => {
  test("handles no rate", () => {
    expect(convertPrice(30)).toEqual(30);
  });
  test("handles a provided rate", () => {
    expect(
      convertPrice(30, {
        rate: 0.5,
        sourceCurrency: "AUD",
        targetCurrency: "USD",
      })
    ).toEqual(15);
  });
  test("handles decimals", () => {
    expect(
      convertPrice(0.1, {
        rate: 0.25,
        sourceCurrency: "AUD",
        targetCurrency: "USD",
      })
    ).toEqual(0.03);
  });
  test("handles javascript floating point issues", () => {
    expect(
      convertPrice(8.38, {
        rate: 0.3,
        sourceCurrency: "AUD",
        targetCurrency: "USD",
      })
    ).toEqual(2.51);
  });
});

describe("getCurrencySymbol", () => {
  test("handles GBP", () => {
    expect(getCurrencySymbol(Currency.GBP)).toEqual("£");
  });
  test("handles AUD", () => {
    expect(getCurrencySymbol(Currency.AUD)).toEqual("$");
  });
  test("handles USD", () => {
    expect(getCurrencySymbol(Currency.USD)).toEqual("$");
  });
});
