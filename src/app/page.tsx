import ProductList from "@/components/ProductList/ProductList";
import Pagination from "@/components/Pagination/Pagination";
import { fetchProducts } from "@/services/api";

export default async function Home({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const { products, total } = await fetchProducts(currentPage);
    const totalPages = Math.ceil(total / 12); // Assuming 12 items per page

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-dark flex-1">
                Our Products
            </h1>
            <ProductList products={products} />
            <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
    );
}
