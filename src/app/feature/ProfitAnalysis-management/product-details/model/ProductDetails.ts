export interface ProductDetails {
  id: number;
  productPrice: number;
  shippingDetails: string;
  conditionType: string;
  prime: number;
  primeShipping: number;
  delivery: string;
  seller: string;
  sellerRating: string;
  sellerPercentage: number;
  sellerSentiment: number;
  sellerUrl: string;
  asin: string;
  url: string;
  isFreeShipping: number;
  isAmazonFullfilled: number;
  recordedTime: Date;
  totalRating: number;
  rank: number;
  buyboxWinner: number;
  sellerId: string;
  currency: string;
}
