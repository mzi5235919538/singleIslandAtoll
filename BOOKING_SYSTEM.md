# Booking Inquiry System - Implementation Guide

## 🎯 Overview

The Fuvahmulah website now includes a fully functional booking inquiry system that allows guests to submit booking requests and receive confirmation emails.

## ✅ Completed Components

### 1. **Email Service** (`lib/email.ts`)
- Handles all email communications using Resend API
- Two email templates:
  - **Guest Confirmation**: Sent to the guest with booking details and next steps
  - **Admin Notification**: Sent to admin with guest information and booking details
- Generates unique booking reference numbers (format: `FUV-XXXXX-XXXXXX`)
- Lazy-loaded Resend client to avoid build-time errors

### 2. **BookingForm Component** (`components/BookingForm.tsx`)
- **Features:**
  - Comprehensive form with 8 input fields:
    - Listing selection (pre-fillable)
    - Guest name
    - Email address
    - Phone number (international format support)
    - Check-in date (date picker)
    - Check-out date (date picker)
    - Number of guests (1-20 select dropdown)
    - How did you hear about us (optional)
    - Special requests (optional textarea)

- **Validation:**
  - Email format validation
  - International phone number validation
  - Date range validation (checkout > checkin)
  - Prevents past dates for check-in
  - All required fields checked

- **States:**
  - Loading state with spinner animation
  - Success state with booking reference display
  - Error handling with user-friendly messages
  - Form resets after successful submission

### 3. **Booking Modal** (`components/BookingModal.tsx`)
- Modern modal overlay with backdrop
- Smooth animations (fade and scale transitions)
- Header with booking title and close button
- Integrates BookingForm component
- Auto-closes and redirects to confirmation page on success

### 4. **Booking Modal Provider** (`components/BookingModalProvider.tsx`)
- React Context-based state management
- `useBookingModal()` hook for modal control
- Supports pre-filling listing name
- Manages modal open/close state

### 5. **API Endpoint** (`app/api/booking/route.ts`)
- **POST Handler:**
  - Accepts booking form data
  - Validates all input fields server-side
  - Sends guest confirmation email via Resend
  - Sends admin notification email via Resend
  - Returns booking reference on success
  - Error handling with appropriate HTTP status codes

- **Response Format:**
  ```json
  {
    "success": true,
    "message": "Booking inquiry submitted successfully",
    "bookingReference": "FUV-XXXXX-XXXXXX"
  }
  ```

### 6. **Confirmation Page** (`app/booking/confirmation/page.tsx`)
- Displays after successful booking submission
- Shows booking reference number
- 4-step "What happens next" guide
- Contact information section
- FAQ section with common questions
- Links to browse other accommodations or return home
- WhatsApp contact button
- Not indexed by search engines (robots: index=false)

### 7. **Updated Components**
- **ListingCard** (`components/ListingCard.tsx`):
  - Added "Book Now" button below each listing
  - Opens booking modal with pre-filled listing name
  - Separate from card's view details link

- **Header** (`components/Header.tsx`):
  - "BOOK NOW" button in desktop navigation
  - Triggers booking modal instead of linking to contact page
  - Uses BookingModalProvider context

- **Layout** (`app/layout.tsx`):
  - Wrapped with BookingModalProvider
  - Provides modal context to entire app

## 📋 Environment Variables

Add these to `.env.local`:

```env
# Resend Email Service
RESEND_API_KEY=re_your_api_key_here

# Admin email for booking notifications
ADMIN_EMAIL=bookings@fuvahmulah.travel
```

Get your Resend API key from: https://resend.com

## 🚀 How It Works

### User Flow:

1. **Initiate Booking:**
   - Click "Book Now" in header OR
   - Click "Book Now" button on accommodation listing

2. **Fill Form:**
   - Modal opens with booking form
   - If booking from listing, listing name is pre-filled
   - Fill in required information

3. **Submit:**
   - Form validates on client-side
   - Sends POST request to `/api/booking`
   - Server validates data again
   - Sends emails via Resend

