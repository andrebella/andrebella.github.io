# Deployment Guide

This guide will help you deploy Andre Bella's personal website to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js (version 18 or higher)

## Quick Deployment

### 1. Initialize Git Repository (if not already done)

```bash
git init
git add .
git commit -m "Initial commit: Andre Bella personal website"
```

### 2. Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `andrebella.github.io`
4. Make it public
5. Don't initialize with README (we already have one)

### 3. Push to GitHub

```bash
git remote add origin https://github.com/andrebella/andrebella.github.io.git
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch
6. Click "Save"

Your website will be available at `https://andrebella.github.io` within a few minutes.

## Development Workflow

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Making Updates

```bash
# Make your changes
# Then commit and push
git add .
git commit -m "Update website content"
git push
```

## Custom Domain (Optional)

If you want to use a custom domain:

1. Purchase a domain (e.g., `andrebella.com`)
2. In your GitHub repository settings:
   - Go to "Pages" section
   - Add your custom domain
   - Check "Enforce HTTPS"
3. Update your DNS settings with your domain provider:
   - Add a CNAME record pointing to `andrebella.github.io`
   - Or add A records pointing to GitHub's IP addresses

## Performance Optimization

The website is already optimized for:
- ✅ Fast loading times
- ✅ Mobile responsiveness
- ✅ SEO best practices
- ✅ Accessibility standards
- ✅ Modern animations

## Troubleshooting

### Common Issues

1. **Website not loading**: Check if GitHub Pages is enabled in repository settings
2. **Images not showing**: Ensure all image files are committed to the repository
3. **Styling issues**: Clear browser cache or try incognito mode
4. **Build errors**: Run `npm install` and try building again

### Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Verify all files are properly committed
3. Check the repository settings

## Maintenance

### Regular Updates

- Keep dependencies updated: `npm update`
- Test locally before pushing: `npm run build`
- Monitor website performance using Google PageSpeed Insights

### Content Updates

The website is designed to be easily customizable:
- Update content in `index.html`
- Modify styles in `style.css`
- Add new features in `script.js`

---

**Built with ❤️ and a commitment to truth-telling** 