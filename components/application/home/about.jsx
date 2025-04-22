import Image from "next/image";

export default function AboutComponent() {
    return (
        <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* Floral Image - On soft gray background */}
                <div className="relative bg-gray-100 rounded-2xl p-8 shadow-inner flex justify-center">
                    <Image
                        src="/floral.png"
                        alt="Our beauty products floral arrangement"
                        fill
                        className="object-cover opacity-10"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                    <div className="relative w-full h-96">
                        <Image
                            src="/gallery-view.png"
                            alt="Our beauty products floral arrangement"
                            fill
                            className="object-contain"
                            style={{ mixBlendMode: 'multiply' }}
                        />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-100 rounded-full opacity-30"></div>
                </div>

                {/* Content */}
                <div className="text-gray-700 relative">
                    <Image
                        src="/floral.png"
                        alt="Our beauty products floral arrangement"
                        fill
                        className="object-cover opacity-10"
                        style={{ mixBlendMode: 'multiply' }}
                    />
                    <h3 className="text-sm font-semibold text-rose-500 tracking-widest uppercase mb-2">
                        Our Story
                    </h3>
                    <h2 className="text-4xl font-serif font-bold text-gray-800 mb-6">
                        Beauty With Purpose
                    </h2>
                    <p className="text-lg leading-relaxed mb-6">
                        At Beauty Haven, we believe true radiance comes from self-care that nourishes both 
                        body and soul. Founded in 2015 by cosmetic chemist Elena Rose, our collection 
                        blends scientific innovation with botanical wisdom to deliver transformative results.
                    </p>
                    <p className="text-lg leading-relaxed mb-8">
                        Each product is crafted with love and environmental consciousness, because we know 
                        today's beauty rituals shape tomorrow's world.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
                        <div className="text-center">
                            <p className="text-3xl font-bold text-rose-600">24+</p>
                            <p className="text-sm font-medium text-gray-500 mt-1">Premium Categories</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-rose-600">2,500+</p>
                            <p className="text-sm font-medium text-gray-500 mt-1">Luxury Products</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl font-bold text-rose-600">99%</p>
                            <p className="text-sm font-medium text-gray-500 mt-1">Customer Happiness</p>
                        </div>
                    </div>

                    {/* Signature */}
                    <div className="mt-10 flex items-center">
                        <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mr-4">
                            <svg className="h-6 w-6 text-rose-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <div>
                            <p className="font-serif italic text-gray-600">"Beauty should celebrate you, not change you."</p>
                            <p className="text-sm text-rose-500 mt-1">- The Beauty Haven Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}