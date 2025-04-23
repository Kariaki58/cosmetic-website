"use client";
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useRef, useState } from 'react';

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const scrollTo = (index) => {
        if (scrollRef.current) {
            const card = scrollRef.current.children[index];
            card.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start'
            });
            setActiveIndex(index);
        }
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const newIndex = direction === 'left' 
                ? Math.max(0, activeIndex - 1) 
                : Math.min(testimonials.length - 1, activeIndex + 1);
            
            scrollTo(newIndex);
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const newIndex = Math.round(scrollLeft / clientWidth);
            setActiveIndex(newIndex);
        }
    };

    const testimonials = [
        {
            id: 1,
            name: 'Sophia Rodriguez',
            role: 'Skincare Enthusiast',
            rating: 5,
            review: "The Vitamin C serum completely transformed my skincare routine. My complexion has never been brighter! I've received so many compliments since I started using it.",
            image: '/face/banner-promo.jpg',
            date: '2 weeks ago'
        },
        {
            id: 2,
            name: 'Aisha Johnson',
            role: 'Makeup Artist',
            rating: 4,
            review: "The liquid lipsticks have incredible staying power. As a professional, I appreciate how they don't feather or fade during long events.",
            image: '/face/card-left.png',
            date: '1 month ago'
        },
        {
            id: 3,
            name: 'Emily Chen',
            role: 'Dermatology Nurse',
            rating: 5,
            review: "I recommend the Hyaluronic Acid to my patients. It's fragrance-free, non-comedogenic, and gives instant hydration without irritation.",
            image: '/face/black-beauty.jpg',
            date: '3 weeks ago'
        },
        {
            id: 4,
            name: 'Emily Chen',
            role: 'Dermatology Nurse',
            rating: 5,
            review: "I recommend the Hyaluronic Acid to my patients. It's fragrance-free, non-comedogenic, and gives instant hydration without irritation.",
            image: '/face/black-beauty.jpg',
            date: '3 weeks ago'
        },
        {
            id: 5,
            name: 'Emily Chen',
            role: 'Dermatology Nurse',
            rating: 5,
            review: "I recommend the Hyaluronic Acid to my patients. It's fragrance-free, non-comedogenic, and gives instant hydration without irritation.",
            image: '/face/black-beauty.jpg',
            date: '3 weeks ago'
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">She <span className='text-rose-500'>Said</span> It Best</h2>
                    <p className="text-lg text-gray-800">Because She Deserves to Feel This Good.</p>
                </div>

                <div className="relative">
                    <button 
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors hidden md:block"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-6 h-6 text-pink-700" />
                    </button>

                    <div 
                        ref={scrollRef}
                        onScroll={handleScroll}
                        className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 scrollbar-hide"
                    >
                        {testimonials.map((testimonial) => (
                            <div 
                                key={testimonial.id}
                                className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 px-4 snap-start"
                            >
                                <div className="bg-pink-50 rounded-2xl p-6 h-full flex flex-col">
                                    <div className="flex items-center mb-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                            <Image
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                            <p className="text-sm text-pink-600">{testimonial.role}</p>
                                        </div>
                                    </div>

                                    <div className="flex mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star 
                                                key={i}
                                                className={`w-5 h-5 ${i < testimonial.rating ? 'fill-pink-500 text-pink-500' : 'fill-gray-300 text-gray-300'}`}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-gray-700 mb-4 flex-grow">
                                        "{testimonial.review}"
                                    </blockquote>

                                    <p className="text-sm text-gray-500 mt-auto">{testimonial.date}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-pink-50 transition-colors hidden md:block"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-6 h-6 text-pink-700" />
                    </button>
                </div>

                {/* Mobile indicators */}
                <div className="flex justify-center gap-2 mt-6 md:hidden">
                    {testimonials.map((testimonial, index) => (
                        <button
                            key={testimonial.id}
                            onClick={() => scrollTo(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-pink-600' : 'bg-pink-300'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
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
        </section>
    );
};

export default Testimonials;