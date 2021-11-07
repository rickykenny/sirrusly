import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductCard } from "../components/products/productCard";
import { getTestItems, getTestProduct } from "./utils";

export default {
  title: "Product/Product card",
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const product = getTestProduct();
const products = getTestItems(getTestProduct, 8);

const Template: ComponentStory<typeof ProductCard> = () => (
  <ProductCard
    quantityInCart={undefined}
    product={product}
    onAddToCart={() => alert("dis")}
  />
);

export const SingleProduct = Template.bind({});
