# Rotary San Francisco West Website

## Overview
A full-stack website for Rotary San Francisco West, a volunteer service organization in San Francisco. Built with React + Vite frontend and Express backend.

## Architecture

### Content Management (TinaCMS)
Content is managed through markdown files in the `content/` directory, processed at build time by a custom Vite plugin (`vite-plugin-content.ts`) that converts markdown frontmatter to importable JSON modules.

**Content directory structure:**
- `content/activities/` - Activity markdown files (upcoming and past)
- `content/leaders/` - Leadership team member profiles
- `content/pages/` - Static page content (about, contact, join-us)
- `content/home/` - Home page configuration (carousel, quick links)
- `content/settings/` - Site-wide settings (contact info, social links)

**TinaCMS configuration:** `tina/config.ts` defines collection schemas for the admin panel.

### Content Loading
- `client/src/lib/content.ts` - Central content loading module using `import.meta.glob` to load all markdown content at build time
- Activities use slug-based URLs (e.g., `/activity/edgewood-breakfast-march`)
- Content is sorted: upcoming activities by date ascending, past activities by date descending

### Images
- All images stored in `client/public/uploads/`
- Referenced by URL path (e.g., `/uploads/filename.jpg`)
- Stock images in `client/public/uploads/stock_images/`
- Videos in `client/public/videos/`

## Tech Stack
- **Frontend:** React 19, Vite 7, Tailwind CSS 4, shadcn/ui components, wouter (routing)
- **Backend:** Express 4, PostgreSQL (Drizzle ORM)
- **Content:** TinaCMS with markdown files, gray-matter for parsing
- **UI Components:** Radix UI primitives, Lucide icons, Embla carousel

## Key Files
- `vite.config.ts` - Vite configuration with content plugin and aliases
- `vite-plugin-content.ts` - Custom Vite plugin transforming .md to JSON modules
- `client/src/lib/content.ts` - Content loading and type definitions
- `client/src/pages/Home.tsx` - Homepage with carousel, activities, quick links
- `client/src/pages/ActivityDetail.tsx` - Individual activity detail page (slug-based routing)
- `tina/config.ts` - TinaCMS collection schemas

## Design
- Primary blue: `#17458f`
- Accent pink/magenta: `#d41367`
- Category colors: Club `#17458f`, Community `#10b981`, Other Rotary `#f59e0b`, Meeting `#8b5cf6`

## Adding Content
To add a new activity, create a markdown file in `content/activities/` with frontmatter:
```yaml
---
title: "Event Name"
status: "upcoming"  # or "past"
date: 2026-04-15T00:00:00.000Z
time: "9:00 AM - 11:00 AM"
location: "Location Name"
address: "Full address"
category: "community"  # club, community, meeting, other_rotary
image: /uploads/image-name.jpg
description: "Short description"
---

Full description goes here as markdown body.
```
