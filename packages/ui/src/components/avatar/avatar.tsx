import * as React from "react"
import { cn } from "@/lib/utils"
import { getInitials, useImageLoadStatus } from "./avatar-utils"

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
  onMouseDown?: React.MouseEventHandler<HTMLElement>
  onMouseUp?: React.MouseEventHandler<HTMLElement>
}

export type AvatarSize = "xsmall" | "small" | "medium" | "large" | "xlarge"
export type AvatarVariant = "circle" | "square"
export type AvatarColor = "information" | "negative" | "neutral" | "notice" | "positive" | "primary"

export interface AvatarProps extends StyledProps, CommonEvents {
  size?: AvatarSize
  variant?: AvatarVariant
  color?: AvatarColor
  icon?: React.ComponentType<{ className?: string; size?: number }>
  name?: string
  href?: string
  target?: string
  rel?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  isSelected?: boolean
  bottomAddon?: React.ReactNode
  topAddon?: React.ReactNode
  testID?: string
  src?: string
  alt?: string
  srcSet?: string
  crossOrigin?: "" | "anonymous" | "use-credentials"
  referrerPolicy?: 
    | ""
    | "no-referrer"
    | "no-referrer-when-downgrade"
    | "origin"
    | "origin-when-cross-origin"
    | "same-origin"
    | "strict-origin"
    | "strict-origin-when-cross-origin"
    | "unsafe-url"
  className?: string
}

// Size mappings
const sizeClasses: Record<AvatarSize, string> = {
  xsmall: "size-6 text-[9px]",   // 24px avatar, 9px text
  small: "size-8 text-[10px]",   // 32px avatar, 10px text
  medium: "size-10 text-75",     // 40px avatar, 12px text
  large: "size-12 text-100",     // 48px avatar, 14px text
  xlarge: "size-16 text-200",    // 64px avatar, 16px text
}

const sizeInPixels: Record<AvatarSize, number> = {
  xsmall: 24,
  small: 32,
  medium: 40,
  large: 48,
  xlarge: 64,
}

const iconSizes: Record<AvatarSize, number> = {
  xsmall: 12,
  small: 16,
  medium: 20,
  large: 24,
  xlarge: 32,
}

const variantClasses: Record<AvatarVariant, string> = {
  circle: "rounded-round",
  square: "rounded-medium",
}

const colorClasses: Record<AvatarColor, string> = {
  neutral: "bg-neutral-200 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-100",
  primary: "bg-brand-100 text-brand-700 dark:bg-brand-800 dark:text-brand-100",
  information: "bg-information-100 text-information-700 dark:bg-information-800 dark:text-information-100",
  positive: "bg-positive-100 text-positive-700 dark:bg-positive-800 dark:text-positive-100",
  negative: "bg-negative-100 text-negative-700 dark:bg-negative-800 dark:text-negative-100",
  notice: "bg-notice-100 text-notice-700 dark:bg-notice-800 dark:text-notice-100",
}

// Utility to resolve Spacing values
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

function resolveResponsiveValue<T>(val: ResponsiveVal<T> | undefined, resolver: (v: T) => string): React.CSSProperties {
  if (val === undefined || val === null) return {}
  
  if (typeof val === "object" && !Array.isArray(val) && "base" in val) {
    const styles: React.CSSProperties = {}
    if (val.base !== undefined) {
      Object.assign(styles, { "--val-base": resolver(val.base) })
    }
    return styles
  }
  
  if (Array.isArray(val)) {
    return {}
  }
  
  return {}
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

export const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  (
    {
      size = "medium",
      variant = "circle",
      color = "neutral",
      icon: IconComponent,
      name,
      href,
      target,
      rel,
      onClick,
      isSelected = false,
      bottomAddon,
      topAddon,
      testID,
      src,
      alt,
      srcSet,
      crossOrigin,
      referrerPolicy,
      className,
      onBlur,
      onFocus,
      onMouseLeave,
      onMouseMove,
      onPointerDown,
      onPointerEnter,
      onTouchStart,
      onTouchEnd,
      onMouseEnter,
      onMouseDown,
      onMouseUp,
      ...styledProps
    },
    ref
  ) => {
    const imageStatus = useImageLoadStatus(src)
    const showImage = src && imageStatus === "loaded"
    const showIcon = !showImage && IconComponent
    const showInitials = !showImage && !showIcon && name
    
    const initials = showInitials ? getInitials(name!) : ""
    
    // Base classes for the avatar container
    const avatarClasses = cn(
      "inline-flex items-center justify-center overflow-hidden",
      "font-medium select-none shrink-0",
      "transition-all duration-200",
      sizeClasses[size],
      variantClasses[variant],
      colorClasses[color],
      isSelected && "ring-2 ring-brand-600 ring-offset-2 ring-offset-background",
      (onClick || href) && "cursor-pointer hover:opacity-80",
    )
    
    const wrapperClasses = cn(
      "relative inline-flex shrink-0",
      className
    )
    
    const styledStyles = buildStyledProps(styledProps)
    
    // Event handlers
    const eventHandlers = {
      onBlur,
      onFocus,
      onMouseLeave,
      onMouseMove,
      onPointerDown,
      onPointerEnter,
      onTouchStart,
      onTouchEnd,
      onMouseEnter,
      onMouseDown,
      onMouseUp,
    }
    
    // Main avatar content (image, icon, or initials)
    const mainContent = (
      <>
        {showImage && (
          <img
            src={src}
            srcSet={srcSet}
            alt={alt || name || "Avatar"}
            crossOrigin={crossOrigin}
            referrerPolicy={referrerPolicy}
            className="size-full object-cover"
          />
        )}
        
        {showIcon && IconComponent && (
          <IconComponent 
            className="shrink-0" 
            size={iconSizes[size]}
          />
        )}
        
        {showInitials && (
          <span className="font-medium uppercase leading-none">
            {initials}
          </span>
        )}
      </>
    )
    
    // Addon elements (positioned outside overflow-hidden container)
    const addons = (
      <>
        {topAddon && (
          <div className={cn(
            "absolute z-10",
            variant === "circle" 
              ? "top-0 right-0"
              : "top-0 right-0 translate-x-1/4 -translate-y-1/4"
          )}>
            {topAddon}
          </div>
        )}
        
        {bottomAddon && (
          <div className={cn(
            "absolute z-10",
            variant === "circle"
              ? "bottom-0 right-0"
              : "bottom-0 right-0 translate-x-1/4 translate-y-1/4"
          )}>
            {bottomAddon}
          </div>
        )}
      </>
    )
    
    // Content to render (avatar + addons in wrapper)
    const avatarContent = (
      <div className={wrapperClasses} style={styledStyles}>
        <div className={avatarClasses}>
          {mainContent}
        </div>
        {addons}
      </div>
    )
    
    // Render as link if href is provided
    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          data-testid={testID}
          {...eventHandlers}
        >
          {avatarContent}
        </a>
      )
    }
    
    // Render as button if onClick is provided
    if (onClick) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          onClick={onClick}
          data-testid={testID}
          {...eventHandlers}
        >
          {avatarContent}
        </button>
      )
    }
    
    // Render as div (static)
    return avatarContent as React.ReactElement
  }
)

Avatar.displayName = "Avatar"
