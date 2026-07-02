import * as React from "react"
import { cn } from "@/lib/utils"
import type { ButtonGroupPosition } from "../button/button"
import { ButtonGroupContext } from "./button-group-context"

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

export interface ButtonGroupProps extends StyledProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "tertiary"
  size?: "xsmall" | "small" | "medium" | "large"
  color?: "primary" | "positive" | "negative" | "white"
  isDisabled?: boolean
  isFullWidth?: boolean
  testID?: string
  className?: string
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

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    {
      children,
      variant,
      size,
      color,
      isDisabled = false,
      isFullWidth = false,
      testID,
      className,
      ...styledProps
    },
    ref
  ) => {
    const styledStyles = buildStyledProps(styledProps)
    
    const childrenArray = React.Children.toArray(children)
    const totalButtons = childrenArray.length

    const processedChildren = childrenArray.map((child, index) => {
      if (!React.isValidElement(child)) return child
      
      const isFirst = index === 0
      const isLast = index === totalButtons - 1
      
      let groupPosition: ButtonGroupPosition = "only"
      if (totalButtons > 1) {
        if (isFirst) groupPosition = "first"
        else if (isLast) groupPosition = "last"
        else groupPosition = "middle"
      }
      
      return React.cloneElement(child, {
        groupPosition,
      } as { groupPosition: ButtonGroupPosition })
    })

    return (
      <ButtonGroupContext.Provider value={{ variant, size, color, isDisabled, isFullWidth }}>
        <div
          ref={ref}
          role="group"
          data-testid={testID}
          className={cn(
            "inline-flex items-stretch",
            isFullWidth && "w-full",
            className
          )}
          style={styledStyles}
        >
          {processedChildren}
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)

ButtonGroup.displayName = "ButtonGroup"
