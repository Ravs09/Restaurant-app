/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
  daisyui: {
    themes: [
      {
        restaurant: {
          "primary": "#E11D48",        // Appetite Stimulating Rich Crimson Red
          "primary-content": "#ffffff",
          "secondary": "#F59E0B",      // Warm Golden Amber / Saffron
          "secondary-content": "#ffffff",
          "accent": "#EA580C",         // Energetic Fiery Spice Orange
          "accent-content": "#ffffff",
          "neutral": "#1E1E24",        // Deep Espresso Slate (for Footer & Luxury feel)
          "neutral-content": "#f3f4f6",
          "base-100": "#ffffff",       // Clean card background
          "base-200": "#FDFBF7",       // Warm appetizing linen background
          "base-300": "#F4EDE4",       // Warm borders & dividers
          "info": "#0284c7",
          "success": "#16a34a",
          "warning": "#eab308",
          "error": "#dc2626",
        },
      },
    ],
  },
}