'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiArrowRight } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/attractions', label: 'Explore' },
    { href: '/accommodation', label: 'Stay' },
    { href: '/dining', label: 'Dine' },
    { href: '/activities', label: 'Activities' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg-modern'
          : 'bg-white shadow-md-modern'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-3 font-bold transition-all duration-300 hover:opacity-80 ${
              scrolled ? 'text-blue-600' : 'text-blue-600'
            }`}
          >
            <div className={`text-4xl transition-transform duration-300 hover:scale-110`}>🌴</div>
            <div>
              <div className="text-lg font-bold tracking-tight hidden sm:block">Single Atoll</div>
              <div className="text-xs text-gray-500 hidden sm:block font-normal">Maldives Travel Guide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2"
            >
              Book Now
              <HiArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 pb-6 border-t border-gray-200 pt-4 animate-slideInDown">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-2 flex items-center justify-center gap-2 w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
              <HiArrowRight size={18} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
