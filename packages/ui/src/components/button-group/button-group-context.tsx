import * as React from "react"

export interface ButtonGroupContextValue {
  variant?: "primary" | "secondary" | "tertiary"
  size?: "xsmall" | "small" | "medium" | "large"
  color?: "primary" | "positive" | "negative" | "white"
  isDisabled?: boolean
  isFullWidth?: boolean
}

export const ButtonGroupContext = React.createContext<ButtonGroupContextValue | undefined>(undefined)

export const useButtonGroupContext = () => React.useContext(ButtonGroupContext)
