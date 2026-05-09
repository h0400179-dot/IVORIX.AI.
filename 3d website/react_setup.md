# React + Shadcn + Tailwind Setup Guide

To use the React components provided (`LogoCloud`, `InfiniteSlider`), follow these steps to migrate your project.

## 1. Initialize Vite Project
Run this in your terminal to create a new React + TypeScript project:
```bash
npm create vite@latest ./ -- --template react-ts
npm install
```

## 2. Install Tailwind CSS
Follow the official Vite guide:
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
Configure `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add to your `index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 3. Initialize Shadcn UI
Run the CLI to set up shadcn:
```bash
npx shadcn-ui@latest init
```

## 4. Install Component Dependencies
The `InfiniteSlider` component requires these packages:
```bash
npm install framer-motion react-use-measure lucide-react clsx tailwind-merge
```

## 5. Add Utility File
Ensure you have `src/lib/utils.ts` (created by shadcn):
```ts
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## 6. Place Components
Move the provided `.tsx` files into your project:
- `components/ui/infinite-slider.tsx`
- `components/ui/logo-cloud-3.tsx`

Now you can import and use them in your `App.tsx`!
