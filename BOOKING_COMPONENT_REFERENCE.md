# Booking System: Component Reference Guide

## File Structure

```
fuvahmulah/
├── app/
│   ├── api/booking/
│   │   └── route.ts                 # POST API endpoint
│   ├── booking/
│   │   └── confirmation/
│   │       └── page.tsx              # Confirmation page
│   └── layout.tsx                    # Updated with provider
├── components/
│   ├── BookingForm.tsx               # Form component
│   ├── BookingModal.tsx              # Modal wrapper
│   ├── BookingModalProvider.tsx      # Context provider
│   ├── Header.tsx                    # Updated with button
│   └── ListingCard.tsx               # Updated with button
├── lib/
│   └── email.ts                      # Email service
├── BOOKING_SYSTEM.md                 # Full documentation
├── BOOKING_QUICK_START.md            # Quick setup guide
└── PHASE4_COMPLETE.md                # This completion summary
```

## Component Details

### 1. Email Service (`lib/email.ts`)

**Exports:**
```typescript
// Types
interface BookingEmailData {
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  listingName: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: number;
  specialRequests?: string;
  hearAboutUs?: string;
  bookingReference: string;
}

// Functions
sendBookingConfirmationToGuest(data): Promise<{ success: boolean; messageId?: string }>
sendBookingNotificationToAdmin(data): Promise<{ success: boolean; messageId?: string }>
generateBookingReference(): string
```

**Email Templates:**
- Guest email: Professional HTML with booking details
- Admin email: Structured notification with guest info
- Both include next steps and contact information

### 2. BookingForm (`components/BookingForm.tsx`)

**Props:**
```typescript
interface BookingFormProps {
  listing?: string;              // Pre-filled listing name
  onSuccess?: (ref: string) => void;  // Success callback
  onClose?: () => void;          // Close modal callback
}
```

**Features:**
- Real-time validation feedback
- Error messages for each field
- Loading spinner during submission
- Success state with booking reference
- Auto-reset after success

**Form Fields:**
1. Listing (text input)
2. Guest Name (text input)
3. Email (email input)
4. Phone (tel input)
5. Check-in Date (date input)
6. Check-out Date (date input)
7. Number of Guests (select 1-20)
8. How did you hear (select dropdown)
9. Special Requests (textarea)

### 3. BookingModal (`components/BookingModal.tsx`)

**Features:**
- Backdrop click to close
- Escape key to close
- Smooth fade/scale animations
- Header with close button
- Pre-filled listing display
- Auto-redirect on success

**Styling:**
- Modal container: max-width 2xl
- Backdrop: black/50 opacity
- Animations: 300ms duration
- Z-index: 50 (modal), 40 (backdrop)

### 4. BookingModalProvider (`components/BookingModalProvider.tsx`)

**Context Methods:**
```typescript
const { 
  isOpen,                    // boolean
  listing,                   // string | undefined
  openBookingModal,          // (listing?: string) => void
  closeBookingModal          // () => void
} = useBookingModal();
```

**Usage:**
```typescript
// Wrap app with provider
<BookingModalProvider>
  <Header />
  <main>{children}</main>
</BookingModalProvider>

// Use in components
const { openBookingModal } = useBookingModal();
<button onClick={() => openBookingModal('Resort Name')}>
  Book Now
</button>
```

### 5. API Endpoint (`app/api/booking/route.ts`)

**POST Handler:**
- Accepts: JSON body with booking data
- Validates: All fields on server
- Sends: Two emails via Resend
- Returns: 201 with booking reference
- Errors: 400 for validation, 500 for server errors

**Request Body:**
```json
{
  "listing": "Vilamendhoo Resort",
  "guestName": "John Doe",
  "guestEmail": "john@example.com",
  "guestPhone": "+960 775 7070",
  "checkInDate": "2024-12-20",
  "checkOutDate": "2024-12-25",
  "numberOfGuests": "2",
  "specialRequests": "Early check-in if possible",
  "hearAboutUs": "google-search"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Booking inquiry submitted successfully",
  "bookingReference": "FUV-XXXXX-XXXXXX"
}
```

**Response (Error):**
```json
{
  "message": "Invalid email address"
}
```

### 6. Confirmation Page (`app/booking/confirmation/page.tsx`)

**Features:**
- Success badge with checkmark
- Booking reference display
- 4-step process timeline
- Contact information cards
- FAQ accordion section
- Action buttons (browse, home, whatsapp)
- Not indexed (robots: index=false)

