import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Booking Confirmation | Fuvahmulah',
  description: 'Your booking inquiry has been received. Check your email for confirmation details.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function BookingConfirmationPage() {
  return (
    <main className="min-h-screen bg-linear-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
          <p className="text-xl text-gray-600">Your booking inquiry has been received</p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Success Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Inquiry Submitted Successfully</h2>
              <p className="text-gray-600">We&apos;ve received your booking inquiry and will be in touch shortly.</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What happens next?</h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                    1
                  </span>
                  <span>
                    <strong>Check your email:</strong> We&apos;ve sent a confirmation email with your booking reference number
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                    2
                  </span>
                  <span>
                    <strong>Wait for contact:</strong> Our team will review your inquiry within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                    3
                  </span>
                  <span>
                    <strong>Confirmation:</strong> We&apos;ll confirm availability and discuss pricing
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="shrink-0 flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mr-3">
                    4
                  </span>
                  <span>
                    <strong>Complete booking:</strong> We&apos;ll guide you through the final booking process
                  </span>
                </li>
              </ol>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <a href="tel:+9607757070" className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  +960 775 7070
                </a>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <a href="mailto:bookings@fuvahmulah.travel" className="text-lg font-semibold text-blue-600 hover:text-blue-700">
                  bookings@fuvahmulah.travel
                </a>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              If you don&apos;t receive a confirmation email within a few minutes, please check your spam folder or contact us directly.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  What is my booking reference number?
                </summary>
                <p className="mt-3 text-gray-600">
                  Your booking reference number was included in the confirmation email we sent you. It looks like FUV-XXXXX-XXXXXX. 
                  You&apos;ll need this number for any future communication about your booking.
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  How long will it take to hear back?
                </summary>
                <p className="mt-3 text-gray-600">
                  Our team will review your inquiry and contact you within 24 hours. Most inquiries are responded to within a few hours.
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  Can I modify my booking dates?
                </summary>
                <p className="mt-3 text-gray-600">
                  Yes! Once our team contacts you, they can help you adjust the dates or explore alternative options based on availability.
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-4">
                <summary className="font-semibold text-gray-900 cursor-pointer">
                  What payment methods do you accept?
                </summary>
                <p className="mt-3 text-gray-600">
                  We accept various payment methods including credit cards, bank transfers, and digital payment platforms. 
                  Our team will discuss the best option for you during the confirmation process.
                </p>
              </details>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/accommodation"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
            >
              Browse Other Accommodations
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition"
            >
              Back to Home
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Our customer support team is here to help. If you have any questions or need assistance with your booking, 
              please don&apos;t hesitate to reach out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/9607757070"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              >
                Message on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-900 font-semibold rounded-lg transition"
              >
                Contact Form
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
