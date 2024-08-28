## TECHNOLOGY USED
- ASTRO
- REACT
- TAILWIND

Astro: Best for Simple Static Websites
1. Static Site Generation (SSG): Astro is particularly well-suited for static site generation. It excels at producing highly optimized static HTML with minimal JavaScript, which is ideal for content-focused websites.
2. Component-Based Architecture: Astro supports a component-based approach, allowing you to use React (or other frameworks) for building interactive components while still benefiting from static site generation.
3. Zero JavaScript Overhead: By default, Astro generates static HTML with minimal JavaScript. However, it allows you to include minimal JavaScript for interactive elements like modals or click events when using React, ensuring that your site remains lightweight while providing necessary interactivity.
4. Tailwind Integration: Astro integrates seamlessly with Tailwind CSS, allowing you to use Tailwind’s utility-first design system effectively for styling your site. Tailwind’s class-based structure fits well with Astro’s component-based approach, providing a streamlined design process.

## Summary
For a simple static website with React (Query) and Tailwind, Astro is the best choice due to its efficient static site generation, minimal JavaScript overhead, and excellent integration with Tailwind CSS. Vite is ideal for dynamic development scenarios, while Remix is best suited for applications that require extensive server-side rendering and dynamic content handling.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
