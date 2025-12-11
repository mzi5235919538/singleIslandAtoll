'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiMenu, HiX, HiArrowRight, HiChevronDown } from 'react-icons/hi';

// TypeScript Interfaces
interface NavSubItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavSubItem[];
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'DO',
      submenu: [
        { href: '/activities', label: 'Diving' },
        { href: '/activities', label: 'Surfing' },
        { href: '/activities', label: 'Fishing' },
        { href: '/attractions', label: 'Sightseeing' },
      ],
    },
    { href: '/accommodation', label: 'STAY' },
    { href: '/dining', label: 'EAT' },
    {
      label: 'TRAVEL GUIDE',
      submenu: [
        { href: '/attractions', label: 'Discover' },
        { href: '/about', label: 'Getting Here' },
        { href: '/attractions', label: 'Getting Around' },
        { href: '/about', label: 'Blog' },
      ],
    },
    { href: '/contact', label: 'CONTACT US' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-lg-modern border-b border-gray-100'
          : 'bg-white shadow-md-modern border-b border-gray-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 md:py-4">
          {/* Logo/Branding */}
          <Link
            href="/"
            className="flex items-center gap-2 md:gap-3 font-bold transition-all duration-300 hover:opacity-80 text-primary"
          >
            <div className="text-3xl md:text-4xl transition-transform duration-300 hover:scale-110">🏝️</div>
            <div className="hidden sm:block">
              <div className="text-base md:text-lg font-bold tracking-tight text-primary">Fuvahmulah</div>
              <div className="text-xs text-text-muted font-normal">Travel Guide</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <button className="px-4 py-2 rounded-lg font-semibold text-text-light hover:text-primary transition-all duration-300 flex items-center gap-1 hover:bg-blue-50 group">
                    {item.label}
                    <HiChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="px-4 py-2 rounded-lg font-semibold text-text-light hover:text-primary hover:bg-blue-50 transition-all duration-300"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg-modern opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.href}
                        href={subitem.href}
                        className="block px-4 py-3 text-text-light hover:text-primary hover:bg-blue-50 transition-all duration-300 first:rounded-t-lg last:rounded-b-lg text-sm font-medium"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              BOOK NOW
              <HiArrowRight size={18} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 text-text-light ${
              scrolled ? 'hover:bg-gray-100' : 'hover:bg-gray-50'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-2 pb-6 border-t border-gray-100 pt-4 animate-slideInDown max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.label} className="flex flex-col">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenMobileDropdown(
                          openMobileDropdown === item.label ? null : item.label
                        )
                      }
                      className="px-4 py-3 rounded-lg text-text-light font-semibold hover:text-primary hover:bg-blue-50 transition-all duration-300 flex items-center justify-between"
                    >
                      {item.label}
                      <HiChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openMobileDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openMobileDropdown === item.label && (
                      <div className="bg-blue-50 animate-slideInDown">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-6 py-2 text-text-light hover:text-primary hover:bg-blue-100 transition-all duration-300 text-sm font-medium"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setOpenMobileDropdown(null);
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className="px-4 py-3 rounded-lg text-text-light font-semibold hover:text-primary hover:bg-blue-50 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              className="btn-primary mt-4 flex items-center justify-center gap-2 w-full font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              BOOK NOW
              <HiArrowRight size={18} />
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
