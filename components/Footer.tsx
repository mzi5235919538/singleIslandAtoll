import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-linear-to-b from-slate-900 to-slate-950 text-white mt-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-gradient">
              <span className="text-2xl">🏝️</span> Single Atoll
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              Your definitive guide to accommodations, dive centers, restaurants, and authentic experiences in the Maldives.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#facebook" className="text-slate-400 hover:text-accent-light transition-colors duration-300" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="#instagram" className="text-slate-400 hover:text-accent-light transition-colors duration-300" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="#twitter" className="text-slate-400 hover:text-accent-light transition-colors duration-300" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="#youtube" className="text-slate-400 hover:text-accent-light transition-colors duration-300" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Home</Link></li>
              <li><Link href="/attractions" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Attractions</Link></li>
              <li><Link href="/accommodation" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Accommodation</Link></li>
              <li><Link href="/activities" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Activities</Link></li>
              <li><Link href="/dining" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Dining</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Information</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-300 hover:text-accent-light transition-colors duration-300 text-sm">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-light">Contact Us</h4>
            <div className="space-y-3">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-accent-light">Email:</span>
                <br />
                <a href="mailto:info@singleatoll.com" className="hover:text-accent-light transition-colors duration-300">
                  info@singleatoll.com
                </a>
              </p>
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-accent-light">Website:</span>
                <br />
                www.singleatoll.com
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Footer Bottom */}
          <div className="text-center text-slate-400 text-sm">
            <p className="mb-3">
              &copy; {currentYear} Single Atoll. All rights reserved. |{' '}
              <Link href="/privacy" className="hover:text-accent-light transition-colors duration-300">Privacy Policy</Link> | {' '}
              <Link href="/terms" className="hover:text-accent-light transition-colors duration-300">Terms & Conditions</Link>
            </p>
            <p className="text-xs text-slate-500">
              Crafted with <span className="text-accent-light">❤️</span> for island adventure seekers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
