import * as React from "react"
import { cn } from "@/lib/utils"

export interface CardHeaderTrailingProps {
  visual?: React.ReactNode
  className?: string
  testID?: string
}

export const CardHeaderTrailing = React.forwardRef<HTMLDivElement, CardHeaderTrailingProps>(
  ({ visual, className, testID }, ref) => {
    if (!visual) return null

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn("flex shrink-0 items-center", className)}
      >
        {visual}
      </div>
    )
  }
)

CardHeaderTrailing.displayName = "CardHeaderTrailing"
