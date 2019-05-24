import { ProductForecast } from './ProductForecast';

export interface Product {
    id: number;
    imgUrl: string;
    asin: string;
    category: string;
    currentStock: number;
    description: string;
    name: string;
    salesVelocity: number;
    sku: string;
    productForecast: ProductForecast;
}

