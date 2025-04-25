# Better Link

<div align="center">
  <img src="https://img.shields.io/npm/v/better-link?style=flat-square" alt="npm version" />
  <img src="https://img.shields.io/npm/dm/better-link?style=flat-square" alt="npm downloads" />
  <img src="https://img.shields.io/github/license/Pallepadehat/better-link?style=flat-square" alt="license" />
</div>

<br />

<div align="center"><strong>Enhanced navigation for Next.js applications</strong></div>
<div align="center">A lightweight, fully typed solution for active link detection in Next.js</div>

<br />

<div align="center">
  <a href="https://nextjs.org">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_dark_background.png">
      <img alt="Next.js logo" src="https://assets.vercel.com/image/upload/v1662130559/nextjs/Icon_light_background.png" width="20" height="20">
    </picture>
  </a>
  <img src="https://bun.sh/logo.svg" alt="Bun" width="20" height="20" />
  <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" alt="TypeScript" width="20" height="20" />
</div>

<div align="center">
  <sub>Built with ❤️ for the Next.js community</sub>
</div>

<br />

## ✨ Features

- **Active State Detection** - Automatically determines if a link is active based on the current URL
- **Multiple APIs** - Choose between different patterns based on your preferences
- **Fully Typed** - Complete TypeScript support with proper typing
- **Zero Dependencies** - Only peer dependencies on Next.js and React
- **Small Footprint** - Lightweight implementation with minimal overhead
- **Flexible Patterns** - Support for both class-based and render props patterns

## 📦 Installation

```bash
# Using npm
npm install better-link

# Using yarn
yarn add better-link

# Using pnpm
pnpm add better-link

# Using bun
bun add better-link
```

## 🚀 Quick Start

```jsx
import { NavLink } from "better-link";

function Navigation() {
  return (
    <nav>
      <NavLink href="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink href="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}
```

## 📚 Usage

### Important: Client Components

Since `better-link` uses the `usePathname` hook from Next.js, make sure to use it in client components:

```jsx
// navigation.tsx
"use client"; // Add this directive

import { NavLink } from "better-link";

export function Navigation() {
  return (
    <nav>
      <NavLink href="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink href="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}
```

Then import your Navigation component in your layout:

```jsx
// layout.tsx
import { Navigation } from "./navigation";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
```

### Basic NavLink

The `NavLink` component extends Next.js's Link component with active state detection:

```tsx
import { NavLink } from "better-link";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <NavLink
        href="/"
        exact
        className="text-gray-500"
        activeClassName="font-bold text-blue-600"
      >
        Home
      </NavLink>

      <NavLink
        href="/about"
        className="text-gray-500"
        activeClassName="font-bold text-blue-600"
      >
        About
      </NavLink>
    </nav>
  );
}
```

### Render Props Pattern

For more flexibility, use `renderChildren` to customize your link based on its active state:

```tsx
import { NavLink } from "better-link";

export default function Navigation() {
  return (
    <nav className="flex gap-4">
      <NavLink
        href="/dashboard"
        renderChildren={(isActive) => (
          <div className="flex items-center gap-2">
            <span
              className={isActive ? "text-blue-600 font-bold" : "text-gray-500"}
            >
              Dashboard
            </span>
            {isActive && (
              <span className="px-2 py-1 bg-blue-100 text-xs rounded-full">
                Active
              </span>
            )}
          </div>
        )}
      >
        Dashboard
      </NavLink>
    </nav>
  );
}
```

### Advanced Pattern

For even more control, use the `AdvancedNavLink` component with the render props pattern:

```tsx
import { AdvancedNavLink } from "better-link";

export default function Navigation() {
  const menuItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "dashboard", label: "Dashboard", href: "/dashboard" },
    { id: "settings", label: "Settings", href: "/settings" },
  ];

  return (
    <nav className="flex flex-col gap-2">
      {menuItems.map((item) => (
        <AdvancedNavLink to={item.href} key={item.id}>
          {({ isActive }) => (
            <div
              className={`
                p-3 rounded-lg transition-all
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                    : "bg-white text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              {item.label}
              {isActive && <span className="ml-2">•</span>}
            </div>
          )}
        </AdvancedNavLink>
      ))}
    </nav>
  );
}
```

## 🔧 API Reference

### NavLink

`NavLink` extends Next.js's `Link` component with active state functionality.

#### Props

| Prop              | Type                                     | Default  | Description                                                         |
| ----------------- | ---------------------------------------- | -------- | ------------------------------------------------------------------- |
| `href`            | `string`                                 | Required | URL to navigate to                                                  |
| `children`        | `React.ReactNode`                        | Required | Link content                                                        |
| `className`       | `string`                                 | `''`     | Base class name for the link                                        |
| `activeClassName` | `string`                                 | `''`     | Class name to apply when the link is active                         |
| `exact`           | `boolean`                                | `false`  | If true, the link will only be active when the path matches exactly |
| `renderChildren`  | `(isActive: boolean) => React.ReactNode` | -        | Function to render children with isActive state                     |

All other props from Next.js's `Link` component are also supported.

### AdvancedNavLink

`AdvancedNavLink` provides a more flexible API using render props pattern.

#### Props

| Prop       | Type                                                                     | Default  | Description                                |
| ---------- | ------------------------------------------------------------------------ | -------- | ------------------------------------------ |
| `to`       | `string`                                                                 | Required | URL to navigate to                         |
| `key`      | `string \| number`                                                       | -        | Optional key for the link                  |
| `children` | `React.ReactNode \| ((props: { isActive: boolean }) => React.ReactNode)` | Required | Either static content or a render function |

All other props from Next.js's `Link` component are also supported.

## 🔍 How It Works

`better-link` uses Next.js's `usePathname` hook to determine if a link is active. It compares the current pathname with the link's `href` or `to` property:

```typescript
// For exact matching
const isActive = pathname === href;

// For partial matching (default)
const isActive = pathname.startsWith(href);
```

## 🧰 Use Cases

- **Navigation Menus** - Highlight the current section in your app
- **Breadcrumbs** - Show the active path in breadcrumb navigation
- **Tab Interfaces** - Build tab interfaces with active indicators
- **Sidebar Navigation** - Create sidebar menus with active states
- **Pagination** - Highlight the current page in pagination controls

## 🤝 Contributing

Contributions are always welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a pull request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📌 Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Bun](https://bun.sh/)

## ❓ Troubleshooting

### "Invalid Hook Call" Error

If you encounter an error like this:

```
Invalid hook call. Hooks can only be called inside of the body of a function component.
```

Make sure your component is:

1. Marked with the `"use client"` directive at the top of the file
2. Used within a client component, not directly in a server component

Example of correct usage:

```tsx
// navigation.tsx (client component)
"use client";

import { NavLink } from "better-link";

export function Navigation() {
  return (
    <nav>
      <NavLink href="/" exact activeClassName="active">
        Home
      </NavLink>
      <NavLink href="/about" activeClassName="active">
        About
      </NavLink>
    </nav>
  );
}

// layout.tsx (server component)
import { Navigation } from "./navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
```

## 🌱 Upcoming Features

- [ ] Support for pattern matching URLs
- [ ] Active state based on query parameters
- [ ] Animation helpers for transitions
- [ ] Additional accessibility improvements
