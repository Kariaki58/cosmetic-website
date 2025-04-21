'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-gray-600 focus:outline-none"
            >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6 space-y-4">
                    <Link href="/" className="block text-black hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
                        Home
                    </Link>
                    <Link href="/shop" className="block text-black hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
                        Shop
                    </Link>
                    <Link href="/about" className="block text-black hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
                        About Us
                    </Link>
                    <Link href="/blogs" className="block text-black hover:text-gray-600 transition-colors" onClick={() => setIsOpen(false)}>
                        Blogs
                    </Link>
                </div>
            )}
        </div>
    );
}