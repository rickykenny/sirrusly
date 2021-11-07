/** A foreign exchange rate */
export interface FXRate {
  /** The source currency for the exchange rate */
  sourceCurrency: string;
  /** The target currency for the exchange rate */
  targetCurrency: string;
  /** The conversation rate from the source currency to the target currency */
  rate: number;
}
