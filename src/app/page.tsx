import { fetchProducts } from "@/services/api";
import ProductList from "@/components/ProductList";

export default async function Home() {
    const { products } = await fetchProducts();

    return (
        <main className="min-h-screen p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Our Products</h1>
                <ProductList products={products} />
            </div>
        </main>
    );
}
