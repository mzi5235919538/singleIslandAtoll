'use client';

import { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

interface FilterOption {
  value: string;
  label: string;
}

interface FilterBarProps {
  onLocationChange?: (location: string) => void;
  onTypeChange?: (type: string) => void;
  locationOptions: FilterOption[];
  typeOptions: FilterOption[];
}

export default function FilterBar({
  onLocationChange,
  onTypeChange,
  locationOptions,
  typeOptions,
}: FilterBarProps) {
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
    onLocationChange?.(value);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value);
    onTypeChange?.(value);
  };

  return (
    <section className="bg-white border-b border-gray-200 sticky top-20 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search Bar */}
          <div>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>

          {/* Location Filter */}
          <div className="relative">
            <select
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
            >
              <option value="all">📍 All Locations</option>
              {locationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>

          {/* Type Filter */}
          <div className="relative">
            <select
              value={selectedType}
              onChange={(e) => handleTypeChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
            >
              <option value="all">🏷️ All Types</option>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <HiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
