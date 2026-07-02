import * as React from "react"

import { cn } from "@/lib/utils"
import { AccordionPrimitiveRoot } from "@/components/ui/accordion"
import {
  AccordionContext,
  getItemValue,
  parseItemValue,
  type AccordionSize,
  type AccordionVariant,
} from "./accordion-context"
import { AccordionItem, type AccordionItemProps } from "./accordion-item"

export type AccordionProps = {
  defaultExpandedIndex?: number
  expandedIndex?: number
  onExpandChange?: (args: { expandedIndex: number }) => void
  showNumberPrefix?: boolean
  variant?: AccordionVariant
  size?: AccordionSize
  children: React.ReactElement<AccordionItemProps> | React.ReactElement<AccordionItemProps>[]
  className?: string
}

function Accordion({
  defaultExpandedIndex,
  expandedIndex,
  onExpandChange,
  showNumberPrefix = false,
  variant = "transparent",
  size = "large",
  children,
  className,
}: AccordionProps) {
  const [internalExpandedIndex, setInternalExpandedIndex] = React.useState(
    defaultExpandedIndex ?? -1
  )

  const isControlled = expandedIndex !== undefined
  const activeIndex = isControlled ? expandedIndex : internalExpandedIndex
  const radixValue = activeIndex >= 0 ? getItemValue(activeIndex) : ""

  const childArray = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<AccordionItemProps> =>
      React.isValidElement(child) && child.type === AccordionItem
  )
  const itemCount = childArray.length

  const handleValueChange = (value: string) => {
    const nextIndex = parseItemValue(value)

    if (!isControlled) {
      setInternalExpandedIndex(nextIndex)
    }

    onExpandChange?.({ expandedIndex: nextIndex })
  }

  return (
    <AccordionContext.Provider
      value={{ variant, size, showNumberPrefix, itemCount }}
    >
      <AccordionPrimitiveRoot
        type="single"
        collapsible
        value={radixValue}
        onValueChange={handleValueChange}
        className={cn(
          variant === "filled" && "overflow-hidden rounded-medium border border-border",
          className
        )}
      >
        {childArray.map((child, index) =>
          React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
            _index: index,
            key: getItemValue(index),
          })
        )}
      </AccordionPrimitiveRoot>
    </AccordionContext.Provider>
  )
}

Accordion.displayName = "Accordion"

export { Accordion }
