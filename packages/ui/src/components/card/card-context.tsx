import * as React from "react"
import type { CardPadding, CardSize, CardVariant } from "./card-variants"

export interface CardContextValue {
  variant: CardVariant
  size: CardSize
  padding: CardPadding
  isSelected: boolean
  isInteractive: boolean
}

export const CardContext = React.createContext<CardContextValue | undefined>(undefined)

export const useCardContext = () => React.useContext(CardContext)
