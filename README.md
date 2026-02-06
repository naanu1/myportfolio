# Isometric AI Architect Portfolio

A stunning, interactive 3D isometric portfolio built with Next.js, showcasing a futuristic AI workspace concept.

## 🎨 Features

- **Pure CSS 3D**: No heavy 3D libraries - built entirely with CSS transforms
- **Interactive Objects**: Explore the workspace by clicking on different objects
- **Smooth Animations**: Powered by Framer Motion for buttery-smooth transitions
- **Cyberpunk Aesthetic**: Neon colors, dark themes, and futuristic design
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Production Ready**: TypeScript, error handling, and SEO optimized

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Custom CSS
- **Animation**: Framer Motion
- **State Management**: Zustand
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx             # Main portfolio page
│   └── globals.css          # Global styles
├── components/
│   ├── isometric/           # Core 3D components
│   │   ├── IsoCube.tsx      # 3D cube primitive
│   │   ├── IsometricScene.tsx # Scene container
│   │   └── Floor.tsx        # Grid floor
│   ├── objects/             # Interactive objects
│   │   ├── ServerRack.tsx   # Skills section
│   │   ├── HologramTable.tsx # Projects section
│   │   ├── MainMonitor.tsx  # About section
│   │   ├── BlueprintDesk.tsx # Experience section
│   │   └── ContactTerminal.tsx # Contact section
│   ├── modals/              # Content modals
│   │   ├── AboutModal.tsx
│   │   ├── SkillsModal.tsx
│   │   ├── ProjectsModal.tsx
│   │   ├── ExperienceModal.tsx
│   │   └── ContactModal.tsx
│   └── IntroSequence.tsx    # Intro animation
├── store/
│   └── usePortfolioStore.ts # Global state
├── lib/
│   └── resumeData.ts        # Resume content
└── types/
    └── index.ts             # TypeScript types
```

## 🎯 Interactive Objects

| Object | Section | Description |
|--------|---------|-------------|
| Server Rack | Skills | Blinking LEDs representing technical capabilities |
| Hologram Table | Projects | Rotating hologram showcasing key projects |
| Main Monitor | About | Glowing screen with personal information |
| Blueprint Desk | Experience | Career timeline and achievements |
| Contact Terminal | Contact | Communication channel with pulsing alert |

## 🛠️ Installation & Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Update Resume Data

Edit `src/lib/resumeData.ts` to update your personal information, skills, projects, and experience.

### Modify Colors

Update the CSS variables in `src/app/globals.css`:

```css
:root {
  --bg-void: #050505;
  --neon-purple: #7928ca;
  --neon-cyan: #00f0ff;
  --neon-red: #ff0055;
}
```

### Adjust Object Positions

Modify the x, y, z coordinates in each object component to reposition elements in the 3D space.

## 📱 Responsive Design

The portfolio automatically adapts to different screen sizes:
- **Desktop**: Full 3D experience with parallax effects
- **Tablet**: Scaled down scene for optimal viewing
- **Mobile**: Compact view with touch-friendly interactions

## 🔒 Security & Best Practices

✅ TypeScript for type safety
✅ Error boundaries for crash prevention
✅ Proper SEO metadata
✅ Accessible components with ARIA labels
✅ Optimized animations for performance
✅ Clean code structure and separation of concerns

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 👨‍💻 Author

**Harshith M**
- Email: harshithmmallikarjun@gmail.com
- LinkedIn: [linkedin.com/in/harshith-m-60303a319](https://linkedin.com/in/harshith-m-60303a319)
- GitHub: [github.com/naanu1](https://github.com/naanu1)

---

Built with ❤️ using Next.js and pure CSS 3D
