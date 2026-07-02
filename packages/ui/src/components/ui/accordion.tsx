import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const AccordionPrimitiveRoot = AccordionPrimitive.Root

const AccordionPrimitiveItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn(className)} {...props} />
))
AccordionPrimitiveItem.displayName = "AccordionPrimitiveItem"

const AccordionPrimitiveHeader = AccordionPrimitive.Header

const AccordionPrimitiveTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center outline-none transition-colors duration-moderate ease-entrance disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionPrimitiveTrigger.displayName = "AccordionPrimitiveTrigger"

const AccordionPrimitiveContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    {children}
  </AccordionPrimitive.Content>
))
AccordionPrimitiveContent.displayName = "AccordionPrimitiveContent"

export {
  AccordionPrimitiveRoot,
  AccordionPrimitiveItem,
  AccordionPrimitiveHeader,
  AccordionPrimitiveTrigger,
  AccordionPrimitiveContent,
  ChevronDown,
}
