import { CartItem, getTotalCartPrice } from "./cartProvider";
import { CurrencyRate } from "./currencyProvider";

describe("getTotalCartPrice", () => {
  test("handles JS floating point issues", () => {
    const items: CartItem[] = [
      {
        product: {
          maximumQuantity: 1,
          description: "",
          name: "",
          productId: "a",
          unitPrice: 0.99,
        },
        quantity: 6,
      },
    ];

    expect(getTotalCartPrice(items)).toEqual("5.94");
  });

  test("handles multiple items with no rate", () => {
    const items: CartItem[] = [
      {
        product: {
          unitPrice: 1,
          maximumQuantity: 99,
          description: "",
          name: "",
          productId: "a",
        },
        quantity: 10,
      },
      {
        product: {
          unitPrice: 5,
          maximumQuantity: 99,
          description: "",
          name: "",
          productId: "a",
        },
        quantity: 2,
      },
    ];

    expect(getTotalCartPrice(items)).toEqual("20.00");
  });

  test("handles multiple items with exchange rate", () => {
    const items: CartItem[] = [
      {
        product: {
          unitPrice: 1,
          maximumQuantity: 99,
          description: "",
          name: "",
          productId: "a",
        },
        quantity: 10,
      },
      {
        product: {
          unitPrice: 5,
          maximumQuantity: 99,
          description: "",
          name: "",
          productId: "a",
        },
        quantity: 2,
      },
    ];

    const rate: CurrencyRate = {
      rate: 2,
      sourceCurrency: "USD",
      targetCurrency: "AUD",
    };

    expect(getTotalCartPrice(items, rate)).toEqual("40.00");
  });
});
