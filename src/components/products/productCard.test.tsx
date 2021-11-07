import React, { ReactElement } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductCard, ProductCardProps } from "./productCard";
import { getTestProduct } from "../../stories/utils";
import { CurrencyProvider } from "../providers/currencyProvider";

const testProduct = getTestProduct();
const onAddToCart = jest.fn();

const wrapWithCurrencyProvider = (component: ReactElement) => (
  <CurrencyProvider>{component}</CurrencyProvider>
);

/** renders the ProductCard wrapped in the CurrencyProvider */
const renderProductCard = (props: ProductCardProps) => {
  return render(wrapWithCurrencyProvider(<ProductCard {...props} />));
};

describe("ProductCard", () => {
  test("renders the 'add to cart' button", () => {
    render(<ProductCard product={testProduct} onAddToCart={onAddToCart} />);
    const addToCartButton = screen.getByText("Add to cart");
    expect(addToCartButton).toBeInTheDocument();
  });
  test("renders the price", () => {
    render(<ProductCard product={testProduct} onAddToCart={onAddToCart} />);
    const price = screen.getByLabelText(`price`);
    expect(price).toBeInTheDocument();
  });
  test("renders the currency", () => {
    renderProductCard({ product: testProduct, onAddToCart });

    const currency = screen.getByLabelText(`currency`);
    expect(currency).toHaveValue("AUD");
  });

  describe("when product is in stock", () => {
    const inStockProduct = { ...testProduct, maximumQuantity: 1 };
    test("renders out of stock message", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const message = screen.getByLabelText("Stock level");
      expect(message).toHaveTextContent(
        `${inStockProduct.maximumQuantity} available`
      );
    });
    test("Quantity is enabled", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const quantityInput = screen.getByLabelText("quantity");
      expect(quantityInput).toBeEnabled();
    });
    test("calls `onAddToCart` when button is pressed", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const addToCartButton = screen.getByText("Add to cart");
      fireEvent.click(addToCartButton);
      expect(onAddToCart).toBeCalled();
    });
  });

  describe("when product is out of stock", () => {
    const inStockProduct = { ...testProduct, maximumQuantity: null };
    test("renders out of stock message", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const message = screen.getByLabelText("Stock level");
      expect(message).toHaveTextContent(`Out of stock`);
    });
    test("Add to cart is disabled", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const addToCartButton = screen.getByText("Add to cart");
      expect(addToCartButton).toBeDisabled();
    });
    test("Quantity is disabled", () => {
      render(
        <ProductCard product={inStockProduct} onAddToCart={onAddToCart} />
      );
      const quantityInput = screen.getByLabelText("quantity");
      expect(quantityInput).toBeDisabled();
    });
  });
});
