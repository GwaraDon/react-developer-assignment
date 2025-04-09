import ProductList from "@/components/ProductList/ProductList";
import Pagination from "@/components/Pagination/Pagination";
import { fetchProducts } from "@/services/api";
import { Suspense } from "react";
import Loading from "./loading";
async function ProductSection({ currentPage }: { currentPage: number }) {
    const { products, total } = await fetchProducts(currentPage);
    const totalPages = Math.ceil(total / 12); // Assuming 12 items per page

    return (
        <>
            {products && products.length > 0 ? (
                <>
                    <ProductList products={products} />
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                </>
            ) : (
                <div className="text-center text-gray-500">
                    No products found for this page.
                </div>
            )}
        </>
    );
}

export default function Home({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const currentPage = searchParams.page ? parseInt(searchParams.page, 10) : 1;

    return (
        <div className="space-y-8">
            <h1 className="text-2xl font-bold text-gray-dark flex-1">
                Our Products
            </h1>
            <Suspense fallback={<Loading />}>
                <ProductSection currentPage={currentPage} />
            </Suspense>
        </div>
    );
}
