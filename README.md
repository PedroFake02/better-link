# Better Link

Enhanced Next.js Link component with isActive functionality.

## Features

- ✅ Extends Next.js Link component
- ✅ Provides `isActive` state
- ✅ Support for active class names
- ✅ Support for exact and partial path matching
- ✅ Flexible render props API
- ✅ Fully typed with TypeScript

## Installation

```bash
# npm
npm install better-link

# yarn
yarn add better-link

# pnpm
pnpm add better-link

# bun
bun add better-link
```

## Usage

### Basic NavLink

```tsx
import { NavLink } from "better-link";

export default function Navigation() {
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

### With Render Props

```tsx
import { NavLink } from "better-link";

export default function Navigation() {
  return (
    <nav>
      <NavLink
        href="/dashboard"
        renderChildren={(isActive) => (
          <span
            className={isActive ? "text-blue-500 font-bold" : "text-gray-500"}
          >
            Dashboard
          </span>
        )}
      />
    </nav>
  );
}
```

### Advanced NavLink Pattern

```tsx
import { AdvancedNavLink } from "better-link";

export default function Navigation() {
  return (
    <nav>
      <AdvancedNavLink to="/profile" key="profile">
        {({ isActive }) => (
          <div className={isActive ? "bg-blue-100 p-2" : "p-2"}>Profile</div>
        )}
      </AdvancedNavLink>
    </nav>
  );
}
```

## API

### NavLink

Extends Next.js `Link` component with additional props:

| Prop              | Type                               | Description                                                         |
| ----------------- | ---------------------------------- | ------------------------------------------------------------------- |
| `href`            | `string`                           | URL to navigate to                                                  |
| `className`       | `string`                           | Base class name for the link                                        |
| `activeClassName` | `string`                           | Class name to apply when the link is active                         |
| `exact`           | `boolean`                          | If true, the link will only be active when the path matches exactly |
| `renderChildren`  | `(isActive: boolean) => ReactNode` | Function to render children with isActive state                     |

### AdvancedNavLink

Follows the pattern shown in your example:

| Prop       | Type                                                         | Description                     |
| ---------- | ------------------------------------------------------------ | ------------------------------- |
| `to`       | `string`                                                     | URL to navigate to              |
| `key`      | `string \| number`                                           | Optional key for the link       |
| `children` | `ReactNode \| ((props: { isActive: boolean }) => ReactNode)` | Content or render prop function |

## Requirements

- Next.js 13 or later
- React 18 or later

## License

MIT
