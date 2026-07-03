import * as React from "react"

import { cn } from "@/lib/utils"
import { useDrawerContext } from "./drawer-context"

export interface DrawerBodyProps {
  children: React.ReactNode
  className?: string
  testID?: string
}

export const DrawerBody = React.forwardRef<HTMLDivElement, DrawerBodyProps>(
  ({ children, className, testID }, ref) => {
    const { isOpen, isLazy } = useDrawerContext()

    if (isLazy && !isOpen) {
      return null
    }

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn("flex-1 overflow-y-auto px-6 pb-6", className)}
      >
        {children}
      </div>
    )
  }
)

DrawerBody.displayName = "DrawerBody"
