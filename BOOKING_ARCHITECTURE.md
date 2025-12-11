# Booking System: Architecture & Flow Diagrams

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    FUVAHMULAH WEBSITE                        │
└─────────────────────────────────────────────────────────────┘
                            │
                ┌───────────┴───────────┐
                │                       │
        ┌──────▼────────┐      ┌──────▼────────┐
        │   Header      │      │  Pages        │
        │ "BOOK NOW" →  │      │ (Listings)    │
        └──────┬────────┘      │ "Book Now" →  │
               │                └──────┬────────┘
               │                       │
               └───────────┬───────────┘
                           │
                      ┌────▼─────┐
                      │ Click    │
                      │ "Book    │
                      │ Now"     │
                      └────┬─────┘
                           │
              ┌────────────▼────────────┐
              │ BookingModalProvider    │
              │ (Context)               │
              │ Opens Modal             │
              └────────────┬────────────┘
                           │
                      ┌────▼──────────┐
                      │ BookingModal  │
                      │ (Display)     │
                      └────┬──────────┘
                           │
                      ┌────▼──────────┐
                      │ BookingForm   │
                      │ (Input)       │
                      └────┬──────────┘
                           │
                      Form Validation
                           │
                    ┌──────▼──────────┐
                    │ POST /api/booking│
                    │ (API Endpoint)   │
                    └──────┬───────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
      Validate      Generate Ref    Send Emails
            │              │              │
      Server Check   FUV-XXXXX-XXX  ┌────┴─────┐
            │              │        │           │
            │              │    Guest Email  Admin Email
            │              │    (Confirm)    (Notify)
            │              │        │           │
            └──────────────┼────────┴───────────┘
                           │
                      Response
                           │
                    ┌──────▼────────┐
                    │ Show Success  │
                    │ Reference #   │
                    └──────┬────────┘
                           │
                    ┌──────▼────────────┐
                    │ Redirect to:      │
                    │ /booking/confirm  │
                    └──────┬────────────┘
                           │
                    ┌──────▼────────────┐
                    │ Confirmation Page │
                    │ - Reference #     │
                    │ - FAQ             │
                    │ - Next Steps      │
                    │ - Contact Info    │
                    └───────────────────┘
