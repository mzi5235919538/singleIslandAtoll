'use client';

import dynamic from 'next/dynamic';
import React from 'react';

interface MapLocation {
  position: [number, number];
  title: string;
  category: 'Diving' | 'Dining' | 'Accommodation' | 'Attractions';
  slug: string;
  description?: string;
}

interface MapWrapperProps {
  center?: [number, number];
  markers: MapLocation[];
  zoom?: number;
  height?: string;
  showCurrentLocation?: boolean;
}

// Dynamically import InteractiveMap to avoid SSR issues
const InteractiveMap = dynamic(() => import('./InteractiveMap'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center bg-gray-100 border border-gray-300 rounded-lg">
      <div className="text-center">
        <div className="animate-pulse flex justify-center mb-2">
          <div className="w-8 h-8 bg-primary rounded-full"></div>
        </div>
        <p className="text-gray-600 text-sm">Loading map...</p>
      </div>
    </div>
  ),
});

/**
 * Map Wrapper Component
 * Handles dynamic imports and SSR compatibility for Leaflet maps
 */
export default function MapWrapper({
  center = [-0.30, 73.42],
  markers,
  zoom = 13,
  height = 'h-96',
  showCurrentLocation = true,
}: MapWrapperProps) {
  return (
    <div className={height}>
      <InteractiveMap
        center={center}
        markers={markers}
        zoom={zoom}
        height={height}
        showCurrentLocation={showCurrentLocation}
      />
    </div>
  );
}
