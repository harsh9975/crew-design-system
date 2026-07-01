/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./stories/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx,js,jsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontWeight: {
        regular: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
      },
      fontSize: {
        "25": ["var(--font-size-25)", { lineHeight: "var(--line-height-25)" }],
        "50": ["var(--font-size-50)", { lineHeight: "var(--line-height-50)" }],
        "75": ["var(--font-size-75)", { lineHeight: "var(--line-height-75)" }],
        "100": ["var(--font-size-100)", { lineHeight: "var(--line-height-100)" }],
        "200": ["var(--font-size-200)", { lineHeight: "var(--line-height-200)" }],
        "300": ["var(--font-size-300)", { lineHeight: "var(--line-height-300)" }],
        "400": ["var(--font-size-400)", { lineHeight: "var(--line-height-400)" }],
        "500": ["var(--font-size-500)", { lineHeight: "var(--line-height-500)" }],
        "600": ["var(--font-size-600)", { lineHeight: "var(--line-height-600)" }],
        "700": ["var(--font-size-700)", { lineHeight: "var(--line-height-700)" }],
        "800": ["var(--font-size-800)", { lineHeight: "var(--line-height-800)" }],
        "900": ["var(--font-size-900)", { lineHeight: "var(--line-height-900)" }],
        "1000": ["var(--font-size-1000)", { lineHeight: "var(--line-height-1000)" }],
        "1100": ["var(--font-size-1100)", { lineHeight: "var(--line-height-1100)" }],
      },
      borderRadius: {
        none: "var(--border-radius-none)",
        "2xsmall": "var(--border-radius-2xsmall)",
        xsmall: "var(--border-radius-xsmall)",
        small: "var(--border-radius-small)",
        medium: "var(--border-radius-medium)",
        large: "var(--border-radius-large)",
        xlarge: "var(--border-radius-xlarge)",
        "2xlarge": "var(--border-radius-2xlarge)",
        max: "var(--border-radius-max)",
        round: "var(--border-radius-round)",
      },
      borderWidth: {
        thinner: "var(--border-width-thinner)",
        thin: "var(--border-width-thin)",
        thick: "var(--border-width-thick)",
        thicker: "var(--border-width-thicker)",
      },
    },
  },
  plugins: [],
}
