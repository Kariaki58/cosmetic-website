"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Expand, ShoppingBag } from 'lucide-react';


function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export const ProductCard = ({ product }) => {
    const productSlug = generateSlug(product.name);

    return (
        <div className="relative rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
            {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-rose-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                {product.discount}% OFF
                </span>
            )}

            <div className="relative w-full pb-[100%] group">
                <Link href={`/products/${productSlug}`}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-opacity rounded-lg hover:opacity-90"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </Link>
            
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <button 
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Add to wishlist"
                    >
                        <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                    <Link 
                        href={`/products/${productSlug}`} 
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                        aria-label="Quick view"
                    >
                        <Expand className="w-5 h-5 text-gray-700" />
                    </Link>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between items-start">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                        {product.category}
                    </p>
                    <div className="flex items-center">
                        <div className="flex mr-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i}>
                            {i < Math.floor(product.rating) ? (
                                <span className="text-amber-400">★</span>
                            ) : (
                                <span className="text-gray-300">★</span>
                            )}
                            </span>
                        ))}
                        </div>
                        <span className="text-xs text-gray-500">
                        ({product.reviewCount})
                        </span>
                    </div>
                </div>

                <Link 
                    href={`/products/${productSlug}`} 
                    className="block text-md font-semibold text-gray-800 mb-1 hover:underline line-clamp-2 truncate"
                >
                    {product.name}
                </Link>
                
                <div className="flex items-center justify-between mt-3">
                    <div>
                        {product.discount > 0 ? (
                            <>
                                <span className="text-lg font-bold text-black mr-2">
                                    ${product.discountedPrice.toFixed(2)}
                                </span>
                                <span className="text-sm text-gray-500 line-through">
                                    ${product.price.toFixed(2)}
                                </span>
                            </>
                        ) : (
                        <span className="text-lg font-bold text-gray-900">
                            ${product.price.toFixed(2)}
                        </span>
                        )}
                    </div>
                    <button 
                        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-medium py-2 px-3 rounded-full shadow hover:shadow-md transition-all duration-300 flex items-center"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log(`Added ${product.name} to cart`);
                        }}
                        aria-label="Add to cart"
                    >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        <span className="text-xs font-medium">Add</span>
                    </button>
                </div>
            </div>
        </div>
    );
};