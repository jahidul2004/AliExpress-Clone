# AliExpress Clone

A modern, responsive single-page application that reproduces the look-and-feel of an e-commerce storefront inspired by AliExpress. Built with React, Vite, Tailwind CSS and a small set of utility libraries to provide fast local development and a clean UI scaffold.

**Status:** Prototype / Frontend-only

**Primary goal:** Provide a polished UI scaffold demonstrating routing, layout components, modals, and common e-commerce sections (top bar, product cards, categories, footer).

**Tech stack**

-   **Framework:** React
-   **Bundler / Dev server:** Vite
-   **Styling:** Tailwind CSS + DaisyUI
-   **Routing:** React Router (v6/7 createBrowserRouter)
-   **Icons:** react-icons
-   **Other UI libs:** `@smastrom/react-rating`

Quick highlights

-   Clean `MainLayout` with `Navbar`, `Footer`, and modal components.
-   Home page composed from small, focused subcomponents such as `TopBar`, `DiscountCard`, `TodaysDeals`, `ShopByCategory`, and more.
-   Uses modern React (client entry in `src/main.jsx`) and file-based component structure.

Getting started

1. Install dependencies

```bash
npm install
```

2. Run development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview a production build locally

```bash
npm run preview
```

Project structure (selected)

-   `src/`
    -   `main.jsx` - app entry (renders `RouterProvider`)
    -   `Router/` - router setup (`router.jsx`, `routes.jsx`)
    -   `layouts/MainLayout.jsx` - top-level layout (Navbar, Outlet, Footer)
    -   `pages/home/` - home page and its subcomponents (TopBar, DiscountCard, etc.)
    -   `components/` - reusable UI components and modals
    -   `shared/` - `Navbar.jsx`, `Footer.jsx`
    -   `assets/` - images and icons

Notes about the codebase

-   The app is frontend-only and currently focuses on UI and routing. There are modal components invoked by DOM ids (e.g. calling `.showModal()` on elements) and Tailwind utility classes used throughout.
-   `package.json` contains the main scripts: `dev`, `build`, `preview`, and `lint`.

Development tips

-   If you change Tailwind configuration, restart the dev server to pick up JIT changes.
-   Use the browser devtools to inspect modal `id`s referenced in components (e.g. `photo_search_modal`, `search_item_modal`, `register_modal`, `app_qr_modal`).

Contributing

-   This repository currently does not declare a contributor workflow. If you'd like to accept contributions, consider adding:
    -   A `CONTRIBUTING.md` with branch, commit message and PR guidelines
    -   A `CODE_OF_CONDUCT.md`
    -   A license (e.g., `MIT`) if you want to permit reuse

License

-   No license specified. Add a `LICENSE` file if you want to grant reuse or redistribution rights.

Contact / Next steps

-   If you want, I can:
    -   Add a `CONTRIBUTING.md` and a suggested `LICENSE` file.
    -   Implement sample product data and a simple product-list page.
    -   Wire a lightweight JSON-based mock API for demonstration.

Enjoy building — if you want, tell me which next step you prefer and I will implement it.
