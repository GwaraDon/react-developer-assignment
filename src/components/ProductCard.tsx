import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <Link
            href={`/product/${product.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="relative h-48 w-full">
                <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={256}
                    height={256}
                    className="object-cover"
                />
            </div>
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">
                    {product.title}
                </h3>
                <p className="text-sm text-gray-600">{product.brand}</p>
                <p className="text-sm text-gray-600">{product.category}</p>
                <div className="flex items-center gap-3">
                    <span className="text-gray-600 line-through">
                        ${product.price}
                    </span>
                    <span className="text-blue-600 font-bold">
                        $
                        {(
                            product.price *
                            (1 - product.discountPercentage / 100)
                        ).toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between text-sm">
                    <span className="text-yellow-600">
                        Rating: {product.rating}
                    </span>
                    <span className="text-green-600">
                        Stock: {product.stock}
                    </span>
                </div>
                <p className="text-sm text-blue-600">
                    {product.availabilityStatus}
                </p>
                <p className="text-sm text-gray-600">
                    Min Order: {product.minimumOrderQuantity}
                </p>
            </div>
        </Link>
    );
}
