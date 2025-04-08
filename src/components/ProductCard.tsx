import { Product } from "@/types/product";

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48 w-full">
                <img
                    src={product.thumbnail || product.image}
                    alt={product.title}
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-xl font-bold">
                            ${product.price}
                        </span>
                        {product.discountPercentage > 0 && (
                            <span className="text-green-600 text-sm ml-2">
                                -{product.discountPercentage}%
                            </span>
                        )}
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                        Add to Cart
                    </button>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500">
                    <span className="mr-2">⭐ {product.rating}</span>
                    <span>Stock: {product.stock}</span>
                </div>
            </div>
        </div>
    );
}
