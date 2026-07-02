export type CardVariant = "primary" | "secondary"
export type CardSize = "medium" | "large"
export type CardPadding = "spacing.0" | "spacing.3" | "spacing.4" | "spacing.5" | "spacing.7"

export interface CardVariantStyleSet {
  container: string
  interactive: string
  selected: string
}

export interface CardSizeStyleSet {
  title: string
  subtitle: string
  sectionPaddingX: string
  sectionPaddingY: string
  bodyPaddingY: string
}

const variantStyles: Record<CardVariant, CardVariantStyleSet> = {
  primary: {
    container: "rounded-large border border-border bg-surface-card text-card-foreground",
    interactive: "transition-colors hover:bg-neutral-50/80 dark:hover:bg-neutral-800/40",
    selected: "border-brand-500 ring-2 ring-brand-500/20",
  },
  secondary: {
    container: "rounded-medium bg-neutral-50 text-foreground dark:bg-neutral-900/50",
    interactive: "transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800/60",
    selected: "ring-2 ring-brand-500/20",
  },
}

const sizeStyles: Record<CardSize, CardSizeStyleSet> = {
  medium: {
    title: "text-sm font-semibold text-foreground",
    subtitle: "text-xs text-muted-foreground",
    sectionPaddingX: "px-7",
    sectionPaddingY: "py-5",
    bodyPaddingY: "py-5",
  },
  large: {
    title: "text-base font-semibold text-foreground",
    subtitle: "text-sm text-muted-foreground",
    sectionPaddingX: "px-7",
    sectionPaddingY: "py-5",
    bodyPaddingY: "py-5",
  },
}

const paddingClasses: Record<CardPadding, string> = {
  "spacing.0": "p-0",
  "spacing.3": "p-3",
  "spacing.4": "p-4",
  "spacing.5": "p-5",
  "spacing.7": "p-7",
}

const paddingHorizontalClasses: Record<CardPadding, string> = {
  "spacing.0": "px-0",
  "spacing.3": "px-3",
  "spacing.4": "px-4",
  "spacing.5": "px-5",
  "spacing.7": "px-7",
}

export function getCardVariantStyles(variant: CardVariant): CardVariantStyleSet {
  return variantStyles[variant]
}

export function getCardSizeStyles(size: CardSize): CardSizeStyleSet {
  return sizeStyles[size]
}

export function getCardPaddingClass(padding: CardPadding): string {
  return paddingClasses[padding]
}

export function getCardPaddingHorizontalClass(padding: CardPadding): string {
  return paddingHorizontalClasses[padding]
}
