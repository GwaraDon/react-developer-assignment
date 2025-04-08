import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Product } from "../../types/product";
import { fetchProductById } from "../../api/products";

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadProduct = async () => {
            if (!id) return;

            try {
                setLoading(true);
                const data = await fetchProductById(parseInt(id));
                setProduct(data);
            } catch (err) {
                setError("Failed to load product details");
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    if (loading)
        return <div className="text-center py-10 text-lg">Loading...</div>;
    if (error)
        return (
            <div className="text-center py-10 text-lg text-error">{error}</div>
        );
    if (!product)
        return (
            <div className="text-center py-10 text-lg text-error">
                Product not found
            </div>
        );

    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    return (
        <div className="max-w-6xl mx-auto p-5">
            <button
                className="mb-6 px-6 py-2 bg-primary text-white rounded hover:bg-primary/80 transition-colors flex items-center gap-2"
                onClick={() => navigate(-1)}
            >
                ← Back to Products
            </button>

            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="w-full h-96 object-cover rounded-lg"
                    />
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((image, index) => (
                            <img
                                key={`${product.id}-image-${index}`}
                                src={image}
                                alt={`${product.title} - ${index + 1}`}
                                className="w-full h-20 object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                            />
                        ))}
                    </div>
                </div>

                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-dark">
                        {product.title}
                    </h1>
                    <p className="text-gray-medium">{product.description}</p>

                    <div className="bg-gray-light p-4 rounded-lg">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-medium line-through text-lg">
                                ${product.price}
                            </span>
                            <span className="text-2xl font-bold text-accent">
                                ${discountedPrice.toFixed(2)}
                            </span>
                            <span className="bg-accent text-white px-2 py-1 rounded text-sm">
                                {product.discountPercentage}% OFF
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Brand
                            </span>
                            <p className="font-medium text-gray-dark">
                                {product.brand}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Category
                            </span>
                            <p className="font-medium text-gray-dark">
                                {product.category}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Rating
                            </span>
                            <p className="font-medium text-warning">
                                {product.rating} / 5
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Stock
                            </span>
                            <p className="font-medium text-success">
                                {product.stock} units
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Availability
                            </span>
                            <p className="font-medium text-primary">
                                {product.availabilityStatus}
                            </p>
                        </div>
                        <div className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Minimum Order
                            </span>
                            <p className="font-medium text-gray-dark">
                                {product.minimumOrderQuantity} units
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-dark">
                            Reviews
                        </h2>
                        {product.reviews && product.reviews.length > 0 ? (
                            <div className="space-y-4">
                                {product.reviews.map((review) => (
                                    <div
                                        key={review.id}
                                        className="bg-gray-light p-4 rounded-lg"
                                    >
                                        <div className="flex justify-between mb-2">
                                            <span className="font-medium text-gray-dark">
                                                Review #{review.id}
                                            </span>
                                            <span className="text-gray-medium text-sm">
                                                {new Date(
                                                    review.date
                                                ).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <div className="text-warning mb-2">
                                            {"★".repeat(
                                                Math.round(review.rating)
                                            )}
                                            {"☆".repeat(
                                                5 - Math.round(review.rating)
                                            )}
                                        </div>
                                        <p className="text-gray-medium">
                                            {review.body}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-medium italic">
                                No reviews available for this product.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
