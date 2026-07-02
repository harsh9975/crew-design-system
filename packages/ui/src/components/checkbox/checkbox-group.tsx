import * as React from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox, type CheckboxProps } from "./checkbox"
import { CheckboxContext } from "./checkbox-context"
import {
  orientationClasses,
  type CheckboxOrientation,
  type CheckboxSize,
  type NecessityIndicator,
} from "./checkbox-variants"

export interface CheckboxGroupProps {
  children: React.ReactNode
  label?: string
  helpText?: string
  errorText?: string
  necessityIndicator?: NecessityIndicator
  orientation?: CheckboxOrientation
  value?: string[]
  defaultValue?: string[]
  onChange?: (values: string[]) => void
  size?: CheckboxSize
  isDisabled?: boolean
  name?: string
  className?: string
  testID?: string
}

function useControllableArray(
  valueProp: string[] | undefined,
  defaultValue: string[],
  onChange?: (values: string[]) => void
) {
  const [uncontrolledValue, setUncontrolledValue] = React.useState(defaultValue)
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : uncontrolledValue

  const setValue = React.useCallback(
    (nextValue: string[] | ((prev: string[]) => string[])) => {
      if (!isControlled) {
        setUncontrolledValue((prev) => {
          const resolved = typeof nextValue === "function" ? nextValue(prev) : nextValue
          onChange?.(resolved)
          return resolved
        })
        return
      }

      const resolved =
        typeof nextValue === "function" ? nextValue(valueProp ?? []) : nextValue
      onChange?.(resolved)
    },
    [isControlled, onChange, valueProp]
  )

  return [value, setValue] as const
}

export const CheckboxGroup = React.forwardRef<HTMLDivElement, CheckboxGroupProps>(
  (
    {
      children,
      label,
      helpText,
      errorText,
      necessityIndicator = "none",
      orientation = "vertical",
      value: valueProp,
      defaultValue = [],
      onChange,
      size = "medium",
      isDisabled = false,
      name,
      className,
      testID,
    },
    ref
  ) => {
    const [groupValue, setGroupValue] = useControllableArray(valueProp, defaultValue, onChange)
    const groupId = React.useId()
    const labelId = label ? `${groupId}-label` : undefined
    const helpId = helpText ? `${groupId}-help` : undefined
    const errorId = errorText ? `${groupId}-error` : undefined

    const toggleValue = React.useCallback(
      (itemValue: string, checked: boolean) => {
        setGroupValue((current) => {
          if (checked) {
            return current.indexOf(itemValue) >= 0 ? current : [...current, itemValue]
          }
          return current.filter((currentValue) => currentValue !== itemValue)
        })
      },
      [setGroupValue]
    )

    const contextValue = React.useMemo(
      () => ({
        isGrouped: true,
        size,
        isDisabled,
        name,
        groupValue,
        toggleValue,
        groupErrorText: errorText,
      }),
      [size, isDisabled, name, groupValue, toggleValue, errorText]
    )

    const processedChildren = React.Children.map(children, (child) => {
      if (!React.isValidElement<CheckboxProps>(child)) return child
      if ((child.type as { displayName?: string })?.displayName !== "Checkbox") return child

      return React.cloneElement(child, {
        isDisabled: child.props.isDisabled ?? isDisabled,
        size: child.props.size ?? size,
        name: child.props.name ?? name,
        validationState:
          child.props.validationState ?? (errorText ? ("error" as const) : child.props.validationState),
      })
    })

    return (
      <CheckboxContext.Provider value={contextValue}>
        <div
          ref={ref}
          role="group"
          data-testid={testID}
          aria-labelledby={labelId}
          aria-describedby={[helpId, errorId].filter(Boolean).join(" ") || undefined}
          className={cn("flex w-full flex-col gap-3", className)}
        >
          {label ? (
            <div className="flex flex-col gap-1">
              <div id={labelId} className="flex items-center gap-1 text-sm font-semibold text-foreground">
                <span>{label}</span>
                {necessityIndicator === "required" ? (
                  <span className="text-negative-500" aria-hidden="true">
                    *
                  </span>
                ) : null}
                {necessityIndicator === "optional" ? (
                  <span className="text-xs font-normal text-muted-foreground">(Optional)</span>
                ) : null}
              </div>

              {helpText ? (
                <p id={helpId} className="text-xs text-muted-foreground">
                  {helpText}
                </p>
              ) : null}

              {errorText ? (
                <p
                  id={errorId}
                  className="inline-flex items-center gap-1 text-xs text-negative-500"
                >
                  <AlertCircle className="size-3 shrink-0" />
                  {errorText}
                </p>
              ) : null}
            </div>
          ) : null}

          <div className={orientationClasses[orientation]}>{processedChildren}</div>
        </div>
      </CheckboxContext.Provider>
    )
  }
)

CheckboxGroup.displayName = "CheckboxGroup"
