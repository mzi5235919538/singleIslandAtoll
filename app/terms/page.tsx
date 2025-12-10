import Link from 'next/link';
import { HiArrowLeft, HiShieldCheck, HiClock, HiCheckCircle, HiInformationCircle } from 'react-icons/hi';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Terms of Service - Single Atoll',
  description: 'Terms of Service and Conditions for using Single Atoll website. Learn about our policies and how to use our platform.',
};

interface SectionProps {
  id: string;
  title: string;
  icon: FC<{ size: number; className?: string }>;
  children: ReactNode;
}

const TermsSection: FC<SectionProps> = ({ id, title, icon: Icon, children }) => (
  <div id={id} className="bg-white rounded-xl shadow-sm-modern border border-gray-200 p-8 scroll-mt-20 hover:shadow-md-modern transition-shadow duration-300">
    <div className="flex items-start gap-4 mb-6">
      <div className="shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
        <Icon size={24} className="text-primary" />
      </div>
      <h2 className="text-2xl font-bold text-text-dark">{title}</h2>
    </div>
    <div className="text-text-dark leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const TextBlock = ({ children }: { children: ReactNode }) => (
  <p className="text-text-dark leading-relaxed">{children}</p>
);

const BulletList = ({ items }: { items: (string | ReactNode)[] }) => (
  <ul className="space-y-2 ml-4">
    {items.map((item, idx) => (
      <li key={idx} className="flex items-start gap-3">
        <HiCheckCircle size={20} className="text-primary shrink-0 mt-0.5" />
        <span className="text-text-dark">{item}</span>
      </li>
    ))}
  </ul>
);

