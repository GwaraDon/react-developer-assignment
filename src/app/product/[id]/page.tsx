import { fetchProductById } from "@/services/api";
import ProductDetail from "@/components/ProductDetail/ProductDetail";
import { notFound } from "next/navigation";

export default async function ProductPage({
    params,
}: {
    params: { id: string };
}) {
    const resolvedParams = await Promise.resolve(params);
    const productId = parseInt(resolvedParams.id, 10);
    const product = await fetchProductById(productId);
    if (!product) {
        return notFound();
    }
    return <ProductDetail product={product} />;
}
