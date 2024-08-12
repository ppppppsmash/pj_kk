import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx,js,jsx}',
    './components/**/*.{ts,tsx,js,jsx}',
    './app/**/*.{ts,tsx,js,jsx}',
    './src/**/*.{ts,tsx,js,jsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        normsEn: ['TTNorms']
      },
      colors: {
        kubo: "#00B9E5",
        gray: "#F2F2F2",
        scroll: "#333333",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "scroll-indicator": {
          "0%": {
            transform: "translate3d(-1px, 0, 0)",
            opacity: "0"
          },
          "20%": {
            transform: "translate3d(-1px, 0, 0)",
            opacity: "1"
          },
          "100%": {
            transform: "translate3d(-1px, 8px, 0)",
            opacity: "0"
          }
        },
        "color-change": {
          "0%": {
              background: "#19dcea"
          },
          to: {
              background: "#b22cff"
          }
        },
        "slide-in-left": {
          "0%": {
              transform: "translateX(-200px)",
              opacity: "0"
          },
          to: {
              transform: "translateX(0)",
              opacity: "1"
          }
        },
        "scale-up-center": {
          "0%": {
              transform: "scale(.5)"
          },
          to: {
              transform: "scale(1)"
          }
        },
        "fade-in-bottom": {
          "0%": {
              transform: "translateY(50px)",
              opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
        },
        "endless": {
          "0%": {
            transform: "translateX(100%)"
          },
          "100%": {
              transform: "translateX(-100%)"
          }
        },
        "endless_2": {
          "0%": {
            transform: "translateX(0%)"
          },
          "100%": {
              transform: "translateX(-200%)"
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scroll-indicator": "scroll-indicator 2s ease infinite",
        "color-change": "color-change 4s linear  infinite alternate both",
        "slide-in-left": "slide-in-left 1.1s cubic-bezier(0.250, 0.460, 0.450, 0.940)   both",
        "scale-up-center": "scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "fade-in-bottom": "fade-in-bottom 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both",
        "endless": "endless 30s -15s linear infinite forwards",
        "endless_2": "endless_2 30s linear infinite forwards",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
          }
        }
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} satisfies Config

export default config