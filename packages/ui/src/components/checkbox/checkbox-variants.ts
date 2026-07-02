import { cn } from "@/lib/utils"

export type CheckboxSize = "small" | "medium" | "large"
export type CheckboxValidationState = "none" | "error"
export type NecessityIndicator = "none" | "required" | "optional"
export type CheckboxOrientation = "horizontal" | "vertical"

export interface CheckboxSizeStyleSet {
  box: string
  icon: string
  label: string
  secondary: string
  gap: string
}

const sizeStyles: Record<CheckboxSize, CheckboxSizeStyleSet> = {
  small: {
    box: "h-4 w-4 min-h-4 min-w-4 rounded-xsmall",
    icon: "size-3",
    label: "text-xs",
    secondary: "text-50",
    gap: "gap-2",
  },
  medium: {
    box: "h-5 w-5 min-h-5 min-w-5 rounded-xsmall",
    icon: "size-3",
    label: "text-sm",
    secondary: "text-xs",
    gap: "gap-2.5",
  },
  large: {
    box: "h-6 w-6 min-h-6 min-w-6 rounded-small",
    icon: "size-4",
    label: "text-base",
    secondary: "text-sm",
    gap: "gap-3",
  },
}

export function getCheckboxSizeStyles(size: CheckboxSize): CheckboxSizeStyleSet {
  return sizeStyles[size]
}

export function getCheckboxBoxStyles(validationState: CheckboxValidationState): string {
  const hasError = validationState === "error"

  if (hasError) {
    return cn(
      "border-negative-500 bg-background text-foreground",
      "data-[state=checked]:border-negative-500 data-[state=checked]:bg-negative-500 data-[state=checked]:text-white",
      "data-[state=indeterminate]:border-negative-500 data-[state=indeterminate]:bg-negative-500 data-[state=indeterminate]:text-white"
    )
  }

  return cn(
    "border-border bg-background text-foreground",
    "data-[state=checked]:border-brand-500 data-[state=checked]:bg-brand-500 data-[state=checked]:text-white",
    "data-[state=indeterminate]:border-brand-500 data-[state=indeterminate]:bg-brand-500 data-[state=indeterminate]:text-white"
  )
}

export const checkboxIconStyles = "text-white"

export const checkboxBaseStyles =
  "aspect-square shrink-0 border transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus-ring)] focus-visible:ring-offset-2 ring-offset-background disabled:cursor-not-allowed"

export const orientationClasses: Record<CheckboxOrientation, string> = {
  vertical: "flex flex-col gap-3",
  horizontal: "flex flex-row flex-wrap gap-4",
}
