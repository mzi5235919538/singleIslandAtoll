'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX, HiArrowRight, HiChevronDown } from 'react-icons/hi';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import MegaMenu from './MegaMenu';
import { useBookingModal } from './BookingModalProvider';

// TypeScript Interfaces
interface NavSubItem {
  href: string;
  label: string;
}

interface NavItem {
  href?: string;
  label: string;
  submenu?: NavSubItem[];
  isMega?: boolean;
}

interface MegaMenuItem {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export default function Header() {
  const pathname = usePathname();
  const { openBookingModal } = useBookingModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menu when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setOpenMobileDropdown(null);
        setOpenDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const navItems: NavItem[] = [
    {
      label: 'DO',
      isMega: true,
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
        { href: '/attractions', label: 'Attractions' },
        { href: '/about', label: 'About Fuvahmulah' },
        { href: '/contact', label: 'Contact Us' },
        { href: '/blog', label: 'Travel Blog' },
      ],
    },
    { href: '/contact', label: 'CONTACT' },
  ];

  // Mega menu items for "DO" category
  const megaMenuItems: MegaMenuItem[] = [
    {
      icon: '🤿',
      title: 'Diving',
      description: 'Explore world-class dive sites',
      href: '/activities',
    },
    {
      icon: '🏄',
      title: 'Surfing',
      description: 'Ride the island waves',
      href: '/activities',
    },
    {
      icon: '🎣',
      title: 'Fishing',
      description: 'Deep sea adventures',
      href: '/activities',
    },
    {
      icon: '🗺️',
      title: 'Sightseeing',
      description: 'Explore the island',
      href: '/attractions',
    },
  ];

  // Check if current page is active
  const isPageActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + '/');
  };

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
          <nav className="hidden lg:flex gap-1 items-center" ref={dropdownRef}>
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.submenu && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.submenu ? (
                  <button
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center gap-1 ${
                      openDropdown === item.label || isPageActive(item.submenu?.[0]?.href)
                        ? 'text-primary bg-blue-50'
                        : 'text-text-light hover:text-primary hover:bg-blue-50'
                    }`}
                    aria-expanded={openDropdown === item.label}
                    aria-haspopup={item.isMega ? 'menu' : 'true'}
                  >
                    {item.label}
                    <HiChevronDown
                      size={16}
                      className={`transition-transform duration-300 ${
                        openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href || '#'}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isPageActive(item.href)
                        ? 'text-primary bg-blue-50'
                        : 'text-text-light hover:text-primary hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Mega Menu for "DO" */}
                {item.isMega && item.submenu && (
                  <MegaMenu
                    items={megaMenuItems}
                    isOpen={openDropdown === item.label}
                    onClose={() => setOpenDropdown(null)}
                  />
                )}

                {/* Regular Dropdown Menu */}
                {item.submenu && !item.isMega && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-40">
                    {item.submenu.map((subitem, idx) => {
                      const isLast = idx === item.submenu!.length - 1;
                      return (
                        <Link
                          key={`${item.label}-${idx}`}
                          href={subitem.href}
                          className={`block px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            isPageActive(subitem.href)
                              ? 'text-primary bg-blue-50'
                              : 'text-text-light hover:text-primary hover:bg-blue-50'
                          } ${idx === 0 ? 'rounded-t-xl' : ''} ${
                            isLast ? 'rounded-b-xl' : ''
                          } ${!isLast ? 'border-b border-gray-100' : ''}`}
                        >
                          {subitem.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => openBookingModal()}
              className="btn-primary flex items-center gap-2 whitespace-nowrap"
            >
              BOOK NOW
              <HiArrowRight size={18} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden w-12 h-12 flex items-center justify-center rounded-lg transition-all duration-300 text-text-light hover:bg-gray-100 active:bg-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <>
            {/* Backdrop blur */}
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Mobile menu */}
            <nav
              className="fixed right-0 top-16 bottom-0 w-full sm:w-80 bg-white shadow-2xl z-30 lg:hidden flex flex-col overflow-y-auto animate-slideInRight"
              ref={menuRef}
            >
              {/* Menu items */}
              <div className="flex flex-col pt-4">
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
                          className={`w-full px-4 py-3 text-left font-semibold transition-all duration-300 flex items-center justify-between min-h-12 active:bg-gray-100 ${
                            isPageActive(item.submenu?.[0]?.href)
                              ? 'text-primary bg-blue-50'
                              : 'text-text-light hover:text-primary hover:bg-blue-50'
                          }`}
                          aria-expanded={openMobileDropdown === item.label}
                        >
                          <span>{item.label}</span>
                          <HiChevronDown
                            size={18}
                            className={`transition-transform duration-300 ${
                              openMobileDropdown === item.label ? 'rotate-180' : ''
                            }`}
                          />
                        </button>

                        {/* Expandable submenu */}
                        {openMobileDropdown === item.label && (
                          <div className="bg-blue-50 border-t border-blue-100 max-h-96 overflow-hidden animate-slideInDown">
                            {item.submenu.map((subitem, idx) => {
                              const isLast = idx === item.submenu!.length - 1;
                              return (
                                <Link
                                  key={`${item.label}-${idx}`}
                                  href={subitem.href}
                                  className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-300 min-h-12 active:bg-blue-200 ${
                                    isPageActive(subitem.href)
                                      ? 'text-primary bg-blue-100'
                                      : 'text-text-light hover:text-primary hover:bg-blue-100'
                                  } ${!isLast ? 'border-b border-blue-100' : ''}`}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setOpenMobileDropdown(null);
                                  }}
                                >
                                  {subitem.label}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className={`block px-4 py-3 text-left font-semibold transition-all duration-300 min-h-12 flex items-center active:bg-gray-100 ${
                          isPageActive(item.href)
                            ? 'text-primary bg-blue-50'
                            : 'text-text-light hover:text-primary hover:bg-blue-50'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4" />

              {/* CTA Button */}
              <div className="px-4 pb-4">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full font-semibold py-3 px-4 min-h-12 rounded-lg bg-primary text-white hover:bg-primary/90 active:bg-primary/80 transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  BOOK NOW
                  <HiArrowRight size={18} />
                </Link>
              </div>

              {/* Social Media Icons */}
              <div className="px-4 py-4 border-t border-gray-200 flex items-center justify-center gap-2">
                <a
                  href="https://facebook.com/fuvahmulah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-text-muted hover:text-primary transition-all duration-300 hover:bg-blue-50 active:bg-blue-100 rounded-lg"
                  aria-label="Facebook"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://instagram.com/fuvahmulah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-text-muted hover:text-primary transition-all duration-300 hover:bg-blue-50 active:bg-blue-100 rounded-lg"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://twitter.com/fuvahmulah"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 text-text-muted hover:text-primary transition-all duration-300 hover:bg-blue-50 active:bg-blue-100 rounded-lg"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}
