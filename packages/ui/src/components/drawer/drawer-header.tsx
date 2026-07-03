import * as React from "react"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "../button/button"
import { DialogDescription, DialogTitle } from "../ui/dialog"
import { useDrawerContext } from "./drawer-context"
import {
  drawerHeaderColorStyles,
  type DrawerHeaderColor,
} from "./drawer-variants"

export interface DrawerHeaderProps {
  title?: string
  subtitle?: string
  leading?: React.ReactNode
  titleSuffix?: React.ReactNode
  trailing?: React.ReactNode
  children?: React.ReactElement | React.ReactElement[]
  color?: DrawerHeaderColor
  showDivider?: boolean
  className?: string
  testID?: string
}

export const DrawerHeader = React.forwardRef<HTMLDivElement, DrawerHeaderProps>(
  (
    {
      title,
      subtitle,
      leading,
      titleSuffix,
      trailing,
      children,
      color = "information",
      showDivider = false,
      className,
      testID,
    },
    ref
  ) => {
    const { onDismiss } = useDrawerContext()

    return (
      <div
        ref={ref}
        data-testid={testID}
        className={cn(
          "shrink-0 px-6 pb-5 pt-6",
          drawerHeaderColorStyles[color],
          showDivider && "border-b border-border",
          className
        )}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            {leading ? <div className="shrink-0">{leading}</div> : null}
            <div className="min-w-0 flex-1">
              {title ? (
                <div className="flex flex-wrap items-center gap-2">
                  <DialogTitle className="text-300 font-semibold leading-300 text-foreground">
                    {title}
                  </DialogTitle>
                  {titleSuffix ? <div className="shrink-0">{titleSuffix}</div> : null}
                </div>
              ) : (
                <DialogTitle className="sr-only">Drawer</DialogTitle>
              )}
              {subtitle ? (
                <DialogDescription className="text-[12px] leading-300 text-muted-foreground">
                  {subtitle}
                </DialogDescription>
              ) : null}
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            {trailing}
            <Button
              variant="tertiary"
              color="primary"
              size="small"
              icon={X}
              accessibilityLabel="Close"
              onClick={onDismiss}
            />
          </div>
        </div>
        {children ? <div className="mt-4">{children}</div> : null}
      </div>
    )
  }
)

DrawerHeader.displayName = "DrawerHeader"
