"use client";
import { useState } from 'react';
import { ChevronDown, Leaf, Shield, Truck, BadgeCheck } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Why should I choose your skincare products?",
            answer: "Our products are formulated with clinically-proven ingredients, free from harmful chemicals, and cruelty-free. We prioritize skin health over quick fixes, offering solutions that deliver visible, long-term results.",
            icon: <BadgeCheck className="w-5 h-5 text-pink-600" />
        },
        {
            question: "Are your products suitable for sensitive skin?",
            answer: "Absolutely! We offer a dedicated sensitive skin line that's fragrance-free, hypoallergenic, and dermatologist-tested. Always patch test new products and consult our skin quiz for personalized recommendations.",
            icon: <Shield className="w-5 h-5 text-pink-600" />
        },
        {
            question: "How soon will I see results?",
            answer: "While some products show immediate effects (like hydration), most skincare requires 4-6 weeks for visible changes as skin cells regenerate. Consistency is key - we provide detailed usage guides with each product.",
            icon: <Leaf className="w-5 h-5 text-pink-600" />
        },
        {
            question: "What makes your ingredients different?",
            answer: "We use pharmaceutical-grade actives at optimal concentrations, sustainably sourced botanicals, and avoid fillers like unnecessary fragrances or dyes. Each ingredient is selected for its proven efficacy.",
            icon: <Leaf className="w-5 h-5 text-pink-600" />
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes! We ship worldwide with climate-appropriate packaging to preserve product integrity. Shipping costs and delivery times vary by destination.",
            icon: <Truck className="w-5 h-5 text-pink-600" />
        },
        {
            question: "Can I return products if they don't work for me?",
            answer: "We offer a 30-day satisfaction guarantee. If you're unhappy with your purchase, contact our skincare specialists for assistance or return instructions.",
            icon: <Shield className="w-5 h-5 text-pink-600" />
        }
    ];

    const valueProps = [
        {
            title: "Clean Formulas",
            description: "Free from parabens, sulfates, phthalates, and synthetic fragrances",
            icon: <Leaf className="w-6 h-6 text-pink-600" />
        },
        {
            title: "Dermatologist Approved",
            description: "Developed with board-certified skin experts",
            icon: <BadgeCheck className="w-6 h-6 text-pink-600" />
        },
        {
            title: "Visible Results",
            description: "Clinically proven efficacy in independent studies",
            icon: <Shield className="w-6 h-6 text-pink-600" />
        },
        {
            title: "Sustainable Beauty",
            description: "Eco-friendly packaging and cruelty-free practices",
            icon: <Leaf className="w-6 h-6 text-pink-600" />
        }
    ];

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Simple. Smart. <span className='text-rose-500'>Skincare That Works</span>.</h2>
                    <p className="text-lg text-gray-800">Your questions, expertly answered</p>
                </div>

                {/* Value Proposition Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center mb-3">
                                <div className="bg-pink-100 p-2 rounded-full mr-3">
                                    {prop.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900">{prop.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600">{prop.description}</p>
                        </div>
                    ))}
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                            <button
                                className="w-full flex items-center justify-between p-6 text-left"
                                onClick={() => toggleAccordion(index)}
                                aria-expanded={activeIndex === index}
                                aria-controls={`faq-${index}`}
                            >
                                <div className="flex items-center">
                                    <div className="mr-4">
                                        {faq.icon}
                                    </div>
                                    <h3 className="font-medium text-gray-900">{faq.question}</h3>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-pink-600 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                id={`faq-${index}`}
                                className={`px-6 pb-6 ${activeIndex === index ? 'block' : 'hidden'}`}
                                style={{ marginLeft: '2.5rem' }} // Align with icon
                            >
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-6">Still have questions? Our skincare specialists are here to help.</p>
                    <button className="bg-gradient-to-r from-pink-600 to-rose-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all">
                        Contact Our Experts
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;