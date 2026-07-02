import * as React from "react"
import { cn } from "@/lib/utils"
import { useButtonGroupContext } from "../button-group/button-group-context"

// Types for StyledProps
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
  top?: ResponsiveVal<string | number>
  right?: ResponsiveVal<string | number>
  bottom?: ResponsiveVal<string | number>
  left?: ResponsiveVal<string | number>
  alignSelf?: ResponsiveVal<"auto" | "flex-start" | "flex-end" | "center" | "baseline" | "stretch">
  display?: ResponsiveVal<"none" | "block" | "inline" | "inline-block" | "flex" | "inline-flex" | "grid" | "inline-grid">
  justifySelf?: ResponsiveVal<"auto" | "start" | "end" | "center" | "stretch">
  placeSelf?: ResponsiveVal<"auto" | "start" | "end" | "center" | "stretch">
  order?: ResponsiveVal<number>
  position?: ResponsiveVal<"static" | "relative" | "absolute" | "fixed" | "sticky">
  zIndex?: ResponsiveVal<number>
  gridColumn?: ResponsiveVal<string>
  gridColumnStart?: ResponsiveVal<string | number>
  gridColumnEnd?: ResponsiveVal<string | number>
  gridRow?: ResponsiveVal<string>
  gridRowStart?: ResponsiveVal<string | number>
  gridRowEnd?: ResponsiveVal<string | number>
  gridArea?: ResponsiveVal<string>
  visibility?: ResponsiveVal<"visible" | "hidden" | "collapse">
  flexWrap?: ResponsiveVal<"wrap" | "nowrap" | "wrap-reverse">
}

// Common HTML event handlers
export interface CommonEvents {
  onBlur?: React.FocusEventHandler<HTMLElement>
  onFocus?: React.FocusEventHandler<HTMLElement>
  onMouseLeave?: React.MouseEventHandler<HTMLElement>
  onMouseMove?: React.MouseEventHandler<HTMLElement>
  onPointerDown?: React.PointerEventHandler<HTMLElement>
  onPointerEnter?: React.PointerEventHandler<HTMLElement>
  onTouchStart?: React.TouchEventHandler<HTMLElement>
  onTouchEnd?: React.TouchEventHandler<HTMLElement>
  onMouseEnter?: React.MouseEventHandler<HTMLElement>
  onMouseOver?: React.MouseEventHandler<HTMLElement>
}

export type ButtonShape = "rounded" | "square" | "pill"
export type ButtonGroupPosition = "only" | "first" | "middle" | "last"

// Main Button Props
export interface ButtonProps extends StyledProps, CommonEvents {
  variant?: "primary" | "secondary" | "tertiary"
  color?: "primary" | "negative" | "positive" | "white"
  shape?: ButtonShape
  groupPosition?: ButtonGroupPosition
  style?: React.CSSProperties
  children?: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  isDisabled?: boolean
  size?: "xsmall" | "small" | "medium" | "large"
  iconPosition?: "left" | "right"
  isFullWidth?: boolean
  type?: "button" | "submit" | "reset"
  href?: string
  target?: string
  rel?: string
  isLoading?: boolean
  accessibilityLabel?: string
  "aria-describedby"?: string
  "aria-controls"?: string
  "aria-expanded"?: boolean
  "aria-haspopup"?: "menu"
  role?: "grid" | "row" | "none" | "table" | "heading" | "text" | "alert" | "button"
  tabIndex?: number
  testID?: string
  onMouseDown?: React.MouseEventHandler<HTMLElement>
  onMouseUp?: React.MouseEventHandler<HTMLElement>
  icon?: React.ComponentType<{ className?: string }>
  className?: string
}

// Utility to resolve Spacing values (spacing-X tokens or raw CSS values)
function resolveSpacingValue(val: SpacingValue): string {
  if (typeof val === "number") {
    return `var(--spacing-${val})`
  }
  if (typeof val === "string") {
    if (val.startsWith("spacing-")) {
      return `var(--${val})`
    }
    const parsed = parseInt(val, 10)
    if (!isNaN(parsed) && String(parsed) === val) {
      return `var(--spacing-${parsed})`
    }
    return val
  }
  return String(val)
}

