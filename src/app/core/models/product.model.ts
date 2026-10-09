export interface Review {
  id?: string;
  userName: string;
  rating: number; // 1 - 5
  comment: string;
  createdAt: string;
}

export interface TechnicalSpecifications {
  origin?: string;
  scovilleHeatUnits: string | number;
  flavorProfile: string;
  recommendedUses: string;
  warning?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  category: string;
  stock: number;
  specifications: TechnicalSpecifications;
  reviews?: Review[];
}