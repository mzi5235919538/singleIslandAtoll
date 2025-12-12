'use client';

import React from 'react';

interface MapWrapperProps {
  height?: string;
}

/**
 * Map Wrapper Component
 * Displays embedded Google Maps
 */
export default function MapWrapper({
  height = 'h-96',
}: MapWrapperProps) {
  const embedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.0!2d73.4173175!3d-0.2927242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b5607b12195bab%3A0x278caa887478b60b!2sFuvahmulah!5e0!3m2!1sen!2smv!4v1234567890';

  return (
    <div className={`${height} rounded-lg overflow-hidden shadow-lg border border-gray-200`}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '0.5rem' }}
        loading="lazy"
        allowFullScreen={true}
        referrerPolicy="no-referrer-when-downgrade"
        src={embedUrl}
      />
    </div>
  );
}
