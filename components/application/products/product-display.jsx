import ShopHeader from "@/components/application/shop-header/header"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star, Heart, Share2, ChevronRight, ShoppingCart, Zap, Truck, Leaf, ShieldCheck, Rabbit, Sprout, BadgeCheck } from 'lucide-react'
import Image from "next/image"

export default async function ProductPage() {
    // Mock product data
    const product = {
        name: "Rose Gold Hydrating Facial Serum",
        category: "Skincare > Serums",
        inStock: true,
        rating: 4.8,
        reviewCount: 245,
        price: 29.99,
        originalPrice: 39.99,
        discount: 25,
        description: "Our luxurious Rose Gold Serum deeply hydrates while reducing fine lines and brightening skin tone. Infused with 24k gold flakes, rosehip oil, and hyaluronic acid for a radiant glow.",
        sizes: ["30ml", "50ml", "100ml"],
        sku: "RGHS-2024",
        tags: ["Vegan", "Cruelty-Free", "Paraben-Free"],
        images: [
            "/bath-body.webp",
            "/brush.webp",
            "/face-care.jpg",
            "/face-product.jpg",
        ]
    }
    
    return (
        <main className="min-h-screen">
            
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
                {/* Breadcrumb */}
                <div className="mb-4 md:mb-6 text-sm text-gray-600 flex items-center flex-wrap">
                    <span className="hover:text-rose-600 cursor-pointer">Home</span>
                    <ChevronRight size={16} className="mx-1 text-gray-400" />
                    <span className="hover:text-rose-600 cursor-pointer">Skincare</span>
                    <ChevronRight size={16} className="mx-1 text-gray-400" />
                    <span className="text-gray-800 font-medium">Serums</span>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-10">
                    {/* Left side - Product Carousel */}
                    <div className="w-full lg:w-1/2">
                        <Carousel className="w-full">
                            <CarouselContent>
                                {product.images.map((image, index) => (
                                    <CarouselItem key={index}>
                                        <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm">
                                            <Image 
                                                src={image}
                                                alt={product.name}
                                                fill
                                                className="object-cover rounded-xl"
                                                priority={index === 0}
                                            />
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="left-2 sm:left-4 hidden sm:flex" />
                            <CarouselNext className="right-2 sm:right-4 hidden sm:flex" />
                        </Carousel>
                        
                        <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                            {product.images.map((image, index) => (
                                <div 
                                    key={index} 
                                    className="relative aspect-square rounded-md overflow-hidden bg-white p-1 sm:p-2 cursor-pointer border hover:border-rose-300 transition-colors"
                                >
                                    <Image 
                                        src={image}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Right side - Product Details */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-white p-4 sm:px-6 rounded-xl">
                            <span className="text-gray-500 text-sm font-medium">{product.category}</span>
                            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 sm:mt-2">{product.name}</h1>
                            
                            <div className="flex flex-wrap items-center mt-3 gap-2">
                                <div className="flex text-amber-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                                            size={16} 
                                            className="sm:w-4 sm:h-4"
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 text-sm sm:text-base ml-1">
                                    {product.rating} ({product.reviewCount} reviews)
                                </span>
                                {product.inStock ? (
                                    <span className="ml-2 bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
                                        In Stock
                                    </span>
                                ) : (
                                    <span className="ml-2 bg-gray-100 text-gray-800 px-2 py-0.5 text-xs rounded-full">
                                        Out of Stock
                                    </span>
                                )}
                            </div>
                            
                            <div className="mt-5 sm:mt-6">
                                <div className="flex flex-wrap items-center gap-2">
                                    <span className="text-2xl sm:text-3xl font-bold text-rose-700">${product.price}</span>
                                    {product.originalPrice && (
                                        <>
                                            <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                                            <span className="bg-rose-100 text-rose-800 px-2 py-0.5 text-sm rounded-full">
                                                Save {product.discount}%
                                            </span>
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <p className="mt-4 sm:mt-6 text-gray-600 leading-relaxed">{product.description}</p>
                            
                            <div className="mt-6 sm:mt-8">
                                <h3 className="font-medium text-gray-900">Size/Volume</h3>
                                <div className="flex flex-wrap gap-2 mt-2 sm:mt-3">
                                    {product.sizes.map((size) => (
                                        <button 
                                            key={size}
                                            className="px-3 sm:px-4 py-1.5 text-sm sm:text-base border border-rose-200 rounded-full hover:bg-rose-50 focus:bg-rose-100 focus:border-rose-400 transition"
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="mt-6 sm:mt-8">
                                <h3 className="font-medium text-gray-900">Quantity</h3>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-3 sm:mt-4">
                                    <div className="flex items-center border border-rose-200 rounded-full">
                                        <button className="px-3 py-1 text-rose-800 hover:bg-rose-50 rounded-l-full transition">-</button>
                                        <span className="px-3 sm:px-4 py-1 text-center w-8 sm:w-10">1</span>
                                        <button className="px-3 py-1 text-rose-800 hover:bg-rose-50 rounded-r-full transition">+</button>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition">
                                            <ShoppingCart size={18} className="flex-shrink-0" /> 
                                            <span className="whitespace-nowrap">Add to Cart</span>
                                        </button>
                                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-rose-800 hover:bg-rose-900 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full transition">
                                            <Zap size={18} className="flex-shrink-0" />
                                            <span className="whitespace-nowrap">Buy Now</span>
                                        </button>
                                        <button className="flex-shrink-0 p-2 sm:p-3 text-rose-700 hover:bg-rose-50 rounded-full border border-rose-200 transition">
                                            <Heart size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-100">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-gray-500">SKU:</span>
                                        <span className="ml-2 text-rose-800 font-medium">{product.sku}</span>
                                    </div>
                                    <div>
                                        <span className="text-gray-500">Tags:</span>
                                        <span className="ml-2 text-rose-800 font-medium">{product.tags.join(", ")}</span>
                                    </div>
                                </div>
                                
                                <div className="mt-4 flex items-center">
                                    <span className="text-gray-500 mr-2 text-sm sm:text-base">Share:</span>
                                    <button className="p-2 text-rose-700 hover:bg-rose-50 rounded-full transition">
                                        <Share2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Product badges */}
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                            <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center gap-2">
                                <Rabbit size={18} className="text-rose-600 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-gray-800">Cruelty Free</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center gap-2">
                                <Sprout size={18} className="text-rose-600 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-gray-800">100% Vegan</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center gap-2">
                                <Truck size={18} className="text-rose-600 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-gray-800">Free Shipping</span>
                            </div>
                            <div className="bg-white p-2 sm:p-3 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center gap-2">
                                <BadgeCheck size={18} className="text-rose-600 flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-medium text-gray-800">Quality Guaranteed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}