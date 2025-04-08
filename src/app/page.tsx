import ProductList from "@/components/ProductList/ProductList";
import { fetchProducts } from "@/services/api";

export default async function Home() {
    const { products } = await fetchProducts(1);

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold text-gray-dark">Our Products</h1>
            <ProductList products={products} />
        </div>
    );
}
