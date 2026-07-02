import * as React from "react"
import { cn } from "@/lib/utils"
import { getBadgeStyles, type BadgeColor, type BadgeEmphasis } from "./badge-variants"

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

export type BadgeSize = "xsmall" | "small" | "medium" | "large"

export interface BadgeProps extends StyledProps {
  children: string
  color?: BadgeColor
  size?: BadgeSize
  emphasis?: BadgeEmphasis
  icon?: React.ComponentType<{ className?: string; size?: number }>
  testID?: string
  className?: string
}

const sizeClasses: Record<BadgeSize, string> = {
  xsmall: "h-5 px-2 text-[10px] gap-1",
  small: "h-6 px-2.5 text-[11px] gap-1",
  medium: "h-7 px-3 text-[12px] gap-1.5",
  large: "h-8 px-3.5 text-[12px] gap-2",
}

const iconSizes: Record<BadgeSize, number> = {
  xsmall: 10,
  small: 12,
  medium: 14,
  large: 16,
}

function resolveSpacingValue(val: SpacingValue): string {
  if (typeof val === "number") {
    return `var(--spacing-${val})`
  }
  if (typeof val === "string") {
    if (val.startsWith("spacing-")) {
      return `var(--${val})`
    }
    return val
  }
  return "0"
}

function buildStyledProps(props: StyledProps): React.CSSProperties {
  const styles: React.CSSProperties = {}
  
  if (props.margin !== undefined) {
    if (Array.isArray(props.margin)) {
      const marginVal = (props.margin as SpacingValue[]).map(resolveSpacingValue).join(" ")
      styles.margin = marginVal
    } else {
      styles.margin = resolveSpacingValue(props.margin as SpacingValue)
    }
  }
  
  if (props.marginX !== undefined) {
    const val = resolveSpacingValue(props.marginX as SpacingValue)
    styles.marginLeft = val
    styles.marginRight = val
  }
  
  if (props.marginY !== undefined) {
    const val = resolveSpacingValue(props.marginY as SpacingValue)
    styles.marginTop = val
    styles.marginBottom = val
  }
  
  if (props.marginTop !== undefined) styles.marginTop = resolveSpacingValue(props.marginTop as SpacingValue)
  if (props.marginRight !== undefined) styles.marginRight = resolveSpacingValue(props.marginRight as SpacingValue)
  if (props.marginBottom !== undefined) styles.marginBottom = resolveSpacingValue(props.marginBottom as SpacingValue)
  if (props.marginLeft !== undefined) styles.marginLeft = resolveSpacingValue(props.marginLeft as SpacingValue)
  
  if (props.top !== undefined) styles.top = props.top as string | number
  if (props.right !== undefined) styles.right = props.right as string | number
  if (props.bottom !== undefined) styles.bottom = props.bottom as string | number
  if (props.left !== undefined) styles.left = props.left as string | number
  
  if (props.position !== undefined) {
    const positionValue = props.position as string
    styles.position = positionValue as React.CSSProperties["position"]
  }
  if (props.zIndex !== undefined) styles.zIndex = props.zIndex as number
  
  return styles
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      children,
      color = "neutral",
      size = "medium",
      emphasis = "subtle",
      icon: IconComponent,
      testID,
      className,
      ...styledProps
    },
    ref
  ) => {
    const styles = getBadgeStyles(color, emphasis)
    const styledStyles = buildStyledProps(styledProps)
    
    const badgeClasses = cn(
      "inline-flex items-center justify-center shrink-0 font-medium rounded-full whitespace-nowrap",
      sizeClasses[size],
      styles.container,
      styles.text,
      className
    )

    return (
      <span
        ref={ref}
        className={badgeClasses}
        style={styledStyles}
        data-testid={testID}
      >
        {IconComponent && (
          <IconComponent 
            className={cn("shrink-0", styles.icon)}
            size={iconSizes[size]}
          />
        )}
        <span className="leading-none">{children}</span>
      </span>
    )
  }
)

Badge.displayName = "Badge"
