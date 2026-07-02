import * as React from "react"

import { cn } from "@/lib/utils"
import { AccordionPrimitiveContent } from "@/components/ui/accordion"
import { useAccordionContext, useAccordionItemContext } from "./accordion-context"

export type AccordionItemBodyProps = {
  children: React.ReactNode
  className?: string
}

function getBodyHorizontalPadding(size: "medium" | "large", hasLeadingColumn: boolean) {
  if (!hasLeadingColumn) {
    return size === "large" ? "px-7" : "px-6"
  }

  return size === "large"
    ? "pl-[calc(var(--spacing-7)+var(--spacing-6)+var(--spacing-5))] pr-7"
    : "pl-[calc(var(--spacing-6)+var(--spacing-5)+var(--spacing-4))] pr-6"
}

function AccordionItemBody({ children, className }: AccordionItemBodyProps) {
  const { size } = useAccordionContext()
  const { hasLeadingColumn } = useAccordionItemContext()

  return (
    <AccordionPrimitiveContent className="bg-background">
      <div
        className={cn(
          "font-regular text-muted-foreground",
          size === "large" ? "pb-6 pt-2 text-100 leading-[1.5]" : "pb-5 pt-1.5 text-75 leading-[1.5]",
          getBodyHorizontalPadding(size, hasLeadingColumn),
          className
        )}
      >
         {children}
      </div>
    </AccordionPrimitiveContent>
  )
}

AccordionItemBody.displayName = "AccordionItemBody"

export { AccordionItemBody }
