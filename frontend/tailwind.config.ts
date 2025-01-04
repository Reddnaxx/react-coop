import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      keyframes: {
        rollout200: {
          '0%': { transform: 'translateY(-10%)', 'max-height': '0' },
          '100%': { transform: 'translateY(0)', 'max-height': '200px' },
        },
      },
      animation: {
        rollout200: 'rollout200 .5s ease-out',
      },
      fontFamily: {
        'roboto-condensed': [
          'Roboto Condensed',
          'Roboto',
          'Roboto Fallback',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
