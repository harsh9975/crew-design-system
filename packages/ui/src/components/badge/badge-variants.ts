export type BadgeColor =
  | "information"
  | "negative"
  | "neutral"
  | "notice"
  | "positive"
  | "primary"

export type BadgeEmphasis = "subtle" | "intense"

type BadgeStyleSet = {
  container: string
  text: string
  icon: string
}

const subtleStyles: Record<BadgeColor, BadgeStyleSet> = {
  neutral: {
    container: "bg-neutral-100 dark:bg-neutral-800",
    text: "text-neutral-700 dark:text-neutral-200",
    icon: "text-neutral-600 dark:text-neutral-300",
  },
  primary: {
    container: "bg-brand-100 dark:bg-brand-900/30",
    text: "text-brand-700 dark:text-brand-300",
    icon: "text-brand-600 dark:text-brand-400",
  },
  information: {
    container: "bg-information-100 dark:bg-information-900/30",
    text: "text-information-700 dark:text-information-300",
    icon: "text-information-600 dark:text-information-400",
  },
  positive: {
    container: "bg-positive-100 dark:bg-positive-900/30",
    text: "text-positive-700 dark:text-positive-300",
    icon: "text-positive-600 dark:text-positive-400",
  },
  negative: {
    container: "bg-negative-100 dark:bg-negative-900/30",
    text: "text-negative-700 dark:text-negative-300",
    icon: "text-negative-600 dark:text-negative-400",
  },
  notice: {
    container: "bg-notice-100 dark:bg-notice-900/30",
    text: "text-notice-700 dark:text-notice-300",
    icon: "text-notice-600 dark:text-notice-400",
  },
}

const intenseStyles: Record<BadgeColor, BadgeStyleSet> = {
  neutral: {
    container: "bg-neutral-600 dark:bg-neutral-700",
    text: "text-white",
    icon: "text-white",
  },
  primary: {
    container: "bg-brand-600 dark:bg-brand-700",
    text: "text-white",
    icon: "text-white",
  },
  information: {
    container: "bg-information-600 dark:bg-information-700",
    text: "text-white",
    icon: "text-white",
  },
  positive: {
    container: "bg-positive-600 dark:bg-positive-700",
    text: "text-white",
    icon: "text-white",
  },
  negative: {
    container: "bg-negative-600 dark:bg-negative-700",
    text: "text-white",
    icon: "text-white",
  },
  notice: {
    container: "bg-notice-600 dark:bg-notice-700",
    text: "text-white",
    icon: "text-white",
  },
}

export function getBadgeStyles(
  color: BadgeColor,
  emphasis: BadgeEmphasis
): BadgeStyleSet {
  return emphasis === "subtle" ? subtleStyles[color] : intenseStyles[color]
}
