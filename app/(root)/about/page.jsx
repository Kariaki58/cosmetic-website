"use client";
import Image from "next/image";
import { Leaf, Gem, HeartHandshake, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutUs() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <Image
                    src="/about/gallery-view-about-page.png"
                    alt="Luxury cosmetics"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="relative z-20 h-full flex items-center">
                    <div className="container mx-auto px-6 text-center text-white">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <Sparkles className="w-5 h-5 mr-2" />
                            <span className="text-sm font-medium">SINCE 2018</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-serif font-light mb-6">
                            Beauty <span className="font-normal">Reimagined</span>
                        </h1>
                        <p className="text-xl max-w-2xl mx-auto mb-8">
                            Where science meets luxury to create transformative beauty
                            experiences
                        </p>
                        <Button
                            variant="outline"
                            className="bg-transparent hover:bg-white/20 border-white text-white hover:text-white"
                        >
                            Discover Our Story
                        </Button>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 bg-rose-50/30">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6">
                            Our <span className="text-rose-600">Philosophy</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            We believe beauty should be ethical, effective, and exhilarating.
                            Each product is crafted with meticulous attention to detail,
                            blending cutting-edge science with nature's finest ingredients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                        {
                            icon: <Leaf className="w-10 h-10 text-rose-500" />,
                            title: "Clean Beauty",
                            description:
                            "Free from parabens, sulfates, phthalates, and other harmful ingredients",
                        },
                        {
                            icon: <Gem className="w-10 h-10 text-rose-500" />,
                            title: "Luxury Experience",
                            description:
                            "Every product delivers sensorial pleasure and visible results",
                        },
                        {
                            icon: <HeartHandshake className="w-10 h-10 text-rose-500" />,
                            title: "Ethical Sourcing",
                            description:
                            "Responsibly sourced ingredients that respect people and planet",
                        },
                        ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                        >
                            <div className="w-16 h-16 mx-auto bg-rose-100 rounded-full flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founder Story */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-square w-full relative rounded-2xl overflow-hidden">
                                <img
                                    src="/about/founder-profile.webp"
                                    alt="Our Founder"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
                                <div className="flex items-center">
                                    <Award className="w-8 h-8 text-amber-500 mr-3" />
                                    <div>
                                        <p className="text-sm text-gray-500">Recognized by</p>
                                        <p className="font-medium">Vogue Beauty Awards 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-serif mb-6">
                                Meet <span className="text-rose-600">Sophia Laurent</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                A cosmetic chemist with 15 years in the industry, Sophia founded
                                our brand with a singular vision: to create products that
                                genuinely transform skin without compromise.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                "After years of seeing women settle for either clean ingredients
                                OR visible results, I knew there had to be a better way. Our
                                formulations prove you don't need to choose."
                            </p>
                            <Button className="bg-rose-600 hover:bg-rose-700">
                                Read Full Interview
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ingredient Promise */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                    Our <span className="text-rose-600">Ingredient Promise</span>
                    </h2>
                    <p className="text-lg text-gray-600">
                    We scour the globe for ingredients that meet our exacting standards
                    of purity, potency, and sustainability
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                    {
                        name: "French Rose Extract",
                        benefit: "Deep hydration & calming",
                        origin: "Grasse, France",
                    },
                    {
                        name: "Japanese Matcha",
                        benefit: "Antioxidant protection",
                        origin: "Uji, Japan",
                    },
                    {
                        name: "Swiss Alpine Water",
                        benefit: "Mineral infusion",
                        origin: "Swiss Alps",
                    },
                    {
                        name: "Brazilian Cupuaçu Butter",
                        benefit: "Ultra-rich moisturization",
                        origin: "Amazon Rainforest",
                    },
                    ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-xl font-medium mb-2">{item.name}</h3>
                        <p className="text-rose-600 mb-1">{item.benefit}</p>
                        <p className="text-sm text-gray-500">Sourced from {item.origin}</p>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Sustainability */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 order-2 lg:order-1">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">
                        Beauty That <span className="text-rose-600">Gives Back</span>
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        We're committed to leaving the planet more beautiful than we
                        found it. That's why we've implemented:
                    </p>
                    <ul className="space-y-4 mb-8">
                        {[
                        "100% recyclable packaging",
                        "Carbon-neutral shipping",
                        "1% of sales donated to clean water initiatives",
                        "Refill program to reduce waste",
                        ].map((item, index) => (
                        <li key={index} className="flex items-start">
                            <div className="bg-rose-100 p-1 rounded-full mr-3 mt-1">
                            <Sparkles className="w-4 h-4 text-rose-600" />
                            </div>
                            <span>{item}</span>
                        </li>
                        ))}
                    </ul>
                    <Button variant="outline" className="border-rose-600 text-rose-600">
                        Our Sustainability Report
                    </Button>
                    </div>
                    <div className="lg:w-1/2 order-1 lg:order-2">
                    <div className="aspect-video w-full relative rounded-2xl overflow-hidden">
                        <Image
                        src="/about/sustainability.jpg" // Replace with sustainability image
                        alt="Sustainability efforts"
                        fill
                        className="object-cover"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-rose-100 to-pink-100">
                <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                    Ready to Experience <span className="text-rose-600">Transformation</span>?
                </h2>
                <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
                    Join thousands of women who've discovered their healthiest, most
                    radiant skin.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button className="bg-rose-600 hover:bg-rose-700 px-8 py-6 text-lg">
                    Shop Best Sellers
                    </Button>
                    <Button
                    variant="outline"
                    className="border-gray-900 text-gray-900 hover:bg-white/50 px-8 py-6 text-lg"
                    >
                    Book a Consultation
                    </Button>
                </div>
                </div>
            </section>
        </div>
    );
}