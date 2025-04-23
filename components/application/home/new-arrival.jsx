"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Expand, ShoppingBag } from 'lucide-react';

const NewArrival = () => {
    const newArrivalProducts = [
        {
            id: 1,
            name: 'Makeup Kit',
            category: 'make up',
            price: 59.99,
            discount: 50,
            discountedPrice: 47.99,
            image: "/face-care.jpg",
            rating: 4.5,
            reviewCount: 128
        },
        {
            id: 2,
            name: 'hair spray',
            category: 'hair',
            price: 79.99,
            discount: 50,
            discountedPrice: 67.99,
            image: "/images.jpeg",
            rating: 4.2,
            reviewCount: 86
        },
        {
            id: 3,
            name: 'Casual Blouse',
            category: 'Tops',
            price: 34.99,
            discount: 50,
            discountedPrice: 22.99,
            image: "/bg-image-2.webp",
            rating: 4.7,
            reviewCount: 215
        },
        {
            id: 4,
            name: 'Oil Perfume',
            category: 'fragrance',
            price: 49.99,
            discount: 50,
            discountedPrice: 44.99,
            image: "/fragrance.jpeg",
            rating: 4.3,
            reviewCount: 178
        },
        {
            id: 5,
            name: 'Elegant Evening Gown',
            category: 'Dresses',
            price: 129.99,
            discount: 50,
            discountedPrice: 97.49,
            image: "/bg-image-2.webp",
            rating: 4.8,
            reviewCount: 64
        },
        {
            id: 6,
            name: 'Knit Sweater',
            category: 'Sweaters',
            price: 45.99,
            discountedPrice: 25.99,
            discount: 50,
            image: '/images.jpeg',
            rating: 4.1,
            reviewCount: 92
        }
    ];

    return (
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rose-50 to-white relative">
            <Image
                src="/floral.png"
                alt="Our beauty products floral arrangement"
                fill
                className="object-cover opacity-20"
                style={{ mixBlendMode: 'multiply' }}
            />
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">New <span className='text-rose-500'>Beauty</span> Arrivals.</h2>
                    <p className="text-lg text-gray-800">Simple, effective, and made for real-life beauty.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Promo Banner - Left Side */}
                    <div className="lg:w-1/3 relative rounded-2xl overflow-hidden group">
                        <div className="aspect-square lg:aspect-auto lg:h-full w-full relative">
                            <Image
                                src="/banner-promo.jpg"
                                alt="New Arrival Promotion"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 flex flex-col justify-end p-6 md:p-8">
                                <div className="text-white">
                                    <span className="inline-block bg-rose-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-3">
                                        50% OFF
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Glow Up Collection</h3>
                                    <p className="text-sm md:text-base mb-4">Limited time offer from Jan 16 - Jan 26</p>
                                    <Link 
                                        href="/shop" 
                                        className="inline-flex items-center justify-center bg-white text-rose-700 hover:bg-gray-100 font-medium px-6 py-2 rounded-full transition-all duration-300 shadow-md"
                                    >
                                        Shop Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Product Grid - Right Side */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {newArrivalProducts.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProductCard = ({ product }) => {
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
                    className="block text-md font-semibold text-gray-800 mb-1 hover:underline line-clamp-2"
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

// Helper function to generate slugs
function generateSlug(name) {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

export default NewArrival;