import * as React from "react"
import { cn } from "@/lib/utils"
import { CardBody } from "./card-body"
import { CardContext } from "./card-context"
import {
  getCardPaddingClass,
  getCardVariantStyles,
  type CardPadding,
  type CardSize,
  type CardVariant,
} from "./card-variants"

export type SpacingValue = number | string

export type ResponsiveVal<T> =
  | T
  | T[]
  | {
      base?: T
      xs?: T
      s?: T
      m?: T
      l?: T
      xl?: T
    }

export interface StyledProps {
  margin?: ResponsiveVal<SpacingValue | SpacingValue[]>
  marginX?: ResponsiveVal<SpacingValue>
  marginY?: ResponsiveVal<SpacingValue>
  marginTop?: ResponsiveVal<SpacingValue>
  marginRight?: ResponsiveVal<SpacingValue>
  marginBottom?: ResponsiveVal<SpacingValue>
  marginLeft?: ResponsiveVal<SpacingValue>
}

export interface CardLayoutProps {
  width?: SpacingValue | ResponsiveVal<SpacingValue>
  height?: SpacingValue | ResponsiveVal<SpacingValue>
  minWidth?: SpacingValue | ResponsiveVal<SpacingValue>
  minHeight?: SpacingValue | ResponsiveVal<SpacingValue>
  maxWidth?: SpacingValue | ResponsiveVal<SpacingValue>
}

export interface CardProps extends StyledProps, CardLayoutProps {
  children?: React.ReactNode
  body?: string
  variant?: CardVariant
  size?: CardSize
  padding?: CardPadding
  isSelected?: boolean
  href?: string
  target?: string
  rel?: string
  accessibilityLabel?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  onHover?: () => void
  as?: "div" | "label"
  className?: string
  testID?: string
}

function resolveSpacingValue(val: SpacingValue): string {
  if (typeof val === "number") {
    return `var(--spacing-${val})`
  }
  if (typeof val === "string") {
    if (val.startsWith("spacing.")) {
      return `var(--${val.replace(".", "-")})`
    }
    if (val.startsWith("spacing-")) {
      return `var(--${val})`
    }
    return val
  }
  return "0"
}

function resolveLayoutValue(
  val: SpacingValue | ResponsiveVal<SpacingValue> | undefined
): string | undefined {
  if (val === undefined) return undefined
  if (typeof val === "object" && !Array.isArray(val)) {
    const responsive = val as { base?: SpacingValue }
    return responsive.base !== undefined ? resolveSpacingValue(responsive.base) : undefined
  }
  return resolveSpacingValue(val as SpacingValue)
}

function buildStyledProps(
  props: StyledProps & CardLayoutProps
): React.CSSProperties {
  const styles: React.CSSProperties = {}

  if (props.margin !== undefined) {
    if (Array.isArray(props.margin)) {
      styles.margin = (props.margin as SpacingValue[]).map(resolveSpacingValue).join(" ")
    } else if (typeof props.margin === "object") {
      const responsive = props.margin as { base?: SpacingValue }
      if (responsive.base !== undefined) {
        styles.margin = resolveSpacingValue(responsive.base)
      }
    } else {
      styles.margin = resolveSpacingValue(props.margin as SpacingValue)
    }
  }

  if (props.marginX !== undefined) {
    const val = resolveLayoutValue(props.marginX)
    if (val) {
      styles.marginLeft = val
      styles.marginRight = val
    }
  }

  if (props.marginY !== undefined) {
    const val = resolveLayoutValue(props.marginY)
    if (val) {
      styles.marginTop = val
      styles.marginBottom = val
    }
  }

  if (props.marginTop !== undefined) styles.marginTop = resolveLayoutValue(props.marginTop)
  if (props.marginRight !== undefined) styles.marginRight = resolveLayoutValue(props.marginRight)
  if (props.marginBottom !== undefined) styles.marginBottom = resolveLayoutValue(props.marginBottom)
  if (props.marginLeft !== undefined) styles.marginLeft = resolveLayoutValue(props.marginLeft)

  if (props.width !== undefined) styles.width = resolveLayoutValue(props.width)
  if (props.height !== undefined) styles.height = resolveLayoutValue(props.height)
  if (props.minWidth !== undefined) styles.minWidth = resolveLayoutValue(props.minWidth)
  if (props.minHeight !== undefined) styles.minHeight = resolveLayoutValue(props.minHeight)
  if (props.maxWidth !== undefined) styles.maxWidth = resolveLayoutValue(props.maxWidth)

  return styles
}

const CARD_HEADER_DISPLAY_NAME = "CardHeader"
const CARD_FOOTER_DISPLAY_NAME = "CardFooter"

function validateSecondaryChildren(children: React.ReactNode, variant: CardVariant) {
  if (variant !== "secondary") return

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) return
    const displayName = (child.type as { displayName?: string })?.displayName
    if (displayName === CARD_HEADER_DISPLAY_NAME || displayName === CARD_FOOTER_DISPLAY_NAME) {
      console.warn(
        "[Card] Secondary variant only accepts CardBody as children. Found:",
        displayName
      )
    }
  })
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
  (
    {
      children,
      body,
      variant = "primary",
      size = "medium",
      padding = "spacing.7",
      isSelected = false,
      href,
      target,
      rel,
      accessibilityLabel,
      onClick,
      onHover,
      as = "div",
      className,
      testID,
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
    },
    ref
  ) => {
    const isInteractive = Boolean(href || onClick || onHover)
    const variantStyles = getCardVariantStyles(variant)

    validateSecondaryChildren(children, variant)

    const contextValue = React.useMemo(
      () => ({
        variant,
        size,
        padding,
        isSelected,
        isInteractive,
      }),
      [variant, size, padding, isSelected, isInteractive]
    )

    const inlineStyles = buildStyledProps({
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      width,
      height,
      minWidth,
      minHeight,
      maxWidth,
    })

    const cardClassName = cn(
      "flex w-full flex-col overflow-hidden",
      variantStyles.container,
      variant === "secondary" && getCardPaddingClass(padding),
      isSelected && variantStyles.selected,
      isInteractive && variantStyles.interactive,
      isInteractive && "cursor-pointer",
      className
    )

    const content = body ? <CardBody>{body}</CardBody> : children

    const commonProps = {
      "aria-label": accessibilityLabel,
      className: cardClassName,
      "data-testid": testID,
      onClick: href ? undefined : onClick,
      onMouseEnter: onHover,
      style: inlineStyles,
    }

    const wrappedContent = (
      <CardContext.Provider value={contextValue}>{content}</CardContext.Provider>
    )

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={target === "_blank" && rel === undefined ? "noopener noreferrer" : rel}
          {...commonProps}
        >
          {wrappedContent}
        </a>
      )
    }

    if (as === "label") {
      return (
        <label ref={ref as React.Ref<HTMLLabelElement>} {...commonProps}>
          {wrappedContent}
        </label>
      )
    }

    return (
      <div ref={ref as React.Ref<HTMLDivElement>} {...commonProps}>
        {wrappedContent}
      </div>
    )
  }
)

Card.displayName = "Card"
