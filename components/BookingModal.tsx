'use client';

import { useBookingModal } from './BookingModalProvider';
import BookingForm from './BookingForm';
import { useRouter } from 'next/navigation';

export default function BookingModal() {
  const { isOpen, listing, closeBookingModal } = useBookingModal();
  const router = useRouter();

  if (!isOpen) return null;

  const handleSuccess = () => {
    closeBookingModal();
    // Redirect to confirmation page after a short delay
    setTimeout(() => {
      router.push('/booking/confirmation');
    }, 2000);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeBookingModal}
      />

      {/* Modal */}
      <div
        className={`fixed inset-0 flex items-center justify-center p-4 z-50 transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
            isOpen ? 'scale-100' : 'scale-95'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Book Your Stay</h2>
              {listing && <p className="text-sm text-gray-600 mt-1">{listing}</p>}
            </div>
            <button
              onClick={closeBookingModal}
              className="text-gray-400 hover:text-gray-600 transition"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-8">
            <BookingForm listing={listing || ''} onSuccess={handleSuccess} onClose={closeBookingModal} />
          </div>
        </div>
      </div>
    </>
  );
}
