import * as React from "react"
import type { BreadcrumbColor, BreadcrumbSize } from "./breadcrumb-variants"

interface BreadcrumbContextValue {
  size: BreadcrumbSize
  color: BreadcrumbColor
}

export const BreadcrumbContext = React.createContext<BreadcrumbContextValue>({
  size: "medium",
  color: "primary",
})

export const useBreadcrumbContext = () => React.useContext(BreadcrumbContext)
