import * as React from "react"

import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
} from "../ui/dialog"
import { DrawerProvider } from "./drawer-context"
import { getDrawerContentClassName, type DrawerSide } from "./drawer-variants"

export interface DrawerProps {
  isOpen: boolean
  onDismiss: () => void
  onUnmount?: () => void
  showOverlay?: boolean
  children: React.ReactNode
  zIndex?: number
  accessibilityLabel?: string
  initialFocusRef?: React.MutableRefObject<HTMLElement | null>
  isLazy?: boolean
  testID?: string
  side?: DrawerSide
  className?: string
}

export const Drawer = ({
  isOpen,
  onDismiss,
  onUnmount,
  showOverlay = true,
  children,
  zIndex = 1001,
  accessibilityLabel,
  initialFocusRef,
  isLazy = true,
  testID,
  side = "right",
  className,
}: DrawerProps) => {
  const handleOpenChange = React.useCallback(
    (open: boolean) => {
      if (!open) {
        onDismiss()
      }
    },
    [onDismiss]
  )

  const handleAnimationEnd = React.useCallback(
    (event: React.AnimationEvent<HTMLDivElement>) => {
      if (event.currentTarget !== event.target) {
        return
      }

      if (event.currentTarget.getAttribute("data-state") === "closed") {
        onUnmount?.()
      }
    },
    [onUnmount]
  )

  const handleOpenAutoFocus = React.useCallback(
    (event: Event) => {
      if (initialFocusRef?.current) {
        event.preventDefault()
        initialFocusRef.current.focus()
      }
    },
    [initialFocusRef]
  )

  const handleInteractOutside = React.useCallback(
    (event: Event) => {
      if (!showOverlay) {
        event.preventDefault()
      }
    },
    [showOverlay]
  )

  const contextValue = React.useMemo(
    () => ({
      isOpen,
      isLazy,
      onDismiss,
      side,
    }),
    [isOpen, isLazy, onDismiss, side]
  )

  return (
    <DrawerProvider value={contextValue}>
      <Dialog open={isOpen} onOpenChange={handleOpenChange} modal={showOverlay}>
        <DialogPortal>
          {showOverlay ? (
            <DialogOverlay style={{ zIndex }} />
          ) : null}
          <DialogContent
            data-testid={testID}
            aria-label={accessibilityLabel}
            className={cn(getDrawerContentClassName(side), className)}
            style={{ zIndex: zIndex + 1 }}
            onAnimationEnd={handleAnimationEnd}
            onOpenAutoFocus={handleOpenAutoFocus}
            onInteractOutside={handleInteractOutside}
            onPointerDownOutside={handleInteractOutside}
          >
            {children}
            <DialogClose className="sr-only" aria-hidden tabIndex={-1}>
              Close
            </DialogClose>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </DrawerProvider>
  )
}

Drawer.displayName = "Drawer"