export default function TermsOfService() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary via-blue-500 to-accent text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="relative section-container py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur">
                <HiShieldCheck size={40} className="text-accent-light" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">Terms of Service</h1>
            </div>
            <p className="text-xl text-white/90 mb-6 leading-relaxed">
              Please read these terms carefully before using Single Atoll.
            </p>
            <div className="flex items-center gap-2 text-white/80">
              <HiClock size={20} />
              <span>Last updated: December 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-spacing bg-bg-light">
        <div className="section-container max-w-4xl">
          <div className="space-y-8">
            {/* 1. User Agreement */}
            <TermsSection id="agreement" title="User Agreement" icon={HiShieldCheck}>
              <TextBlock>
                By accessing and using Single Atoll (www.singleatoll.com), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
              </TextBlock>
              <TextBlock>
                Single Atoll reserves the right to modify these terms at any time. Your continued use of the website following the posting of revised terms means you accept and agree to the changes.
              </TextBlock>
            </TermsSection>

            {/* 2. Acceptable Use */}
            <TermsSection id="use" title="Acceptable Use Policy" icon={HiCheckCircle}>
              <TextBlock>
                You agree to use Single Atoll only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Specifically, you agree not to:
              </TextBlock>
              <BulletList items={[
                'Harass or cause distress or inconvenience to any person',
                'Obscene or offensive comments regarding race, ethnicity, gender, or any protected class',
                'Disrupt the normal flow of dialogue within our website',
                'Attempt to gain unauthorized access to our systems',
                'Collect or track personal information of others without consent',
                'Spam, phishing, or distribute malware',
              ]} />
            </TermsSection>

            {/* 3. Inquiry Form & Data Sharing */}
            <TermsSection id="inquiries" title="Inquiry Form & Data Sharing" icon={HiInformationCircle}>
              <TextBlock>
                <strong>Critical for Understanding Your Use of Single Atoll:</strong>
              </TextBlock>
              <TextBlock>
                When you submit an Inquiry Form on Single Atoll to request information about accommodations, diving activities, or dining options, you are requesting that we forward your personal data to the specific third-party vendor (Guest House, Dive Center, Restaurant, or other service provider) you selected.
              </TextBlock>
              <TextBlock>
                <strong>Data You Provide:</strong>
              </TextBlock>
              <BulletList items={[
                'Name and Email address',
                'Phone number',
                'Home country and travel dates',
                'Your message and specific inquiry',
              ]} />
              <TextBlock>
                <strong>What Happens to Your Data:</strong>
              </TextBlock>
              <BulletList items={[
                'Your information is forwarded directly to the selected vendor for their response and follow-up',
                'The vendor may contact you via email or phone to respond to your inquiry',
                'Single Atoll retains a copy for administrative and customer service purposes',
                'Your data is treated according to our Privacy Policy',
              ]} />
              <TextBlock>
                By submitting an inquiry, you explicitly consent to your data being shared with the selected third-party vendor for the purpose of responding to your inquiry and facilitating the services you requested.
              </TextBlock>
            </TermsSection>

            {/* 4. Third-Party Vendors */}
            <TermsSection id="thirdparty" title="Third-Party Vendors & Services" icon={HiInformationCircle}>
              <TextBlock>
                Single Atoll is a platform that connects travelers with accommodation providers, dive centers, restaurants, and other tourism service providers. We are not the primary provider of these services.
              </TextBlock>
              <TextBlock>
                <strong>Responsibility Disclaimer:</strong>
              </TextBlock>
              <BulletList items={[
                'Single Atoll does not own or operate the guest houses, dive centers, or restaurants listed on our website',
                'We are not responsible for the quality, accuracy, or legality of services provided by third-party vendors',
                'All reviews, ratings, and descriptions are provided for informational purposes and do not constitute endorsements',
                'Direct your service-related complaints and requests to the vendor, not to Single Atoll',
              ]} />
              <TextBlock>
                Vendors are responsible for their own terms of service, cancellation policies, safety standards, and legal compliance. We strongly recommend reviewing their policies independently before booking.
              </TextBlock>
            </TermsSection>

            {/* 5. Limitation of Liability */}
            <TermsSection id="liability" title="Limitation of Liability" icon={HiShieldCheck}>
              <TextBlock>
                <strong>TO THE FULLEST EXTENT PERMITTED BY LAW:</strong>
              </TextBlock>
              <TextBlock>
                Single Atoll is provided on an &quot;as is&quot; and &quot;as available&quot; basis. We make no warranties, express or implied, regarding the website or its content. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or its services.
              </TextBlock>
              <TextBlock>
                This includes, but is not limited to:
              </TextBlock>
              <BulletList items={[
                'Loss of data or privacy breaches',
                'Service disruptions or downtime',
                'Inaccuracies in vendor information or listings',
                'Disputes with third-party vendors',
                'Financial losses related to bookings or transactions',
              ]} />
            </TermsSection>

            {/* 6. Cookies & Tracking */}
            <TermsSection id="cookies" title="Cookies & Tracking Technologies" icon={HiCheckCircle}>
              <TextBlock>
                Single Atoll uses cookies and similar tracking technologies to enhance your browsing experience. These technologies allow us to remember your preferences, analyze usage patterns, and serve relevant advertisements.
              </TextBlock>
              <TextBlock>
                By using our website, you consent to our use of cookies as described in our Privacy Policy. You can control cookie settings through your browser, but disabling cookies may limit your use of certain features.
              </TextBlock>
            </TermsSection>

            {/* 7. Intellectual Property */}
            <TermsSection id="intellectual" title="Intellectual Property Rights" icon={HiCheckCircle}>
              <TextBlock>
                All content on Single Atoll, including text, graphics, logos, images, and software, is the property of Single Atoll or its content suppliers and is protected by international copyright laws.
              </TextBlock>
              <TextBlock>
                You may not reproduce, distribute, transmit, or display any content without prior written permission from Single Atoll. Unauthorized use of our intellectual property is prohibited.
              </TextBlock>
              <TextBlock>
                Photos and descriptions of third-party accommodations and services are used with permission or under fair use guidelines for informational purposes only.
              </TextBlock>
            </TermsSection>

            {/* 8. Contact & Support */}
            <TermsSection id="contact" title="Contact & Support" icon={HiInformationCircle}>
              <TextBlock>
                For questions about these Terms of Service or to report violations, please contact us:
              </TextBlock>
              <div className="bg-linear-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-6 space-y-3 my-4">
                <p className="text-lg font-bold text-blue-900">Single Atoll Support</p>
                <div className="space-y-2 text-text-dark">
                  <p>📧 <span className="font-medium">Email:</span> support@singleatoll.com</p>
                  <p>🌐 <span className="font-medium">Website:</span> www.singleatoll.com</p>
                  <p>📍 <span className="font-medium">Location:</span> Single Atoll, Maldives</p>
                </div>
              </div>
            </TermsSection>

            {/* Final Notice */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="font-semibold text-yellow-900 mb-2">Important Legal Notice</p>
              <p className="text-yellow-800">
                These Terms of Service do not create a partnership, agency, or employment relationship between Single Atoll and any third-party vendor. We are a neutral information platform connecting travelers with service providers. For legal matters related to services provided by vendors, you must address them directly with the vendor.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-xl shadow-lg-modern p-8 md:p-12">
            <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
              <div>
                <h3 className="text-2xl font-bold mb-3">Questions About Our Terms?</h3>
                <p className="text-white/90 text-lg">
                  We&apos;re here to help. Contact us with any concerns or inquiries.
                </p>
              </div>
              <Link href="/contact" className="btn-white inline-flex items-center gap-2 whitespace-nowrap font-semibold">
                Get in Touch
                <HiArrowLeft size={20} className="rotate-180" />
              </Link>
            </div>
          </div>

          {/* Back to Home */}
          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-blue-700 font-medium hover:underline">
              <HiArrowLeft size={18} />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
