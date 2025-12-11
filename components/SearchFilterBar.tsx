'use client';

import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import { HiChevronDown } from 'react-icons/hi';

interface SearchFilterBarProps {
  onSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
  onTypeChange: (type: string) => void;
  locationOptions: { value: string; label: string }[];
  typeOptions: { value: string; label: string }[];
  resultsCount: number;
  searchQuery: string;
  selectedLocation: string;
  selectedType: string;
  onClear: () => void;
}

export default function SearchFilterBar({
  onSearch,
  onLocationChange,
  onTypeChange,
  locationOptions,
  typeOptions,
  resultsCount,
  searchQuery,
  selectedLocation,
  selectedType,
  onClear,
}: SearchFilterBarProps) {
  const hasActiveFilters = searchQuery || selectedLocation || selectedType;

  return (
    <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm">
      <div className="section-container py-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, description, or features..."
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {/* Location Filter */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer transition-all"
              >
                <option value="">All Locations</option>
                {locationOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          {/* Type Filter */}
          <div className="relative">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Type
            </label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent appearance-none bg-white cursor-pointer transition-all"
              >
                <option value="">All Types</option>
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 pointer-events-none" />
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-end">
            <div className="text-sm text-gray-600">
              <span className="font-semibold text-gray-900">{resultsCount}</span>
              {' '}
              result{resultsCount !== 1 ? 's' : ''} found
            </div>
          </div>

          {/* Clear Filters Button */}
          {hasActiveFilters && (
            <div className="flex items-end">
              <button
                onClick={onClear}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors"
              >
                <HiXMark className="w-4 h-4" />
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Active Filters Display */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                <span>Search: {searchQuery}</span>
                <button
                  onClick={() => onSearch('')}
                  className="hover:text-blue-600"
                >
                  <HiXMark className="w-4 h-4" />
                </button>
              </div>
            )}
            {selectedLocation && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                <span>
                  Location: {locationOptions.find((o) => o.value === selectedLocation)?.label}
                </span>
                <button
                  onClick={() => onLocationChange('')}
                  className="hover:text-green-600"
                >
                  <HiXMark className="w-4 h-4" />
                </button>
              </div>
            )}
            {selectedType && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                <span>
                  Type: {typeOptions.find((o) => o.value === selectedType)?.label}
                </span>
                <button
                  onClick={() => onTypeChange('')}
                  className="hover:text-purple-600"
                >
                  <HiXMark className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
