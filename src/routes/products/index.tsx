import { Heading, VStack } from "@chakra-ui/react";
import { Content } from "../../components/layout/content";
import { ProductList } from "../../components/products/productList";

const products = [
  {
    productId: "100AC-001",
    name: "Cumulus",
    description:
      'Cumulus clouds are clouds which have flat bases and are often described as "puffy", "cotton-like" or "fluffy" in appearance.',
    unitPrice: 10.98,
    maximumQuantity: null,
  },
  {
    productId: "100AC-002",
    name: "Stratus",
    description:
      "Stratus hang low in the sky as a flat, featureless, uniform layer of grayish cloud. It resembles fog that hugs the horizon (instead of the ground).",
    unitPrice: 12.34,
    maximumQuantity: null,
  },
  {
    productId: "100AC-003",
    name: "Stratocumulus",
    description:
      "Low, puffy, grayish or whitish clouds that occur in patches with blue sky visible in-between. When viewed from underneath, stratocumulus have a dark honeycomb appearance. ",
    unitPrice: 238.55,
    maximumQuantity: null,
  },
  {
    productId: "100AC-004",
    name: "Altocumulus",
    description:
      'Altocumulus clouds are the most common clouds of the middle atmosphere. They look like the wool of sheep or scales of mackerel fish -- hence their nicknames "sheep backs" and "mackerel skies."',
    unitPrice: 0.99,
    maximumQuantity: 100,
  },
  {
    productId: "100AC-005",
    name: "Nimbostratus",
    description:
      "Nimbostratus clouds cover the sky in a dark gray layer. They can extend from the low and middle layers of the atmosphere and are thick enough to blot out the sun.",
    unitPrice: 68.03,
    maximumQuantity: null,
  },
  {
    productId: "100AC-006",
    name: "Altostratus",
    description:
      "Altostratus appear as gray or bluish-gray sheets of cloud that partially or totally cover the sky at mid-levels.",
    unitPrice: 15.21,
    maximumQuantity: 10,
  },
  {
    productId: "100AC-007",
    name: "Cirrocumulus",
    description:
      "Cirrocumulus clouds are small, white patches of clouds often arranged in rows that live at high altitudes and are made of ice crystals.",
    unitPrice: 82.84,
    maximumQuantity: 20,
  },
  {
    productId: "100AC-008",
    name: "Cirrostratus",
    description:
      "Cirrostratus clouds are transparent, whitish clouds that veil or cover nearly the entire sky.",
    unitPrice: 114.68,
    maximumQuantity: null,
  },
  {
    productId: "100AC-009",
    name: "Cirrus",
    description:
      'Like their name (which is Latin for "curl of hair") suggests, cirrus are thin, white, wispy strands of clouds that streaks across the sky.',
    unitPrice: 12.95,
    maximumQuantity: null,
  },
];

export const ProductsRoute: React.FC = () => {
  return (
    <Content>
      <VStack spacing={6} align="flex-start">
        <Heading>Products</Heading>
        <ProductList products={products} />
      </VStack>
    </Content>
  );
};
