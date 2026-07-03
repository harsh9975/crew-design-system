/** @type {import('tailwindcss').Config} */

const alertIntents = ["information", "negative", "notice", "positive", "neutral", "primary"]

const alertColors = Object.fromEntries(
  alertIntents.map((intent) => [
    intent,
    {
      subtle: {
        bg: `var(--alert-${intent}-subtle-bg)`,
        fg: `var(--alert-${intent}-subtle-fg)`,
        description: `var(--alert-${intent}-subtle-description)`,
        icon: `var(--alert-${intent}-subtle-icon)`,
      },
      intense: {
        bg: `var(--alert-${intent}-intense-bg)`,
        fg: `var(--alert-${intent}-intense-fg)`,
      },
    },
  ])
)

const colorScale = (name) =>
  Object.fromEntries(
    [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((step) => [
      step,
      `var(--color-${name}-${step})`,
    ])
  )

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
        brand: colorScale("brand"),
        neutral: colorScale("neutral"),
        positive: colorScale("positive"),
        negative: colorScale("negative"),
        notice: colorScale("notice"),
        information: colorScale("information"),
        surface: {
          page: "var(--color-surface-page)",
          sidebar: "var(--color-surface-sidebar)",
          card: "var(--color-surface-card)",
        },
        gradient: {
          page: {
            from: "var(--color-gradient-page-from)",
            to: "var(--color-gradient-page-to)",
          },
        },
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
        alert: alertColors,
      },
      maxWidth: {
        alert: "var(--size-alert-max)",
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
      spacing: {
        0: "var(--spacing-0)",
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
        6: "var(--spacing-6)",
        7: "var(--spacing-7)",
        8: "var(--spacing-8)",
        9: "var(--spacing-9)",
        10: "var(--spacing-10)",
        11: "var(--spacing-11)",
      },
      transitionDelay: {
        "2xquick": "var(--motion-delay-2xquick)",
        xquick: "var(--motion-delay-xquick)",
        moderate: "var(--motion-delay-moderate)",
        gentle: "var(--motion-delay-gentle)",
        xgentle: "var(--motion-delay-xgentle)",
        long: "var(--motion-delay-long)",
        xlong: "var(--motion-delay-xlong)",
        "2xlong": "var(--motion-delay-2xlong)",
      },
      transitionDuration: {
        "2xquick": "var(--motion-duration-2xquick)",
        xquick: "var(--motion-duration-xquick)",
        quick: "var(--motion-duration-quick)",
        moderate: "var(--motion-duration-moderate)",
        xmoderate: "var(--motion-duration-xmoderate)",
        gentle: "var(--motion-duration-gentle)",
        xgentle: "var(--motion-duration-xgentle)",
        "2xgentle": "var(--motion-duration-2xgentle)",
      },
      transitionTimingFunction: {
        linear: "var(--motion-easing-linear)",
        entrance: "var(--motion-easing-entrance)",
        exit: "var(--motion-easing-exit)",
        standard: "var(--motion-easing-standard)",
        emphasized: "var(--motion-easing-emphasized)",
        overshoot: "var(--motion-easing-overshoot)",
        shake: "var(--motion-easing-shake)",
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
        "drawer-in-right": {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0)" },
        },
        "drawer-out-right": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(100%)" },
        },
        "drawer-in-left": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "drawer-out-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "drawer-in-top": {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        "drawer-out-top": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
        "drawer-in-bottom": {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        "drawer-out-bottom": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(100%)" },
        },
        "drawer-overlay-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "drawer-overlay-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      animation: {
        "accordion-down":
          "accordion-down var(--motion-duration-moderate) var(--motion-easing-entrance)",
        "accordion-up":
          "accordion-up var(--motion-duration-moderate) var(--motion-easing-entrance)",
        "drawer-in-right":
          "drawer-in-right var(--motion-duration-moderate) var(--motion-easing-entrance) forwards",
        "drawer-out-right":
          "drawer-out-right var(--motion-duration-moderate) var(--motion-easing-exit) forwards",
        "drawer-in-left":
          "drawer-in-left var(--motion-duration-moderate) var(--motion-easing-entrance) forwards",
        "drawer-out-left":
          "drawer-out-left var(--motion-duration-moderate) var(--motion-easing-exit) forwards",
        "drawer-in-top":
          "drawer-in-top var(--motion-duration-moderate) var(--motion-easing-entrance) forwards",
        "drawer-out-top":
          "drawer-out-top var(--motion-duration-moderate) var(--motion-easing-exit) forwards",
        "drawer-in-bottom":
          "drawer-in-bottom var(--motion-duration-moderate) var(--motion-easing-entrance) forwards",
        "drawer-out-bottom":
          "drawer-out-bottom var(--motion-duration-moderate) var(--motion-easing-exit) forwards",
        "drawer-overlay-in":
          "drawer-overlay-in var(--motion-duration-moderate) var(--motion-easing-entrance) forwards",
        "drawer-overlay-out":
          "drawer-overlay-out var(--motion-duration-moderate) var(--motion-easing-exit) forwards",
      },
    },
  },
  plugins: [],
}
