# Pantukan Water World Website

A modern, fully responsive static website for Pantukan Water World featuring attractions, gallery, and contact information.

## 🚀 Features

- ✅ Fixed responsive navbar with smooth scroll navigation
- ✅ Full-screen hero section with background image and CTA
- ✅ About section with feature highlights
- ✅ Attractions section with 4 feature cards
- ✅ Photo gallery with hover zoom effects
- ✅ Contact form with JavaScript validation
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Smooth animations and hover effects
- ✅ Clean, commented code

## 📁 File Structure

```
pantukan-water-world/
│
├─ index.html          # Main HTML file
├─ css/
│   └─ style.css       # All CSS styles
├─ js/
│   └─ script.js       # JavaScript functionality
├─ images/             # Image assets folder
│   ├─ logo.png        # Navigation bar logo
│   ├─ hero.jpg        # Hero section background
│   ├─ slide1.jpg      # Wave Pool attraction
│   ├─ slide2.jpg      # Water Slides attraction
│   ├─ slide3.jpg      # Lazy River attraction
│   ├─ gallery1.jpg    # Gallery image 1
│   ├─ gallery2.jpg    # Gallery image 2
│   ├─ gallery3.jpg    # Gallery image 3
│   ├─ gallery4.jpg    # Gallery image 4
│   ├─ gallery5.jpg    # Gallery image 5
│   └─ gallery6.jpg    # Gallery image 6
└─ README.md           # This file
```

## 🎨 Color Palette

- **Primary**: `#72ccfd`
- **Accent / White**: `#ffffff`
- **Text Gray**: `#6b6b6b`

## 🖼️ How to Add Your Own Images

1. **Prepare your images:**

   - Recommended sizes:
     - `hero.jpg`: 1920x1080px (landscape, high quality)
     - `slide1.jpg`, `slide2.jpg`, `slide3.jpg`: 800x600px
     - Gallery images: 800x600px or 1200x900px

2. **Add images to the `/images` folder:**

   - Place all your images in the `images/` directory
   - Use the exact filenames listed above, or update the references in `index.html`

3. **Update image references** (if using different filenames):
   - Open `index.html`
   - Find `<img src="images/YOUR_IMAGE.jpg">` tags
   - Replace with your image filenames

## 📝 How to Customize Text Content

1. Open `index.html` in any text editor
2. Locate the sections you want to edit:
   - **Hero Section**: Change title and tagline
   - **About Section**: Update description text
   - **Attractions Section**: Modify card titles and descriptions
   - **Contact Section**: Update address, phone, email, hours

## 🌐 How to View the Website

### Method 1: Direct File Opening

1. Navigate to the project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Method 2: Live Server (Recommended for Development)

1. Install [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Method 3: Simple HTTP Server

Using Python:

```bash
# Python 3
python -m http.server 8000

# Then open browser to: http://localhost:8000
```

Using Node.js:

```bash
npx http-server

# Then open browser to: http://localhost:8080
```

## ✅ Testing Checklist

- [ ] Test on desktop (1920x1080, 1366x768)
- [ ] Test on tablet (768px width)
- [ ] Test on mobile (375px, 414px width)
- [ ] Verify all navigation links work and scroll smoothly
- [ ] Test hover effects on buttons and cards
- [ ] Test contact form submission (should show alert)
- [ ] Verify all images load correctly
- [ ] Test mobile menu toggle
- [ ] Check gallery hover zoom effects

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment Options

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify

1. Drag and drop the folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project folder
3. Follow prompts

## 🎯 Future Enhancements

The following features can be added in future versions:

- [ ] Image carousel for hero or gallery section
- [ ] AOS (Animate On Scroll) library integration
- [ ] Lightbox modal for gallery images
- [ ] Real contact form backend (PHP, Formspree, or EmailJS)
- [ ] Google Maps embed for location
- [ ] Testimonials section
- [ ] Pricing/ticket information section
- [ ] Social media integration
- [ ] Multi-language support

## 📞 Support

For questions or issues, contact:

- Email: info@pantukanwaterworld.com
- Phone: +63 123 456 7890

## 📄 License

This project is open source and available for personal and commercial use.

---

**Designed with ❤️ for Pantukan Water World**

Enjoy your new website! 🌊🎢
