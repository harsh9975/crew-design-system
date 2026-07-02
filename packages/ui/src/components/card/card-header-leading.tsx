import * as React from "react"
import { cn } from "@/lib/utils"
import { useCardContext } from "./card-context"
import { getCardSizeStyles } from "./card-variants"

export interface CardHeaderLeadingProps {
  title?: string
  subtitle?: string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  className?: string
  testID?: string
}

export const CardHeaderLeading = React.forwardRef<HTMLDivElement, CardHeaderLeadingProps>(
  ({ title, subtitle, prefix, suffix, className, testID }, ref) => {
    const context = useCardContext()
    const size = context?.size ?? "medium"
    const sizeStyles = getCardSizeStyles(size)

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn("flex min-w-0 flex-1 items-start gap-3", className)}
      >
        {prefix ? <div className="shrink-0">{prefix}</div> : null}
        <div className="min-w-0 flex-1">
          {title ? (
            <div className="flex flex-wrap items-center gap-2">
              <span className={sizeStyles.title}>{title}</span>
              {suffix ? <div className="shrink-0">{suffix}</div> : null}
            </div>
          ) : null}
          {subtitle ? <p className={cn("mt-0.5", sizeStyles.subtitle)}>{subtitle}</p> : null}
        </div>
      </div>
    )
  }
)

CardHeaderLeading.displayName = "CardHeaderLeading"
