"use client";
import { Search, Package, Truck, CheckCircle, XCircle, Clock, ChevronRight, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Tracking() {
    const [trackingId, setTrackingId] = useState('');
    const [order, setOrder] = useState(null);
    const [error, setError] = useState('');

    // Mock order data
    const mockOrders = {
        'GLOW1234': {
            id: 'GLOW1234',
            date: '2023-11-15',
            items: [
                { name: 'Radiant Glow Serum', quantity: 1, price: '$49.99' },
                { name: 'Hydrating Face Cream', quantity: 2, price: '$29.99' }
            ],
            total: '$109.97',
            status: 'shipped',
            statusText: 'Shipped',
            shippingAddress: '123 Beauty Lane, Apt 4B\nNew York, NY 10001',
            estimatedDelivery: '2023-11-22',
            trackingHistory: [
                { date: '2023-11-18', time: '10:30 AM', status: 'shipped', location: 'New York, NY', description: 'Package has left our facility' },
                { date: '2023-11-17', time: '3:15 PM', status: 'processed', location: 'New York, NY', description: 'Order processed and ready for shipment' },
                { date: '2023-11-15', time: '11:45 AM', status: 'ordered', location: 'Online', description: 'Order placed' }
            ]
        },
        'GLOW5678': {
            id: 'GLOW5678',
            date: '2023-11-10',
            items: [
                { name: 'Anti-Aging Night Cream', quantity: 1, price: '$59.99' }
            ],
            total: '$59.99',
            status: 'delivered',
            statusText: 'Delivered',
            shippingAddress: '456 Skincare Ave\nLos Angeles, CA 90015',
            estimatedDelivery: '2023-11-16',
            deliveredDate: '2023-11-15',
            trackingHistory: [
                { date: '2023-11-15', time: '2:30 PM', status: 'delivered', location: 'Los Angeles, CA', description: 'Delivered to customer' },
                { date: '2023-11-14', time: '8:45 AM', status: 'out-for-delivery', location: 'Los Angeles, CA', description: 'Out for delivery' },
                { date: '2023-11-13', time: '4:20 PM', status: 'shipped', location: 'New York, NY', description: 'Package has left our facility' },
                { date: '2023-11-11', time: '9:30 AM', status: 'processed', location: 'New York, NY', description: 'Order processed and ready for shipment' },
                { date: '2023-11-10', time: '5:15 PM', status: 'ordered', location: 'Online', description: 'Order placed' }
            ]
        },
        'GLOW9012': {
            id: 'GLOW9012',
            date: '2023-11-20',
            items: [
                { name: 'Vitamin C Brightening Toner', quantity: 1, price: '$34.99' },
                { name: 'Gentle Cleansing Foam', quantity: 1, price: '$24.99' },
                { name: 'SPF 50 Sunscreen', quantity: 1, price: '$32.99' }
            ],
            total: '$92.97',
            status: 'processing',
            statusText: 'Processing',
            shippingAddress: '789 Glow Street\nChicago, IL 60601',
            estimatedDelivery: '2023-11-27',
            trackingHistory: [
                { date: '2023-11-20', time: '4:45 PM', status: 'ordered', location: 'Online', description: 'Order placed' }
            ]
        }
    };

    const handleTrackOrder = (e) => {
        e.preventDefault();
        setError('');
        
        if (!trackingId) {
        setError('Please enter a tracking ID');
        return;
        }

        const foundOrder = mockOrders[trackingId.toUpperCase()];
        
        if (foundOrder) {
        setOrder(foundOrder);
        } else {
        setError('Order not found. Please check your tracking ID and try again.');
        setOrder(null);
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
        case 'ordered':
            return <Clock className="w-5 h-5 text-gray-400" />;
        case 'processed':
            return <Package className="w-5 h-5 text-blue-500" />;
        case 'shipped':
            return <Truck className="w-5 h-5 text-amber-500" />;
        case 'out-for-delivery':
            return <Truck className="w-5 h-5 text-amber-600" />;
        case 'delivered':
            return <CheckCircle className="w-5 h-5 text-green-500" />;
        default:
            return <Package className="w-5 h-5 text-gray-400" />;
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
        case 'ordered':
            return 'bg-gray-100 text-gray-800';
        case 'processed':
            return 'bg-blue-100 text-blue-800';
        case 'shipped':
            return 'bg-amber-100 text-amber-800';
        case 'out-for-delivery':
            return 'bg-amber-200 text-amber-900';
        case 'delivered':
            return 'bg-green-100 text-green-800';
        case 'processing':
            return 'bg-purple-100 text-purple-800';
        default:
            return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Track Your Order</h1>
                    <p className="text-gray-600">Enter your tracking ID to check the status of your shipment</p>
                </div>

                {/* Tracking Form */}
                <div className="bg-white rounded-xl shadow-md p-6 mb-8">
                    <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
                        <div className="flex-grow relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                type="text"
                                value={trackingId}
                                onChange={(e) => setTrackingId(e.target.value)}
                                placeholder="Enter your tracking ID (e.g. GLOW1234)"
                                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition"
                            />
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 border border-transparent rounded-lg shadow-sm text-white font-medium bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition"
                        >
                            Track Order
                        </button>
                    </form>
                    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
                </div>

                {/* Order Tracking Results */}
                {order && (
                    <div className="space-y-8">
                        {/* Order Summary */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                                    <div>
                                        <h2 className="text-lg font-semibold text-gray-900">Order #{order.id}</h2>
                                        <p className="text-sm text-gray-500">Placed on {order.date}</p>
                                    </div>
                                    <div className={`mt-3 sm:mt-0 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                                        {order.status === 'delivered' ? (
                                        <CheckCircle className="w-4 h-4 mr-1.5" />
                                        ) : (
                                        <Clock className="w-4 h-4 mr-1.5" />
                                        )}
                                        {order.statusText}
                                    </div>
                                </div>

                                <div className="mt-6 border-t border-gray-200 pt-6">
                                    <h3 className="text-md font-medium text-gray-900 mb-3">Order Summary</h3>
                                    <ul className="divide-y divide-gray-200">
                                        {order.items.map((item, index) => (
                                            <li key={index} className="py-3 flex items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="bg-pink-50 rounded-lg p-2 mr-4">
                                                        <Package className="w-5 h-5 text-pink-600" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-medium text-gray-900">{item.name}</p>
                                                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <p className="text-sm font-medium text-gray-900">{item.price}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-4 flex justify-between border-t border-gray-200 pt-4">
                                        <p className="text-base font-medium text-gray-900">Total</p>
                                        <p className="text-base font-bold text-gray-900">{order.total}</p>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-md font-medium text-gray-900 mb-3">Shipping Address</h3>
                                        <p className="text-sm text-gray-700 whitespace-pre-line">{order.shippingAddress}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-900 mb-3">Estimated Delivery</h3>
                                        <p className="text-sm text-gray-700">
                                            {order.status === 'delivered' ? (
                                                <>
                                                    Delivered on <span className="font-medium">{order.deliveredDate}</span>
                                                </>
                                            ) : (
                                                <>
                                                    Expected by <span className="font-medium">{order.estimatedDelivery}</span>
                                                </>
                                            )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tracking Timeline */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-6">Tracking History</h2>
                                <div className="flow-root">
                                <ul className="-mb-8">
                                    {order.trackingHistory.map((event, eventIdx) => (
                                    <li key={eventIdx}>
                                        <div className="relative pb-8">
                                        {eventIdx !== order.trackingHistory.length - 1 ? (
                                            <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex space-x-3">
                                            <div>
                                            <span className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${event.status === 'delivered' ? 'bg-green-100 text-green-800' : 'bg-rose-100 text-rose-800'}`}>
                                                {getStatusIcon(event.status)}
                                            </span>
                                            </div>
                                            <div className="flex min-w-0 flex-1 justify-between space-x-4 pt-1.5">
                                            <div>
                                                <p className="text-sm text-gray-800">
                                                <span className="font-medium">{event.description}</span> - {event.location}
                                                </p>
                                            </div>
                                            <div className="whitespace-nowrap text-right text-sm text-gray-500">
                                                <time dateTime={event.date}>{event.date} at {event.time}</time>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    </li>
                                    ))}
                                </ul>
                                </div>
                            </div>
                        </div>

                        {/* Help Section */}
                        <div className="bg-white rounded-xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Need Help With Your Order?</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Link
                                        href="#"
                                        className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-rose-300 hover:bg-rose-50 transition"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-pink-100 rounded-lg p-2 mr-4">
                                                <Phone className="w-5 h-5 text-pink-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">Contact Support</h3>
                                                <p className="text-sm text-gray-500">Speak with our team</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition" />
                                    </Link>
                                    <Link
                                        href="#"
                                        className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-rose-300 hover:bg-rose-50 transition"
                                    >
                                        <div className="flex items-center">
                                            <div className="bg-pink-100 rounded-lg p-2 mr-4">
                                                <Mail className="w-5 h-5 text-pink-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-gray-900">Email Us</h3>
                                                <p className="text-sm text-gray-500">support@glowskincare.com</p>
                                            </div>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-rose-600 transition" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}