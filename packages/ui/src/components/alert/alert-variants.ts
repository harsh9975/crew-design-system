export type AlertColor =
  | "information"
  | "negative"
  | "neutral"
  | "notice"
  | "positive"
  | "primary"

export type AlertEmphasis = "subtle" | "intense"

type AlertStyleSet = {
  container: string
  title: string
  description: string
  icon: string
  dismiss: string
  border: string
  primaryAction: string
  primaryVariant: string
  primaryColor: string
  secondaryAction: string
  secondaryColor: string
}

const subtleStyles: Record<AlertColor, Omit<AlertStyleSet, "primaryAction" | "secondaryAction" | "primaryVariant" | "primaryColor" | "secondaryColor">> = {
  information: {
    container: "bg-brand-50 border-brand-200",
    title: "text-brand-900",
    description: "text-brand-700",
    icon: "text-brand-600",
    dismiss: "text-brand-400 hover:text-brand-600",
    border: "",
  },
  negative: {
    container: "bg-negative-50 border-negative-200",
    title: "text-negative-900",
    description: "text-negative-700",
    icon: "text-negative-600",
    dismiss: "text-negative-400 hover:text-negative-600",
    border: "",
  },
  notice: {
    container: "bg-notice-50 border-notice-200",
    title: "text-notice-900",
    description: "text-notice-700",
    icon: "text-notice-600",
    dismiss: "text-notice-400 hover:text-notice-600",
    border: "",
  },
  positive: {
    container: "bg-positive-50 border-positive-200",
    title: "text-positive-900",
    description: "text-positive-700",
    icon: "text-positive-600",
    dismiss: "text-positive-400 hover:text-positive-600",
    border: "",
  },
  neutral: {
    container: "bg-neutral-50 border-neutral-200",
    title: "text-neutral-900",
    description: "text-neutral-700",
    icon: "text-neutral-600",
    dismiss: "text-neutral-400 hover:text-neutral-600",
    border: "",
  },
  primary: {
    container: "bg-brand-50 border-brand-200",
    title: "text-brand-900",
    description: "text-brand-700",
    icon: "text-brand-600",
    dismiss: "text-brand-400 hover:text-brand-600",
    border: "",
  },
}

const intenseStyles: Record<AlertColor, Omit<AlertStyleSet, "primaryAction" | "secondaryAction" | "primaryVariant" | "primaryColor" | "secondaryColor">> = {
  information: {
    container: "bg-brand-600",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
  negative: {
    container: "bg-negative-500",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
  notice: {
    container: "bg-notice-500",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
  positive: {
    container: "bg-positive-500",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
  neutral: {
    container: "bg-neutral-700",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
  primary: {
    container: "bg-brand-600",
    title: "text-white",
    description: "text-white/90",
    icon: "text-white",
    dismiss: "text-white/70 hover:text-white",
    border: "border-transparent",
  },
}

const subtleSecondaryAction: Record<AlertColor, string> = {
  information: "text-alert-information-subtle-fg",
  negative: "text-alert-negative-subtle-fg",
  notice: "text-alert-notice-subtle-fg",
  positive: "text-alert-positive-subtle-fg",
  neutral: "text-alert-neutral-subtle-fg",
  primary: "text-alert-primary-subtle-fg",
}

const intenseSecondaryAction: Record<AlertColor, string> = {
  information: "text-alert-information-intense-fg",
  negative: "text-alert-negative-intense-fg",
  notice: "text-alert-notice-intense-fg",
  positive: "text-alert-positive-intense-fg",
  neutral: "text-alert-neutral-intense-fg",
  primary: "text-alert-primary-intense-fg",
}

export function getAlertStyles(color: AlertColor, emphasis: AlertEmphasis): AlertStyleSet {
  const base = emphasis === "subtle" ? subtleStyles[color] : intenseStyles[color]
  
  // Determine button variants based on emphasis
  const primaryVariant = emphasis === "subtle" ? "primary" : "primary"
  const primaryColor = emphasis === "subtle" 
    ? (color === "information" || color === "primary" ? "primary" : color)
    : "white"
  
  const secondaryColor = emphasis === "subtle"
    ? (color === "information" || color === "primary" ? "primary" : color)
    : "white"

  return {
    ...base,
    primaryAction: "",
    primaryVariant,
    primaryColor,
    secondaryAction: "",
    secondaryColor,
  }
}
