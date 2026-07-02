import * as React from "react"
import { cn } from "@/lib/utils"
import { useCardContext } from "./card-context"
import { getCardPaddingHorizontalClass } from "./card-variants"

export interface CardFooterProps {
  children: React.ReactNode
  className?: string
  testID?: string
  footerMarginTop?: string
  footerPaddingTop?: string
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, testID, footerMarginTop, footerPaddingTop }, ref) => {
    const context = useCardContext()
    const padding = context?.padding ?? "spacing.7"

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "flex items-start justify-between gap-4 border-t border-border",
          getCardPaddingHorizontalClass(padding),
          footerPaddingTop ?? "pt-5",
          "pb-7",
          footerMarginTop,
          className
        )}
      >
        {children}
      </div>
    )
  }
)

CardFooter.displayName = "CardFooter"
