import * as React from "react"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { CheckboxPrimitiveRoot } from "../ui/checkbox"
import { useCheckboxContext } from "./checkbox-context"
import {
  checkboxBaseStyles,
  getCheckboxBoxStyles,
  getCheckboxSizeStyles,
  type CheckboxSize,
  type CheckboxValidationState,
} from "./checkbox-variants"

export interface CheckboxProps {
  value?: string
  children?: React.ReactNode
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  isIndeterminate?: boolean
  isDisabled?: boolean
  size?: CheckboxSize
  helpText?: string
  errorText?: string
  validationState?: CheckboxValidationState
  name?: string
  className?: string
  testID?: string
  accessibilityLabel?: string
}

export const Checkbox = React.forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      value,
      children,
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      isIndeterminate = false,
      isDisabled: isDisabledProp = false,
      size: sizeProp,
      helpText,
      errorText,
      validationState = "none",
      name: nameProp,
      className,
      testID,
      accessibilityLabel,
    },
    ref
  ) => {
    const context = useCheckboxContext()
    const isGrouped = context?.isGrouped ?? false
    const size = sizeProp ?? context?.size ?? "medium"
    const isDisabled = isDisabledProp || (context?.isDisabled ?? false)
    const name = nameProp ?? context?.name

    const [uncontrolledChecked, setUncontrolledChecked] = React.useState(defaultChecked)

    if (isGrouped && !value) {
      console.warn("[Checkbox] Checkbox inside CheckboxGroup requires a value prop.")
    }

    const isGroupChecked =
      isGrouped && value ? (context?.groupValue?.indexOf(value) ?? -1) >= 0 : false

    const isControlledStandalone = checkedProp !== undefined
    const isChecked = isGrouped
      ? isGroupChecked
      : isControlledStandalone
        ? checkedProp
        : uncontrolledChecked

    const resolvedValidationState: CheckboxValidationState =
      validationState === "error" || Boolean(errorText) || Boolean(context?.groupErrorText)
        ? "error"
        : "none"

    const resolvedErrorText = errorText

    const sizeStyles = getCheckboxSizeStyles(size)
    const boxStyles = getCheckboxBoxStyles(resolvedValidationState)

    const handleCheckedChange = (nextChecked: boolean | "indeterminate") => {
      const normalizedChecked = nextChecked === "indeterminate" ? true : nextChecked

      if (isGrouped && value && context?.toggleValue) {
        context.toggleValue(value, normalizedChecked)
        onChange?.(normalizedChecked)
        return
      }

      if (!isControlledStandalone) {
        setUncontrolledChecked(normalizedChecked)
      }
      onChange?.(normalizedChecked)
    }

    const checkboxId = React.useId()
    const labelId = `${checkboxId}-label`
    const helpId = helpText ? `${checkboxId}-help` : undefined
    const errorId = resolvedErrorText ? `${checkboxId}-error` : undefined

    return (
      <div
        data-testid={testID}
        className={cn(
          "inline-flex items-start",
          sizeStyles.gap,
          isDisabled && "opacity-50",
          className
        )}
      >
        <CheckboxPrimitiveRoot
          ref={ref}
          id={checkboxId}
          name={name}
          value={value}
          checked={isIndeterminate ? "indeterminate" : isChecked}
          isIndeterminate={isIndeterminate}
          disabled={isDisabled}
          onCheckedChange={handleCheckedChange}
          aria-label={accessibilityLabel ?? (children ? undefined : "Checkbox")}
          aria-labelledby={children ? labelId : undefined}
          aria-describedby={[helpId, errorId].filter(Boolean).join(" ") || undefined}
          boxClassName={cn(
            "mt-0.5",
            checkboxBaseStyles,
            sizeStyles.box,
            boxStyles,
            isDisabled && "cursor-not-allowed"
          )}
          iconClassName={sizeStyles.icon}
        />

        {(children || helpText || resolvedErrorText) && (
          <span className="flex min-w-0 flex-col">
            {children ? (
              <label
                id={labelId}
                htmlFor={checkboxId}
                className={cn(
                  "cursor-pointer font-medium text-foreground",
                  sizeStyles.label,
                  isDisabled && "cursor-not-allowed"
                )}
              >
                {children}
              </label>
            ) : null}

            {helpText ? (
              <span id={helpId} className={cn("text-muted-foreground", sizeStyles.secondary)}>
                {helpText}
              </span>
            ) : null}

            {resolvedErrorText ? (
              <span
                id={errorId}
                className={cn(
                  "inline-flex items-center gap-1 text-negative-500",
                  sizeStyles.secondary
                )}
              >
                <AlertCircle className="size-3 shrink-0" />
                {resolvedErrorText}
              </span>
            ) : null}
          </span>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"
