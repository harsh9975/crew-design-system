import * as React from "react"
import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export interface DrawerHeaderIconProps {
  icon: LucideIcon
  className?: string
  testID?: string
}

export const DrawerHeaderIcon = React.forwardRef<HTMLDivElement, DrawerHeaderIconProps>(
  ({ icon: Icon, className, testID }, ref) => {
    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "flex size-8 shrink-0 items-center justify-center rounded-round bg-muted text-muted-foreground",
          className
        )}
      >
        <Icon className="size-4" size={16} />
      </div>
    )
  }
)

DrawerHeaderIcon.displayName = "DrawerHeaderIcon"
