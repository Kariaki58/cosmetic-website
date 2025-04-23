"use client";
import Image from "next/image";
import { Heart, ShoppingBag, Expand, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Categories from "./category-best-seller";

export default function BestSeller() {
    const products = [
        {
            id: 1,
            name: "Hydrating Rose Quartz Facial Serum",
            category: "Skincare",
            discount: 25,
            price: 49.99,
            discountedPrice: 37.49,
            rating: 4.9,
            reviewCount: 128,
            image: "/face-care.jpg"
        },
        {
            id: 2,
            name: "24K Gold Luxury Eye Cream",
            category: "Anti-Aging",
            discount: 15,
            price: 89.99,
            discountedPrice: 76.49,
            rating: 4.7,
            reviewCount: 92,
            image: "/images.jpeg"
        },
        {
            id: 3,
            name: "Vitamin C Brightening Toner",
            category: "Skincare",
            discount: 0,
            price: 32.99,
            discountedPrice: 32.99,
            rating: 4.5,
            reviewCount: 215,
            image: "/fragrance.jpeg"
        },
        {
            id: 4,
            name: "Collagen Boosting Night Mask",
            category: "Sleep Care",
            discount: 30,
            price: 59.99,
            discountedPrice: 41.99,
            rating: 4.8,
            reviewCount: 176,
            image: "/bg-image-2.webp"
        },
        {
            id: 5,
            name: "Vitamin C Brightening Toner",
            category: "Skincare",
            discount: 0,
            price: 32.99,
            discountedPrice: 32.99,
            rating: 4.5,
            reviewCount: 215,
            image: "/fragrance.jpeg"
        },
        {
            id: 6,
            name: "Collagen Boosting Night Mask",
            category: "Sleep Care",
            discount: 30,
            price: 59.99,
            discountedPrice: 41.99,
            rating: 4.8,
            reviewCount: 176,
            image: "/bg-image-2.webp"
        }
    ];
    const containerRef = useRef(null);

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth'
            });
        }
    };

    const generateSlug = (name) => {
        return name
            .toLowerCase()
            .replace(/[^\w\s]/gi, '') // Remove special characters
            .replace(/\s+/g, '-')     // Replace spaces with hyphens
            .replace(/-+/g, '-');      // Replace multiple hyphens with single
    };

    const ProductCard = ({ product }) => {
        const productSlug = generateSlug(product.name);
        
        return (
            <div className="relative rounded-lg overflow-hidden w-[280px] flex-shrink-0 mx-2">
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
                        />
                    </Link>
                    
                    {/* Desktop Hover Actions */}
                    <div className="absolute inset-0 hidden md:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10">
                        <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                            <Heart className="w-5 h-5 text-gray-700" />
                        </button>
                        <Link href={`/products/${productSlug}`} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                            <Expand className="w-5 h-5 text-gray-700" />
                        </Link>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="flex justify-between">
                        <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">
                            {product.category}
                        </p>
                        <div className="flex items-center mb-2">
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
                        className="text-lg  font-semibold text-gray-800 hover:underline"
                    >
                        {product.name}
                    </Link>
                    <div className="flex items-center justify-between mt-3">
                        <div>
                            {product.discount > 0 ? (
                                <>
                                    <span className="text-lg font-bold text-gray-900 mr-2">
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
                            className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium py-2 px-4 rounded-full shadow-lg transition-all duration-300 flex items-center"
                            onClick={(e) => {
                                e.preventDefault();
                                console.log(`Added ${product.name} to cart`);
                            }}
                        >
                            <ShoppingBag className="w-4 h-4 mr-1" />
                            <span className="text-xs font-medium">Add</span>
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex-1">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                        Our <span className="text-rose-500">Best Sellers</span> Products
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
                        Products loved by our community
                    </p>
                </div>
                <Link 
                    href="/products" 
                    className="text-sm sm:text-base text-rose-500 hover:underline whitespace-nowrap px-4 py-2 border border-rose-500 rounded-full hover:bg-rose-50 transition-colors"
                >
                    View All Products
                </Link>
            </div>
            <Categories />
            <div className="relative">
                <button 
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                
                <div 
                    ref={containerRef}
                    className="relative overflow-x-auto whitespace-nowrap py-4 -mx-4 px-4 no-scrollbar"
                >
                    <div className="inline-flex space-x-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
                
                <button 
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            </div>
        </section>
    );
}