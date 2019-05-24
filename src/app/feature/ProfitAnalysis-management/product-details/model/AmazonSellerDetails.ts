export interface AmazonSellerDetails {
  id: number;
  originalPrice: number;
  salePrice: number;
  upperBoundPrice: number;
  productTitle: string;
  availability: number;
  prime: number;
  sellerName: string;
  productReviews: number;
  pictureAvailable: number;
  asin: string;
  url: string;
  primeShipping: number;
  isAmazonFullfilled: number;
  createdDate: Date;
  lastModifiedDate: Date;
  rank: number;
  sellerId: string;
  country: string;
  productDescription: string;
  keywords: string;
  category: string;
  queryId: number;
  isAmazonChoice: number;
  processed: string;
}
