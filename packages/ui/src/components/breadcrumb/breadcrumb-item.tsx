import * as React from "react"
import { cn } from "@/lib/utils"
import { useBreadcrumbContext } from "./breadcrumb-context"
import { getBreadcrumbColorStyles, getBreadcrumbSizeStyles } from "./breadcrumb-variants"

export interface BreadcrumbItemProps {
  children?: React.ReactNode
  href?: string
  icon?: React.ComponentType<{ className?: string; size?: number }>
  isCurrentPage?: boolean
  accessibilityLabel?: string
  target?: string
  rel?: string
  testID?: string
  onClick?: (event: React.MouseEvent) => void
}

export const BreadcrumbItem = React.forwardRef<HTMLElement, BreadcrumbItemProps>(
  (
    {
      children,
      href,
      icon: IconComponent,
      isCurrentPage = false,
      accessibilityLabel,
      target,
      rel,
      testID,
      onClick,
    },
    ref
  ) => {
    const { size, color } = useBreadcrumbContext()
    const colorStyles = getBreadcrumbColorStyles(color)
    const sizeStyles = getBreadcrumbSizeStyles(size)

    const itemClasses = cn(
      "inline-flex items-center transition-colors",
      sizeStyles.text,
      sizeStyles.gap,
      isCurrentPage 
        ? colorStyles.itemCurrent 
        : cn(colorStyles.item, href && colorStyles.itemHover)
    )

    const content = (
      <>
        {IconComponent && (
          <IconComponent 
            className="shrink-0" 
            size={sizeStyles.icon}
          />
        )}
        {children && <span>{children}</span>}
      </>
    )

    if (href && !isCurrentPage) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={itemClasses}
          aria-label={accessibilityLabel}
          target={target}
          rel={rel}
          data-testid={testID}
          onClick={onClick}
        >
          {content}
        </a>
      )
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={itemClasses}
        aria-label={accessibilityLabel}
        aria-current={isCurrentPage ? "page" : undefined}
        data-testid={testID}
      >
        {content}
      </span>
    )
  }
)

BreadcrumbItem.displayName = "BreadcrumbItem"
