import * as React from "react"
import { cn } from "@/lib/utils"
import { useCardContext } from "./card-context"
import { getCardPaddingHorizontalClass, getCardSizeStyles } from "./card-variants"

export interface CardBodyProps {
  children?: React.ReactNode
  className?: string
  testID?: string
}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, testID }, ref) => {
    const context = useCardContext()
    const variant = context?.variant ?? "primary"
    const size = context?.size ?? "medium"
    const padding = context?.padding ?? "spacing.7"
    const sizeStyles = getCardSizeStyles(size)

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "text-sm leading-relaxed text-foreground",
          variant === "primary" &&
            cn(getCardPaddingHorizontalClass(padding), sizeStyles.bodyPaddingY),
          className
        )}
      >
        {children}
      </div>
    )
  }
)

CardBody.displayName = "CardBody"
