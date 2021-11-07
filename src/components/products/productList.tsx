import { Grid } from "@chakra-ui/react";
import { Product } from "../../types/product";
import { useCartContext } from "../providers/cartProvider";
import { ProductCard } from "./productCard";

export const ProductList: React.FC<{ products: Product[] }> = ({
  products,
}) => {
  const cartContext = useCartContext();

  return (
    <Grid
      gap={4}
      gridTemplateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
    >
      {products.map((product) => {
        const itemInCart = cartContext.items.find(
          (i) => i.product.productId === product.productId
        );

        return (
          <ProductCard
            key={product.productId}
            product={product}
            onAddToCart={cartContext.upsertItem}
            quantityInCart={itemInCart?.quantity || undefined}
          />
        );
      })}
    </Grid>
  );
};
