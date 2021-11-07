/** An available product */
export interface Product {
  /** The unique identifier for the product */
  productId: string;
  /** The name of the product */
  name: string;
  /** A description for the product */
  description: string;
  /** The unit price for the product in Australian Dollars (AUD) */
  unitPrice: number;
  /** The maximum quantity that is allowed to be ordered (in a single order) for the product */
  maximumQuantity: number | null;
}
