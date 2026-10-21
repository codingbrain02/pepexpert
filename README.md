# Project Specification: Nordax Labs Website Redesign & Frontend Clone

## 🎯 Overview
This repository contains the architecture, crawler targets, design guidelines, and implementation rules for cloning and modernizing **Nordax Labs** (an e-commerce platform specializing in research compounds, peptides, anti-aging, nootropics, and health supplements).

The goal for the AI Agent (Codex/ChatGPT) is to build a sleek, high-performing, accessible, and modern front-end using **Tailwind CSS**, modern JavaScript/React/Vue or HTML/CSS, and structured components.

---

## 🔗 Target URLs to Crawl & Replicate

### 1. Core Pages
- **Homepage:** `https://nordaxlabs.com/`
- **About Us:** `https://nordaxlabs.com/about-us/`
- **Contact Us:** `https://nordaxlabs.com/contact-us/`
- **Account Dashboard:** `https://nordaxlabs.com/my-account/`
- **Cart & Checkout:** `https://nordaxlabs.com/cart/`

### 2. Main Shop & Catalog
- **Shop Main:** `https://nordaxlabs.com/shop/`
- **Pagination Pages:**
  - `https://nordaxlabs.com/shop/page/2/`
  - `https://nordaxlabs.com/shop/page/3/`
  - `https://nordaxlabs.com/shop/page/4/`
  - `https://nordaxlabs.com/shop/page/5/`
  - `https://nordaxlabs.com/shop/page/6/`
  - `https://nordaxlabs.com/shop/page/7/`

### 3. Product Categories
- **Growth Hormone Boosters:** 
  - `https://nordaxlabs.com/product-category/growth-hormone-boosters/`
  - `https://nordaxlabs.com/product-category/growth-hormone-boosters/page/2/`
- **Fat Loss & Diabetes:** 
  - `https://nordaxlabs.com/product-category/fat-loss-diabetes/`
  - `https://nordaxlabs.com/product-category/fat-loss-diabetes/page/2/`
- **Recovery & Healing:** `https://nordaxlabs.com/product-category/recovery-healing/`
- **Anti-Aging & Cellular Health:** `https://nordaxlabs.com/product-category/anti-aging-cellular-health/`
- **Nootropics & Cognitive Enhancers:** `https://nordaxlabs.com/product-category/nootropics-cognitive-enhancers/`
- **Libido & Sexual Health:** `https://nordaxlabs.com/product-category/libido-sexual-health/`
- **Sleep & Recovery:** `https://nordaxlabs.com/product-category/sleep-recovery/`

---

## 🎨 UI & Design Modernization (Tailwind CSS Guidelines)

The target redesign should elevate Nordax Labs into a sleek, **clinical yet modern biotech / wellness brand**.

### Brand Color Palette
- **Primary / Slate Dark:** `#0F172A` (`bg-slate-900`, `text-slate-900`)
- **Accent / Cyan-Teal (Lab Clean):** `#0EA5E9` (`bg-sky-500`, `hover:bg-sky-600`, `text-sky-500`)
- **Background:** `#F8FAFC` (`bg-slate-50`)
- **Card Background:** `#FFFFFF` (`bg-white`)
- **Text Primary:** `#1E293B` (`text-slate-800`)
- **Text Secondary:** `#64748B` (`text-slate-500`)
- **Success / In-Stock:** `#10B981` (`emerald-500`)

### Key Design Enhancements
1. **Header & Navigation:**
   - Sticky blur navbar (`backdrop-blur-md bg-white/80 border-b border-slate-100`).
   - Top banner for lab purity guarantee & free shipping announcements.
   - Clean search bar with auto-suggestions.
   - Micro-badges for active cart count.

2. **Product Grid & Cards:**
   - Soft border cards (`border border-slate-200/80 rounded-2xl p-4 transition-all hover:shadow-lg hover:-translate-y-1`).
   - Purity / Batch Test Badges (e.g., "99.8% Purity Tested").
   - Sleek quick-add to cart button with instant UI state update.

3. **Product Detail Pages (PDP):**
   - Clean 2-column layout (Left: Image gallery + Certificates of Analysis, Right: Pricing, dosages, quantity selector, add to cart).
   - Accordion tabs for **Description**, **HPLC Test Results**, **Storage Instructions**, and **Shipping Rules**.

4. **Cart & Checkout Experience:**
   - Slide-over mini cart widget.
   - Modern multi-step or single-page streamlined checkout with order breakdown cards.

---

## 🧠 Instructions for AI Agent / Codex / ChatGPT

When reading this repository to build, modify, or extend code, follow these instructions:

```yaml
AI_RULES:
  1. Component Structure:
     - Keep components modular (Navbar, AnnouncementBar, ProductCard, CategoryFilter, ProductGrid, Footer, CartDrawer).
  2. Styling Rules:
     - Use utility-first Tailwind CSS classes.
     - Avoid custom raw CSS where standard Tailwind utilities exist.
     - Ensure full mobile responsiveness (sm:, md:, lg:, xl: breakpoints).
  3. Data Model & Crawl Rules:
     - Extract product title, price, SKU, category, image URL, stock status, and short summary from target links.
     - Normalize URLs to local mock assets or relative paths.
  4. Accessibility & UX:
     - Include ARIA attributes for dropdowns, mobile menus, and modals.
     - Use fast loading skeleton placeholders for images and product listings.