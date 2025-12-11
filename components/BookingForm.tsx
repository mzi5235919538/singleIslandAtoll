'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

interface BookingFormProps {
  listing?: string;
  onSuccess?: (bookingReference: string) => void;
  onClose?: () => void;
}

export default function BookingForm({ listing = '', onSuccess, onClose }: BookingFormProps) {
  const [formData, setFormData] = useState({
    listing: listing || '',
    guestName: '',
    guestEmail: '',
    guestPhone: '',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: '1',
    specialRequests: '',
    hearAboutUs: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = (): boolean => {
    // Check required fields
    if (!formData.guestName.trim()) {
      setError('Please enter your name');
      return false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.guestEmail)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Validate phone (basic international format)
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(formData.guestPhone.replace(/\s/g, ''))) {
      setError('Please enter a valid phone number');
      return false;
    }

    // Validate dates
    if (!formData.checkInDate) {
      setError('Please select a check-in date');
      return false;
    }

    if (!formData.checkOutDate) {
      setError('Please select a check-out date');
      return false;
    }

    // Check if checkout is after checkin
    const checkIn = new Date(formData.checkInDate);
    const checkOut = new Date(formData.checkOutDate);
    if (checkOut <= checkIn) {
      setError('Check-out date must be after check-in date');
      return false;
    }

    // Check if checkin is not in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (checkIn < today) {
      setError('Check-in date cannot be in the past');
      return false;
    }

    // Validate number of guests
    const guests = parseInt(formData.numberOfGuests);
    if (guests < 1 || guests > 20) {
      setError('Number of guests must be between 1 and 20');
      return false;
    }

    // Check if listing is selected
    if (!formData.listing.trim()) {
      setError('Please select a listing');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit booking inquiry');
      }

      setSuccess(true);
      setBookingReference(data.bookingReference);

      // Call onSuccess callback if provided
      if (onSuccess) {
        onSuccess(data.bookingReference);
      }

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          listing: listing || '',
          guestName: '',
          guestEmail: '',
          guestPhone: '',
          checkInDate: '',
          checkOutDate: '',
          numberOfGuests: '1',
          specialRequests: '',
          hearAboutUs: '',
        });
      }, 2000);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✓</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Booking Inquiry Submitted!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your inquiry. We&apos;ll review it shortly and contact you within 24 hours.
        </p>
        <p className="text-green-600 mb-4">
          <strong>Booking Reference:</strong> {bookingReference}
        </p>
        <p className="text-sm text-green-600 mb-6">
          A confirmation email has been sent to {formData.guestEmail}
        </p>
        {onClose && (
          <button
            onClick={onClose}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded transition"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      )}

      {/* Listing Selection */}
      <div>
        <label htmlFor="listing" className="block text-sm font-medium text-gray-700 mb-1">
          Select Accommodation <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="listing"
          name="listing"
          value={formData.listing}
          onChange={handleChange}
          placeholder="e.g., Vilamendhoo Island Resort"
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Guest Name */}
      <div>
        <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="guestName"
          name="guestName"
          value={formData.guestName}
          onChange={handleChange}
          placeholder="Your full name"
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="guestEmail" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="guestEmail"
          name="guestEmail"
          value={formData.guestEmail}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="guestPhone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          id="guestPhone"
          name="guestPhone"
          value={formData.guestPhone}
          onChange={handleChange}
          placeholder="+1 (555) 123-4567 or +960 775 7070"
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Check-in Date */}
      <div>
        <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
          Check-in Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="checkInDate"
          name="checkInDate"
          value={formData.checkInDate}
          onChange={handleChange}
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Check-out Date */}
      <div>
        <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
          Check-out Date <span className="text-red-500">*</span>
        </label>
        <input
          type="date"
          id="checkOutDate"
          name="checkOutDate"
          value={formData.checkOutDate}
          onChange={handleChange}
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        />
      </div>

      {/* Number of Guests */}
      <div>
        <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">
          Number of Guests <span className="text-red-500">*</span>
        </label>
        <select
          id="numberOfGuests"
          name="numberOfGuests"
          value={formData.numberOfGuests}
          onChange={handleChange}
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          required
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option key={num} value={num}>
              {num} {num === 1 ? 'Guest' : 'Guests'}
            </option>
          ))}
        </select>
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="hearAboutUs" className="block text-sm font-medium text-gray-700 mb-1">
          How did you hear about us?
        </label>
        <select
          id="hearAboutUs"
          name="hearAboutUs"
          value={formData.hearAboutUs}
          onChange={handleChange}
          className="min-h-12 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        >
          <option value="">Select an option</option>
          <option value="google-search">Google Search</option>
          <option value="social-media">Social Media</option>
          <option value="friend-referral">Friend/Family Referral</option>
          <option value="travel-agency">Travel Agency</option>
          <option value="review-site">Review Site (TripAdvisor, etc.)</option>
          <option value="advertisement">Advertisement</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Special Requests */}
      <div>
        <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
          Special Requests
        </label>
        <textarea
          id="specialRequests"
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Any special requests or questions? (optional)"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 min-h-12"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Submitting...
          </span>
        ) : (
          'Submit Booking Inquiry'
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We&apos;ll confirm availability within 24 hours and contact you directly.
      </p>
    </form>
  );
}
