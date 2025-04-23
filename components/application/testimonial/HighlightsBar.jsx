"use client";
import { Truck, CreditCard, Headset } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HighlightsBar = () => {
    const features = [
        {
            icon: <Truck className="w-10 h-10" />,
            title: "Free Shipping",
            description: "On orders over $50",
        },
        {
            icon: <CreditCard className="w-10 h-10" />,
            title: "Flexible Payments",
            description: "Split your payment",
        },
        {
            icon: <Headset className="w-10 h-10" />,
            title: "24/7 Support",
            description: "Instant help available",
        }
    ];

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5
            }
        })
    };

    return (
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-b border-rose-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            className="px-4 py-2 group"
                        >
                            <button
                                className="flex items-center justify-between gap-4"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="bg-white p-2 rounded-full shadow-sm text-rose-500 transition-colors">
                                        {feature.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{feature.title}</h3>
                                        <p className="text-xs text-gray-600">{feature.description}</p>
                                    </div>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HighlightsBar;