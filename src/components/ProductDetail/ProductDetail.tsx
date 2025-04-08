import React from "react";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
    const discountedPrice =
        product.price * (1 - product.discountPercentage / 100);

    return (
        <div className="max-w-6xl mx-auto p-5">
            <Link
                href="/"
                className="mb-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-bg-blue-600 transition-colors flex items-center gap-2 inline-block"
            >
                ← Back to Products
            </Link>

            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                    <div className="relative h-96 w-full">
                        <Image
                            src={product.thumbnail}
                            alt={product.title}
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((image, index) => (
                            <div
                                key={`product-${product.id}-image-${index}`}
                                className="relative h-20"
                            >
                                <Image
                                    src={image}
                                    alt={`${product.title} - ${index + 1}`}
                                    fill
                                    className="object-cover rounded cursor-pointer hover:opacity-75 transition-opacity"
                                />
                            </div>
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
                        <div key="brand" className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Brand
                            </span>
                            <p className="font-medium text-gray-dark">
                                {product.brand}
                            </p>
                        </div>
                        <div key="category" className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Category
                            </span>
                            <p className="font-medium text-gray-dark">
                                {product.category}
                            </p>
                        </div>
                        <div key="rating" className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Rating
                            </span>
                            <p className="font-medium text-warning">
                                {product.rating} / 5
                            </p>
                        </div>
                        <div key="stock" className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Stock
                            </span>
                            <p className="font-medium text-success">
                                {product.stock} units
                            </p>
                        </div>
                        <div key="availability" className="space-y-1">
                            <span className="text-gray-medium text-sm">
                                Availability
                            </span>
                            <p className="font-medium text-primary">
                                {product.availabilityStatus}
                            </p>
                        </div>
                        <div key="minimum-order" className="space-y-1">
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
                                {product.reviews.map((review, index) => {
                                    const safeKey = `review-${index}-${
                                        review.id || "no-id"
                                    }`;
                                    return (
                                        <div
                                            key={safeKey}
                                            className="bg-gray-light p-4 rounded-lg"
                                        >
                                            <div className="flex justify-between mb-2">
                                                <span className="font-medium text-gray-dark">
                                                    Review #
                                                    {review.id || index + 1}
                                                </span>
                                                <span className="text-gray-medium text-sm">
                                                    {review.date
                                                        ? new Date(
                                                              review.date
                                                          ).toLocaleDateString()
                                                        : "No date"}
                                                </span>
                                            </div>
                                            <div className="text-warning mb-2">
                                                {"★".repeat(
                                                    Math.round(
                                                        review.rating || 0
                                                    )
                                                )}
                                                {"☆".repeat(
                                                    5 -
                                                        Math.round(
                                                            review.rating || 0
                                                        )
                                                )}
                                            </div>
                                            <p className="text-gray-medium">
                                                {review.body ||
                                                    "No review content available"}
                                            </p>
                                        </div>
                                    );
                                })}
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
}
