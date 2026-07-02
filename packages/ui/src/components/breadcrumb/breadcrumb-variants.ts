export type BreadcrumbColor = "neutral" | "primary" | "white"
export type BreadcrumbSize = "small" | "medium" | "large"

type ColorStyleSet = {
  item: string
  itemHover: string
  itemCurrent: string
  separator: string
}

type SizeStyleSet = {
  text: string
  icon: number
  gap: string
}

const colorStyles: Record<BreadcrumbColor, ColorStyleSet> = {
  neutral: {
    item: "text-neutral-600 dark:text-neutral-400",
    itemHover: "hover:text-neutral-900 dark:hover:text-neutral-100",
    itemCurrent: "text-neutral-900 dark:text-neutral-100 font-medium",
    separator: "text-neutral-400 dark:text-neutral-600",
  },
  primary: {
    item: "text-brand-600 dark:text-brand-400",
    itemHover: "hover:text-brand-700 dark:hover:text-brand-300",
    itemCurrent: "text-brand-700 dark:text-brand-300 font-medium",
    separator: "text-brand-400 dark:text-brand-500",
  },
  white: {
    item: "text-white/70",
    itemHover: "hover:text-white",
    itemCurrent: "text-white font-medium",
    separator: "text-white/50",
  },
}

const sizeStyles: Record<BreadcrumbSize, SizeStyleSet> = {
  small: {
    text: "text-75",
    icon: 14,
    gap: "gap-2",
  },
  medium: {
    text: "text-100",
    icon: 16,
    gap: "gap-2.5",
  },
  large: {
    text: "text-200",
    icon: 18,
    gap: "gap-3",
  },
}

export function getBreadcrumbColorStyles(color: BreadcrumbColor): ColorStyleSet {
  return colorStyles[color]
}

export function getBreadcrumbSizeStyles(size: BreadcrumbSize): SizeStyleSet {
  return sizeStyles[size]
}
