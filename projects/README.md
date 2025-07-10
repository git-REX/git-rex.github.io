# Electrical Engineering Portfolio - Projects

A modern, responsive portfolio website showcasing electrical engineering projects.

## 🚀 Quick Start for GitHub Pages

1. **Fork/Clone this repository**
2. **Enable GitHub Pages** in repository settings
3. **Set source to "GitHub Actions"**
4. **Push to main branch** - the site will auto-deploy!

## 📁 Project Structure

\`\`\`
├── app/
│   ├── projects/
│   │   ├── page.tsx          # Main projects listing
│   │   ├── [id]/
│   │   │   └── page.tsx      # Individual project pages
│   │   └── layout.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/ui/             # Shadcn components
├── .github/workflows/
│   └── deploy.yml            # Auto-deployment
└── next.config.mjs           # GitHub Pages config
\`\`\`

## 🛠️ Customization

1. **Add your projects**: Edit the `projects` array in `app/projects/page.tsx`
2. **Add project details**: Update `projectsData` in `app/projects/[id]/page.tsx`
3. **Replace images**: Add your images to `public/` folder
4. **Customize styling**: Modify Tailwind classes as needed

## 📸 Adding Your Images

1. Add images to `public/images/` folder
2. Update image paths in the projects data
3. Use format: `/images/your-image.jpg`

## 🔧 Local Development

\`\`\`bash
npm install
npm run dev
\`\`\`

Visit `http://localhost:3000/projects`

## 📦 Manual Deployment

\`\`\`bash
npm run build
# Upload the 'out' folder to your web server
\`\`\`

## 🌐 GitHub Pages Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to main branch
4. Your site will be available at `https://yourusername.github.io/repository-name`
