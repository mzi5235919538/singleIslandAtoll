/**
 * Email Service
 * Handles all email communications using Resend
 */

import { Resend } from 'resend';

let resend: Resend | null = null;

/**
 * Get Resend instance (lazy initialization)
 */
function getResend() {
  if (!resend) {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      throw new Error('RESEND_API_KEY environment variable is not set');
    }
    resend = new Resend(apiKey);
  }
  return resend;
}

export interface BookingEmailData {
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

/**
 * Send booking confirmation email to guest
 */
export async function sendBookingConfirmationToGuest(data: BookingEmailData) {
  const resend = getResend();
  const { guestName, guestEmail, listingName, checkInDate, checkOutDate, numberOfGuests, bookingReference } = data;

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #0077b6 0%, #00b4d8 100%); color: white; padding: 20px; border-radius: 8px; }
          .content { padding: 20px 0; }
          .booking-details { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .detail-row { display: flex; justify-content: space-between; margin: 10px 0; }
          .label { font-weight: bold; }
          .button { display: inline-block; background: #0077b6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 15px 0; }
          .footer { font-size: 12px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Booking Inquiry Received! 🎉</h1>
            <p>Thank you for choosing to book with us, ${guestName}!</p>
          </div>

          <div class="content">
            <p>We've received your booking inquiry and our team will review it shortly. Here are your booking details:</p>
            
            <div class="booking-details">
              <div class="detail-row">
                <span class="label">Booking Reference:</span>
                <span>${bookingReference}</span>
              </div>
              <div class="detail-row">
                <span class="label">Listing:</span>
                <span>${listingName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Check-in:</span>
                <span>${new Date(checkInDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="detail-row">
                <span class="label">Check-out:</span>
                <span>${new Date(checkOutDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div class="detail-row">
                <span class="label">Number of Guests:</span>
                <span>${numberOfGuests}</span>
              </div>
            </div>

            <h3>What happens next?</h3>
            <ol>
              <li>Our team will review your inquiry within 24 hours</li>
              <li>We'll confirm availability and pricing</li>
              <li>You'll receive a confirmation email with next steps</li>
              <li>We'll help you complete the booking</li>
            </ol>

            <p>If you have any questions in the meantime, feel free to contact us directly at:</p>
            <p>
              <strong>Phone:</strong> +960-775-7070<br>
              <strong>Email:</strong> info@fuvahmulah.travel
            </p>
          </div>

          <div class="footer">
            <p>© 2025 Fuvahmulah Travel. All rights reserved.</p>
            <p>This is an automated message. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;

  try {
    const response = await resend.emails.send({
      from: 'noreply@fuvahmulah.travel',
      to: guestEmail,
      subject: `Booking Inquiry Confirmed - Reference: ${bookingReference}`,
      html,
    });

    return { success: true, messageId: response.data?.id };
  } catch (error) {
    console.error('Error sending guest confirmation email:', error);
    return { success: false, error };
  }
}

/**
 * Send booking notification email to admin/owner
 */
export async function sendBookingNotificationToAdmin(data: BookingEmailData) {
  const resend = getResend();
  const {
    guestName,
    guestEmail,
    guestPhone,
    listingName,
    checkInDate,
    checkOutDate,
    numberOfGuests,
    specialRequests,
    hearAboutUs,
    bookingReference,
  } = data;

  const checkInFormatted = new Date(checkInDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const checkOutFormatted = new Date(checkOutDate).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #0077b6; color: white; padding: 20px; border-radius: 8px; }
          .content { padding: 20px 0; }
          .guest-info { background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .booking-info { background: #e8f4f8; padding: 15px; border-radius: 8px; margin: 15px 0; }
          .detail-row { display: flex; justify-content: space-between; margin: 10px 0; padding: 8px 0; border-bottom: 1px solid #ddd; }
          .label { font-weight: bold; width: 40%; }
          .value { width: 60%; }
          .actions { margin: 20px 0; }
          .button { display: inline-block; background: #0077b6; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; margin-right: 10px; }
          .footer { font-size: 12px; color: #666; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Booking Inquiry Received</h1>
            <p>Reference: <strong>${bookingReference}</strong></p>
          </div>

          <div class="content">
            <h2>Guest Information</h2>
            <div class="guest-info">
              <div class="detail-row">
                <span class="label">Name:</span>
                <span class="value">${guestName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Email:</span>
                <span class="value"><a href="mailto:${guestEmail}">${guestEmail}</a></span>
              </div>
              <div class="detail-row">
                <span class="label">Phone:</span>
                <span class="value"><a href="tel:${guestPhone}">${guestPhone}</a></span>
              </div>
              ${hearAboutUs ? `
              <div class="detail-row">
                <span class="label">Heard About:</span>
                <span class="value">${hearAboutUs}</span>
              </div>
              ` : ''}
            </div>

            <h2>Booking Details</h2>
            <div class="booking-info">
              <div class="detail-row">
                <span class="label">Listing:</span>
                <span class="value">${listingName}</span>
              </div>
              <div class="detail-row">
                <span class="label">Check-in:</span>
                <span class="value">${checkInFormatted}</span>
              </div>
              <div class="detail-row">
                <span class="label">Check-out:</span>
                <span class="value">${checkOutFormatted}</span>
              </div>
              <div class="detail-row">
                <span class="label">Number of Nights:</span>
                <span class="value">${Math.ceil((new Date(checkOutDate).getTime() - new Date(checkInDate).getTime()) / (1000 * 60 * 60 * 24))}</span>
              </div>
              <div class="detail-row">
                <span class="label">Guests:</span>
                <span class="value">${numberOfGuests}</span>
              </div>
            </div>

            ${specialRequests ? `
            <h2>Special Requests</h2>
            <div style="background: #f0f0f0; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
              ${specialRequests}
            </div>
            ` : ''}

            <div class="actions">
              <p><strong>Next Steps:</strong></p>
              <ul>
                <li>Review the booking inquiry</li>
                <li>Check availability</li>
                <li>Contact guest to confirm or discuss options</li>
              </ul>
            </div>

            <div class="footer">
              <p>This is an automated notification. Please contact the guest directly using the phone number or email provided above.</p>
              <p>© 2025 Fuvahmulah Travel</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;

  const adminEmail = process.env.ADMIN_EMAIL || 'bookings@fuvahmulah.travel';

  try {
    const response = await resend.emails.send({
      from: 'noreply@fuvahmulah.travel',
      to: adminEmail,
      subject: `New Booking Inquiry - ${listingName} (${bookingReference})`,
      html,
    });

    return { success: true, messageId: response.data?.id };
  } catch (error) {
    console.error('Error sending admin notification email:', error);
    return { success: false, error };
  }
}

/**
 * Generate a unique booking reference number
 */
export function generateBookingReference(): string {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `FUV-${timestamp}-${random}`;
}
