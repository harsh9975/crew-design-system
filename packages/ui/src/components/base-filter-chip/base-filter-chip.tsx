import * as React from "react"
import { ChevronDown, X } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  filterChipClearButton,
  filterChipCountPill,
  filterChipDisabled,
  filterChipDivider,
  filterChipIcon,
  filterChipRootBase,
  filterChipSelectedBorder,
  filterChipTriggerBase,
  filterChipUnselectedBorder,
  filterChipValueText,
  getFilterChipCount,
  isFilterChipSelected,
  type BaseFilterChipSelectionType,
} from "./base-filter-chip-variants"

export type { BaseFilterChipSelectionType }

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

interface BaseFilterChipCommonProps extends StyledProps {
  label: string
  isDisabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  onClear?: (event: React.MouseEvent<HTMLButtonElement>) => void
  testID?: string
  className?: string
}

export interface BaseFilterChipSingleProps extends BaseFilterChipCommonProps {
  selectionType?: "single"
  value?: string
}

export interface BaseFilterChipMultipleProps extends BaseFilterChipCommonProps {
  selectionType: "multiple"
  value?: string[]
}

export type BaseFilterChipProps = BaseFilterChipSingleProps | BaseFilterChipMultipleProps

function resolveSpacingValue(val: SpacingValue): string {
  if (typeof val === "number") {
    return `var(--spacing-${val})`
  }
  if (typeof val === "string") {
    if (val.indexOf("spacing-") === 0) {
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

  if (props.marginTop !== undefined) {
    styles.marginTop = resolveSpacingValue(props.marginTop as SpacingValue)
  }
  if (props.marginRight !== undefined) {
    styles.marginRight = resolveSpacingValue(props.marginRight as SpacingValue)
  }
  if (props.marginBottom !== undefined) {
    styles.marginBottom = resolveSpacingValue(props.marginBottom as SpacingValue)
  }
  if (props.marginLeft !== undefined) {
    styles.marginLeft = resolveSpacingValue(props.marginLeft as SpacingValue)
  }

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

export const BaseFilterChip = React.forwardRef<HTMLDivElement, BaseFilterChipProps>(
  (
    {
      label,
      value,
      selectionType = "single",
      isDisabled = false,
      onClick,
      onClear,
      testID,
      className,
      ...styledProps
    },
    ref
  ) => {
    const styledStyles = buildStyledProps(styledProps)
    const isSelected = isFilterChipSelected(selectionType, value)
    const selectionCount = selectionType === "multiple" ? getFilterChipCount(value) : 0

    const handleClear = React.useCallback(
      (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation()
        onClear?.(event)
      },
      [onClear]
    )

    return (
      <div
        ref={ref}
        role="group"
        aria-label={label}
        data-testid={testID}
        style={styledStyles}
        className={cn(
          filterChipRootBase,
          isSelected ? filterChipSelectedBorder : filterChipUnselectedBorder,
          isDisabled && filterChipDisabled,
          className
        )}
      >
        <button
          type="button"
          disabled={isDisabled}
          onClick={onClick}
          className={cn(
            filterChipTriggerBase,
            isSelected ? "rounded-l-full" : "rounded-full",
            "text-[13px] leading-300"
          )}
        >
          <span>{label}</span>
          {isSelected && selectionType === "single" && typeof value === "string" ? (
            <>
              <span aria-hidden>:</span>
              <span className={filterChipValueText}>{value}</span>
            </>
          ) : null}
          {isSelected && selectionType === "multiple" ? (
            <>
              <span aria-hidden>:</span>
              <span className={filterChipCountPill} aria-label={`${selectionCount} selected`}>
                {selectionCount}
              </span>
            </>
          ) : null}
          <ChevronDown className={filterChipIcon} aria-hidden />
        </button>
        {isSelected ? (
          <>
            <span className={filterChipDivider} aria-hidden />
            <button
              type="button"
              disabled={isDisabled}
              onClick={handleClear}
              aria-label={`Clear ${label} filter`}
              className={filterChipClearButton}
            >
              <X className={filterChipIcon} aria-hidden />
            </button>
          </>
        ) : null}
      </div>
    )
  }
)

BaseFilterChip.displayName = "BaseFilterChip"