function resolveValue(val: unknown, resolver?: (v: unknown) => string): string {
  if (resolver) return resolver(val)
  if (Array.isArray(val)) {
    return val.map((v) => String(v)).join(" ")
  }
  return String(val)
}

const breakpointMinUrls = {
  base: null,
  xs: "320px",
  s: "640px",
  m: "768px",
  l: "1024px",
  xl: "1280px",
}

function makeStyleRule(v: unknown, cssProps: string[], resolver?: (v: unknown) => string): string {
  const resolvedValue = resolveValue(v, resolver)
  return cssProps.map((p: string) => `${p}: ${resolvedValue};`).join(" ")
}

// Generate CSS string for styled props
export function generateStyledPropsCss(className: string, props: StyledProps): string {
  let css = ""

  const propMappings: Record<keyof StyledProps, { cssProps: string[]; resolver?: (v: unknown) => string }> = {
    margin: { cssProps: ["margin"], resolver: resolveSpacingProp },
    marginX: { cssProps: ["margin-left", "margin-right"], resolver: resolveSpacingProp },
    marginY: { cssProps: ["margin-top", "margin-bottom"], resolver: resolveSpacingProp },
    marginTop: { cssProps: ["margin-top"], resolver: resolveSpacingProp },
    marginRight: { cssProps: ["margin-right"], resolver: resolveSpacingProp },
    marginBottom: { cssProps: ["margin-bottom"], resolver: resolveSpacingProp },
    marginLeft: { cssProps: ["margin-left"], resolver: resolveSpacingProp },
    top: { cssProps: ["top"] },
    right: { cssProps: ["right"] },
    bottom: { cssProps: ["bottom"] },
    left: { cssProps: ["left"] },
    alignSelf: { cssProps: ["align-self"] },
    display: { cssProps: ["display"] },
    justifySelf: { cssProps: ["justify-self"] },
    placeSelf: { cssProps: ["place-self"] },
    order: { cssProps: ["order"] },
    position: { cssProps: ["position"] },
    zIndex: { cssProps: ["z-index"] },
    gridColumn: { cssProps: ["grid-column"] },
    gridColumnStart: { cssProps: ["grid-column-start"] },
    gridColumnEnd: { cssProps: ["grid-column-end"] },
    gridRow: { cssProps: ["grid-row"] },
    gridRowStart: { cssProps: ["grid-row-start"] },
    gridRowEnd: { cssProps: ["grid-row-end"] },
    gridArea: { cssProps: ["grid-area"] },
    visibility: { cssProps: ["visibility"] },
    flexWrap: { cssProps: ["flex-wrap"] },
  }

  function resolveSpacingProp(val: unknown): string {
    if (Array.isArray(val)) {
      return val.map(resolveSpacingValue).join(" ")
    }
    return resolveSpacingValue(val as SpacingValue)
  }

  const mappingKeys = Object.keys(propMappings) as (keyof StyledProps)[]

  for (const propName of mappingKeys) {
    const config = propMappings[propName]
    const val = props[propName]
    if (val === undefined) continue

    const resolver = config.resolver
    const cssProps = config.cssProps

    if (typeof val !== "object") {
      css += `.${className} { ${makeStyleRule(val, cssProps, resolver)} }\n`
      continue
    }

    if (Array.isArray(val)) {
      const isShorthand =
        (propName === "margin" || propName === "marginX" || propName === "marginY") &&
        val.length <= 4 &&
        val.every((item) => typeof item === "number" || typeof item === "string")

      if (isShorthand) {
        css += `.${className} { ${makeStyleRule(val, cssProps, resolver)} }\n`
      } else {
        const keys = ["base", "s", "m", "l", "xl"] as const
        const items = val as unknown[]
        const limit = Math.min(items.length, 5)
        for (let index = 0; index < limit; index++) {
          const item = items[index]
          if (item === undefined) continue
          const key = keys[index]
          if (key !== "base") {
            const minWidth = breakpointMinUrls[key]
            const rule = `.${className} { ${makeStyleRule(item, cssProps, resolver)} }`
            css += `@media (min-width: ${minWidth}) { ${rule} }\n`
          } else {
            const rule = `.${className} { ${makeStyleRule(item, cssProps, resolver)} }`
            css += `${rule}\n`
          }
        }
      }
      continue
    }

    // Responsive object
    const valObj = val as Record<string, unknown>
    const valKeys = Object.keys(valObj)
    for (const bp of valKeys) {
      const item = valObj[bp]
      if (item === undefined) continue
      if (bp !== "base") {
        const minWidth = breakpointMinUrls[bp as keyof typeof breakpointMinUrls]
        if (minWidth) {
          const rule = `.${className} { ${makeStyleRule(item, cssProps, resolver)} }`
          css += `@media (min-width: ${minWidth}) { ${rule} }\n`
        }
      } else {
        const rule = `.${className} { ${makeStyleRule(item, cssProps, resolver)} }`
        css += `${rule}\n`
      }
    }
  }

  return css
}

