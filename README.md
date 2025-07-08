# Posts Dashboard – React Take-Home Project

A modern React single-page application demonstrating modular component architecture, API integration, and professional frontend development practices. Built as a take-home assessment to showcase senior-level React skills.

---

## Live Demo

Navigate to `/dashboard` to access the full functionality.

---

## Features

### Core Functionality

* **Posts Management:** Fetch and display posts from the JSONPlaceholder API.
* **Search & Filter:** Real-time search across post titles and content.
* **Pagination:** Adjustable items per page (5, 10, 20, 50).
* **Detail View:** Modal-based post viewer for individual post details.
* **Add Posts:** Form for creating posts with validation.
* **Responsive Design:** Mobile-first, adaptive layout.

### Enhanced Features

* **View Modes:** Switch between grid and compact list views.
* **Optimistic Updates:** Newly added posts appear immediately.
* **Modern UI:** Clean design with subtle animations and interactions.
* **Loading States:** Skeleton loaders and spinners for asynchronous content.
* **Error Handling:** User-friendly error messages and fallback states.

---

## Technology Stack

* **React 19** — Modern functional components and hooks.
* **TypeScript** — Type-safe development.
* **Tailwind CSS** — Utility-first CSS framework.
* **shadcn/ui** — Headless UI components.
* **React Router** — Client-side routing.
* **Vite** — Fast build and development tooling.
* **Lucide React** — Icon library.

---

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── AddPostForm.tsx
│   ├── Pagination.tsx
│   ├── PostCard.tsx
│   ├── PostDetail.tsx
│   ├── PostList.tsx
│   ├── SearchBar.tsx
│   └── ui/             # Atomic UI components (buttons, dialogs, etc.)
├── hooks/              # Custom React hooks
│   └── usePosts.ts
├── pages/              # Application pages
│   ├── Dashboard.tsx
│   ├── index.tsx
│   └── Notfound.tsx
├── types/              # TypeScript types
├── lib/                # Utility functions
├── setupTests.ts       # Test setup
└── main.tsx
```

---

## Design System

* Consistent color palette and typography.
* Responsive design with mobile-first breakpoints.
* Accessible components following best practices.
* Animations and transitions for improved user experience.

---

## Demonstrated Skills

### React & TypeScript

* Modern React patterns: functional components and hooks.
* Custom hooks for business logic separation.
* Reusable, composable components.
* TypeScript for static typing and improved maintainability.

### UI & UX

* Tailwind CSS and shadcn/ui for clean, consistent design.
* Responsive layout supporting various screen sizes.
* Loading states, skeleton screens, and user feedback.

### API Integration

* RESTful API consumption using fetch or React Query.
* Optimistic UI updates on post creation.
* Graceful error handling.

### Testing

* Component-level testing using Vitest and React Testing Library.
* Snapshot and interaction tests to ensure stability.

---

## Setup & Usage

### Prerequisites

* bun

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

### Key Routes

| Route        | Description                       |
| ------------ | --------------------------------- |
| `/`          | Landing Page                      |
| `/dashboard` | Main Dashboard (posts management) |

---

## Architecture Decisions

### State Management

* Local state with React hooks.
* Custom hooks for API interactions.
* Optimistic updates for better UX.

### Routing

* React Router for navigation.
* Route-based component organization.

### Styling

* Tailwind CSS with design tokens.
* Component-scoped styles for maintainability.

### Performance

* Lazy-loaded components.
* Memoization where appropriate.

---

## Microfrontend Readiness

While this is a single-page React app, its architecture supports future microfrontend migration by:

* Keeping components modular and decoupled.
* Isolating state and side effects.
* Using clear prop interfaces for reusability.

> Known Issue: Piral currently lacks compatibility with React 19

---

## Known Limitations

* Posts are fetched from JSONPlaceholder (no real persistence).
* Newly added posts exist only in local state.
* All search and filtering is client-side.

---

## Learning Outcomes

This project demonstrates:

* Scalable React architecture.
* TypeScript integration.
* API consumption with optimistic updates.
* Modular UI design with accessibility.
* Component testing with Vitest.