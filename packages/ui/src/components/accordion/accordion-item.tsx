import * as React from "react"

import { cn } from "@/lib/utils"
import { AccordionPrimitiveItem } from "@/components/ui/accordion"
import { AccordionItemContext, getItemValue } from "./accordion-context"

export type AccordionItemProps = {
  children: React.ReactNode
  isDisabled?: boolean
  /** @internal injected by Accordion */
  _index?: number
  className?: string
}

function AccordionItem({ children, isDisabled, _index = 0, className }: AccordionItemProps) {
  const [hasLeadingColumn, setHasLeadingColumn] = React.useState(false)

  return (
    <AccordionItemContext.Provider
      value={{ index: _index, isDisabled, hasLeadingColumn, setHasLeadingColumn }}
    >
      <AccordionPrimitiveItem
        value={getItemValue(_index)}
        disabled={isDisabled}
        className={cn("border-b border-border/80 last:border-b-0", className)}
      >
        {children}
      </AccordionPrimitiveItem>
    </AccordionItemContext.Provider>
  )
}

AccordionItem.displayName = "AccordionItem"

export { AccordionItem }
