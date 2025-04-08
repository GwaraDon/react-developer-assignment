import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product } from "../../types/product";
import { fetchProducts } from "../../api/products";

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const navigate = useNavigate();

    const itemsPerPage = 10;

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setLoading(true);
                const skip = (currentPage - 1) * itemsPerPage;
                const response = await fetchProducts(skip, itemsPerPage);
                setProducts(response.products);
                setTotalProducts(response.total);
            } catch (err) {
                setError("Failed to load products");
            } finally {
                setLoading(false);
            }
        };

        loadProducts();
    }, [currentPage]);

    const handleProductClick = (productId: number) => {
        navigate(`/product/${productId}`);
    };

    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    if (loading)
        return <div className="text-center py-10 text-lg">Loading...</div>;
    if (error)
        return (
            <div className="text-center py-10 text-lg text-error">{error}</div>
        );

    return (
        <div className="p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-4 cursor-pointer transform transition-transform hover:-translate-y-1 hover:shadow-lg"
                        onClick={() => handleProductClick(product.id)}
                    >
                        <img
                            src={product.thumbnail}
                            alt={product.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-gray-dark">
                                {product.title}
                            </h3>
                            <p className="text-sm text-gray-medium">
                                {product.brand}
                            </p>
                            <p className="text-sm text-gray-medium">
                                {product.category}
                            </p>
                            <div className="flex items-center gap-3">
                                <span className="text-gray-medium line-through">
                                    ${product.price}
                                </span>
                                <span className="text-accent font-bold">
                                    $
                                    {(
                                        product.price *
                                        (1 - product.discountPercentage / 100)
                                    ).toFixed(2)}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-warning">
                                    Rating: {product.rating}
                                </span>
                                <span className="text-success">
                                    Stock: {product.stock}
                                </span>
                            </div>
                            <p className="text-sm text-primary">
                                {product.availabilityStatus}
                            </p>
                            <p className="text-sm text-gray-medium">
                                Min Order: {product.minimumOrderQuantity}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-center items-center gap-4">
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-primary text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary/80 transition-colors"
                >
                    Previous
                </button>
                <span className="text-gray-medium">
                    Page {currentPage} of {totalPages}
                </span>
                <button
                    onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-primary text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary/80 transition-colors"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProductList;
