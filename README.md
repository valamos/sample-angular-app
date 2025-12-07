# Sample Angular App

This is a minimal Angular application that demonstrates client-side routing for four core pages: Home, About, Events, and Contact. It uses standalone components and Angular's router to keep the setup lightweight.

## Getting started

1. Install dependencies (internet access to npm is required):
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm start
   ```
   Then open `http://localhost:4200/` to view the site.
3. Build for production:
   ```bash
   npm run build
   ```

## Project structure
- `src/app/pages` contains the standalone page components.
- `src/app/app.routes.ts` defines the navigation paths for each page.
- `src/app/app.component.ts` hosts the navigation bar and router outlet.

Feel free to customize the content, styling, and routes to suit your needs.
