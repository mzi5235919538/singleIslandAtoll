import Link from 'next/link';
import { HiArrowLeft, HiShieldCheck, HiClock, HiCheckCircle, HiInformationCircle } from 'react-icons/hi';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Privacy Policy - Fuvahmulah Tourism',
  description: 'Privacy Policy for Fuvahmulah Tourism website. Learn how we handle your data and protect your privacy.',
};

interface PolicySectionProps {
  id: string;
  title: string;
  icon: FC<{ size: number; className?: string }>;
  children: ReactNode;
}

const PolicySection: FC<PolicySectionProps> = ({ id, title, icon: Icon, children }) => (
  <div id={id} className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8 scroll-mt-20 hover:shadow-md-modern transition-shadow duration-300">
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    <div className="text-gray-700 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const TextBlock = ({ children }: { children: ReactNode }) => (
  <p className="text-gray-700 leading-relaxed">{children}</p>
);

const BulletList = ({ items }: { items: (string | ReactNode)[] }) => (
  <ul className="space-y-2 ml-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <HiCheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
        <span className="text-gray-700">{item}</span>
      </li>
    ))}
  </ul>
);

const HighlightBox = ({ title, children }: { title: string; children: ReactNode }) => (
  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
    <p className="font-semibold text-blue-900 mb-2">{title}</p>
    <div className="text-blue-800">{children}</div>
  </div>
);

const ComplianceCard = ({ text }: { text: string }) => (
  <div className="bg-linear-to-br from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
    <HiCheckCircle size={24} className="text-green-600 shrink-0 mt-0.5" />
    <span className="text-green-900 font-medium">{text}</span>
  </div>
);

