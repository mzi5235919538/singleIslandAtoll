import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-primary text-white mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">🏝️</span> Fuvahmulah Guide
            </h3>
            <p className="text-blue-100 leading-relaxed">
              Your complete travel companion for discovering the beauty of Single Island Atoll, Maldives.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-blue-100 hover:text-white transition">Home</Link></li>
              <li><Link href="/attractions" className="text-blue-100 hover:text-white transition">Attractions</Link></li>
              <li><Link href="/accommodation" className="text-blue-100 hover:text-white transition">Accommodation</Link></li>
              <li><Link href="/activities" className="text-blue-100 hover:text-white transition">Activities</Link></li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Information</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-blue-100 hover:text-white transition">About Us</a></li>
              <li><Link href="/contact" className="text-blue-100 hover:text-white transition">Contact</Link></li>
              <li><Link href="/privacy" className="text-blue-100 hover:text-white transition">Privacy Policy</Link></li>
              <li><a href="#terms" className="text-blue-100 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-cyan-300">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#facebook" className="text-2xl text-blue-100 hover:text-white transition" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#instagram" className="text-2xl text-blue-100 hover:text-white transition" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#twitter" className="text-2xl text-blue-100 hover:text-white transition" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#youtube" className="text-2xl text-blue-100 hover:text-white transition" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
          <div className="border-t border-white border-opacity-20 pt-8">
          {/* Footer Bottom */}
          <div className="text-center text-blue-100">
            <p className="mb-2">
              &copy; {currentYear} Fuvahmulah Tourism Guide. All rights reserved. |{' '}
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link> | {' '}
              <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
            </p>
            <p>
              Single Island Atoll, Maldives | Email:{' '}
              <a href="mailto:info@fuvahmulah-tourism.com" className="hover:text-white transition">
                info@fuvahmulah-tourism.com
              </a>{' '}
              | Phone: +960 XXX XXXX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
