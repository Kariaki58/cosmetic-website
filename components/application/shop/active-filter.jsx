'use client';
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { X, ChevronDown } from 'lucide-react';

export default function ActiveFilter() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [activeFilters, setActiveFilters] = useState({});

    useEffect(() => {
        // Initialize activeFilters from URL params
        const params = new URLSearchParams(searchParams);
        const initialFilters = {};
        
        // Get all params except pagination/sort params
        params.forEach((value, key) => {
            if (key !== 'page' && key !== 'sort') {
                initialFilters[key] = value.split(',');
            }
        });
        
        setActiveFilters(initialFilters);
    }, [searchParams]);

    useEffect(() => {
        // Update URL when activeFilters change
        const params = new URLSearchParams(searchParams);
        
        // First, clear all filter params
        Array.from(params.keys()).forEach(key => {
            if (key !== 'page' && key !== 'sort') {
                params.delete(key);
            }
        });
        
        // Then set current filters
        Object.entries(activeFilters).forEach(([key, values]) => {
            if (values?.length > 0) {
                params.set(key, values.join(','));
            }
        });
        
        router.replace(`${pathname}?${params.toString()}`);
    }, [activeFilters, pathname, router, searchParams]);

    const removeFilter = (filterKey, valueToRemove) => {
        setActiveFilters(prev => {
            const newFilters = { ...prev };
            if (newFilters[filterKey]) {
                newFilters[filterKey] = newFilters[filterKey].filter(val => val !== valueToRemove);
                if (newFilters[filterKey].length === 0) {
                    delete newFilters[filterKey];
                }
            }
            return newFilters;
        });
    };

    const clearAllFilters = () => {
        setActiveFilters({});
    };

    return (
        <div className="mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-5">
                <div className="text-sm md:text-base text-gray-600">
                    Showing <span className="font-medium text-gray-900">1-12</span> of 
                    <span className="font-medium text-gray-900"> 2,560</span> products
                </div>
            
                <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <label htmlFor="sort-select" className="text-sm text-gray-700 whitespace-nowrap">
                        Sort by:
                    </label>
                
                    <div className="relative w-full sm:w-48">
                        <select 
                            id="sort-select"
                            className="appearance-none w-full pl-4 pr-10 py-2.5 text-sm bg-white border border-rose-200 rounded-lg shadow-sm 
                                    focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-gray-700 
                                    transition-all duration-200 hover:border-rose-300"
                            defaultValue={searchParams.get('sort') || 'featured'}
                            onChange={(e) => {
                                const params = new URLSearchParams(searchParams);
                                params.set('sort', e.target.value);
                                router.replace(`${pathname}?${params.toString()}`);
                            }}
                        >
                            <option value="featured">Featured</option>
                            <option value="newest">Newest Arrivals</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                        </select>
                    
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <ChevronDown className="h-4 w-4 text-rose-400" />
                        </div>
                    </div>
                </div>
            </div>
        
            {Object.keys(activeFilters).length > 0 && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                    {Object.entries(activeFilters).flatMap(([filterKey, values]) =>
                        values.map((value) => (
                            <span
                                key={`${filterKey}-${value}`}
                                className="flex items-center gap-2 rounded-full bg-pink-100 px-3 py-1 text-sm text-pink-800"
                            >
                                {value}
                                <button
                                    onClick={() => removeFilter(filterKey, value)}
                                    className="text-pink-700 hover:text-pink-900"
                                    aria-label={`Remove ${value}`}
                                >
                                    <X size={14} />
                                </button>
                            </span>
                        ))
                    )}
                    <button 
                        onClick={clearAllFilters}
                        className="text-sm text-pink-600 hover:text-pink-800 underline"
                    >
                        Clear All
                    </button>
                </div>
            )}
        </div>
    );
}