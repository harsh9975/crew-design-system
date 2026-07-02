import * as React from "react"
import { cn } from "@/lib/utils"
import { useCardContext } from "./card-context"
import { getCardPaddingHorizontalClass } from "./card-variants"

export interface CardHeaderProps {
  children: React.ReactNode
  className?: string
  testID?: string
  headerPaddingBottom?: string
  headerMarginBottom?: string
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, testID, headerPaddingBottom, headerMarginBottom }, ref) => {
    const context = useCardContext()
    const padding = context?.padding ?? "spacing.7"

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "flex items-start justify-between gap-4 border-b border-border",
          getCardPaddingHorizontalClass(padding),
          "pt-7",
          headerPaddingBottom ?? "pb-5",
          headerMarginBottom,
          className
        )}
      >
        {children}
      </div>
    )
  }
)

CardHeader.displayName = "CardHeader"
