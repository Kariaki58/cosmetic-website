"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function Categories() {
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const searchParams = useSearchParams();
    const activeCategory = searchParams.get("category");

    const categories = [
        { id: 1, name: 'All' },
        { id: 2, name: 'Makeup' },
        { id: 3, name: 'Hair-Care' },
        { id: 4, name: 'Fragrance' },
        { id: 5, name: 'Bath-Body' },
        { id: 6, name: 'Nail-Care' },
        { id: 7, name: 'Tools-Brushes' },
        { id: 8, name: "Men's Grooming" },
        { id: 9, name: 'Wellness' },
        { id: 10, name: 'Vegan-Cruelty-Free' },
        { id: 11, name: 'Organic-Natural' },
        { id: 12, name: 'Luxury' },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const checkScrollButtons = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const handleResize = () => checkScrollButtons();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="relative">
            <div className="relative flex items-center">
                {canScrollLeft && (
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full ml-2"
                    >
                        <ChevronLeft className="w-5 h-5  text-gray-700" />
                    </button>
                )}

                <div
                    ref={scrollRef}
                    onScroll={checkScrollButtons}
                    className="flex overflow-x-auto gap-3 pb-4 no-scrollbar scroll-smooth"
                >
                    {categories.map((category) => {
                        const categorySlug = category.name.toLowerCase();
                        const isActive = activeCategory === categorySlug;

                        return (
                            <Link
                                key={category.id}
                                href={`?category=${encodeURIComponent(categorySlug)}`}
                                scroll={false}
                                className={`flex-shrink-0 px-4 py-2 border rounded-full text-sm font-medium transition-colors duration-200
                                    ${isActive
                                        ? "bg-rose-600 text-white border-rose-600"
                                        : "bg-white text-gray-700 border-gray-200 hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200"
                                    }`}
                            >
                                {category.name}
                            </Link>
                        );
                    })}
                </div>

                {canScrollRight && (
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white p-2 shadow-md rounded-full mr-2"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-700" />
                    </button>
                )}
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
    );
}
