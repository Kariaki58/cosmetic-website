"use client";
import { Heart, X, ShoppingBag, Sparkles } from "lucide-react";
import "./favourites.css"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const wishlistItems = [
    {
        id: 1,
        name: "Hydrating Rose Quartz Facial Serum",
        price: 49.99,
        discountedPrice: 37.49,
        image: "/face-care.jpg",
        inStock: true,
        isNew: true,
    },
    {
        id: 2,
        name: "24K Gold Luxury Eye Cream",
        price: 89.99,
        discountedPrice: 76.49,
        image: "/images.jpeg",
        inStock: true,
        isBestseller: true,
    },
    {
        id: 3,
        name: "Vitamin C Brightening Toner",
        price: 32.99,
        image: "/fragrance.jpeg",
        inStock: false,
    },
];

export default function WishList() {
    const removeFromWishlist = (id) => {
        console.log(`Removed item ${id} from wishlist`);
    };

    const moveToCart = (product) => {
        console.log(`Moved ${product.name} to cart`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Luxurious Header */}
        <div className="mb-12 text-center">
            <div className="inline-flex items-center justify-center bg-rose-50/50 px-6 py-2 rounded-full mb-4">
                <Sparkles className="w-5 h-5 text-rose-400 mr-2" />
                <span className="text-sm font-medium text-rose-600">
                    YOUR CURATED SELECTION
                </span>
            </div>
            <h1 className="text-4xl font-serif font-light text-gray-900 mb-3">
                My <span className="font-normal text-rose-600">Wishlist</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Your saved treasures await. These handpicked items are reserved just for
                you.
            </p>
        </div>

        {wishlistItems.length === 0 ? (
            <div className="text-center py-24">
                <div className="relative w-24 h-24 mx-auto mb-6">
                    <div className="absolute inset-0 bg-rose-100 rounded-full opacity-30"></div>
                    <Heart className="absolute w-12 h-12 text-rose-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </div>
                <h3 className="text-2xl font-serif text-gray-800 mb-3">
                    Your Wishlist Awaits
                </h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    Discover beauty essentials that speak to you. Save your favorites
                    here for easy access.
                </p>
                <Link
                    href="/products"
                    className="inline-flex items-center px-8 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                    Begin Your Journey
                </Link>
            </div>
        ) : (
            <>
                {/* Premium Product Grid */}
                <div className="grid gap-5 responsive grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
                    {wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-rose-50"
                        >
                            {/* Premium Badges */}
                            {item.isNew && (
                            <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow-sm z-10">
                                <span className="text-xs font-medium text-rose-600 tracking-wide">
                                    NEW ARRIVAL
                                </span>
                            </div>
                            )}
                            {item.isBestseller && (
                                <div className="absolute top-4 left-4 bg-amber-100 px-3 py-1 rounded-full shadow-sm z-10">
                                    <span className="text-xs font-medium text-amber-800 tracking-wide">
                                        BESTSELLER
                                    </span>
                                </div>
                            )}

                            {/* Remove Button */}
                            <button
                                onClick={() => removeFromWishlist(item.id)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-rose-50 hover:text-rose-500 transition-all z-10"
                                aria-label="Remove from wishlist"
                            >
                                <X className="w-4 h-4" />
                            </button>

                            {/* Product Image */}
                            <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {!item.inStock && (
                                <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
                                <span className="text-gray-700 font-medium py-1 px-3 rounded-full bg-white/90 backdrop-blur-sm shadow-sm">
                                    COMING SOON
                                </span>
                                </div>
                            )}
                            </div>

                            {/* Product Details */}
                            <div className="p-5 pt-4">
                            <h3 className="text-xl font-serif text-gray-900 mb-2 line-clamp-2">
                                {item.name}
                            </h3>

                            <div className="flex items-center justify-between mb-4">
                                <div>
                                {item.discountedPrice ? (
                                    <div className="flex items-baseline">
                                    <span className="text-xl font-medium text-gray-900">
                                        ${item.discountedPrice.toFixed(2)}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through ml-2">
                                        ${item.price.toFixed(2)}
                                    </span>
                                    </div>
                                ) : (
                                    <span className="text-xl font-medium text-gray-900">
                                    ${item.price.toFixed(2)}
                                    </span>
                                )}
                                </div>
                            </div>

                            <Button
                                onClick={() => moveToCart(item)}
                                disabled={!item.inStock}
                                className={`w-full flex items-center justify-center gap-2 py-5 rounded-lg transition-all ${
                                !item.inStock
                                    ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                                    : "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-md hover:shadow-lg"
                                }`}
                            >
                                <ShoppingBag className="w-4 h-4" />
                                {item.inStock ? "Add to Luxe Cart" : "Notify Me"}
                            </Button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Continue Shopping CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/shop"
                        className="inline-flex items-center px-8 py-3 border border-gray-300 hover:border-rose-300 text-gray-700 hover:text-rose-600 font-medium rounded-full transition-all duration-300 hover:bg-rose-50/50"
                    >
                        Discover More Beauty Essentials
                    </Link>
                </div>
            </>
        )}
        </div>
    );
}