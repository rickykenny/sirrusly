import { Product } from "../types/product";
import faker from "faker";

export function getTestItems<T>(getter: () => T, count: number) {
  return Array.from({ length: count }, () => getter());
}

export function getTestProduct(): Product {
  return {
    productId: faker.datatype.uuid(),
    description: faker.commerce.productDescription(),
    name: faker.commerce.productName(),
    unitPrice: faker.datatype.float(),
    maximumQuantity: faker.datatype.number(999),
  };
}
