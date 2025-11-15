# Affordable SOC2 Landing Page

A modern, responsive landing page for SOC2 audit readiness services.

## 🚀 Features

- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Modern Design**: Clean aesthetic with Tailwind CSS
- **Two Pages**: 
  - Main landing page with all key sections
  - Blog page with article cards
- **Interactive Elements**:
  - Mobile-friendly navigation menu
  - FAQ accordion
  - Email capture forms
  - Smooth scrolling
  - Hover effects and animations

## 📁 File Structure

```
affordable-soc2.com/
├── index.html          # Main landing page
├── blog.html           # Blog listing page
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── assets/             # Images and icons folder
│   └── README.md       # Image specifications
└── README.md           # This file
```

## 🎨 Design Features

### Main Landing Page Sections:
1. **Navbar/Header** - Logo, Blog link, "Let's Chat" CTA
2. **Hero Section** - Main value proposition with CTAs
3. **Say Goodbye To** - Customer pain points
4. **Email Signup** - Lead capture section
5. **SOC2 in 14 Days** - Value proposition breakdown
6. **Benefits Section** - Why choose us (4 key benefits)
7. **What You Get** - Feature checklist
8. **Roadmap** - 14-day process timeline
9. **FAQ Section** - Interactive accordion
10. **Footer** - Email signup, links, contact info

### Blog Page Sections:
1. **Navbar/Header** - Same as main page
2. **Hero Section** - Blog introduction
3. **Blog Cards** - 9 article cards (3 per row on desktop)
4. **Footer** - Same as main page

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - No framework dependencies
- **CSS3** - Custom animations and transitions

## 🚦 Getting Started

1. **Open the site**: Simply open `index.html` in your web browser
2. **No build process required**: Everything runs directly in the browser
3. **Add images**: Place your PNG images in the `assets/` folder (see assets/README.md for specifications)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ✨ Interactive Features

### Mobile Menu
- Hamburger menu on mobile devices
- Smooth slide-in animation
- Click outside to close

### FAQ Accordion
- Click any question to expand/collapse
- Smooth height transitions
- Rotating arrow icons

### Email Forms
- Client-side validation
- Success/error notifications
- Auto-reset after submission

### Smooth Scrolling
- Anchor links scroll smoothly
- Navbar offset compensation

## 🎯 Customization Guide

### Colors
The color scheme is defined in the Tailwind config (in both HTML files):
```javascript
colors: {
    primary: '#2563eb',    // Blue
    secondary: '#1e40af',  // Darker blue
    accent: '#60a5fa'      // Light blue
}
```

### Content
All content can be edited directly in the HTML files:
- Company name: Search for "SOC2 Ready" and "Affordable SOC2"
- Contact info: Update email and phone in footer
- Pain points: Edit the "Say Goodbye To" section
- Benefits: Modify the "Why Choose Us" cards
- FAQ: Add/remove/edit questions in the FAQ section

### Images
Replace emoji placeholders with actual images:
1. Add PNG files to the `assets/` folder
2. Images will automatically load (fallback emojis are in place)
3. See `assets/README.md` for image specifications

## 🔧 JavaScript Functionality

The `script.js` file includes:
- Mobile menu toggle
- FAQ accordion
- Email form validation and submission
- Smooth scroll navigation
- Scroll-based navbar effects
- Intersection Observer animations
- Notification system

## 📊 Performance

- No external dependencies except Tailwind CDN
- Minimal JavaScript for fast load times
- Responsive images with lazy loading support
- Optimized CSS with only necessary styles

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Next Steps

1. **Add Real Content**: Replace placeholder text with actual company information
2. **Add Images**: Create or source images for all sections (see assets/README.md)
3. **Backend Integration**: Connect email forms to your backend/CRM
4. **Analytics**: Add Google Analytics or similar tracking
5. **SEO**: Add meta descriptions, Open Graph tags, etc.
6. **Hosting**: Deploy to Netlify, Vercel, GitHub Pages, or your preferred host

## 🤝 Customization Tips

- **Change company name**: Search and replace "Affordable SOC2" and "SOC2 Ready"
- **Modify timeline**: Edit the "14 days" references if your timeline differs
- **Add sections**: Copy existing section structure and modify content
- **Blog posts**: Add more cards by duplicating the blog card structure
- **Colors**: Update the Tailwind config and custom CSS color variables

## 📧 Contact Form Integration

To connect the email forms to your backend:

1. Replace the `handleFormSubmit` function in `script.js`
2. Add your API endpoint
3. Example:
```javascript
fetch('https://your-api.com/subscribe', {
    method: 'POST',
    body: JSON.stringify({ email: email }),
    headers: { 'Content-Type': 'application/json' }
})
```

## 🎨 Design Inspiration

Based on the clean, modern aesthetic of Compava.com, adapted for SOC2 compliance services.

## 📄 License

This is a custom project. Modify and use as needed for your business.

---

**Built with ❤️ for SOC2 compliance companies**
