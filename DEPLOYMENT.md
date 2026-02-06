# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git (for version control)

## Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Start Production Server**
   ```bash
   npm start
   ```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Production Deployment**
   ```bash
   vercel --prod
   ```

**Or use the Vercel Dashboard:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Deploy via Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Option 3: Docker

1. **Create Dockerfile** (already included in project)
2. **Build Image**:
   ```bash
   docker build -t portfolio-isometric .
   ```
3. **Run Container**:
   ```bash
   docker run -p 3000:3000 portfolio-isometric
   ```

### Option 4: Traditional Hosting (cPanel, etc.)

1. Build the project:
   ```bash
   npm run build
   ```

2. The output will be in `.next` folder

3. Upload the following to your server:
   - `.next` folder
   - `public` folder
   - `package.json`
   - `node_modules` (or run `npm install` on server)

4. Start the server:
   ```bash
   npm start
   ```

## Environment Variables

This project doesn't require any environment variables by default. If you add features that need them:

1. Create `.env.local` file
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```

## Performance Optimization

The portfolio is already optimized with:
- ✅ Server-side rendering (SSR)
- ✅ Automatic code splitting
- ✅ Optimized CSS with Tailwind
- ✅ Framer Motion for smooth animations
- ✅ Lazy loading of modals
- ✅ TypeScript for type safety

## Custom Domain

### Vercel
1. Go to your project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### Netlify
1. Go to "Domain settings"
2. Add custom domain
3. Configure DNS

## Monitoring & Analytics

### Add Google Analytics

1. Get your GA tracking ID
2. Add to `src/app/layout.tsx`:
   ```tsx
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
     strategy="afterInteractive"
   />
   ```

## Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version: `node -v` (should be 18+)

### Styles Not Loading
- Ensure Tailwind CSS is properly configured
- Check `globals.css` import order

### 3D Objects Not Rendering
- Check browser console for errors
- Ensure JavaScript is enabled
- Try a different browser (Chrome/Firefox recommended)

## Production Checklist

Before deploying to production:

- [ ] Update resume data in `src/lib/resumeData.ts`
- [ ] Test all interactive objects
- [ ] Verify all modals open and close properly
- [ ] Check responsive design on mobile
- [ ] Test contact form functionality
- [ ] Add custom domain
- [ ] Set up analytics
- [ ] Test performance with Lighthouse
- [ ] Verify SEO metadata
- [ ] Check browser compatibility

## Support

For issues or questions:
- Check the README.md
- Review the code comments
- Contact: harshithmmallikarjun@gmail.com

---

**Built with ❤️ using Next.js**
