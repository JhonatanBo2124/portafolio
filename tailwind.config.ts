import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  'darkMode': 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        appear: {
          '0%': { clipPath: 'polygon(0 100%, 0 100%, 0 100%, 0 100%, 0 100%)'},
          '25%': { clipPath: 'polygon(0 50%, 50% 100%, 50% 100%, 0 100%, 0 50%)'},
          '50%': { clipPath: 'polygon(0 0, 100% 100%, 100% 100%, 0 100%, 0 0)'},
          '75%': { clipPath: 'polygon(50% 0, 100% 50%, 100% 100%, 0 100%, 0 0)'},
          '100%': { clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 0 100%, 0 0)'},
        },
        rebound: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-16px)'},
        },
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },

      },
      animation: {
        appear: 'appear 1 2s 5s forwards',
        rebound: 'rebound alternate 2 .5s infinite',
        'loop-scroll': 'loop-scroll 50s linear infinite',
      }
    },
    fontFamily: {
      display: ['Oswald', 'Poppins']
    },
    clipPath: {
      myPoligon: 'polygon(0 0, 45% 0, 100% 100%, 0% 100%);'
    }
  },
  plugins: [nextui(), require('tailwind-clip-path')],
}
export default config
