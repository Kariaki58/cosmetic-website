"use client";
import Image from "next/image";
import { Heart, ShoppingBag, Expand } from "lucide-react";
import { useRef, useState } from "react";

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
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showOverlay, setShowOverlay] = useState(false);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - containerRef.current.offsetLeft);
        setScrollLeft(containerRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - containerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        containerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const ProductCard = ({ product }) => (
        <div className="group relative rounded-lg overflow-hidden w-[280px] flex-shrink-0 mx-2">
            {product.discount > 0 && (
                <span className="absolute top-3 left-3 bg-green-900 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                    {product.discount}% OFF
                </span>
            )}

            <div
                className="relative w-full pb-[100%] group"
            >
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-opacity rounded-lg"
                />
                <div
                    className="absolute inset-0 z-10 cursor-pointer"
                    onClick={() => setShowOverlay(!showOverlay)}
                />

                <div
                    className={`
                        absolute inset-0 flex items-center justify-center gap-3
                        transition-opacity duration-300 bg-black/10
                        ${showOverlay ? "opacity-100" : "opacity-0"} 
                        group-hover:opacity-100
                    `}
                >
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <Heart className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <Expand className="w-5 h-5 text-gray-700" />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
                        <ShoppingBag className="w-5 h-5 text-gray-700" />
                    </button>
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

                <h3 className="text-lg font-semibold text-gray-900 mb-1 truncate">
                    {product.name}
                </h3>
                <div className="flex items-center justify-between">
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
                </div>
            </div>
        </div>
    );

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Best Sellers</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Products loved by our community
                    </p>
                </div>
                <div 
                    ref={containerRef}
                    className="relative overflow-x-auto whitespace-nowrap py-4 -mx-4 px-4 no-scrollbar"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                >
                    <div className="inline-flex space-x-6">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
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