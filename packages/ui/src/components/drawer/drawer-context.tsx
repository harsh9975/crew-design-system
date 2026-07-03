import * as React from "react"
import type { DrawerSide } from "./drawer-variants"

export type DrawerContextValue = {
  isOpen: boolean
  isLazy: boolean
  onDismiss: () => void
  side: DrawerSide
}

const DrawerContext = React.createContext<DrawerContextValue | undefined>(undefined)

export function DrawerProvider({
  value,
  children,
}: {
  value: DrawerContextValue
  children: React.ReactNode
}) {
  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export function useDrawerContext() {
  const context = React.useContext(DrawerContext)
  if (!context) {
    throw new Error("Drawer compound components must be used within a Drawer")
  }
  return context
}
