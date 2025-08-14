# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DjangoCon US 2025 conference website built with Eleventy (11ty) static site generator, using Liquid templating and Tailwind CSS for styling.

## Development Commands

### Setup
```bash
npm install          # Install dependencies (requires Node v20+)
```

### Development
```bash
npm run serve        # Start dev server at localhost:8080 with hot reload
npm run build        # Production build to dist/
npm run css:watch    # Watch CSS changes only
npm run clean        # Clean dist directory
```

## Architecture

### Tech Stack
- **Static Site Generator**: Eleventy 2.x with Liquid templating
- **Styling**: Tailwind CSS with PostCSS
- **Date Handling**: date-fns-tz for timezone-aware formatting (America/Chicago)
- **Content**: Markdown files with YAML frontmatter

### Key Directories
- `src/` - Source files
  - `_content/` - Markdown content (posts, presenters, sponsors, schedule)
  - `_data/` - Global data files (site.json controls conference phase)
  - `_layouts/` - Liquid templates
  - `_includes/` - Reusable components
  - `assets/` - CSS, JS, images
- `dist/` - Build output (gitignored)
- `lib/` - Build utilities (collections, markdown processing)

### Conference Phases (site.json)
- `landing` - Pre-conference landing page only
- `active` - Full site with registration
- `archived` - Post-conference state

### Content Types
- **Posts**: Blog posts in `src/_content/posts/`
- **Presenters**: Speaker profiles in `src/_content/presenters/`
- **Sessions**: Talks/tutorials in `src/_content/schedule/talks/` and `/tutorials/`
- **Sponsors**: Sponsor data in `src/_content/sponsors/`

### Key Patterns
- Social media cards auto-generated at `/presenters/{{ slug }}/` and `/talks/{{ slug }}/social/`
- Date formatting uses `formatDateTime` filter with site timezone
- Draft pages use `draft: true` in frontmatter to prevent building
- Collections configured in `lib/collections.js`
- Session data processing in `lib/sessions.js`

### Testing & Validation
No automated tests configured. Manual testing via local dev server.

## Common Tasks

### Add New Content
- Posts: Create markdown in `src/_content/posts/` with required frontmatter
- Presenters: Add to `src/_content/presenters/` with photo
- Sessions: Add to appropriate schedule subfolder

### Update Site Configuration
- Edit `src/_data/site.json` for dates, links, conference phase
- Theme colors in `tailwind.config.js`

### Deploy
Site deploys via GitHub Pages from main branch builds.