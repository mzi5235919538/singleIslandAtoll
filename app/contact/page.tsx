'use client';

import { useState } from 'react';
import AdSenseContainer from '@/components/AdSenseContainer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully. We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
      } else {
        setSubmitMessage('There was an error sending your message. Please try again.');
      }
    } catch {
      setSubmitMessage('There was an error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="section-container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              📞 Get in Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Have questions about your Fuvahmulah adventure? Our team is ready to help you plan the perfect getaway.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Contact Information</h2>

            <div className="card-base p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📧 Email</h3>
              <a href="mailto:info@fuvahmulah-tourism.com" className="text-gray-600 hover:text-blue-600">
                info@fuvahmulah-tourism.com
              </a>
            </div>

            <div className="card-base p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📞 Phone</h3>
              <a href="tel:+960XXXX" className="text-gray-600 hover:text-blue-600">
                +960 (Maldives)
              </a>
            </div>

            <div className="card-base p-6 mb-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📍 Location</h3>
              <p className="text-gray-600">
                Thinadhoo, Fuvahmulah<br />
                Single Island Atoll<br />
                Maldives
              </p>
            </div>

            <div className="card-base p-6">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">⏰ Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9 AM - 5 PM<br />
                Saturday: 10 AM - 3 PM<br />
                Sunday: Closed<br />
                Emergency: 24/7
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-blue-600 mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="card-base p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Your Phone Number"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="Accommodation">Accommodation Inquiry</option>
                    <option value="Activities">Activities & Tours</option>
                    <option value="Dining">Dining Recommendations</option>
                    <option value="General">General Information</option>
                    <option value="Booking">Booking Help</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Your Message"
                />
              </div>

              {submitMessage && (
                <div className={`p-4 rounded mb-6 ${submitMessage.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
              <h3 className="font-semibold text-blue-600 mb-2">📋 Required Fields</h3>
              <p className="text-gray-600 text-sm">
                Please fill in all required fields (marked with *). We will respond to your inquiry within 24 hours during business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSenseContainer />

      {/* Quick FAQ */}
      <section className="section-container bg-gray-50">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Common Questions About Fuvahmulah</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">How do I get to Fuvahmulah?</h3>
            <p className="text-gray-600">
              You can fly to Malé International Airport and take a domestic flight to Fuvahmulah. The flight takes about 1 hour. Alternatively, you can take a speedboat (4-5 hours).
            </p>
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">What is the best time to visit?</h3>
            <p className="text-gray-600">
              The best time is November to April when the weather is dry and sunny. However, May to October is also good for diving with fewer tourists and lower prices.
            </p>
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Do I need a visa for Maldives?</h3>
            <p className="text-gray-600">
              Most nationalities receive a 30-day tourist visa upon arrival. Check with your local Maldives embassy for specific requirements for your country.
            </p>
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">What currency is used?</h3>
            <p className="text-gray-600">
              The official currency is the Maldivian Rufiyaa (MVR). US Dollars are widely accepted. ATMs and money exchanges are available on the island.
            </p>
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Is it safe to visit Fuvahmulah?</h3>
            <p className="text-gray-600">
              Yes, Fuvahmulah is a safe destination for tourists. The local community is welcoming and helpful. Standard travel precautions apply.
            </p>
          </div>

          <div className="card-base p-6">
            <h3 className="text-lg font-bold text-blue-600 mb-3">Can I drink tap water?</h3>
            <p className="text-gray-600">
              It&apos;s recommended to drink bottled or boiled water. Most accommodations provide filtered water. Hotels and restaurants have safe drinking water.
            </p>
          </div>
        </div>
      </section>

      <AdSenseContainer />
    </>
  );
}
