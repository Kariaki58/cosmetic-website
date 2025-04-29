"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Rose Gold Hydrating Serum',
            description: '30ml / All skin types',
            price: 29.99,
            quantity: 1,
            image: '/face-product.jpg',
            inStock: true
        },
        {
            id: 2,
            name: 'Enchanted Floral Perfume',
            description: '50ml / Eau de Parfum',
            price: 59.99,
            quantity: 1,
            image: '/fragrance.jpeg',
            inStock: true
        },
        {
            id: 3,
            name: 'Luxury Facial Brush',
            description: 'Soft bristle / Vegan',
            price: 24.99,
            quantity: 1,
            image: '/brush.webp',
            inStock: true
        }
    ]);

    const [coupon, setCoupon] = useState('');
    const [couponApplied, setCouponApplied] = useState(false);

    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: newQuantity } : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const applyCoupon = () => {
        setCouponApplied(true);
    };

    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.08;
    const discount = couponApplied ? subtotal * 0.1 : 0;
    const total = subtotal + tax - discount;

    return (
        <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Your Shopping Bag</h1>
                {cartItems.length === 0 ? (
                    <div className="text-center py-12">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900">Your bag is empty</h3>
                        <p className="mt-1 text-gray-500">Start shopping to add items to your bag</p>
                        <div className="mt-6">
                            <Link href='/shop' className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items */}
                    <div className="lg:w-2/3">
                        <div className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center justify-between border-b border-pink-100 pb-4 mb-6">
                                <h2 className="text-xl font-semibold text-gray-900">
                                    {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'} in your bag
                                </h2>
                                <button 
                                    onClick={clearCart}
                                    className="text-pink-600 hover:text-pink-800 text-sm font-medium"
                                >
                                    Clear Cart
                                </button>
                            </div>

                            {cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row gap-4 py-6 border-b border-pink-100">
                                    <div className="relative w-full sm:w-32 h-32 rounded-lg overflow-hidden bg-pink-50 flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            layout="fill"
                                            objectFit="cover"
                                            className="hover:scale-105 transition-transform duration-300"
                                        />
                                        <button 
                                            onClick={() => removeItem(item.id)}
                                            className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm hover:bg-pink-100"
                                        >
                                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between">
                                            <div>
                                            <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                                            <p className="text-gray-500 text-sm">{item.description}</p>
                                            </div>
                                            <p className="text-lg font-medium text-gray-900">${item.price.toFixed(2)}</p>
                                        </div>
                                        <div className="mt-4 flex items-center justify-between">
                                            <div className="flex items-center border border-pink-200 rounded-full">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="px-3 py-1 text-pink-600 hover:bg-pink-50 rounded-l-full"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 text-gray-700">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="px-3 py-1 text-pink-600 hover:bg-pink-50 rounded-r-full"
                                            >
                                                +
                                            </button>
                                            </div>
                                            <p className={`text-sm font-medium ${item.inStock ? 'text-pink-600' : 'text-gray-500'}`}>
                                                {item.inStock ? 'In Stock' : 'Out of Stock'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Coupon Section */}
                            <div className="pt-6">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input 
                                        type="text" 
                                        value={coupon}
                                        onChange={(e) => setCoupon(e.target.value)}
                                        placeholder="Enter coupon code" 
                                        className="flex-1 px-4 py-3 border border-pink-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent"
                                    />
                                    <button 
                                        onClick={applyCoupon}
                                        disabled={couponApplied}
                                        className={`px-6 py-3 rounded-full font-medium ${
                                            couponApplied 
                                            ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                                            : 'bg-pink-600 text-white hover:bg-pink-700'
                                        }`}
                                    >
                                        {couponApplied ? 'Applied' : 'Apply'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-1/3">
                        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                            
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)</span>
                                    <span className="text-gray-900 font-medium">${subtotal.toFixed(2)}</span>
                                </div>
                            
                                {couponApplied && (
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Discount</span>
                                        <span className="text-green-600 font-medium">-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                            
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Shipping</span>
                                    <span className="text-gray-900 font-medium">Free</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Tax</span>
                                    <span className="text-gray-900 font-medium">${tax.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between pt-4 border-t border-pink-100">
                                    <span className="text-lg font-medium text-gray-900">Total</span>
                                    <span className="text-lg font-bold text-pink-600">${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <Link href="/checkout" className="mt-6">
                                <button className="mt-8 w-full py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full hover:from-pink-600 hover:to-pink-700 transition-all font-bold text-lg shadow-md hover:shadow-lg">
                                    Proceed to Checkout
                                </button>
                            </Link>

                            <div className="mt-6 flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600">Secure checkout</span>
                            </div>

                            <div className="mt-6 pt-6 border-t border-pink-100">
                                <h3 className="text-sm font-medium text-gray-900 mb-3">We Accept</h3>
                                <div className="flex gap-3">
                                    {['VISA', 'MC', 'AMEX', 'PP'].map((card) => (
                                    <div key={card} className="w-12 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                                        <span className="text-xs font-bold">{card}</span>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}