import ProductPage from "@/components/application/products/product-display";
import RelatedProduct from "@/components/application/products/related-products";
import ProductNavigation from "@/components/application/shop/ProductNavigation";

export default async function ProductPageLayout({ children, params }) {
    const slug = (await params).slug;

    return (
        <main>
            <div>
                <ProductPage />
                <div className="border-b-2 border-gray-200 pb-1">
                    <ProductNavigation slug={slug} />
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                    {children}
                    <RelatedProduct/>
                </div>
            </div>
        </main>
    );
}