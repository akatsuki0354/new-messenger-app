# Messenger App

## Folder Structure

```
.
├── src/                  # Main source code
│   ├── app/              # Next.js app directory (pages, layouts, templates)
│   ├── assets/           # Project assets (svg, fonts, images)
│   ├── components/       # Reusable React components
│   ├── lib/              # Utility functions and types
│   └── services/         # Service functions (API, data fetching, etc.)
```

```
+ src
+ ├── app
+ │   ├── layouts
+ │   ├── template
+ │   ├── navbar
+ │   ├── login
+ │   ├── @home
+ │   │   └── Chat
+ │   └── [profileId]
+ ├── assets
+ │   ├── svg
+ │   ├── fonts
+ │   └── image
+ ├── components
+ │   └── ui
+ ├── lib
+ └── services
```

## Guide

This is a neutral, best-practice coding guide. While you're not strictly required to follow it, we strongly recommend adhering to it as closely as possible to ensure consistency, scalability, and maintainability across the codebase.

## Code Standards

- Prefer using `type` over `interface` for object shapes unless you need interface-specific features like declaration merging or implements/extends.

```ts
// good
interface Result {}

// better
type Result = {};
```

- Use arrow functions for callbacks and inline functions.

```ts
// good
function handleClick() { ... }

// better
const handleClick = () => { ... };
```

- Use functional components and hooks.

```tsx
// good
class MyComponent extends React.Component {}

// better
function MyComponent() {
  // use hooks here
  return <div>Hello</div>;
}
```
- Prefer `const` and `let` over `var`. Use `const` by default.

```ts
// bad
var count = 1;

// good
const count = 1;
```

- Use destructuring for props and state.

```tsx
// good
function Profile(props) {
  return <div>{props.name}</div>;
}

// better
function Profile({ name }) {
  return <div>{name}</div>;
}
```

- Use single quotes for strings, except to avoid escaping.

```ts
// good
const name = "Alice";

// better
const name = 'Alice';
```

- Organize imports: external libraries first, then internal modules, then styles.

```ts
import React from 'react';
import { Button } from '@/components/ui/button';
import './styles.css';
```

- Avoid using `any`. Use specific types or `unknown` if necessary.

```ts
// bad
let data: any;

// good
let data: unknown;
```

- Use optional chaining and nullish coalescing for safe property access.

```ts
const userName = user?.profile?.name ?? 'Guest';
```
