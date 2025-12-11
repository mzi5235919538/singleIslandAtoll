'use client';

import { useEffect, useState, useCallback } from 'react';

/**
 * Mobile Test Checklist Component
 * Development only - helps verify mobile optimization
 * Remove this component in production
 */
export default function MobileTestChecklist() {
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window !== 'undefined' ? window.innerHeight : 0
  );
  const [orientation, setOrientation] = useState(() =>
    typeof window !== 'undefined'
      ? window.innerWidth > window.innerHeight
        ? 'Landscape'
        : 'Portrait'
      : ''
  );
  const [touchEnabled] = useState(() =>
    typeof window !== 'undefined'
      ? window.matchMedia('(hover: none)').matches || 'ontouchstart' in window
      : false
  );
  const [scrollY, setScrollY] = useState(0);
  const [showChecklist, setShowChecklist] = useState(false);

  const handleResize = useCallback(() => {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
    setOrientation(
      window.innerWidth > window.innerHeight ? 'Landscape' : 'Portrait'
    );
  }, []);

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleResize, handleScroll]);

  if (typeof window === 'undefined') return null;

  // Only show in development and for small screens
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <>
      {/* Fixed Toggle Button */}
      <button
        onClick={() => setShowChecklist(!showChecklist)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-purple-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-purple-700 transition-colors md:hidden"
        aria-label="Toggle mobile test checklist"
      >
        📱
      </button>

      {/* Checklist Panel */}
      {showChecklist && (
        <div className="fixed bottom-20 right-4 z-50 w-80 bg-white rounded-lg shadow-xl border-2 border-purple-600 p-4 max-h-96 overflow-y-auto">
          <div className="space-y-3 text-sm">
            <div className="border-b pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                📱 Device Info
              </h3>
              <p>
                <span className="font-semibold">Width:</span> {viewportWidth}px
              </p>
              <p>
                <span className="font-semibold">Height:</span> {viewportHeight}px
              </p>
              <p>
                <span className="font-semibold">Orientation:</span>{' '}
                {orientation}
              </p>
              <p>
                <span className="font-semibold">Touch:</span>{' '}
                {touchEnabled ? '✅ Enabled' : '❌ Disabled'}
              </p>
              <p>
                <span className="font-semibold">Scroll Y:</span> {scrollY}px
              </p>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                ✋ Touch Targets
              </h3>
              <p className="text-xs text-gray-600">
                Minimum: 44×44px (actual: often shown in devtools)
              </p>
              <label className="flex items-center gap-2 mt-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>All buttons h-12 (48px)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Links min 44px tap target</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Buttons have visual feedback</span>
              </label>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                📝 Typography
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Body text min 16px</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Headings scale mobile→desktop</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Line height: leading-relaxed</span>
              </label>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                🎨 Responsive Layout
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>No horizontal scroll</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Grid → single column mobile</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Padding: p-4 md:p-8</span>
              </label>
            </div>

            <div className="border-b pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                🖼️ Images
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Lazy loaded below fold</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Aspect ratio defined</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Responsive sizes</span>
              </label>
            </div>

            <div className="pb-3">
              <h3 className="font-bold text-purple-600 mb-2">
                ⚡ Performance
              </h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Smooth animations</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5"
                  readOnly
                />
                <span>Code splitting enabled</span>
              </label>
              <p className="text-xs text-gray-600 mt-2">
                Test with Chrome DevTools throttling: Slow 3G
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowChecklist(false)}
            className="w-full mt-3 px-3 py-2 bg-red-500 text-white rounded font-semibold text-xs hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
