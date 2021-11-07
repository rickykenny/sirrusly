/** An order for one or more products */
export interface Order {
  /** The name of the customer */
  customerName: string;
  /** The email address of the customer */
  customerEmail: string;
  /**
     * A list of items to order

     *  min length of 1 */
  lineItems: OrderLineItem[];
}

/** A line item */
export interface OrderLineItem {
  /** The id for the product to order */
  productId: string;
  /** The quantity of the product to order */
  quantity: number;
}
