import * as React from "react"
import { cn } from "@/lib/utils"
import { useCardContext } from "./card-context"
import { getCardSizeStyles } from "./card-variants"

export interface CardFooterLeadingProps {
  title?: string
  subtitle?: string
  className?: string
  testID?: string
}

export const CardFooterLeading = React.forwardRef<HTMLDivElement, CardFooterLeadingProps>(
  ({ title, subtitle, className, testID }, ref) => {
    const context = useCardContext()
    const size = context?.size ?? "medium"
    const sizeStyles = getCardSizeStyles(size)

    if (!title && !subtitle) return null

    return (
      <div ref={ref} data-testid={testID} className={cn("min-w-0 flex-1", className)}>
        {title ? <p className={sizeStyles.title}>{title}</p> : null}
        {subtitle ? <p className={cn("mt-0.5", sizeStyles.subtitle)}>{subtitle}</p> : null}
      </div>
    )
  }
)

CardFooterLeading.displayName = "CardFooterLeading"
