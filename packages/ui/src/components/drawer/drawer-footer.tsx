import * as React from "react"

import { cn } from "@/lib/utils"

export interface DrawerFooterProps {
  children: React.ReactNode
  showDivider?: boolean
  className?: string
  testID?: string
}

export const DrawerFooter = React.forwardRef<HTMLDivElement, DrawerFooterProps>(
  ({ children, showDivider = false, className, testID }, ref) => {
    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "shrink-0 px-6 py-5",
          showDivider && "border-t border-border",
          className
        )}
      >
        {children}
      </div>
    )
  }
)

DrawerFooter.displayName = "DrawerFooter"
