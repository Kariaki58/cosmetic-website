import { ProductCard } from "./product-card";
import ActiveFilter from "./active-filter";
import { Suspense } from "react";

export const products = [
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

export default function ProductDisplay() {
    return (
        <div className="">
            <Suspense fallback={<div className="h-96 bg-gray-200">Loading..</div>}>
                <ActiveFilter />
            </Suspense>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}