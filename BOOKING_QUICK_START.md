# Quick Start: Booking System Setup

## 🚀 3-Minute Setup

### Step 1: Get Resend API Key (2 minutes)
1. Go to https://resend.com
2. Sign up for a free account
3. Go to API Keys section
4. Copy your API key (starts with `re_`)

### Step 2: Add Environment Variables (1 minute)
Create or edit `.env.local` in project root:

```env
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=bookings@fuvahmulah.travel
```

### Step 3: Test It!
```bash
npm run dev
```

Click "BOOK NOW" in the header and submit a test booking!

## ✅ Checklist

- [ ] Signed up for Resend
- [ ] Got API key
- [ ] Added to `.env.local`
- [ ] Ran `npm run dev`
- [ ] Tested booking flow
- [ ] Received confirmation email

## 🎯 What You Get

✅ Functional booking form  
✅ Email confirmations to guests  
✅ Admin notifications  
✅ Modal overlay  
✅ Validation  
✅ Confirmation page  

## 📧 Email Testing

1. Submit a booking with your email
2. Check your email inbox
3. You'll get TWO emails:
   - Guest confirmation
   - Admin notification (to `ADMIN_EMAIL`)

## 🔧 Next Steps

### For Production:
1. Verify your domain in Resend
2. Update email templates with your branding
3. Set up database (see BOOKING_SYSTEM.md)
4. Deploy to Vercel

### For Customization:
1. Edit email templates in `lib/email.ts`
2. Customize form in `components/BookingForm.tsx`
3. Adjust confirmation page in `app/booking/confirmation/page.tsx`

## 📞 Need Help?

- Check BOOKING_SYSTEM.md for full documentation
- Review Resend docs: https://resend.com/docs
- Check browser console for errors
- View Resend dashboard for email logs

---

**Ready to go!** 🎉

