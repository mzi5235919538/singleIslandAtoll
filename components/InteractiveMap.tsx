'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import Link from 'next/link';

interface MarkerData {
  position: [number, number];
  title: string;
  category: 'Diving' | 'Dining' | 'Accommodation' | 'Attractions';
  slug: string;
  description?: string;
}

interface InteractiveMapProps {
  center?: [number, number];
  markers: MarkerData[];
  zoom?: number;
  height?: string;
  showCurrentLocation?: boolean;
  onMarkerClick?: (slug: string) => void;
}

// Custom marker colors by category
const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Diving': '#3b82f6', // Blue
    'Dining': '#f97316', // Orange
    'Accommodation': '#22c55e', // Green
    'Attractions': '#a855f7', // Purple
  };
  return colors[category] || '#6b7280'; // Gray as fallback
};

// Category icons mapping
const getCategoryIcon = (category: string): string => {
  const icons: Record<string, string> = {
    'Diving': '🤿',
    'Dining': '🍽️',
    'Accommodation': '🏨',
    'Attractions': '📍',
  };
  return icons[category] || '📍';
};

// Custom marker component
const CustomMarker = ({ 
  position, 
  title, 
  category, 
  slug,
  description 
}: MarkerData) => {
  const color = getCategoryColor(category);
  const icon = getCategoryIcon(category);

  // Create custom HTML icon
  const customIcon = L.divIcon({
    html: `
      <div style="
        background-color: ${color};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        cursor: pointer;
      ">
        ${icon}
      </div>
    `,
    className: 'custom-marker',
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20],
  });

  return (
    <Marker position={position} icon={customIcon}>
      <Popup>
        <div className="w-48">
          <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 mb-3">{category}</p>
          {description && <p className="text-xs text-gray-700 mb-3">{description}</p>}
          <Link
            href={`/${category.toLowerCase()}/${slug}`}
            className="inline-block bg-primary text-white px-3 py-1 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </Popup>
    </Marker>
  );
};

// Location button component
const LocationButton = () => {
  const map = useMap();

  const handleGetLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 15);
          
          // Add a marker for current location
          L.marker([latitude, longitude], {
            icon: L.icon({
              iconUrl: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSI4IiBmaWxsPSIjMzM1MWNmIiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIvPjwvc3ZnPg==',
              iconSize: [32, 32],
              iconAnchor: [16, 16],
            }),
          }).addTo(map).bindPopup('📍 Your location');
        },
        () => {
          alert('Unable to retrieve your location');
        }
      );
    }
  };

  return (
    <button
      onClick={handleGetLocation}
      className="absolute bottom-4 right-4 z-401 bg-primary text-white p-2 rounded-lg shadow-lg hover:bg-primary/90 transition-colors"
      title="Show current location"
    >
      📍
    </button>
  );
};

// Google Maps button component
const GoogleMapsButton = () => {
  const googleMapsUrl = 'https://www.google.com/maps/place/Fuvahmulah/@-0.2927242,73.4173175,15z/data=!4m6!3m5!1s0x24b5607b12195bab:0x278caa887478b60b!8m2!3d-0.2983944!4d73.4268608!16zL20vMDc2NnBx?entry=ttu&g_ep=EgoyMDI1MTIwOC4wIKXMDSoASAFQAw%3D%3D';

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute bottom-4 left-4 z-401 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg hover:bg-gray-100 transition-colors font-semibold text-sm flex items-center gap-2 border border-gray-300"
      title="View on Google Maps"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 7.14 11 21 12 21s12-13.86 12-21c0-6.63-5.37-12-12-12zm0 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
      Google Maps
    </a>
  );
};

export default function InteractiveMap({
  center = [-0.30, 73.42], // Fuvahmulah center
  markers,
  zoom = 13,
  height = 'h-96',
  showCurrentLocation = true,
}: InteractiveMapProps) {
  return (
    <div className={`relative w-full ${height} rounded-lg overflow-hidden shadow-lg border border-gray-200`}>
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        className="w-full h-full"
        style={{ height: '100%' }}
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          maxZoom={19}
        />

        {/* Marker clustering */}
        <MarkerClusterGroup chunkedLoading>
          {markers.map((marker) => (
            <CustomMarker
              key={marker.slug}
              {...marker}
            />
          ))}
        </MarkerClusterGroup>

        {/* Current location button */}
        {showCurrentLocation && <LocationButton />}
        
        {/* Google Maps button */}
        <GoogleMapsButton />
      </MapContainer>

      {/* Map attribution text */}
      <style jsx global>{`
        .leaflet-control-attribution {
          font-size: 11px !important;
        }
        
        .custom-marker {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
        }
        
        .custom-marker:hover {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }
      `}</style>
    </div>
  );
}
