"use client";
import Link from 'next/link';
import { Search, Heart, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';

export default function NavIcons() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
    // Close modal after search
    setIsSearchOpen(false);
  };

  return (
    <>
      <div className="flex items-center space-x-6">
        {/* Search Icon - Triggers modal */}
        <button 
          onClick={() => setIsSearchOpen(true)}
          className="text-black hover:text-gray-600 transition-colors"
        >
          <Search className="w-6 h-6" />
        </button>

        <Link href="/favorites" className="text-black hover:text-gray-600 transition-colors">
          <Heart className="w-6 h-6" />
        </Link>
        <Link href="/cart" className="text-black hover:text-gray-600 transition-colors">
          <ShoppingBag className="w-6 h-6" />
        </Link>
        <Link href="/dashboard" className="text-black hover:text-gray-600 transition-colors">
          <User className="w-6 h-6" />
        </Link>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Search Products</h2>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for skincare products..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition pl-10"
                autoFocus
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </form>

            {/* Search results would go here */}
            <div className="mt-4">
              {/* Example search results - you would replace this with actual search results */}
              {searchQuery && (
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Results for "{searchQuery}"</p>
                  <div className="border-t pt-2">
                    <a href="#" className="block py-2 hover:bg-gray-50 px-2 rounded">Radiant Glow Serum</a>
                    <a href="#" className="block py-2 hover:bg-gray-50 px-2 rounded">Hydrating Face Cream</a>
                    <a href="#" className="block py-2 hover:bg-gray-50 px-2 rounded">Anti-Aging Night Cream</a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}