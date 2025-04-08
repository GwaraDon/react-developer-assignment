import { Product, ProductsResponse } from "@/types/product";

const BASE_URL = "https://dummyjson.com";

export const fetchProducts = async (
    page: number = 1,
    limit: number = 12
): Promise<ProductsResponse> => {
    const skip = (page - 1) * limit;
    const response = await fetch(
        `${BASE_URL}/products?skip=${skip}&limit=${limit}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch products");
    }
    return response.json();
};

export const fetchProductById = async (id: number): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) {
        throw new Error("Failed to fetch product");
    }
    return response.json();
};
