import * as React from "react"
import { Badge } from "../badge/badge"
import type { BadgeColor, BadgeEmphasis } from "../badge/badge-variants"

export interface CardHeaderBadgeProps {
  children: string
  color?: BadgeColor
  emphasis?: BadgeEmphasis
  className?: string
  testID?: string
}

export const CardHeaderBadge = React.forwardRef<HTMLSpanElement, CardHeaderBadgeProps>(
  ({ children, color = "neutral", emphasis = "subtle", className, testID }, ref) => {
    return (
      <Badge
        ref={ref}
        color={color}
        emphasis={emphasis}
        size="small"
        className={className}
        testID={testID}
      >
        {children}
      </Badge>
    )
  }
)

CardHeaderBadge.displayName = "CardHeaderBadge"
