/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          'text-primary': 'var(--text-primary)',
          'text-secondary': 'var(--text-secondary)',
          accent: 'var(--accent-color)',
          'accent-hover': 'var(--accent-hover)',
          border: 'var(--border-color)',
        },
        boxShadow: {
          card: 'var(--card-shadow)',
        },
      },
    },
    plugins: [],
  }