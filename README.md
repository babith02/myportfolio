# Babith Sarish S - Portfolio Website

A modern, interactive personal portfolio website showcasing my software development projects, skills, and experience. Built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **GitHub-Inspired Theme**: Dark mode design with blue/purple accent colors and smooth animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Interactive Animations**: Scroll-triggered animations using Framer Motion
- **Circuit Board Scroll Tracker**: Unique left-side progress indicator with electronic component visuals
- **VS Code Animation**: Live code typing animation in the About section
- **Dynamic Resume Modal**: View resume in an interactive modal overlay
- **Projects Showcase**: Filterable project gallery with ML, Full Stack, and IoT categories
- **Contact Form**: Email integration with mailto functionality

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/babith02/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🚀 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

1. **Push your code to GitHub:**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to `Settings` → `Pages`
   - Under "Source", select `GitHub Actions`
   - The workflow will automatically run and deploy your site

3. **Your site will be live at:**
   - `https://yourusername.github.io/repository-name/`

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your production-ready files

3. Deploy the `dist` folder to your hosting service of choice

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── profile-picture.jpg     # Profile image
│   └── BABITH SARISH S - 2021503009 - RESUME-1.pdf  # Resume PDF
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation bar
│   │   ├── Hero.jsx            # Landing section
│   │   ├── About.jsx           # About me section
│   │   ├── CodeAnimation.jsx   # VS Code typing animation
│   │   ├── Skills.jsx          # Technical skills
│   │   ├── Experience.jsx      # Work experience timeline
│   │   ├── Education.jsx       # Academic background
│   │   ├── Projects.jsx        # Project showcase
│   │   ├── Contact.jsx         # Contact form
│   │   ├── Footer.jsx          # Footer
│   │   ├── GitHubBackground.jsx # Animated background
│   │   └── ResumeModal.jsx     # Resume viewer modal
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Customization

### Update Personal Information

1. **Name & Title**: Edit `src/components/Hero.jsx` and `src/components/Header.jsx`
2. **About Section**: Update `src/components/About.jsx`
3. **Skills**: Modify the skills array in `src/components/Skills.jsx`
4. **Experience**: Update experience data in `src/components/Experience.jsx`
5. **Projects**: Edit projects array in `src/components/Projects.jsx`
6. **Contact Info**: Update contact details in `src/components/Contact.jsx` and `src/components/Footer.jsx`

### Replace Assets

1. **Profile Picture**: Replace `public/profile-picture.jpg`
2. **Resume PDF**: Replace `public/BABITH SARISH S - 2021503009 - RESUME-1.pdf`
3. **Favicon**: Replace `public/robot-icon.svg`

### Colors & Theme

Edit `tailwind.config.js` to customize colors:
```js
colors: {
  primary: {
    300: '#79c0ff',
    400: '#58a6ff',
    500: '#1f6feb',
    // ...
  }
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance

- Lazy loading for images
- Code splitting with Vite
- Optimized animations with Framer Motion
- Minimal bundle size
- Fast page load times

## 🔗 Links

- **Portfolio**: [Live Site](https://yourusername.github.io/portfolio/)
- **GitHub**: [babith02](https://github.com/babith02)
- **LinkedIn**: [Babith Sarish S](https://www.linkedin.com/in/babith-sarish-s/)
- **LeetCode**: [babith](https://leetcode.com/u/babith/)

## 📧 Contact

- **Email**: babith.personal@gmail.com
- **Phone**: +91 9486446388
- **Location**: Chennai, Tamil Nadu, India

## 📝 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Built with ❤️ using React and Tailwind CSS
- Inspired by GitHub's modern design aesthetic
- Icons from React Icons
- Animations powered by Framer Motion

---

Made with ❤️ by Babith Sarish S
