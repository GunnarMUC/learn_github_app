# Git & GitHub Mastery App

**Originally by Wayne Trout · v2.0.0 Extended by Gunnar Mueller**

<div align="center">

![Git & GitHub Mastery App](https://img.shields.io/badge/Git%20%26%20GitHub-Mastery-blue?style=for-the-badge&logo=git)

[![CI](https://github.com/GunnarMUC/learn_github_app/actions/workflows/ci.yml/badge.svg)](https://github.com/GunnarMUC/learn_github_app/actions) [![Lint](https://github.com/GunnarMUC/learn_github_app/actions/workflows/lint.yml/badge.svg)](https://github.com/GunnarMUC/learn_github_app/actions)

[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue)](LICENSE)

An interactive learning platform that teaches Git fundamentals, branching strategies, GitHub collaboration, and AI-assisted development. Features dark mode, quizzes with certificates, offline PWA support, full-text search, and keyboard navigation. Built with React 18, Vite, and Tailwind CSS. Originally by Wayne Trout, v2.0.0 extended by Gunnar Mueller.

[View Demo](https://github.com/GunnarMUC/learn_github_app) • [Report Bug](https://github.com/GunnarMUC/learn_github_app/issues) • [Request Feature](https://github.com/GunnarMUC/learn_github_app/issues)

</div>

## 🚀 Features

### v2.0.0 (New)
- **🌙 Dark Mode**: System-preference-aware dark/light mode with toggle
- **📝 Quiz & Certificates**: End-of-module quizzes with downloadable PNG certificates
- **📱 PWA Offline**: Install as Progressive Web App, works without internet
- **🔍 Full-Text Search**: Search across all lessons and courses (shortcut `s`)
- **⌨️ Keyboard Navigation**: `j`/`k` for navigation, `s` for search, `?` for shortcuts
- **📄 PDF Export**: One-click PDF download for all cheat sheets
- **🌿 Git Visualizations**: Interactive branch graph animations (Canvas-based)
- **🛡️ Professionalized**: Apache 2.0 license, CI/Lint badges, security audit, Dependabot

### Core Features
- **Interactive Learning Modules**: 4 comprehensive courses covering Git fundamentals to AI-assisted development
- **Video Tutorials**: Integrated video lessons for visual learners with each module
- **Interactive Terminal**: Hands-on practice with simulated command-line exercises and real-time feedback
- **Coding Exercises**: Interactive exercises to test your understanding with immediate feedback
- **Progress Tracking**: Monitor your learning journey with achievements and progress indicators
- **Personalized Experience**: Customized learning paths based on your experience level and goals
- **Modern UI**: Beautiful, fully responsive interface with dark mode, gradient backgrounds, dynamic theming
- **AI Integration**: Learn modern AI-assisted development workflows
- **Comprehensive Resources**: Git/GitHub documentation, cheat sheets, and command reference
- **Community Wiki**: User-contributed tips, tricks, and resources for collaborative learning

## 📚 Course Structure

### 1. Git Fundamentals
- What is Git and version control
- Setting up Git configuration
- Creating repositories
- Understanding the Git workflow
- Making commits and viewing history
- Working with .gitignore
- Undoing changes and managing history
- Git best practices and workflows

### 2. Branching Mastery
- Understanding branches and their importance
- Creating and switching branches
- Merging and handling conflicts
- Advanced techniques (rebasing, cherry-picking)
- Branch management and cleanup
- Git Flow and GitHub Flow strategies
- Trunk-based development
- Feature flags and branch strategies

### 3. GitHub Collaboration
- Working with remote repositories
- Pull requests and code reviews
- Issues and project management
- Collaborative workflows
- GitHub Actions basics
- Open source contribution
- GitHub Projects and organization
- Security features and best practices

### 4. AI-Assisted Development
- AI tools for Git workflows
- AI-generated commit messages
- Code review assistance
- Integration with modern AI tools
- Best practices for AI + Git
- GitHub Copilot integration
- AI-powered documentation
- Future of AI in version control

## 📖 Comprehensive Resources

### Git Cheat Sheet
- Quick reference for all common Git commands
- Organized by workflow and use case
- Copy-to-clipboard functionality
- Links to official Git documentation
- Printable format for easy reference

### GitHub Cheat Sheet
- Quick reference for GitHub features and workflows
- Repository management, pull requests, and issues
- GitHub Actions, Pages, and Projects
- Keyboard shortcuts and pro tips
- Printable format for easy reference

### GitHub Documentation
- Curated links to official GitHub guides
- Organized by topic and feature
- Learning resources and tutorials
- Best practices and tips

### Command Reference
- Detailed explanation of Git commands
- Examples with expected output
- Advanced usage and options
- Searchable interface

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm
- **Security**: Content Security Policy, Input Sanitization, Secure Storage

## 🔒 Security Features

The Git & GitHub Mastery App includes several security features to protect users:

- **Content Security Policy (CSP)**: Prevents XSS attacks by controlling which resources can be loaded
- **Input Sanitization**: All user inputs are sanitized to prevent injection attacks
- **Secure Storage**: User data is encrypted before being stored in localStorage
- **Content Validation**: Wiki contributions are validated to ensure they don't contain malicious code
- **Rate Limiting**: Prevents abuse of API endpoints
- **Session Integrity**: Checks for session hijacking attempts

## 🏗️ Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/GunnarMUC/learn_github_app.git
   cd git_gihub_app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Production Deployment

1. **Build the application**:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. **Preview the production build locally**:
   ```bash
   npm run preview
   # or
   yarn preview
   ```

3. **Push to GitHub**:
   ```bash
   # Using the provided push script
   ./push_to_github.sh
   ```

4. **Deploy to GitHub Pages**:
   ```bash
   # Using the provided deployment script
   ./deploy.sh
   
   # Or manually
   npm run build
   # Then deploy the dist folder to GitHub Pages
   ```

## 🔧 Development Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm run format` - Format code with Prettier

## 📁 Project Structure

```
git-github-mastery-app/
├── public/
│   ├── favicon.svg
│   ├── manifest.json
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── LessonViewer.jsx
│   │   ├── InteractiveTerminal.jsx
│   │   ├── InteractiveExercise.jsx
│   │   ├── CodingChallenge.jsx
│   │   ├── OnboardingScreen.jsx
│   │   ├── UserWiki.jsx
│   │   └── WelcomeScreen.jsx
│   ├── resources/
│   │   ├── GitCheatSheet.jsx
│   │   ├── GitDocs.jsx
│   │   ├── GitHubCheatSheet.jsx
│   │   ├── GitHubDocs.jsx
│   │   └── CommandReference.jsx
│   ├── data/
│   │   └── lessons.js
│   ├── utils/
│   │   └── security.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md
│   │   └── feature_request.md
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── deploy.yml
│   └── pull_request_template.md
├── package.json
├── vite.config.js
├── tailwind.config.js
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── deploy.sh
├── push_to_github.sh
└── README.md
```

## 🎯 Learning Objectives

By completing this course, you will:

- Master Git version control fundamentals with hands-on practice
- Understand advanced branching strategies and when to use them
- Learn collaborative development with GitHub and team workflows
- Implement modern AI-assisted development techniques
- Gain practical experience with real-world Git scenarios and challenges
- Build confidence in managing complex Git operations and resolving conflicts
- Access comprehensive reference materials for ongoing learning
- Develop a personalized workflow that matches your development style

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under Apache 2.0 — see the [LICENSE](LICENSE) file for details.

## 💡 Roadmap

### ✅ Completed
- [x] Dark mode with system-preference detection
- [x] Quiz mode with downloadable certificates
- [x] PWA offline support with service worker
- [x] Full-text search across all lessons
- [x] Keyboard navigation shortcuts
- [x] PDF export for cheat sheets
- [x] Interactive Git branch visualizations
- [x] Professionalized repo (CI/Lint/Dependabot/Audit)
- [x] More interactive exercises and coding challenges
- [x] AI-assisted learning features
- [x] Community wiki with resources
- [x] Instagram-like UI with modern design

### 🔜 Planned
- [ ] User authentication and cloud progress saving
- [ ] Mobile app version (React Native)
- [ ] Multi-language support (i18n)
- [ ] GitHub OAuth integration
- [ ] Real-time collaboration features

## 🙏 Acknowledgments

- **Original author: [Wayne Trout](https://github.com/wtrout187)** — created v1.0.0
- **v2.0.0: [Gunnar Mueller](https://github.com/GunnarMUC)** — dark mode, quizzes, PWA, search, keyboard nav, professionalization
- Built with React + Vite
- Icons by [Lucide](https://lucide.dev/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Inspired by the need for practical Git education

## 📞 Support & Feedback

- Open an issue on [GitHub](https://github.com/GunnarMUC/learn_github_app/issues)
- Check our [documentation](https://github.com/GunnarMUC/learn_github_app#readme)

---

**Happy Learning! 🎉**

© 2024 Wayne Trout. © 2026 Gunnar Mueller. Apache 2.0 License.

