import { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx,mdx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7fafc',
          100: '#f0f4f8',
          900: '#0f1724'
        }
      },
      fontFamily: {
        display: ['Inter', 'San Francisco', 'system-ui', 'ui-sans-serif']
      }
    }
  },
  plugins: []
}

export default config