// Loading Spinner SVG Component
function Spinner({ className }: { className?: string }): React.ReactElement {
  return (
    <svg
      className={cn("custom-spin", className)}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        fill="currentColor"
      />
    </svg>
  )
}

const variantClasses = {
  primary: {
    primary:
      "border-0 bg-gradient-to-b from-[var(--button-primary-from)] to-[var(--button-primary-to)] text-[var(--button-primary-foreground)] shadow-[var(--button-primary-shadow)] hover:from-[var(--button-primary-from-hover)] hover:to-[var(--button-primary-to-hover)] hover:shadow-[var(--button-primary-shadow-hover)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    negative:
      "border-0 bg-gradient-to-b from-negative-500 to-negative-600 text-white shadow-[0_4px_14px_oklch(0.55_0.22_25/0.25)] hover:from-negative-400 hover:to-negative-500 hover:shadow-[0_6px_20px_oklch(0.55_0.22_25/0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    positive:
      "border-0 bg-gradient-to-b from-positive-500 to-positive-600 text-white shadow-[0_4px_14px_oklch(0.58_0.14_155/0.25)] hover:from-positive-400 hover:to-positive-500 hover:shadow-[0_6px_20px_oklch(0.58_0.14_155/0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200",
    white:
      "border border-neutral-200 bg-white text-neutral-700 shadow-[0_2px_8px_oklch(0.21_0.034_265/0.08)] hover:bg-neutral-50 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_oklch(0.21_0.034_265/0.12)] active:translate-y-0 transition-all duration-200",
  },
  secondary: {
    primary:
      "border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-fg)] shadow-[var(--button-secondary-shadow)] hover:bg-[var(--button-secondary-bg-hover)] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_oklch(0.21_0.034_265/0.12)] active:translate-y-0 transition-all duration-200",
    negative:
      "border border-negative-200 bg-white text-negative-600 shadow-[0_2px_8px_oklch(0.21_0.034_265/0.08)] hover:bg-negative-50 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_oklch(0.55_0.22_25/0.12)] active:translate-y-0 transition-all duration-200 dark:bg-negative-950 dark:text-negative-300 dark:border-negative-700",
    positive:
      "border border-positive-200 bg-white text-positive-600 shadow-[0_2px_8px_oklch(0.21_0.034_265/0.08)] hover:bg-positive-50 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_oklch(0.58_0.14_155/0.12)] active:translate-y-0 transition-all duration-200 dark:bg-positive-950 dark:text-positive-300 dark:border-positive-700",
    white:
      "border border-white/20 bg-white/10 text-white shadow-[0_2px_8px_oklch(0_0_0/0.2)] hover:bg-white/15 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_oklch(0_0_0/0.3)] active:translate-y-0 transition-all duration-200 backdrop-blur-sm",
  },
  tertiary: {
    primary:
      "border-0 bg-transparent text-[var(--button-tertiary-fg)] hover:bg-[var(--button-tertiary-bg-hover)] active:bg-[var(--button-tertiary-bg-active)] transition-colors duration-150",
    negative:
      "border-0 bg-transparent text-negative-600 hover:bg-negative-50 active:bg-negative-100 transition-colors duration-150 dark:text-negative-400 dark:hover:bg-negative-900",
    positive:
      "border-0 bg-transparent text-positive-600 hover:bg-positive-50 active:bg-positive-100 transition-colors duration-150 dark:text-positive-400 dark:hover:bg-positive-900",
    white:
      "border-0 bg-transparent text-white hover:bg-white/10 active:bg-white/15 transition-colors duration-150",
  },
}

