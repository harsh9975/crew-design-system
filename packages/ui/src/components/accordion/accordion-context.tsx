import * as React from "react"

export type AccordionVariant = "filled" | "transparent"
export type AccordionSize = "medium" | "large"

export type AccordionContextValue = {
  variant: AccordionVariant
  size: AccordionSize
  showNumberPrefix: boolean
  itemCount: number
}

export type AccordionItemContextValue = {
  index: number
  isDisabled?: boolean
  hasLeadingColumn: boolean
  setHasLeadingColumn: (value: boolean) => void
}

export const AccordionContext = React.createContext<AccordionContextValue | null>(null)
export const AccordionItemContext = React.createContext<AccordionItemContextValue | null>(null)

export function useAccordionContext() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within Accordion")
  }
  return context
}

export function useAccordionItemContext() {
  const context = React.useContext(AccordionItemContext)
  if (!context) {
    throw new Error("AccordionItemHeader and AccordionItemBody must be used within AccordionItem")
  }
  return context
}

export function getItemValue(index: number) {
  return `item-${index}`
}

export function parseItemValue(value: string) {
  if (!value) return -1
  return Number.parseInt(value.replace("item-", ""), 10)
}