**Metadata:**
- Title: "Booking Confirmation | Fuvahmulah"
- Description: Describes the confirmation
- No index (nofollow for search engines)

### 7. Updated ListingCard (`components/ListingCard.tsx`)

**Changes:**
- Added useBookingModal hook (client component)
- "Book Now" button below card
- Opens modal with listing name pre-filled
- Click handler prevents link navigation
- Button styling: blue-600 with hover effect

**New Props:** None (uses hooks instead)

### 8. Updated Header (`components/Header.tsx`)

**Changes:**
- Imported useBookingModal
- "BOOK NOW" button opens modal instead of linking
- Button still shows arrow icon
- Mobile menu support (existing)

### 9. Updated Layout (`app/layout.tsx`)

**Changes:**
- Imported BookingModalProvider
- Wrapped children with provider
- Enables modal context throughout app

## Data Flow

### Booking Submission Flow:

```
User clicks "Book Now"
    ↓
BookingModal opens with form
    ↓
User fills form and submits
    ↓
BookingForm validates client-side
    ↓
POST to /api/booking
    ↓
Server validates again
    ↓
Generate booking reference
    ↓
Send guest confirmation email (Resend)
    ↓
Send admin notification email (Resend)
    ↓
Return success + reference
    ↓
Show success state
    ↓
Redirect to /booking/confirmation
    ↓
Display confirmation page
```

## Environment Variables

**Required:**
```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

**Optional:**
```env
ADMIN_EMAIL=bookings@fuvahmulah.travel
```

Default admin email: `bookings@fuvahmulah.travel`

## Validation Rules

### Client-Side (BookingForm):
- Name: Required, non-empty
- Email: Must match email regex
- Phone: International format validation
- Dates: Must be valid, checkout > checkin
- Checkin: Cannot be in past
- Guests: 1-20 range
- Listing: Required, non-empty

### Server-Side (API Route):
- All client-side rules repeated
- Additional: Type validation
- Database ready (commented code for future)

## Email Configuration

### Sender Email:
- Default: `noreply@fuvahmulah.travel`
- Requires Resend domain verification for production

### Recipient Emails:
- Guest: From form (validated)
- Admin: From `ADMIN_EMAIL` env var

### Email Content:
- Guest: Confirmation details + next steps
- Admin: Guest info + special requests + direct contact

## Styling

All components use Tailwind CSS:
- Forms: `min-h-12` for touch targets
- Buttons: `btn-primary` class (custom)
- Inputs: Focus ring with blue-500
- Modal: Smooth animations, proper z-index
- Responsive: Mobile-first design

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-optimized
- Progressive enhancement
- Form validation works without JS fallback

## Performance

- Lazy-loaded Resend client
- No build-time dependencies
- Email sending is non-blocking
- Modal uses React Context (no Redux)
- Minimal bundle impact

## Testing Checklist

- [ ] Form submits with valid data
- [ ] Validation errors show correctly
- [ ] Guest receives confirmation email
- [ ] Admin receives notification email
- [ ] Booking reference appears correctly
- [ ] Redirect to confirmation page works
- [ ] Modal closes on success
- [ ] Mobile responsiveness works
- [ ] Email styling renders properly
- [ ] International phone numbers work

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| "Missing API key" error | Add RESEND_API_KEY to .env.local |
| Emails not sending | Check API key in Resend dashboard |
| Modal doesn't appear | Ensure page has BookingModalProvider |
| Form validation fails | Check browser console for details |
| Redirect doesn't work | Verify useRouter is in client component |
| Styling looks wrong | Check Tailwind CSS is compiled |

## Integration Points

**To integrate into new pages:**

1. Ensure page is wrapped with `<BookingModalProvider>`
2. Add button: `const { openBookingModal } = useBookingModal()`
3. Trigger: `<button onClick={() => openBookingModal('Property Name')}>`

**To customize emails:**

1. Edit `lib/email.ts`
2. Modify HTML in `sendBookingConfirmationToGuest()`
3. Modify HTML in `sendBookingNotificationToAdmin()`

**To add new fields:**

1. Add field to `BookingForm.tsx`
2. Add field to `BookingRequest` interface in `route.ts`
3. Add validation rules
4. Add to `BookingEmailData` interface
5. Include in email templates

---

**Reference Version:** 1.0
**Last Updated:** 2024
**Status:** Production Ready