export default function PrivacyPolicy() {
  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'collection', label: 'Information Collection' },
    { id: 'usage', label: 'Data Usage' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'adsense', label: 'Google AdSense' },
    { id: 'sharing', label: 'Information Sharing' },
    { id: 'security', label: 'Data Security' },
    { id: 'rights', label: 'Your Rights' },
    { id: 'children', label: 'Children&apos;s Privacy' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <>
      {/* Hero Section with Gradient */}
      <section className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-500 to-cyan-500 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
                <HiShieldCheck size={40} className="text-cyan-300" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
            </div>
            <p className="text-xl text-blue-50 mb-6 leading-relaxed">
              We&apos;re committed to protecting your privacy and being transparent about how we handle your data. Your trust is our priority.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-blue-100">
                <HiClock size={20} />
                <span className="font-medium">Last updated: December 2025</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-blue-50 backdrop-blur">
                <HiInformationCircle size={18} />
                <span className="text-sm font-medium">GDPR & CCPA Compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <div className="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="section-container py-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg whitespace-nowrap transition-colors duration-200 border border-gray-200 hover:border-blue-300"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section-spacing bg-gray-50">
        <div className="section-container max-w-4xl">
          {/* Space for anchor links */}
          <div className="space-y-8">
            {/* 1. Introduction */}
            <PolicySection id="introduction" title="Introduction" icon={HiShieldCheck}>
              <TextBlock>
                Single Atoll (&quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or &quot;Company&quot;) operates the website www.singleatoll.com (the &quot;Site&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and submit inquiries through our platform.
              </TextBlock>
              <TextBlock>
                <strong>Important:</strong> Single Atoll is a hub connecting travelers with third-party service providers (guest houses, dive centers, restaurants, and activity operators). When you submit an inquiry form, your data is shared with the selected vendor for the purpose of responding to your request. Please read this Privacy Policy carefully to understand this data-sharing practice.
              </TextBlock>
              <TextBlock>
                If you do not agree with our policies and practices, please do not use our Site.
              </TextBlock>
            </PolicySection>

            {/* 2. Information We Collect */}
            <PolicySection id="collection" title="Information We Collect" icon={HiInformationCircle}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information You Provide</h3>
                  <TextBlock>
                    We collect information you voluntarily provide to us, such as when you:
                  </TextBlock>
                  <BulletList items={[
                    'Fill out our contact form (name, email, phone, message)',
                    'Subscribe to newsletters or updates',
                    'Make inquiries about accommodations or activities',
                    'Provide feedback or reviews',
                  ]} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                  <TextBlock>
                    When you visit our Site, we may automatically collect:
                  </TextBlock>
                  <BulletList items={[
                    'Log data (IP address, browser type, pages visited, time and date)',
                    'Device information (device type, operating system)',
                    'Cookies and similar tracking technologies',
                    'Analytics data (Google Analytics)',
                    'Referrer information',
                  ]} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Services</h3>
                  <TextBlock>
                    Our Site may include third-party services that collect information:
                  </TextBlock>
                  <BulletList items={[
                    (<><strong>Google Analytics:</strong> Tracks user behavior and site performance</>),
                    (<><strong>Google AdSense:</strong> Displays advertisements based on interests</>),
                    (<><strong>YouTube:</strong> Embedded videos may collect viewing data</>),
                    (<><strong>Email Services:</strong> Contact form submissions</>),
                  ]} />
                </div>
              </div>
            </PolicySection>

            {/* 3. How We Use Your Data */}
            <PolicySection id="usage" title="How We Use Your Data" icon={HiCheckCircle}>
              <TextBlock>
                We use the information we collect to:
              </TextBlock>
              <BulletList items={[
                'Respond to your inquiries and requests',
                'Provide information about accommodations, activities, and services',
                'Send promotional emails and updates (with your consent)',
                'Improve our website and user experience',
                'Analyze usage patterns and trends',
                'Comply with legal obligations',
                'Detect and prevent fraudulent activity',
                'Deliver personalized content and advertisements',
              ]} />
            </PolicySection>

            {/* 4. Cookies & Tracking */}
            <PolicySection id="cookies" title="Cookies & Tracking Technologies" icon={HiInformationCircle}>
              <TextBlock>
                Our Site uses cookies and similar technologies to enhance your experience. Cookies are small files stored on your device that help us remember your preferences and track site usage.
              </TextBlock>
              <div className="bg-gray-100 rounded-lg p-6 my-4">
                <h3 className="font-semibold text-gray-900 mb-4">Types of Cookies We Use</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="font-medium text-gray-900">Essential Cookies</p>
                    <p className="text-gray-700 text-sm">Required for basic site functionality</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="font-medium text-gray-900">Analytics Cookies</p>
                    <p className="text-gray-700 text-sm">Help us understand how you use our Site</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <p className="font-medium text-gray-900">Advertising Cookies</p>
                    <p className="text-gray-700 text-sm">Used for ad personalization</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <p className="font-medium text-gray-900">Preference Cookies</p>
                    <p className="text-gray-700 text-sm">Remember your settings and preferences</p>
                  </div>
                </div>
              </div>
              <TextBlock>
                You can control cookies through your browser settings. However, disabling cookies may affect site functionality.
              </TextBlock>
            </PolicySection>

            {/* 5. Google AdSense */}
            <PolicySection id="adsense" title="Google AdSense & Advertising" icon={HiCheckCircle}>
              <TextBlock>
                Our Site displays advertisements through Google AdSense. Google may use cookies to serve ads based on your prior visits to our website or other websites.
              </TextBlock>
              <HighlightBox title="Your Ad Control Options">
                <div className="space-y-2">
                  <p>✓ Opt out of personalized ads at Google Ad Settings: myaccount.google.com/ads</p>
                  <p>✓ Visit the Network Advertising Initiative opt-out page: optout.networkadvertising.org</p>
                  <p>✓ Use a privacy browser extension to block tracking</p>
                </div>
              </HighlightBox>
              <TextBlock>
                Google&apos;s use of data is governed by Google&apos;s Privacy Policy: policies.google.com/privacy
              </TextBlock>
            </PolicySection>

            {/* 6. Information Sharing */}
            <PolicySection id="sharing" title="Information Sharing - Critical for Hub Model" icon={HiCheckCircle}>
              <div className="space-y-6">
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                  <p className="font-semibold text-blue-900 mb-2">⚠️ Important: Single Atoll Data Sharing Model</p>
                  <p className="text-blue-800">
                    Single Atoll operates as a hub that connects travelers with third-party service providers. By submitting an inquiry form, you explicitly consent to your personal data being shared with the selected vendor to fulfill your request.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Third-Party Vendors (Accommodation, Diving, Dining)</h3>
                  <TextBlock>
                    When you submit an Inquiry Form requesting information about a specific guest house, dive center, restaurant, or activity, your personal information (name, email, phone, travel dates, and message) is forwarded directly to that vendor for the purpose of:
                  </TextBlock>
                  <BulletList items={[
                    'Responding to your inquiry and answering your questions',
                    'Providing pricing, availability, and booking information',
                    'Facilitating direct contact and follow-up communication',
                    'Processing your request for services',
                  ]} />
                  <TextBlock>
                    <strong>You must accept this data sharing to use our inquiry system.</strong> The selected vendor becomes the recipient of your data and is responsible for their own privacy practices. We recommend reviewing their privacy policy independently.
                  </TextBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Providers & Analytics</h3>
                  <TextBlock>
                    We may also share non-personal data with:
                  </TextBlock>
                  <BulletList items={[
                    (<><strong>Google Analytics:</strong> For website usage tracking and performance analysis</>),
                    (<><strong>Email Service Providers:</strong> To deliver inquiry forms and communications</>),
                    (<><strong>Hosting Providers:</strong> For website infrastructure and security</>),
                  ]} />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Requirements</h3>
                  <TextBlock>
                    We may disclose information if required to do so by law, to enforce our terms of service, or to protect the rights and safety of our users.
                  </TextBlock>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Retention</h3>
                  <TextBlock>
                    Single Atoll retains a copy of your inquiry data for administrative, customer service, and record-keeping purposes for up to 2 years, unless you request deletion. Third-party vendors may retain your information according to their own policies.
                  </TextBlock>
                </div>
              </div>
            </PolicySection>

            {/* 7. Data Security */}
            <PolicySection id="security" title="Data Security" icon={HiShieldCheck}>
              <TextBlock>
                We implement security measures to protect your information, including:
              </TextBlock>
              <BulletList items={[
                'SSL/TLS encryption for data transmission',
                'Secure server hosting',
                'Regular security updates and patches',
                'Access controls and authentication',
              ]} />
              <HighlightBox title="Important Note">
                No security system is completely impenetrable. We cannot guarantee absolute security of your information.
              </HighlightBox>
            </PolicySection>

            {/* 8. Your Rights */}
            <PolicySection id="rights" title="Your Rights" icon={HiCheckCircle}>
              <TextBlock>
                Depending on your location, you may have the right to:
              </TextBlock>
              <BulletList items={[
                'Access your personal data',
                'Correct inaccurate information',
                'Request deletion of your data',
                'Opt-out of marketing communications',
                'Withdraw consent for data processing',
                'Data portability',
              ]} />
              <HighlightBox title="Exercise Your Rights">
                To exercise these rights, contact us at privacy@fuvahmulah-tourism.com
              </HighlightBox>
            </PolicySection>

            {/* 9. Children's Privacy */}
            <PolicySection id="children" title="Children&apos;s Privacy" icon={HiShieldCheck}>
              <TextBlock>
                Our Site is not directed to children under 13. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 13, we will promptly delete it. If you believe we have collected information from a child, please contact us immediately.
              </TextBlock>
            </PolicySection>

            {/* 10. Contact Us */}
            <PolicySection id="contact" title="Contact Us" icon={HiInformationCircle}>
              <TextBlock>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </TextBlock>
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 space-y-3 my-4">
                <p className="text-lg font-bold text-blue-900">Single Atoll</p>
                <div className="space-y-2 text-gray-700">
                  <p>📧 <span className="font-medium">Email:</span> privacy@singleatoll.com</p>
                  <p>📧 <span className="font-medium">Support:</span> support@singleatoll.com</p>
                  <p>🌐 <span className="font-medium">Website:</span> www.singleatoll.com</p>
                  <p>📍 <span className="font-medium">Location:</span> Single Atoll, Maldives</p>
                </div>
              </div>
            </PolicySection>

            {/* Compliance Section */}
            <div className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Legal Compliance</h2>
              <p className="text-gray-700 mb-6">This Privacy Policy complies with international data protection standards:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ComplianceCard text="General Data Protection Regulation (GDPR)" />
                <ComplianceCard text="California Consumer Privacy Act (CCPA)" />
                <ComplianceCard text="Maldives Data Protection Act" />
                <ComplianceCard text="Google AdSense Program Policies" />
                <ComplianceCard text="Industry Best Practices" />
                <ComplianceCard text="International Standards" />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg-modern p-8 md:p-12">
            <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
              <div>
                <h3 className="text-2xl font-bold mb-3">Questions About Your Privacy?</h3>
                <p className="text-blue-50 text-lg">
                  We&apos;re here to help. If you have any concerns about how we handle your information, don&apos;t hesitate to reach out.
                </p>
              </div>
              <Link href="/contact" className="btn-white inline-flex items-center gap-2 whitespace-nowrap font-semibold">
                Contact Us
                <HiArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium hover:underline">
              <HiArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