const sizeClasses = {
  xsmall: {
    btn: "h-7 px-3 gap-3 text-xs font-normal",
    icon: "size-3.5",
    spinner: "size-4",
    iconOnly: "size-8 px-0",
    iconOnlyGrouped: "h-7 min-w-7 px-0",
  },
  small: {
    btn: "h-8 px-4 gap-2.5 text-sm font-normal",
    icon: "size-3.5",
    spinner: "size-4",
    iconOnly: "size-9 px-0",
    iconOnlyGrouped: "h-8 min-w-8 px-0",
  },
  medium: {
    btn: "h-9 px-6 gap-2.5 text-base font-medium",
    icon: "size-3.5",
    spinner: "size-4",
    iconOnly: "size-12 px-0",
    iconOnlyGrouped: "h-9 min-w-9 px-0",
  },
  large: {
    btn: "h-10 px-8 gap-3 text-lg font-medium",
    icon: "size-4.5",
    spinner: "size-4.5",
    iconOnly: "size-13 px-0",
    iconOnlyGrouped: "h-10 min-w-10 px-0",
  },
}

function getButtonSizeClasses(
  size: keyof typeof sizeClasses,
  isIconOnly: boolean,
  isGrouped: boolean
): string {
  if (!isIconOnly) {
    return sizeClasses[size].btn
  }

  return isGrouped ? sizeClasses[size].iconOnlyGrouped : sizeClasses[size].iconOnly
}

function getRadiusClasses(
  shape: ButtonShape,
  groupPosition: ButtonGroupPosition,
  isIconOnly: boolean
): string {
  if (groupPosition !== "only") {
    const rounded = isIconOnly ? "rounded-full" : "rounded-medium"

    if (groupPosition === "first") {
      return isIconOnly ? "rounded-l-full rounded-r-none" : "rounded-l-medium rounded-r-none"
    }
    if (groupPosition === "middle") {
      return "rounded-none"
    }
    if (groupPosition === "last") {
      return isIconOnly ? "rounded-r-full rounded-l-none" : "rounded-r-medium rounded-l-none"
    }
    return rounded
  }

  if (isIconOnly) {
    return "rounded-full"
  }

  switch (shape) {
    case "square":
      return "rounded-none"
    case "pill":
      return "rounded-full"
    case "rounded":
    default:
      return "rounded-medium"
  }
}

const sizeGapClasses = {
  xsmall: "gap-1.5",
  small: "gap-2",
  medium: "gap-2.5",
  large: "gap-2.5",
}

