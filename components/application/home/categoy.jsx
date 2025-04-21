"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

export default function Category() {
    const categories = [
        {
            id: 1,
            name: "Skincare",
            count: 128,
            image: "/face-care.jpg",
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200"
        },
        {
            id: 2,
            name: "Makeup",
            count: 96,
            image: "/face-product.jpg",
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200"
        },
        {
            id: 3,
            name: "Haircare",
            count: 84,
            image: "/hair-product.jpg",
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200"
        },
        {
            id: 4,
            name: "Fragrance",
            count: 62,
            image: "/fragrance.jpeg",
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200"
        },
        {
            id: 5,
            name: "Bath & Body",
            count: 75,
            image: "/bath-body.webp",
            bgColor: "bg-pink-50",
            borderColor: "border-pink-200"
        },
        {
            id: 6,
            name: "Tools & Brushes",
            count: 43,
            image: "/brush.webp",
            bgColor: "bg-teal-50",
            borderColor: "border-teal-200"
        },
    ];

    const containerRef = useRef(null);
    const [showScrollLeft, setShowScrollLeft] = useState(false);
    const [showScrollRight, setShowScrollRight] = useState(true);

    const checkScroll = () => {
        if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowScrollLeft(scrollLeft > 0);
        setShowScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scroll = (direction) => {
        if (containerRef.current) {
        containerRef.current.scrollBy({
            left: direction === 'right' ? 300 : -300,
            behavior: 'smooth'
        });
        }
    };

    useEffect(() => {
        const container = containerRef.current;
        container.addEventListener('scroll', checkScroll);
        checkScroll(); // Initial check
        return () => container.removeEventListener('scroll', checkScroll);
    }, []);

    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2">
                    Explore Our Beauty World
                </h2>
                <p className="text-center text-rose-500 mb-10 max-w-2xl mx-auto">
                    Discover your perfect beauty routine across our luxurious collections
                </p>

                <div className="relative">
                {showScrollLeft && (
                    <button 
                        onClick={() => scroll('left')}
                        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-all"
                        aria-label="Scroll left"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                    </button>
                )}

                {showScrollRight && (
                    <button 
                        onClick={() => scroll('right')}
                        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-rose-500 hover:bg-rose-50 transition-all"
                        aria-label="Scroll right"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </button>
                )}
                <div 
                    ref={containerRef}
                    className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {categories.map((category) => (
                        <div 
                            key={category.id}
                            className="flex-shrink-0 w-40 sm:w-48 md:w-56 flex flex-col items-center"
                            style={{ scrollSnapAlign: 'start' }}
                        >
                            <div className={`relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-4 ${category.borderColor} ${category.bgColor} shadow-lg transition-transform duration-300 hover:scale-105`}>
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                                />
                            </div>
                            <h3 className="mt-4 text-lg font-medium text-gray-800 text-center font-serif">
                                {category.name}
                            </h3>
                            <p className="mt-1 text-sm text-rose-500">
                                {category.count}+ products
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile scroll indicator */}
            <div className="md:hidden text-center mt-4">
                <svg className="w-6 h-6 mx-auto text-rose-300 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                <p className="text-xs text-rose-400 mt-1">Swipe to explore more</p>
            </div>
        </div>
        </section>
    );
}