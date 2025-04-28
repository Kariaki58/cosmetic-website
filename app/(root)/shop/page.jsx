import { ChevronRight } from "lucide-react";
import Link from "next/link";
import Banner from "@/components/application/banner/banner";
import Filters from "@/components/application/shop/filter";
import ProductDisplay from "@/components/application/shop/product-display";
import { Suspense } from "react";
import ShopHeader from "@/components/application/shop-header/header";

export default function Shop() {
    return (
        <main>
            <ShopHeader layer="" />
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
