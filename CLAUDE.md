# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Docusaurus 2 documentation site for XAPP AI's Optimal Conversation Studio. The site uses Yarn 4 with PnP (Plug'n'Play) for package management.

## Common Commands

### Development
- `yarn start` - Start development server on port 3009
- `yarn build` - Build static site for production
- `yarn serve` - Serve the built site locally

### Deployment
- `yarn deploy` - Deploy to GitHub Pages (requires GIT_USER environment variable)

## Architecture Overview

### Documentation Structure
The site maintains two separate documentation sections:
- **Help Documentation** (`/help/*`): User-facing guides and FAQs
  - Configured in `sidebars-help.js`
  - Content located in `help/` directory
- **Advanced Documentation** (`/docs/*`): Technical documentation
  - Configured in `sidebars-adv.js`
  - Content located in `docs/` directory

### Key Configuration Files
- `docusaurus.config.js` - Main Docusaurus configuration with multi-docs setup
- `sidebars-help.js` - Sidebar configuration for help documentation
- `sidebars-adv.js` - Sidebar configuration for advanced documentation

### Custom Plugins
The project includes custom plugins in the `plugins/` directory:
- `inject-widget` - Integrates XAPP AI chat widget
- `inject-search` - Integrates XAPP AI intelligent search widget
- `faqs` - FAQs functionality

### Widget Integration
The site integrates XAPP AI widgets:
- Chat widget (`@xapp/chat-widget`)
- Search widget (`@xapp/intelligent-search-widget`)
- Widget components (`@xapp/chat-widget-components`)

### Custom Theme Components
Custom React components and theme overrides are located in:
- `src/components/` - Custom React components
- `src/theme/` - Theme overrides for Docusaurus components
- `src/pages/` - Custom pages
- `src/css/custom.css` - Custom styles

## Package Management
This project uses Yarn 4 with the `node-modules` linker (configured in `.yarnrc.yml`). When adding dependencies, use `yarn add` rather than npm.

### Important Configuration
- The project uses `nodeLinker: node-modules` instead of PnP to avoid buffer compatibility issues with packages like `image-size`
- The project requires both `@docusaurus/plugin-content-docs` and `@mdx-js/react` as explicit dependencies
- Module paths in `docusaurus.config.js` must use `require.resolve()` without hardcoded `node_modules` paths