```

## Component Hierarchy

```
layout.tsx (Root)
│
├── BookingModalProvider (Context)
│   │
│   ├── Header
│   │   └── [Book Now Button] ──┐
│   │                            │
│   ├── Main Content             │
│   │   └── Accommodation Pages  │
│   │       └── ListingCard      │
│   │           └── [Book Now Button] ──┐
│   │                                    │
│   ├── Footer                           │
│   │                                    │
│   └── BookingModal ◄──────────────────┤
│       │                                │
│       ├── Header                       │
│       │   └── [Close Button]           │
│       │                                │
│       └── BookingForm ◄────────────────┘
│           │
│           ├── Listing (input)
│           ├── Name (input)
│           ├── Email (input)
│           ├── Phone (input)
│           ├── Check-in (date)
│           ├── Check-out (date)
│           ├── Guests (select)
│           ├── Referral (select)
│           ├── Requests (textarea)
│           │
│           └── [Submit Button]
│               │
│               └── /api/booking
│                   │
│                   └── Resend
│                       ├── Guest Email
│                       └── Admin Email
```

## Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    USER INTERACTION                           │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  User Action                                                  │
│  ────────────                                                │
│  Click "Book Now"                                            │
│        │                                                      │
│        ▼                                                      │
│  Modal Context State Update                                  │
│  openBookingModal(listingName)                               │
│        │                                                      │
│        ▼                                                      │
│  BookingModal Renders with BookingForm                       │
│  Listing pre-filled if provided                              │
│        │                                                      │
│        ▼                                                      │
│  User Fills Form                                             │
│        │                                                      │
│        ▼                                                      │
│  Click Submit                                                │
│        │                                                      │
│        ▼                                                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   CLIENT VALIDATION                           │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  validateForm()                                              │
│  ──────────────                                              │
│  Checks:                                                     │
│  ├─ Name (required)                                          │
│  ├─ Email (valid format)                                     │
│  ├─ Phone (international format)                             │
│  ├─ Dates (valid, checkout > checkin)                        │
│  ├─ Checkin (not in past)                                    │
│  ├─ Guests (1-20)                                            │
│  └─ Listing (required)                                       │
│        │                                                      │
│        ▼                                                      │
│  Valid? → Show Error & Stop                                  │
│           OR                                                 │
│  Continue to API Call                                        │
│        │                                                      │
│        ▼                                                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                     API REQUEST                               │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  POST /api/booking                                           │
│  {                                                           │
│    listing: string                                           │
│    guestName: string                                         │
│    guestEmail: string                                        │
│    guestPhone: string                                        │
│    checkInDate: string (YYYY-MM-DD)                          │
│    checkOutDate: string (YYYY-MM-DD)                         │
│    numberOfGuests: string                                    │
│    specialRequests?: string                                  │
│    hearAboutUs?: string                                      │
│  }                                                           │
│        │                                                      │
│        ▼                                                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   SERVER PROCESSING                           │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Validate Input                                           │
│     (Repeat client checks)                                   │
│           │                                                  │
│           ├─ Valid? ──▶ Continue                             │
│           └─ Invalid? ──▶ Return 400 Error                  │
│                 │                                             │
│                 ▼                                             │
│  2. Generate Booking Reference                              │
│     FUV-[timestamp]-[random]                                │
│                 │                                             │
│                 ▼                                             │
│  3. Prepare Email Data                                       │
│     BookingEmailData {                                       │
│       guestName, email, phone                                │
│       listingName, dates, guests                             │
│       bookingReference                                       │
│     }                                                        │
│                 │                                             │
│        ┌────────┴────────┐                                   │
│        │                 │                                   │
│        ▼                 ▼                                    │
│   Guest Email        Admin Email                             │
│   (Resend)           (Resend)                                │
│        │                 │                                   │
│        ▼                 ▼                                    │
│   sent@email      sent@admin.email                           │
│        │                 │                                   │
│        └────────┬────────┘                                   │
│                 │                                             │
│                 ▼                                             │
│  4. Return Success Response                                  │
│     {                                                        │
│       success: true,                                         │
│       bookingReference: "FUV-XXXXX-XXXX"                     │
│     }                                                        │
│                 │                                             │
│        ┌────────┴────────┐                                   │
│        │                 │                                   │
│        ▼                 ▼                                    │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                   CLIENT RESPONSE                             │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  Success State                                               │
│  ────────────                                                │
│  1. Show success message                                     │
│     ✓ Your booking has been submitted!                       │
│     Reference: FUV-XXXXX-XXXX                                │
│        │                                                      │
│        ▼                                                      │
│  2. Auto-close modal (2 second delay)                        │
│        │                                                      │
│        ▼                                                      │
│  3. Redirect to confirmation page                            │
│     /booking/confirmation                                    │
│        │                                                      │
│        ▼                                                      │
│  4. Display confirmation page with:                          │
│     ├─ Success badge                                         │
│     ├─ Booking reference                                     │
│     ├─ 4-step timeline                                       │
│     ├─ Contact information                                   │
│     ├─ FAQ section                                           │
│     └─ Action buttons                                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                    EMAIL DELIVERY                             │
├──────────────────────────────────────────────────────────────┤
│                                                                │
│  Resend Service                                              │
│  ─────────────                                               │
│  │                                                            │
│  ├─ Guest Email                                              │
│  │  From: noreply@fuvahmulah.travel                          │
│  │  To: guest@example.com                                    │
│  │  Subject: Booking Inquiry Confirmed                       │
│  │  Content: HTML template with booking details              │
│  │           + next steps + contact info                     │
│  │                                                            │
│  └─ Admin Email                                              │
│     From: noreply@fuvahmulah.travel                          │
│     To: bookings@fuvahmulah.travel (ADMIN_EMAIL)             │
│     Subject: New Booking Inquiry - Reference #               │
│     Content: Guest info + booking details +                  │
│             special requests + direct contact               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## State Management Flow

```
BookingModalProvider
│
├── State Variables:
│   ├── isOpen: boolean
│   ├── listing?: string
│   │
│   └── Methods:
│       ├── openBookingModal(listing?): void
│       │   └── Set isOpen=true, listing=value
│       │
│       └── closeBookingModal(): void
│           └── Set isOpen=false, clear listing
│
├── Context Value:
│   {
│     isOpen,
│     listing,
│     openBookingModal,
│     closeBookingModal
│   }
│
└── Consumed By:
    ├── Header
    │   └── uses openBookingModal
    │
    ├── ListingCard
    │   └── uses openBookingModal
    │
    └── BookingModal
        ├── reads isOpen, listing
        └── uses closeBookingModal
```

## Form Validation Flow

```
Submit Button Clicked
        │
        ▼
validateForm()
        │
        ├─ Check Name ──────────────┐
        │                            │
        ├─ Check Email ─────────────┤
        │  (regex validation)       │
        │                            │
        ├─ Check Phone ─────────────┤
        │  (international format)   │
        │                            │
        ├─ Check Listing ───────────┤
        │                            │
        ├─ Check Dates ─────────────┤
        │  (valid format)           │
        │  (checkout > checkin)     │
        │  (checkin not in past)    │
        │                            │
        ├─ Check Guests ───────────┤
        │  (1-20 range)            │
        │                            │
        └─ All checks pass? ────────┘
              │
        ┌─────┴─────┐
        │           │
    ✗ Error      ✓ Valid
        │           │
        ▼           ▼
    Show Error   setError('')
    Message      Send API Request
```

## Error Handling Flow

```
Error Occurs
    │
    ├─ Client Validation Error
    │  ├─ Show in-form error message
    │  └─ Highlight invalid field
    │
    ├─ API Validation Error (400)
    │  ├─ Parse error message
    │  └─ Display error alert
    │
    ├─ Server Error (500)
    │  ├─ Show generic error message
    │  └─ Log to console
    │
    └─ Network Error
       ├─ Show "Connection failed" message
       └─ Allow retry
```

## Mobile Responsive Flow

```
Desktop (lg)
├─ Header: Full navigation + Book Now button
├─ Forms: Full width inputs
├─ Modal: max-width-2xl centered
└─ Confirmation: Full page layout

Tablet (md)
├─ Header: Full navigation + Book Now
├─ Forms: Full width with padding
├─ Modal: 90% width
└─ Confirmation: Adjusted spacing

Mobile (sm)
├─ Header: Hamburger + Book Now
├─ Forms: Full width, touch-friendly (min-h-12)
├─ Modal: Full screen with padding
└─ Confirmation: Stack all elements
```

---

**Diagram Version:** 1.0
**Last Updated:** 2024
**Visual Guide:** System Architecture & Data Flows

