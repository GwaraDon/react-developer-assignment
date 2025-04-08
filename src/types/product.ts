export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    availabilityStatus: string;
    minimumOrderQuantity: number;
    reviews: Review[];
    image: string;
}

export interface Review {
    id: number;
    body: string;
    postId: number;
    rating: number;
    date: string;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}
