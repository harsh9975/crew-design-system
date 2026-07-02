import * as React from "react"
import { X, type LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../button/button"
import { defaultAlertIcons } from "./alert-icons"
import {
  getAlertStyles,
  type AlertColor,
  type AlertEmphasis,
} from "./alert-variants"

export type AlertPrimaryAction = {
  text: string
  onClick?: () => void
}

export type AlertSecondaryAction = {
  text: string
  href?: string
  onClick?: () => void
  target?: string
}

export type AlertActions = {
  primary?: AlertPrimaryAction
  secondary?: AlertSecondaryAction
}

export type AlertProps = {
  title?: string
  description: React.ReactNode
  color?: AlertColor
  emphasis?: AlertEmphasis
  isDismissible?: boolean
  onDismiss?: () => void
  isFullWidth?: boolean
  maxWidth?: string | number
  actions?: AlertActions
  icon?: LucideIcon
  className?: string
  testID?: string
}

function Alert({
  title,
  description,
  color = "neutral",
  emphasis = "subtle",
  isDismissible = true,
  onDismiss,
  isFullWidth = false,
  maxWidth = "var(--size-alert-max)",
  actions,
  icon,
  className,
  testID,
}: AlertProps) {
  const styles = getAlertStyles(color, emphasis)
  const Icon = icon ?? defaultAlertIcons[color]
  const isCompact = !title
  const hasActions = Boolean(actions?.primary || actions?.secondary)

  const widthStyle = isFullWidth ? undefined : { maxWidth }

  return (
    <div
      role="alert"
      data-testid={testID}
      style={widthStyle}
      className={cn(
        "relative w-full rounded-large border",
        isCompact ? "flex items-start gap-3 p-4" : "p-5",
        isDismissible && "pr-14",
        styles.container,
        styles.border,
        isFullWidth && hasActions && !isCompact
          ? "flex flex-col gap-5 md:flex-row md:items-start md:justify-between"
          : undefined,
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-0 flex-1 gap-3",
          isCompact ? "items-center" : "items-start",
          isFullWidth && hasActions && !isCompact && "md:pr-6"
        )}
      >
        <Icon
          className={cn("size-5 shrink-0", styles.icon, isCompact ? undefined : "mt-0.5")}
          strokeWidth={2}
          aria-hidden
        />

        <div className="min-w-0 flex-1">
          {title ? (
            <p className={cn("font-heading text-base font-semibold leading-snug", styles.title)}>{title}</p>
          ) : null}

          <div
            className={cn(
              "font-normal leading-relaxed",
              isCompact ? "text-xs" : "text-xs",
              styles.description,
              title ? "mt-1.5" : undefined
            )}
          >
            {description}
          </div>

          {hasActions && !isFullWidth ? (
            <AlertActionsRow actions={actions} styles={styles} />
          ) : null}
        </div>
      </div>

      {hasActions && isFullWidth && !isCompact ? (
        <AlertActionsRow
          actions={actions}
          styles={styles}
          className="shrink-0 md:mt-1"
        />
      ) : null}

      {isDismissible ? (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className={cn(
            "absolute right-4 top-4 flex size-7 shrink-0 items-top justify-top rounded-small transition-colors duration-200",
            styles.dismiss,
          )}
        >
          <X className="size-4 mt-1" strokeWidth={2} aria-hidden />
        </button>
      ) : null}
    </div>
  )
}

type AlertActionsRowProps = {
  actions?: AlertActions
  styles: ReturnType<typeof getAlertStyles>
  className?: string
}

function AlertActionsRow({ actions, styles, className }: AlertActionsRowProps) {
  if (!actions?.primary && !actions?.secondary) {
    return null
  }

  return (
    <div className={cn("mt-4 flex flex-wrap items-center gap-3", className)}>
      {actions.primary ? (
        <Button
          type="button"
          variant={styles.primaryVariant as "primary" | "secondary" | "tertiary"}
          color={styles.primaryColor as "primary" | "negative" | "positive" | "white"}
          size="small"
          onClick={actions.primary.onClick}
        >
          {actions.primary.text}
        </Button>
      ) : null}

      {actions.secondary ? (
        actions.secondary.href ? (
          <Button
            variant="tertiary"
            color={styles.secondaryColor as "primary" | "negative" | "positive" | "white"}
            size="small"
            href={actions.secondary.href}
            target={actions.secondary.target}
            rel={actions.secondary.target === "_blank" ? "noopener noreferrer" : undefined}
            onClick={actions.secondary.onClick}
          >
            {actions.secondary.text}
          </Button>
        ) : (
          <Button
            type="button"
            variant="tertiary"
            color={styles.secondaryColor as "primary" | "negative" | "positive" | "white"}
            size="small"
            onClick={actions.secondary.onClick}
          >
            {actions.secondary.text}
          </Button>
        )
      ) : null}
    </div>
  )
}

Alert.displayName = "Alert"

export { Alert }
