# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the DjangoCon.us conference website built with Eleventy (11ty), a static site generator. The site uses Liquid templating, Tailwind CSS for styling, and is designed to be reused year-over-year with minimal changes. It supports three conference phases: `landing`, `active`, and `archived`, controlled via `src/_data/site.json`.

## Development Commands

### Installation
- **Install dependencies**: `npm install` (requires Node v20+)

### Development
- **Start dev server**: `npm run serve` or `npm start`
  - Opens at `http://localhost:8080/`
  - Watches for changes with hot reload
  - Runs CSS and 11ty builds concurrently
- **Build for production**: `npm run build`
  - Runs CSS build followed by 11ty build
  - Sets `NODE_ENV=production`
- **Debug mode**: `npm run debug`
  - Runs build with Eleventy debug output

### Utility Commands
- **Clean dist folder**: `npm run clean`
- **Watch CSS only**: `npm run css:watch`
- **Watch 11ty only**: `npm run 11ty:watch`

## Architecture

### Core Build System

**Eleventy Configuration** (`eleventy.config.js`):
- Input: `src/`, Output: `dist/`
- Uses Liquid as the HTML template engine
- Custom shortcodes: `image` (responsive images), `markdown`, `formatDateTime`
- Custom filters: `markdown`, `formatDateTime`, `find`, `talksByPresenter`
- Supports draft pages via `draft: true` in front matter

**Date/Time Handling**:
- All dates use `date-fns-tz` with timezone from `site.json` (default: `America/Chicago`)
- Use the `formatDateTime` filter/shortcode in templates: `{{ date | formatDateTime: "MMMM d, yyyy" }}`
- Never use Eleventy's built-in date formatting

### Collections System (`lib/collections.js`)

The site uses Eleventy collections to organize content:
- **posts**: Blog posts from `src/_content/posts/*.md`, sorted by `published_datetime`
- **presenters**: Speaker profiles, alphabetically sorted by name
- **organizers**: Team members, alphabetically sorted by name
- **places**: Venue-related content
- **guides**: Styleguide sections from `src/_content/styleguide/*.html`, sorted by `order`
- **sponsorsByLevel**: Sponsors organized by tier (Diamond → Community), sorted by date within each level

### Sessions/Schedule System (`lib/sessions.js`)

Complex session management combining markdown files and YAML:

**Collections**:
- **sessionsByDateAndTime**: Aggregates talks, tutorials, and sprints with manual entries from `src/_content/schedule/manual.yaml`
  - Groups sessions by date, then by time slot
  - Handles concurrent tracks (e.g., `t0`, `t1`)
  - Sorted chronologically with track ordering
- **talks**: Individual talk sessions from `src/_content/schedule/talks/*.md`

**Content Structure**:
- Talk/Tutorial markdown files include: `title`, `start_datetime`, `end_datetime`, `room`, `track`, `presenter_slugs`, `category`, `difficulty`
- Manual entries in `manual.yaml` define non-session schedule items (breakfast, breaks, registration, etc.)
- Sessions can be hidden via `hidden: true` in front matter

### Content Organization

```
src/_content/
├── posts/           # Blog posts/news
├── presenters/      # Speaker profiles (with photos)
├── organizers/      # Team member profiles
├── sponsors/        # Sponsor listings with logos
├── places/          # Venue/location info
├── schedule/
│   ├── talks/       # Talk session markdown
│   ├── tutorials/   # Tutorial session markdown
│   ├── sprints/     # Sprint session markdown
│   └── manual.yaml  # Non-session schedule items
└── styleguide/      # Component documentation
```

### Layouts & Templates

**Layouts** (`src/_layouts/`):
- `default.html`: Base layout with header, nav, footer
- `session.html`: Talk/tutorial detail pages with social cards
- `post.html`: Blog post layout
- `social/`: Social media card templates

