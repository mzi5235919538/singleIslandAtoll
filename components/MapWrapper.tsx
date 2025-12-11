'use client';

import dynamic from 'next/dynamic';
import React, { useState } from 'react';

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

// Google Maps embed component
const GoogleMapsEmbed = () => {
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0!2d73.4173175!3d-0.2927242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b5607b12195bab%3A0x278caa887478b60b!2sFuvahmulah!5e0!3m2!1sen!2smv!4v1234567890';

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: 0, borderRadius: '0.5rem' }}
      loading="lazy"
      allowFullScreen={true}
      referrerPolicy="no-referrer-when-downgrade"
      src={embedUrl}
    />
  );
};

/**
 * Map Wrapper Component
 * Handles dynamic imports and SSR compatibility for Leaflet maps
 * Also provides toggle between interactive map and Google Maps
 */
export default function MapWrapper({
  center = [-0.30, 73.42],
  markers,
  zoom = 13,
  height = 'h-96',
  showCurrentLocation = true,
}: MapWrapperProps) {
  const [mapType, setMapType] = useState<'interactive' | 'google'>('interactive');

  return (
    <div className="space-y-4">
      {/* Map type toggle buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => setMapType('interactive')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            mapType === 'interactive'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          🗺️ Interactive Map
        </button>
        <button
          onClick={() => setMapType('google')}
          className={`px-4 py-2 rounded-lg font-semibold transition-all ${
            mapType === 'google'
              ? 'bg-primary text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          📍 Google Maps
        </button>
      </div>

      {/* Map display */}
      <div className={`${height} rounded-lg overflow-hidden shadow-lg border border-gray-200`}>
        {mapType === 'interactive' ? (
          <InteractiveMap
            center={center}
            markers={markers}
            zoom={zoom}
            height={height}
            showCurrentLocation={showCurrentLocation}
          />
        ) : (
          <GoogleMapsEmbed />
        )}
      </div>
    </div>
  );
}
