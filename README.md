# Adarsh Kumar Singh — Engineering Portfolio Website

A production-quality, editorial-style personal portfolio website for **Adarsh Kumar Singh**, a 2nd-year B.Tech Computer Science & Engineering student at Lovely Professional University.

Designed with an **"Editorial Engineering"** aesthetic: restrained dark graphite palette (`#0B0D10`), subtle 1px precision grid, restrained accent blue (`#5B8CFF`), and clear typography hierarchy (Inter + JetBrains Mono).

---

## 📁 Project Structure

```
adarsh-portfolio/
├── index.html                 # Semantic, accessible HTML5 single-page structure
├── css/
│   └── styles.css             # Editorial engineering design system (tokens, layout, typography, components, print)
├── js/
│   ├── config.js              # Centralized portfolio data (profile, projects, skills, education, contact)
│   └── main.js                # Accessible interactive logic (filtering, modal case studies, system diagram, copy tools)
├── assets/
│   ├── adarsh-photo.jpg       # [PLACEHOLDER] Portrait photo (4:5 ratio)
│   ├── tiki-topple.png        # [PLACEHOLDER] Tiki Topple screenshot
│   ├── safety-shoe.png        # [PLACEHOLDER] Smart Safety Shoe hardware photo
│   ├── navyugal.png           # [PLACEHOLDER] NavYugal homepage screenshot
│   ├── Adarsh_Kumar_Singh_Resume.pdf  # [PLACEHOLDER] Downloadable resume PDF
│   └── certificates/          # Folder for verified certificate images
└── README.md                  # Customization & deployment guide
```

---

## 🚀 How to Run Locally

Because the project is built with standard vanilla HTML5, CSS3, and JavaScript, no complex installation or build step is required.

### Option 1: Python HTTP Server (Recommended)
Open a terminal in the `adarsh-portfolio` directory:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
1. Open the `adarsh-portfolio` folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🛠️ Step-by-Step Customization Guide

### 1. Update Personal & Contact Details (`js/config.js`)
Open `js/config.js` to modify your links in one single place:
- **LinkedIn Profile**: Replace `linkedin: "https://www.linkedin.com/in/..."`
- **GitHub Profile**: Replace `github: "https://github.com/..."`
- **Phone Number**: Replace `phone: "+91 ..."`

### 2. Replace the Profile Photo
1. Take a high-quality, professional portrait photo with a neutral background (4:5 crop recommended).
2. Save it as `assets/adarsh-photo.jpg` (or `.png`).
3. If using `.png`, update the path in `index.html` and `js/config.js`.

### 3. Replace Project Visuals
- **Tiki Topple**: Place a screenshot of your digital board game UI into `assets/tiki-topple.png`.
- **Smart Safety Shoe**: Place a photo of your physical ESP32 prototype hardware into `assets/safety-shoe.png`.
- **NavYugal**: Place a screenshot of your current event discovery frontend into `assets/navyugal.png`.

*Note: Until you add these image files, the website will automatically display a clean, technical blueprint placeholder.*

### 4. Replace the Resume PDF
Export your updated resume as `Adarsh_Kumar_Singh_Resume.pdf` and replace the placeholder file inside the `assets/` directory.

---

## 🌐 Free Deployment Options

### 1. GitHub Pages (Free)
1. Initialize a git repository and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
2. In your repository on GitHub, go to **Settings** → **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.

### 2. Vercel or Netlify (1-Click)
- Drag and drop the `adarsh-portfolio` folder directly into [Netlify Drop](https://app.netlify.com/drop) or import from GitHub on [Vercel](https://vercel.com).

---

## 🛡️ Core Principles Maintained

- **Honesty & Integrity**: Zero fabricated metrics, fake rankings, or unverified backend technologies.
- **Accurate Project Scope**: Honest attribution of hardware vs teammate coding for the Smart Safety Shoe; honest representation of Tiki Topple as a digital board-game adaptation; honest frontend roadmap for NavYugal.
- **Fast & Accessible**: Semantic HTML5, WCAG AA contrast compliance, keyboard focus trapping on case study modals, and full responsiveness across mobile (375px), tablet (768px), and desktop (1200px+).
