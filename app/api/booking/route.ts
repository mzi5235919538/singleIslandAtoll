import { NextRequest, NextResponse } from 'next/server';
import {
  sendBookingConfirmationToGuest,
  sendBookingNotificationToAdmin,
  generateBookingReference,
  BookingEmailData,
} from '@/lib/email';

interface BookingRequest {
  listing: string;
  guestName: string;
  guestEmail: string;
  guestPhone: string;
  checkInDate: string;
  checkOutDate: string;
  numberOfGuests: string;
  specialRequests?: string;
  hearAboutUs?: string;
}

/**
 * Validate booking request data
 */
function validateBookingData(data: BookingRequest): { valid: boolean; error?: string } {
  // Validate required fields
  if (!data.listing?.trim()) {
    return { valid: false, error: 'Listing is required' };
  }

  if (!data.guestName?.trim()) {
    return { valid: false, error: 'Guest name is required' };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.guestEmail)) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Validate phone
  const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/;
  if (!phoneRegex.test(data.guestPhone.replace(/\s/g, ''))) {
    return { valid: false, error: 'Invalid phone number' };
  }

  // Validate dates
  if (!data.checkInDate) {
    return { valid: false, error: 'Check-in date is required' };
  }

  if (!data.checkOutDate) {
    return { valid: false, error: 'Check-out date is required' };
  }

  const checkIn = new Date(data.checkInDate);
  const checkOut = new Date(data.checkOutDate);

  if (isNaN(checkIn.getTime())) {
    return { valid: false, error: 'Invalid check-in date' };
  }

  if (isNaN(checkOut.getTime())) {
    return { valid: false, error: 'Invalid check-out date' };
  }

  if (checkOut <= checkIn) {
    return { valid: false, error: 'Check-out date must be after check-in date' };
  }

  // Check if checkin is not in the past
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (checkIn < today) {
    return { valid: false, error: 'Check-in date cannot be in the past' };
  }

  // Validate number of guests
  const guests = parseInt(data.numberOfGuests);
  if (isNaN(guests) || guests < 1 || guests > 20) {
    return { valid: false, error: 'Number of guests must be between 1 and 20' };
  }

  return { valid: true };
}

/**
 * POST handler for booking inquiries
 */
export async function POST(request: NextRequest) {
  try {
    const body: BookingRequest = await request.json();

    // Validate request data
    const validation = validateBookingData(body);
    if (!validation.valid) {
      return NextResponse.json(
        { message: validation.error || 'Validation failed' },
        { status: 400 }
      );
    }

    // Generate unique booking reference
    const bookingReference = generateBookingReference();

    // Prepare email data
    const emailData: BookingEmailData = {
      guestName: body.guestName.trim(),
      guestEmail: body.guestEmail.toLowerCase().trim(),
      guestPhone: body.guestPhone.trim(),
      listingName: body.listing.trim(),
      checkInDate: body.checkInDate,
      checkOutDate: body.checkOutDate,
      numberOfGuests: parseInt(body.numberOfGuests),
      specialRequests: body.specialRequests?.trim(),
      hearAboutUs: body.hearAboutUs,
      bookingReference,
    };

    // Send confirmation email to guest
    const guestEmailResult = await sendBookingConfirmationToGuest(emailData);

    if (!guestEmailResult.success) {
      console.error('Failed to send guest confirmation email:', guestEmailResult.error);
      // Log error but don't fail the request - guest email might fail for various reasons
    }

    // Send notification email to admin
    const adminEmailResult = await sendBookingNotificationToAdmin(emailData);

    if (!adminEmailResult.success) {
      console.error('Failed to send admin notification email:', adminEmailResult.error);
      // Log error but don't fail the request
    }

    // TODO: Store booking in database
    // This would typically use Supabase or another database
    // Example:
    // const { data, error } = await supabase
    //   .from('bookings')
    //   .insert([{
    //     booking_reference: bookingReference,
    //     guest_name: emailData.guestName,
    //     guest_email: emailData.guestEmail,
    //     guest_phone: emailData.guestPhone,
    //     listing_name: emailData.listingName,
    //     check_in_date: emailData.checkInDate,
    //     check_out_date: emailData.checkOutDate,
    //     number_of_guests: emailData.numberOfGuests,
    //     special_requests: emailData.specialRequests,
    //     referral_source: emailData.hearAboutUs,
    //     status: 'pending',
    //     created_at: new Date().toISOString(),
    //   }]);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Booking inquiry submitted successfully',
        bookingReference,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Booking API error:', error);

    // Handle JSON parsing errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { message: 'Invalid request body' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS
 */
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
