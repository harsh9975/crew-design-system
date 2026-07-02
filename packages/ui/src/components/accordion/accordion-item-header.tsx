import * as React from "react"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { AccordionPrimitiveTrigger } from "@/components/ui/accordion"
import { useAccordionContext, useAccordionItemContext } from "./accordion-context"

export type AccordionItemHeaderLink = {
  text: string
  href?: string
  onClick?: () => void
}

export type AccordionItemHeaderProps = {
  title: string
  subtitle?: string
  label?: string
  link?: AccordionItemHeaderLink
  leading?: React.ReactNode
  className?: string
}

function AccordionItemHeader({
  title,
  subtitle,
  label,
  link,
  leading,
  className,
}: AccordionItemHeaderProps) {
  const { variant, size, showNumberPrefix } = useAccordionContext()
  const { index, isDisabled, setHasLeadingColumn } = useAccordionItemContext()

  const hasLeading = Boolean(showNumberPrefix || leading)

  React.useLayoutEffect(() => {
    setHasLeadingColumn(hasLeading)
  }, [hasLeading, setHasLeadingColumn])

  const prefix = showNumberPrefix ? (
    <span
      className={cn(
        "shrink-0 font-mono tabular-nums text-muted-foreground/80",
        size === "large" ? "w-6 text-100" : "w-5 text-75"
      )}
    >
      {index + 1}.
    </span>
  ) : leading ? (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center text-muted-foreground/80 [&_svg]:size-5",
        size === "large" ? "size-6" : "size-5"
      )}
    >
      {leading}
    </span>
  ) : null

  const handleLinkClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    link?.onClick?.()
  }

  const isFilled = variant === "filled"

  return (
    <AccordionPrimitiveTrigger
      disabled={isDisabled}
      className={cn(
        "group w-full text-left",
        "transition-colors duration-moderate ease-entrance",
        isFilled
          ? "hover:bg-muted/50 data-[state=open]:bg-muted"
          : "data-[state=open]:bg-muted/60",
        size === "large" ? "px-7 py-6" : "px-6 py-5",
        className
      )}
    >
      <div className={cn("flex w-full", size === "large" ? "gap-5" : "gap-4")}>
        {prefix}

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-5">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span
                className={cn(
                  "font-heading font-semibold text-foreground",
                  size === "large" ? "text-300" : "text-200"
                )}
              >
                {title}
              </span>
              {label ? (
                <span className="rounded-max bg-muted px-2 py-0.5 text-75 font-medium text-muted-foreground">
                  {label}
                </span>
              ) : null}
            </div>

            <div className="flex shrink-0 items-center gap-4">
              {link ? (
                link.href ? (
                  <a
                    href={link.href}
                    className="text-100 font-medium text-primary hover:underline"
                    onClick={handleLinkClick}
                  >
                    {link.text}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="text-100 font-medium text-primary hover:underline"
                    onClick={handleLinkClick}
                  >
                    {link.text}
                  </button>
                )
              ) : null}
              <ChevronDown
                className={cn(
                  "shrink-0 text-muted-foreground/70 transition-transform duration-moderate ease-entrance group-data-[state=open]:rotate-180",
                  size === "large" ? "size-3.5" : "size-3"
                )}
                strokeWidth={1.75}
                aria-hidden
              />
            </div>
          </div>

          {subtitle ? (
            <p
              className={cn(
                "mt-1 text-muted-foreground",
                size === "large" ? "text-100" : "text-75"
              )}
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </AccordionPrimitiveTrigger>
  )
}

AccordionItemHeader.displayName = "AccordionItemHeader"

export { AccordionItemHeader }
