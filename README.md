# Harsh Dubey - Portfolio Website

A modern portfolio website built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- Responsive design for all devices
- Dark mode support
- Smooth animations with Framer Motion
- Project showcase with details and links
- Skills section with icons
- Contact form
- Social media links

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- React Icons

## Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Vercel will auto-detect Next.js and configure everything
6. Click "Deploy"

### Option 2: Render

This project is configured for easy deployment on Render:

1. Push your code to GitHub
2. Create a new Web Service on [Render](https://render.com)
3. Connect your GitHub repository
4. Use the following settings:
   - Build Command: `./build.sh`
   - Start Command: `npm start`
   - Environment: Node.js (18+)
5. Add environment variables if needed
6. Click "Create Web Service"

### Option 3: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" > "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Environment Variables

No environment variables are required for basic functionality. The site will work out of the box.

## Configuration

- Update personal information in components (Hero, Contact, About)
- Add/modify projects in `src/data/projects.ts`
- Update images in `public/images/`
- Customize colors in `tailwind.config.js`

## License

MIT

Render will automatically deploy your application and provide a URL to access it.

## License

MIT