4. **Confirmation:**
   - Modal shows success message with booking reference
   - Automatically redirects to `/booking/confirmation` page
   - Guest receives confirmation email
   - Admin receives notification email

### Email Flow:

**Guest Email:**
- Booking reference number
- Listing details
- Check-in/out dates
- Number of guests
- Next steps (24-hour review process)
- Contact information

**Admin Email:**
- Full guest information (name, email, phone)
- Booking details
- Special requests
- How they heard about you
- Direct contact links

## 🔧 Future Enhancements

### Planned Features:

1. **Database Integration**
   - Store bookings in Supabase
   - Track booking status (pending → confirmed → cancelled)
   - Admin dashboard to manage bookings

2. **Payment Processing**
   - Stripe integration for deposits
   - Automated invoice generation
   - Payment confirmation emails

3. **Advanced Email Features**
   - 24-hour reminder email before confirmation
   - Booking modification requests
   - Cancellation management

4. **Admin Dashboard**
   - View all bookings
   - Update booking status
   - Send custom messages to guests
   - Export booking reports

5. **Guest Portal**
   - Track booking status
   - Modify booking dates
   - Download receipt/invoice
   - Add special requests

6. **Calendar Integration**
   - iCal file attachment in confirmation email
   - Google Calendar link in email
   - Availability calendar on website

7. **SMS Notifications**
   - SMS confirmation to guest
   - SMS reminder before check-in
   - Admin SMS alerts

8. **Multi-Language Support**
   - Translated booking forms
   - Email templates in multiple languages
   - Support for international guests

## 📝 Code Examples

### Opening Booking Modal Programmatically:

```tsx
import { useBookingModal } from '@/components/BookingModalProvider';

export default function MyComponent() {
  const { openBookingModal } = useBookingModal();

  return (
    <button onClick={() => openBookingModal('Vilamendhoo Resort')}>
      Book This Property
    </button>
  );
}
```

### Customizing Email Templates:

Edit `lib/email.ts` functions:
- `sendBookingConfirmationToGuest()` - Guest email HTML
- `sendBookingNotificationToAdmin()` - Admin email HTML

### Extending Form Validation:

Add validation rules in `components/BookingForm.tsx` `validateForm()` method.

## 🧪 Testing

### Test Booking:
1. Click "BOOK NOW" in header or on listing
2. Fill form with test data:
   - Name: John Doe
   - Email: your-email@example.com
   - Phone: +960 775 7070
   - Dates: Select future dates
   - Guests: 2
3. Submit form
4. Check confirmation page appears
5. Check emails in Resend dashboard

### Test Validation:
- Submit with empty fields (shows error)
- Submit with invalid email (shows error)
- Submit with invalid phone (shows error)
- Submit checkout before checkin (shows error)
- Submit past check-in date (shows error)

## 🔐 Security Notes

- Server-side validation on all inputs
- Email validation prevents spam
- Phone number validation filters invalid formats
- Booking references are unique and random
- Admin email is configurable (not hardcoded)
- API endpoint validates request origin (optional CORS)

## 📊 Monitoring

Monitor your Resend account:
- Visit: https://resend.com/emails
- Track delivery rates
- Monitor bounce rates
- View email analytics

## 🆘 Troubleshooting

### Emails Not Sending:
- Check `RESEND_API_KEY` is set in `.env.local`
- Verify domain is verified in Resend (for production)
- Check spam folder for emails
- Review Resend dashboard for errors

### Booking Modal Not Appearing:
- Ensure page is wrapped with `<BookingModalProvider>`
- Check that `useBookingModal()` is called in a client component
- Verify `<BookingModal />` component is rendered

### Form Validation Failing:
- Check browser console for specific error messages
- Verify date format (should be YYYY-MM-DD)
- Ensure email is properly formatted

## 📞 Support

For production setup and advanced features, refer to:
- Resend Documentation: https://resend.com/docs
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- React Context: https://react.dev/reference/react/useContext

---

**Status:** ✅ Phase 4 Core Implementation Complete
**Last Updated:** 2024
**Next Phase:** Database Integration & Admin Dashboard
