import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "radix-ui"
import { Check, Minus } from "lucide-react"

import { cn } from "@/lib/utils"
import { checkboxIconStyles } from "../checkbox/checkbox-variants"

const CheckboxPrimitiveRoot = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    isIndeterminate?: boolean
    boxClassName?: string
    iconClassName?: string
  }
>(({ className, isIndeterminate, boxClassName, iconClassName, checked, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer flex shrink-0 items-center justify-center",
      boxClassName,
      className
    )}
    checked={isIndeterminate ? "indeterminate" : checked}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-white", checkboxIconStyles)}
    >
      {isIndeterminate ? (
        <Minus className={cn("stroke-[3] text-white", iconClassName)} />
      ) : (
        <Check className={cn("stroke-[3] text-white", iconClassName)} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
CheckboxPrimitiveRoot.displayName = "CheckboxPrimitiveRoot"

export { CheckboxPrimitiveRoot }
