import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTripadvisor } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';
import { MdLocationOn } from 'react-icons/md';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Newsletter Section */}
        <div className="mb-12 md:mb-16 pb-12 border-b border-slate-700">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">Stay Updated</h3>
            <p className="text-slate-300 mb-6 text-sm md:text-base">Subscribe to our newsletter for exclusive offers and travel tips</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 min-h-12 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-accent text-base"
                inputMode="email"
              />
              <button className="px-6 py-3 min-h-12 whitespace-nowrap bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 active:bg-primary/80 transition-all duration-300">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span className="text-3xl">🏝️</span> <span>Fuvahmulah</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm md:text-base">
              Your definitive guide to the world's premier tiger shark diving destination. Explore pristine beaches, world-class diving, authentic cuisine, and unforgettable island experiences.
            </p>
            <div className="flex gap-2 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all duration-300 rounded-lg" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all duration-300 rounded-lg" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all duration-300 rounded-lg" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all duration-300 rounded-lg" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
              <a href="https://tripadvisor.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 text-slate-400 hover:text-accent-light hover:bg-slate-700 transition-all duration-300 rounded-lg" aria-label="TripAdvisor">
                <FaTripadvisor size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Home</Link></li>
              <li><Link href="/attractions" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Attractions</Link></li>
              <li><Link href="/accommodation" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Accommodation</Link></li>
              <li><Link href="/activities" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Diving & Activities</Link></li>
              <li><Link href="/dining" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Dining</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Information</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">About Us</Link></li>
              <li><Link href="/contact" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Contact</Link></li>
              <li><Link href="/privacy" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Privacy Policy</Link></li>
              <li><Link href="/terms" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">Terms of Service</Link></li>
              <li><a href="#faq" className="flex items-center px-3 py-2 text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm rounded hover:bg-slate-800 min-h-10">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <HiPhone className="w-5 h-5 text-accent mt-1 shrink-0" />
                <a href="tel:+960-775-7070" className="flex flex-col flex-1 py-1 rounded hover:text-accent-light transition-colors">
                  <span className="text-slate-300 text-sm">+960 775-7070</span>
                  <span className="text-slate-400 text-xs">24/7 Support</span>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <HiMail className="w-5 h-5 text-accent mt-1 shrink-0" />
                <a href="mailto:info@fuvahmulah.travel" className="flex flex-col flex-1 py-1 rounded hover:text-accent-light transition-colors">
                  <span className="text-slate-300 text-sm">info@fuvahmulah.travel</span>
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn className="w-5 h-5 text-accent mt-1 shrink-0" />
                <div className="py-1">
                  <p className="text-slate-300 text-sm">Fuvahmulah City</p>
                  <p className="text-slate-400 text-xs">Maldives</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div className="mb-12 pb-12 border-b border-slate-700">
          <h4 className="text-lg md:text-xl font-semibold mb-6 text-center text-accent-light">Certified & Trusted By</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <a href="#" className="flex flex-col items-center text-center p-3 md:p-4 border border-slate-700 rounded-lg hover:border-accent hover:bg-slate-800 transition-all active:bg-slate-700 min-h-24 justify-center">
              <p className="text-slate-300 text-sm font-semibold">SSI Certified</p>
              <p className="text-xs text-slate-400">Scuba Schools International</p>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-3 md:p-4 border border-slate-700 rounded-lg hover:border-accent hover:bg-slate-800 transition-all active:bg-slate-700 min-h-24 justify-center">
              <p className="text-slate-300 text-sm font-semibold">Top Rated</p>
              <p className="text-xs text-slate-400">TripAdvisor Excellence</p>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-3 md:p-4 border border-slate-700 rounded-lg hover:border-accent hover:bg-slate-800 transition-all active:bg-slate-700 min-h-24 justify-center">
              <p className="text-slate-300 text-sm font-semibold">Green Certified</p>
              <p className="text-xs text-slate-400">Eco-Tourism Standard</p>
            </a>
            <a href="#" className="flex flex-col items-center text-center p-3 md:p-4 border border-slate-700 rounded-lg hover:border-accent hover:bg-slate-800 transition-all active:bg-slate-700 min-h-24 justify-center">
              <p className="text-slate-300 text-sm font-semibold">Safety First</p>
              <p className="text-xs text-slate-400">Maritime Authority</p>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-700 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-center md:text-left">
            <div>
              <p className="text-slate-400 text-sm">
                <span className="font-semibold text-slate-300">Hours:</span> Available 24/7<br/>
                <span className="text-xs">Chat, Email, Phone Support</span>
              </p>
            </div>
            <div>
              <p className="text-slate-300 text-sm">
                &copy; {currentYear} Fuvahmulah Travel. All rights reserved.
              </p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex gap-4 justify-center md:justify-end flex-wrap">
                <Link href="/privacy" className="px-2 py-1 text-slate-400 hover:text-accent-light transition-colors text-xs rounded hover:bg-slate-800 min-h-8 flex items-center">Privacy</Link>
                <span className="text-slate-600">•</span>
                <Link href="/terms" className="px-2 py-1 text-slate-400 hover:text-accent-light transition-colors text-xs rounded hover:bg-slate-800 min-h-8 flex items-center">Terms</Link>
                <span className="text-slate-600">•</span>
                <a href="#sitemap" className="px-2 py-1 text-slate-400 hover:text-accent-light transition-colors text-xs rounded hover:bg-slate-800 min-h-8 flex items-center">Sitemap</a>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-slate-500 text-xs border-t border-slate-700 pt-6">
            <p>
              Made with <span className="text-accent">❤️</span> for island adventure seekers | 
              <br className="md:hidden" /> Secure booking & payment guaranteed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
