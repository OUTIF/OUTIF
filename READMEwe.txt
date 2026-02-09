# Personal Portfolio Website

## 🌟 Overview
A modern, responsive personal portfolio website for Yousif Hussein - Computer Engineering Student at ESOGU, Turkey.

## 📁 Files Structure
```
portfolio/
│
├── index.html          # Homepage
├── projects.html       # Projects page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## 🚀 Features

### ✨ Core Features
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Dark/Light Mode**: Toggle between themes with persistent storage
- **Smooth Animations**: Fade-in effects and hover animations
- **Project Filtering**: Filter projects by category (Web, Software, Academic)
- **Contact Form**: Functional form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices

### 🎨 Design Features
- Modern gradient backgrounds
- Clean and professional layout
- Font Awesome icons
- Smooth page transitions
- Interactive hover effects

## 🛠️ Installation & Setup

### 1. Basic Setup
Simply open `index.html` in your web browser to view the website locally.

### 2. Live Server (Recommended)
For better development experience:

**Using VS Code:**
1. Install "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

**Using Python:**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

### 3. Deploy to Web
Upload all files to your web hosting service (GitHub Pages, Netlify, Vercel, etc.)

## ✏️ Customization Guide

### Personal Information
Edit these sections in the HTML files:

**index.html:**
- Line 42-47: Your name and title
- Line 48-52: Your introduction
- Line 84-97: About me section
- Line 116-132: Education info

**contact.html:**
- Line 52-95: Contact information
- Update email, location, university

### Projects
Edit `projects.html`:
- Each project is in a `.project-card` div
- Update: title, description, technologies, links
- Add/remove projects as needed

### Colors & Theme
Edit `styles.css` (lines 8-22):
```css
:root {
    --primary-color: #2563eb;    /* Main blue color */
    --secondary-color: #1e40af;  /* Darker blue */
    --accent-color: #3b82f6;     /* Lighter blue */
    /* ... more colors */
}
```

### Social Media Links
Update in all HTML files (footer section):
```html
<a href="YOUR_GITHUB_URL" target="_blank">
<a href="YOUR_LINKEDIN_URL" target="_blank">
<a href="mailto:YOUR_EMAIL">
```

### Adding New Skills
In `index.html` (line 106+):
```html
<div class="skill-card">
    <i class="fab fa-YOUR-ICON"></i>
    <h3>Your Skill</h3>
</div>
```

Find icons at: https://fontawesome.com/icons

## 📝 Contact Form Setup

The form currently shows a success message without sending data. To make it functional:

### Option 1: FormSpree
1. Sign up at https://formspree.io
2. Get your form endpoint
3. Update form in `contact.html`:
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 2: EmailJS
1. Sign up at https://www.emailjs.com
2. Follow their integration guide
3. Update the form submission in `script.js`

### Option 3: Backend API
Create your own backend endpoint and update the form handling in `script.js`

## 🎨 Font Awesome Icons

Icons are loaded from CDN. Find more icons:
- Website: https://fontawesome.com/icons
- Free icons: https://fontawesome.com/search?o=r&m=free

Usage:
```html
<i class="fas fa-icon-name"></i>    <!-- Solid -->
<i class="fab fa-icon-name"></i>    <!-- Brands -->
<i class="far fa-icon-name"></i>    <!-- Regular -->
```

## 📱 Mobile Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px
- Small Mobile: < 480px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 🐛 Troubleshooting

### Icons not showing?
- Check internet connection (Font Awesome loads from CDN)
- Verify CDN link in HTML `<head>`

### Dark mode not persisting?
- Check browser's localStorage is enabled
- Clear browser cache and try again

### Mobile menu not working?
- Ensure `script.js` is properly linked
- Check browser console for errors

### Form not submitting?
- Check form validation
- Verify form action/method
- Check browser console for errors

## 📚 Resources

- **Font Awesome**: https://fontawesome.com
- **Google Fonts**: https://fonts.google.com
- **Color Palettes**: https://coolors.co
- **CSS Gradients**: https://cssgradient.io

## 📄 License

Free to use for personal and commercial projects.

## 👨‍💻 Author

**Yousif Hussein**
- Computer Engineering Student
- Eskişehir Osmangazi University (ESOGU)
- Location: Turkey
- Origin: Iraq

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Support

If you need help or have questions:
1. Check the troubleshooting section
2. Review the customization guide
3. Contact via the contact form

---

**Made with ❤️ by Yousif Hussein**