const fontSizeClasses = {
  xsmall: "text-xxs",
  small: "text-xs",
  medium: "text-sm",
  large: "text-base",
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      variant: variantProp,
      color: colorProp,
      size: sizeProp,
      iconPosition = "left",
      isDisabled: isDisabledProp,
      isFullWidth: isFullWidthProp,
      isLoading = false,
      type = "button",
      href,
      target,
      rel,
      accessibilityLabel,
      icon: Icon,
      children,
      shape = "rounded",
      groupPosition = "only",
      style,
      className,
      testID,
      role = "button",
      tabIndex,
      // Common events
      onClick,
      onBlur,
      onFocus,
      onMouseLeave,
      onMouseMove,
      onPointerDown,
      onPointerEnter,
      onTouchStart,
      onTouchEnd,
      onMouseEnter,
      onMouseOver,
      onMouseDown,
      onMouseUp,
      // Styled props
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      top,
      right,
      bottom,
      left,
      alignSelf,
      display,
      justifySelf,
      placeSelf,
      order,
      position,
      zIndex,
      gridColumn,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowStart,
      gridRowEnd,
      gridArea,
      visibility,
      flexWrap,
      ...ariaProps
    },
    ref
  ) => {
    // Get ButtonGroup context if available
    const buttonGroupContext = useButtonGroupContext()
    
    // Use context values as defaults if not provided as props
    const variant = variantProp ?? buttonGroupContext?.variant ?? "primary"
    const color = colorProp ?? buttonGroupContext?.color ?? "primary"
    const size = sizeProp ?? buttonGroupContext?.size ?? "medium"
    const isDisabled = isDisabledProp ?? buttonGroupContext?.isDisabled ?? false
    const isFullWidth = isFullWidthProp ?? buttonGroupContext?.isFullWidth ?? false

    const isIconOnly = Icon !== undefined && !children
    const isGrouped = groupPosition !== "only"
    
    // Generate stable unique styled-prop className
    const uniqueId = React.useId().replace(/:/g, "")
    const styledClassName = `styled-btn-${uniqueId}`

    // Collect all styled props for CSS generation
    const styledPropsKeys = [
      "margin",
      "marginX",
      "marginY",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "top",
      "right",
      "bottom",
      "left",
      "alignSelf",
      "display",
      "justifySelf",
      "placeSelf",
      "order",
      "position",
      "zIndex",
      "gridColumn",
      "gridColumnStart",
      "gridColumnEnd",
      "gridRow",
      "gridRowStart",
      "gridRowEnd",
      "gridArea",
      "visibility",
      "flexWrap",
    ] as (keyof StyledProps)[]

    const hasStyledProps = styledPropsKeys.some((key) => {
      const propMap: Record<keyof StyledProps, unknown> = {
        margin,
        marginX,
        marginY,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        top,
        right,
        bottom,
        left,
        alignSelf,
        display,
        justifySelf,
        placeSelf,
        order,
        position,
        zIndex,
        gridColumn,
        gridColumnStart,
        gridColumnEnd,
        gridRow,
        gridRowStart,
        gridRowEnd,
        gridArea,
        visibility,
        flexWrap,
      }
      return propMap[key] !== undefined
    })

    const [cssBlock, setCssBlock] = React.useState("")

    React.useEffect(() => {
      if (hasStyledProps) {
        setCssBlock(
          generateStyledPropsCss(styledClassName, {
            margin,
            marginX,
            marginY,
            marginTop,
            marginRight,
            marginBottom,
            marginLeft,
            top,
            right,
            bottom,
            left,
            alignSelf,
            display,
            justifySelf,
            placeSelf,
            order,
            position,
            zIndex,
            gridColumn,
            gridColumnStart,
            gridColumnEnd,
            gridRow,
            gridRowStart,
            gridRowEnd,
            gridArea,
            visibility,
            flexWrap,
          })
        )
      }
    }, [
      hasStyledProps,
      styledClassName,
      margin,
      marginX,
      marginY,
      marginTop,
      marginRight,
      marginBottom,
      marginLeft,
      top,
      right,
      bottom,
      left,
      alignSelf,
      display,
      justifySelf,
      placeSelf,
      order,
      position,
      zIndex,
      gridColumn,
      gridColumnStart,
      gridColumnEnd,
      gridRow,
      gridRowStart,
      gridRowEnd,
      gridArea,
      visibility,
      flexWrap,
    ])

    // Event handler mapping
    const eventHandlers = {
      onBlur,
      onClick: isDisabled || isLoading ? undefined : onClick,
      onFocus,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      onMouseMove,
      onMouseOver,
      onMouseUp,
      onPointerDown,
      onPointerEnter,
      onTouchEnd,
      onTouchStart,
    }

    // Base button classes with explicit font-sans to override user-agent font family
    const buttonBaseClasses =
      "group/button relative inline-flex shrink-0 items-center justify-center font-sans select-none outline-none focus-visible:ring-2 focus-visible:ring-[var(--button-focus-ring)] focus-visible:ring-offset-2 ring-offset-background"

    // Combine styling classes
    const combinedClassName = cn(
      buttonBaseClasses,
      variantClasses[variant][color],
      getButtonSizeClasses(size, isIconOnly, isGrouped),
      getRadiusClasses(shape, groupPosition, isIconOnly),
      isGrouped && (groupPosition === "middle" || groupPosition === "last") && "-ml-px",
      isGrouped && "relative hover:z-10 focus-visible:z-10 hover:!translate-y-0 active:!translate-y-0",
      isFullWidth && "w-full flex",
      (isDisabled || isLoading) && "pointer-events-none opacity-50",
      hasStyledProps && styledClassName,
      className
    )

    const ariaLabel = accessibilityLabel || (isIconOnly ? "button" : undefined)

    const commonProps = {
      "aria-label": ariaLabel,
      className: combinedClassName,
      style,
      "data-testid": testID,
      role,
      tabIndex: isDisabled || isLoading ? -1 : tabIndex,
      ...ariaProps,
      ...eventHandlers,
    }

    const iconElement = Icon ? (
      <Icon
        className={cn(
          sizeClasses[size].icon,
          "shrink-0 transition-transform duration-quick group-hover/button:scale-105"
        )}
      />
    ) : null

    const content = (
      <>
        {/* Style tag for dynamic styled properties */}
        {hasStyledProps && cssBlock ? <style>{cssBlock}</style> : null}

        {/* Self-contained keyframes and animation block for the loader spinner to ensure it always spins */}
        {isLoading ? (
          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            .custom-spin {
              animation: spin 0.8s linear infinite;
            }
          `}</style>
        ) : null}

        {/* Live announce loading block */}
        <span aria-live="polite" className="sr-only">
          {isLoading ? "Loading" : ""}
        </span>

        {/* Center-aligned spinner while loading to prevent layout shifts */}
        {isLoading ? (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner className={sizeClasses[size].spinner} />
          </span>
        ) : null}

        {/* Inner layout wrapper with explicit sizing gaps because CSS gap does not inherit */}
        <span
          className={cn(
            "flex items-center justify-center",
            sizeGapClasses[size],
            fontSizeClasses[size],
            isLoading && "opacity-0"
          )}
        >
          {iconPosition === "left" && iconElement}
          {children ? <span>{children}</span> : null}
          {iconPosition === "right" && iconElement}
        </span>
      </>
    )

    // Render anchor `<a>` tag if `href` is specified
    if (href !== undefined) {
      return (
        <a
          aria-disabled={isDisabled || isLoading ? "true" : undefined}
          href={isDisabled || isLoading ? undefined : href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          rel={target === "_blank" && rel === undefined ? "noopener noreferrer" : rel}
          target={target}
          {...commonProps}
        >
          {content}
        </a>
      )
    }

    // Render default `<button>` tag depending on static type to satisfy ESLint
    if (type === "submit") {
      return (
        <button
          disabled={isDisabled || isLoading}
          ref={ref as React.Ref<HTMLButtonElement>}
          type="submit"
          {...commonProps}
        >
          {content}
        </button>
      )
    }

    if (type === "reset") {
      return (
        <button
          disabled={isDisabled || isLoading}
          ref={ref as React.Ref<HTMLButtonElement>}
          type="reset"
          {...commonProps}
        >
          {content}
        </button>
      )
    }

    return (
      <button
        disabled={isDisabled || isLoading}
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        {...commonProps}
      >
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"
