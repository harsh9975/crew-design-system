import * as React from "react"
import type { CheckboxSize } from "./checkbox-variants"

export interface CheckboxContextValue {
  isGrouped: boolean
  size: CheckboxSize
  isDisabled: boolean
  name?: string
  groupValue?: string[]
  toggleValue?: (value: string, checked: boolean) => void
  groupErrorText?: string
}

export const CheckboxContext = React.createContext<CheckboxContextValue | undefined>(undefined)

export const useCheckboxContext = () => React.useContext(CheckboxContext)
