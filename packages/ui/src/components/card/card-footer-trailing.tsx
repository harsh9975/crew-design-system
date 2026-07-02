import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "../button/button"

export type CardAction = {
  text: string
  onClick?: () => void
  href?: string
  target?: string
  isDisabled?: boolean
  isLoading?: boolean
  icon?: React.ComponentType<{ className?: string }>
  iconPosition?: "left" | "right"
  accessibilityLabel?: string
  type?: "button" | "submit" | "reset"
}

export type CardFooterActions = {
  primary?: CardAction
  secondary?: CardAction
}

export interface CardFooterTrailingProps {
  actions?: CardFooterActions
  className?: string
  testID?: string
}

function renderAction(
  action: CardAction,
  variant: "primary" | "secondary",
  key: string
) {
  const commonProps = {
    variant,
    color: "primary" as const,
    size: "small" as const,
    isDisabled: action.isDisabled,
    isLoading: action.isLoading,
    icon: action.icon,
    iconPosition: action.iconPosition,
    accessibilityLabel: action.accessibilityLabel,
    type: action.type,
    onClick: action.onClick,
    href: action.href,
    target: action.target,
    rel: action.target === "_blank" ? "noopener noreferrer" : undefined,
  }

  return (
    <Button key={key} {...commonProps}>
      {action.text}
    </Button>
  )
}

export const CardFooterTrailing = React.forwardRef<HTMLDivElement, CardFooterTrailingProps>(
  ({ actions, className, testID }, ref) => {
    if (!actions?.primary && !actions?.secondary) return null

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn("flex shrink-0 flex-wrap items-center justify-end gap-2", className)}
      >
        {actions.secondary
          ? renderAction(actions.secondary, "secondary", "card-footer-secondary")
          : null}
        {actions.primary ? renderAction(actions.primary, "primary", "card-footer-primary") : null}
      </div>
    )
  }
)

CardFooterTrailing.displayName = "CardFooterTrailing"
