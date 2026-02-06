# 🔒 Security Guide: EmailJS Configuration

You have asked about the security of `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

### 1. Is it safe to expose?
**YES, BUT** only if you configure the EmailJS dashboard correctly.
Client-side libraries (like Google Maps, Stripe Public Key, EmailJS) **REQUIRE** the key to be in the browser to work. Exposing it is unavoidable for client-side apps.

### 2. How to Secure It? (MANDATORY STEP)
To prevent others from using your key to send spam:

1.  Go to **[EmailJS Dashboard](https://dashboard.emailjs.com/admin)**
2.  Navigate to **Account > Security** (or under your API Keys section).
3.  Look for **"Allowed Origins"** or **"Whitelisted Domains"**.
4.  Remove `*` (if present).
5.  Add ONLY your domains:
    *   `https://your-portfolio.vercel.app` (Your production URL)
    *   `http://localhost:3000` (For local testing)

### 3. Verification
Once whitelisted:
*   If someone steals your `NEXT_PUBLIC_KEY` and tries to run it from `evil-site.com`, EmailJS will **reject** the request.
*   Your quota is safe.

This is the industry standard for client-side API keys.
