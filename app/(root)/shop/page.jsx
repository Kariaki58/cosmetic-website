import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Banner from "@/components/application/banner/banner";
import Filters from "@/components/application/shop/filter";
import ProductDisplay from "@/components/application/shop/product-display";
import { Suspense } from "react";

export default function Shop() {
    return (
        <main>
            <header className="relative">
                <Banner />
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 sm:py-16 lg:py-20 flex justify-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
                        <nav className="flex mb-4" aria-label="Breadcrumb">
                            <ol className="flex items-center space-x-2">
                                <li>
                                    <Link
                                        href="/"
                                        className="text-pink-600 hover:text-rose-800 text-sm font-medium"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <ChevronRight className="h-4 w-4 text-pink-400" />
                                </li>
                                <li>
                                    <span className="text-pink-800 font-medium text-sm">Shop</span>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                            You Deserve to Glow
                        </h1>
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-rose-400 to-pink-300 opacity-50"></div>
                    </div>
                </div>
            </header>
            <div className="lg:flex gap-10 mt-10 p-2">
                <div className="lg:static absolute right-5 top- z-50 lg:z-auto">
                    <Suspense fallback={<div className="text-gray-700">Loading...</div>}>
                        <Filters />
                    </Suspense>
                </div>
                <ProductDisplay />
            </div>
        </main>
    );
}
