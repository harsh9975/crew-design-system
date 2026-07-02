import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardHeaderCounterProps {
  value: number | string
  className?: string
  testID?: string
}

export const CardHeaderCounter = React.forwardRef<HTMLSpanElement, CardHeaderCounterProps>(
  ({ value, className, testID }, ref) => {
    return (
      <span
        ref={ref}
        data-testid={testID}
        className={cn(
          "inline-flex h-5 min-w-5 items-center justify-center rounded-round bg-muted px-1.5 text-xs font-medium text-muted-foreground",
          className
        )}
      >
        {value}
      </span>
    )
  }
)

CardHeaderCounter.displayName = "CardHeaderCounter"