**Includes** (`src/_includes/`):
- `nav.html`, `header.html`: Site navigation and header
- `session-card.html`: Display session previews
- `presenters-grid.html`, `organizers-grid.html`: People listings
- `sponsor-listing.html`: Sponsor display by tier
- `home/`: Homepage sections based on conference phase

### Conference Phases

Controlled by `"phase"` in `src/_data/site.json`:

- **landing**: Shows minimal landing page with no header/nav. Uses `src/_includes/home/landing-conf-home.html`. Other pages compile but aren't linked.
- **active**: Full site with header, nav, registration, schedule, etc. Uses `src/_includes/home/active-conf-home.html`.
- **archived**: Post-conference state with recordings/photos. Uses `src/_includes/home/archived-conf-home.html`.

**Phase-based display logic:**
- Header/navigation: Only shown when `site.phase != "landing"` (controlled in `src/_layouts/default.html`)
- City skyline footer graphic: Only shown when `site.phase != "landing"`
- Homepage content: Switches between three includes based on phase (controlled in `src/index.html`)

The `{% block nav %}{% endblock %}` in `index.html` prevents duplicate nav display on homepage.

## Content Management

### Adding/Editing Content

**Talks/Tutorials**:
1. Create markdown in `src/_content/schedule/talks/` or `tutorials/`
2. Filename format: `YYYY-MM-DD-HH-MM-tX-slug.md` (where `tX` = track)
3. Required frontmatter: `title`, `start_datetime`, `end_datetime`, `room`, `track`, `presenter_slugs`, `category`, `difficulty`
4. Set `hidden: true` to exclude from public display

**Presenters**:
1. Add markdown to `src/_content/presenters/slug.md`
2. Add photo to same directory: `slug.jpeg` (or .png)
3. Required frontmatter: `name`, `photo`, `permalink`, social links
4. Reference in talks via `presenter_slugs: [slug]`

**Manual Schedule Items**:
- Edit `src/_content/schedule/manual.yaml` for breaks, meals, registration, etc.
- Fields: `title`, `start_datetime`, `end_datetime`, `room`, `track`

### Social Media Images

Auto-generated at build time:
- Presenter images: `/presenters/{{ slug }}/`
- Session images: `/talks/{{ slug }}/social/` or `/tutorials/{{ slug }}/social/`
- Graphics source: `src/assets/img/theme/social-cards`
- Template: `default-social.html`

## Theming & Customization

Look for `THEME-X` comments throughout codebase for customization points.

**Primary customization files**:
- `src/assets/css/main.css`: CSS custom properties in `:root`
- `tailwind.config.js`: Color palette, fonts
- `src/assets/img/theme/`: Graphics and social cards
- `src/assets/favicons/`: Site icons
- `src/_layouts/default.html`, `default-social.html`: Font references

**Brand colors** (Tailwind config): teal (primary), cyan, green, orange, pink, gold, cream

**Design principles**:
- Keep sizing, padding, spacing, typography consistent
- Focus theme changes on colors, fonts, photo treatments
- Remove unused assets from previous years

## Setting Up a New Year

1. Copy previous year's repo (e.g., `durham.djangocon.us`)
2. Update `src/_data/site.json`: `conf_year`, `domain`, email addresses, external links
3. Update `CNAME` with new domain (e.g., `2026.djangocon.us`)
4. Update `CODE_OF_CONDUCT.md` year
5. Update landing page content: `src/_includes/home/landing-conf-home.html`
6. Set `"phase": "landing"` in `site.json` until ready to launch full site
7. Deploy via GitHub Pages

## Important Notes

- Liquid syntax highlighting recommended: [VS Code extension](https://marketplace.visualstudio.com/items?itemName=neilding.language-liquid)
- Images below fold should include `loading="lazy"`
- Always add `alt` attributes to images
- Draft pages: Add `draft: true` to front matter to exclude from build
- Excerpt separator: `<!-- excerpt -->` in markdown files
