import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProductList } from "../components/products/productList";
import { getTestItems, getTestProduct } from "./utils";

export default {
  title: "Product/Product list",
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const products = getTestItems(getTestProduct, 8);

const Template: ComponentStory<typeof ProductList> = () => (
  <ProductList products={products} />
);

export const List = Template.bind({});
