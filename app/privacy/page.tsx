import Link from 'next/link';
import { HiArrowLeft } from 'react-icons/hi';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Fuvahmulah Tourism',
  description: 'Privacy Policy for Fuvahmulah Tourism website. Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <>
      {/* Back Button */}
      <div className="bg-white border-b border-gray-200">
        <div className="section-container py-4">
          <Link href="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <HiArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>

      {/* Privacy Policy Content */}
      <section className="section-spacing bg-white">
        <div className="section-container max-w-3xl">
          <div className="mb-12">
            <h1 className="section-title mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Fuvahmulah Tourism (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) operates the website fuvahmulah-tourism.com (the &quot;Site&quot;). 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Site.
              </p>
            </div>

            {/* 2. Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2">2.1 Personal Information You Provide</h3>
              <p className="text-gray-700 leading-relaxed">
                We collect information you voluntarily provide to us, such as when you:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Fill out our contact form (name, email, phone, message)</li>
                <li>Subscribe to newsletters or updates</li>
                <li>Make inquiries about accommodations or activities</li>
                <li>Provide feedback or reviews</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed">
                When you visit our Site, we may automatically collect:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Log data (IP address, browser type, pages visited, time and date)</li>
                <li>Device information (device type, operating system)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Analytics data (Google Analytics)</li>
                <li>Referrer information</li>
              </ul>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">2.3 Third-Party Services</h3>
              <p className="text-gray-700 leading-relaxed">
                Our Site may include third-party services that collect information:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li><strong>Google Analytics:</strong> Tracks user behavior and site performance</li>
                <li><strong>Google AdSense:</strong> Displays advertisements based on interests</li>
                <li><strong>YouTube:</strong> Embedded videos may collect viewing data</li>
                <li><strong>Email Services:</strong> Contact form submissions</li>
              </ul>
            </div>

            {/* 3. How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Respond to your inquiries and requests</li>
                <li>Provide information about accommodations, activities, and services</li>
                <li>Send promotional emails and updates (with your consent)</li>
                <li>Improve our website and user experience</li>
                <li>Analyze usage patterns and trends</li>
                <li>Comply with legal obligations</li>
                <li>Detect and prevent fraudulent activity</li>
                <li>Deliver personalized content and advertisements</li>
              </ul>
            </div>

            {/* 4. Cookies and Tracking Technologies */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site uses cookies and similar technologies to enhance your experience. Cookies are small files stored on your device 
                that help us remember your preferences and track site usage.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                <strong>Types of cookies we use:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li><strong>Essential Cookies:</strong> Required for basic site functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how you use our Site (Google Analytics)</li>
                <li><strong>Advertising Cookies:</strong> Used for ad personalization (Google AdSense)</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect site functionality.
              </p>
            </div>

            {/* 5. Google AdSense and Advertising */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Google AdSense and Advertising</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site displays advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits 
                to our website or other websites.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                You can:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Opt out of personalized ads at Google Ad Settings: myaccount.google.com/ads</li>
                <li>Visit the Network Advertising Initiative opt-out page: optout.networkadvertising.org</li>
                <li>Use a privacy browser extension to block tracking</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Google&apos;s use of data is governed by Google&apos;s Privacy Policy: policies.google.com/privacy
              </p>
            </div>

            {/* 6. Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Information Sharing</h2>
              <p className="text-gray-700 leading-relaxed">
                We do not sell, trade, or rent your personal information to third parties. However, we may share information with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li><strong>Service Providers:</strong> Email, hosting, and analytics services</li>
                <li><strong>Business Partners:</strong> Hotels, restaurants, and activity operators for booking inquiries</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Third-Party Analytics:</strong> Google Analytics and similar services</li>
              </ul>
            </div>

            {/* 7. Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement security measures to protect your information, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Secure server hosting</li>
                <li>Regular security updates and patches</li>
                <li>Access controls and authentication</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                However, no security system is completely impenetrable. We cannot guarantee absolute security of your information.
              </p>
            </div>

            {/* 8. Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Data portability</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                To exercise these rights, contact us at privacy@fuvahmulah-tourism.com
              </p>
            </div>

            {/* 9. Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site is not directed to children under 13. We do not knowingly collect personal information from children. 
                If we learn that we have collected information from a child under 13, we will promptly delete it. 
                If you believe we have collected information from a child, please contact us immediately.
              </p>
            </div>

            {/* 10. Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our Site may contain links to third-party websites and services. We are not responsible for the privacy practices 
                of these external sites. We encourage you to review their privacy policies before providing any information.
              </p>
            </div>

            {/* 11. Contact Form Data */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contact Form Data</h2>
              <p className="text-gray-700 leading-relaxed">
                When you submit our contact form, your information (name, email, phone, message) is used to:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Respond to your inquiry</li>
                <li>Connect you with relevant accommodation or activity providers</li>
                <li>Send you relevant tourism information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                We keep this data for 2 years or until you request deletion.
              </p>
            </div>

            {/* 12. International Data Transfer */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. International Data Transfer</h2>
              <p className="text-gray-700 leading-relaxed">
                Your information may be processed and stored in various countries, including countries outside your country of residence. 
                By using our Site, you consent to the transfer of your information to countries outside your country of residence.
              </p>
            </div>

            {/* 13. Policy Changes */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, 
                legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page 
                and updating the &quot;Last updated&quot; date.
              </p>
            </div>

            {/* 14. Contact Us */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-4 space-y-2">
                <p className="text-gray-900 font-semibold">Fuvahmulah Tourism</p>
                <p className="text-gray-700">Email: privacy@fuvahmulah-tourism.com</p>
                <p className="text-gray-700">Location: Fuvahmulah, Single Island Atoll, Maldives</p>
                <p className="text-gray-700">Website: fuvahmulah-tourism.com</p>
              </div>
            </div>

            {/* 15. Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Legal Compliance</h2>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy complies with:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>General Data Protection Regulation (GDPR) - for EU users</li>
                <li>California Consumer Privacy Act (CCPA) - for California residents</li>
                <li>Maldives Data Protection Act</li>
                <li>Google AdSense Program Policies</li>
                <li>Industry best practices for data privacy</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Questions About Your Privacy?</h3>
            <p className="text-gray-700 mb-4">
              If you have any concerns about how we handle your information, please don&apos;t hesitate to contact us.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
              Contact Us
              <HiArrowLeft size={18} className="rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
