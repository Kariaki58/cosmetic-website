'use client';
import { useState, useRef, useEffect } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Filter, ChevronDown, ChevronUp, X, Search, Star } from 'lucide-react';

const Filters = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({});
  const [searchTerms, setSearchTerms] = useState({});
  const [priceRange, setPriceRange] = useState([0, 500]);
  const filterRef = useRef(null);

  const [filterSections, setFilterSections] = useState([
    {
      id: 'category',
      title: 'Categories',
      type: 'checkbox',
      hasSearch: true,
      isExpanded: true,
      options: [
        { id: 'skincare', label: 'Skincare', count: 142 },
        { id: 'makeup', label: 'Makeup', count: 89 },
        { id: 'haircare', label: 'Hair Care', count: 76 },
        { id: 'fragrance', label: 'Fragrance', count: 54 },
        { id: 'nailcare', label: 'Nail Care', count: 32 },
        { id: 'bodycare', label: 'Body Care', count: 67 }
      ]
    },
    {
      id: 'skinType',
      title: 'Skin Type',
      type: 'checkbox',
      isExpanded: true,
      options: [
        { id: 'normal', label: 'Normal', count: 87 },
        { id: 'oily', label: 'Oily', count: 63 },
        { id: 'dry', label: 'Dry', count: 71 },
        { id: 'combination', label: 'Combination', count: 58 },
        { id: 'sensitive', label: 'Sensitive', count: 49 }
      ]
    },
    {
      id: 'price',
      title: 'Price Range',
      type: 'range',
      isExpanded: true,
      options: []
    },
    {
      id: 'rating',
      title: 'Customer Reviews',
      type: 'rating',
      isExpanded: true,
      options: [
        { id: '5', label: '5 Stars' },
        { id: '4', label: '4 Stars & Up' },
        { id: '3', label: '3 Stars & Up' },
        { id: '2', label: '2 Stars & Up' },
        { id: '1', label: '1 Star & Up' }
      ]
    },
    {
      id: 'promotions',
      title: 'Promotions',
      type: 'checkbox',
      isExpanded: false,
      options: [
        { id: 'new', label: 'New Arrivals' },
        { id: 'bestsellers', label: 'Best Sellers' },
        { id: 'sale', label: 'On Sale' }
      ]
    },
    {
      id: 'availability',
      title: 'Availability',
      type: 'checkbox',
      isExpanded: false,
      options: [
        { id: 'in-stock', label: 'In Stock' },
        { id: 'out-of-stock', label: 'Out of Stock' }
      ]
    }
  ]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const initialFilters = {};

    filterSections.forEach(section => {
      const paramValue = params.get(section.id);
      if (paramValue) {
        initialFilters[section.id] = paramValue.split(',');
      }
    });

    const minPrice = params.get('minPrice');
    const maxPrice = params.get('maxPrice');
    if (minPrice && maxPrice) {
      setPriceRange([parseInt(minPrice), parseInt(maxPrice)]);
    }

    setActiveFilters(initialFilters);
  }, [searchParams]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    Object.entries(activeFilters).forEach(([key, values]) => {
      if (values.length > 0) {
        params.set(key, values.join(','));
      } else {
        params.delete(key);
      }
    });

    params.set('minPrice', priceRange[0].toString());
    params.set('maxPrice', priceRange[1].toString());

    Array.from(params.keys()).forEach(key => {
      if (!params.get(key)) params.delete(key);
    });

    router.replace(`${pathname}?${params.toString()}`);
  }, [activeFilters, priceRange, pathname, router, searchParams]);

  const toggleFilter = (sectionId, optionId) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[sectionId]) newFilters[sectionId] = [];

      if (newFilters[sectionId].includes(optionId)) {
        newFilters[sectionId] = newFilters[sectionId].filter(id => id !== optionId);
        if (newFilters[sectionId].length === 0) delete newFilters[sectionId];
      } else {
        newFilters[sectionId] = [...newFilters[sectionId], optionId];
      }

      return newFilters;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({});
    setPriceRange([0, 500]);
  };

  const toggleSection = (sectionId) => {
    setFilterSections(prev =>
      prev.map(section =>
        section.id === sectionId
          ? { ...section, isExpanded: !section.isExpanded }
          : section
      )
    );
  };

  const handleSearch = (sectionId, term) => {
    setSearchTerms(prev => ({ ...prev, [sectionId]: term }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setMobileFiltersOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [filterRef]);

  return (
    <main className='flex gap-10 p-5'>
      <div className="relative" ref={filterRef}>
        <button
          className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 shadow-sm ring-1 ring-gray-200 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
          aria-expanded={mobileFiltersOpen}
          aria-controls="filter-panel"
        >
          <Filter size={18} />
          <span>Filters</span>
          {Object.keys(activeFilters).length > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-xs font-medium text-white">
              {Object.keys(activeFilters).length}
            </span>
          )}
        </button>

        <div
          id="filter-panel"
          className={`fixed inset-0 z-50 h-full w-full overflow-y-auto bg-white p-4 transition-transform duration-300 ease-in-out lg:static lg:block lg:h-auto lg:w-64 lg:transform-none lg:p-0 lg:pr-4 ${mobileFiltersOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
          aria-hidden={!mobileFiltersOpen}
        >
          <div className="flex items-center justify-between border-b pb-4 lg:border-none">
            <div className="flex items-center">
              <button 
                className="ml-4 lg:hidden"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-6">
            {filterSections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 pb-6 last:border-0">
                <button
                  className="flex w-full items-center justify-between  text-sm font-medium text-gray-900"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={section.isExpanded}
                >
                  <span>{section.title}</span>
                  {section.isExpanded ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </button>

                {section.isExpanded && (
                  <div className="pt-4">
                    {section.hasSearch && (
                      <div className="relative mb-3">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <Search size={16} className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-pink-500 sm:text-sm sm:leading-6"
                          placeholder={`Search ${section.title.toLowerCase()}`}
                          value={searchTerms[section.id] || ''}
                          onChange={(e) => handleSearch(section.id, e.target.value)}
                        />
                      </div>
                    )}

                    {section.type === 'checkbox' && (
                      <div className="space-y-3">
                        {section.options
                          .filter(option =>
                            !searchTerms[section.id] ||
                            option.label.toLowerCase().includes(searchTerms[section.id].toLowerCase())
                          )
                          .map((option) => (
                            <label key={option.id} className="flex items-center">
                              <input
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-pink-600 focus:ring-pink-500"
                                checked={activeFilters[section.id]?.includes(option.id) || false}
                                onChange={() => toggleFilter(section.id, option.id)}
                              />
                              <span className="ml-3 text-sm text-gray-600">
                                {option.label}
                                {option.count && (
                                  <span className="ml-1 text-gray-400">({option.count})</span>
                                )}
                              </span>
                            </label>
                          ))}
                      </div>
                    )}

                    {section.type === 'range' && section.id === 'price' && (
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>${priceRange[0]}</span>
                          <span>${priceRange[1]}</span>
                        </div>
                        <div className="relative space-y-4">
                          <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-pink-600"
                            aria-label="Minimum price"
                          />
                          <input
                            type="range"
                            min="0"
                            max="500"
                            step="10"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                            className="h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-pink-600"
                            aria-label="Maximum price"
                          />
                        </div>
                      </div>
                    )}

                    {section.type === 'rating' && (
                      <div className="space-y-3">
                        {section.options.map((option) => (
                          <button
                            key={option.id}
                            className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${activeFilters[section.id]?.includes(option.id) ? 'bg-pink-50 text-pink-700' : 'text-gray-600 hover:bg-gray-50'}`}
                            onClick={() => toggleFilter(section.id, option.id)}
                          >
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={16}
                                  className={`${i < parseInt(option.id) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                            <span>{option.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Filters;
