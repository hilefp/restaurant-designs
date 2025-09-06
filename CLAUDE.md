# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based project for restaurant templates using Tailwind CSS. The project follows standard Astro conventions with TypeScript strict mode enabled.

## Development Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## Architecture

- **Framework**: Astro 5.13.5 with TypeScript (strict mode)
- **Styling**: Tailwind CSS 4.1.13 with Vite plugin integration
- **Structure**: Standard Astro project layout
  - `src/pages/` - Route-based pages (.astro files)
  - `src/layouts/` - Shared layout components
  - `src/components/` - Reusable Astro components
  - `src/assets/` - Static assets
  - `src/styles/` - Custom styles (newly added)

## Configuration

- **Astro Config**: Uses Tailwind CSS via Vite plugin (`astro.config.mjs`)
- **TypeScript**: Extends astro/tsconfigs/strict (`tsconfig.json`)
- **Build Output**: `./dist/` directory

## Key Files

- `astro.config.mjs` - Astro configuration with Tailwind integration
- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration extending Astro strict preset