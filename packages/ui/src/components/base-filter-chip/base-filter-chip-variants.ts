export type BaseFilterChipSelectionType = "single" | "multiple"

export function isFilterChipSelected(
  selectionType: BaseFilterChipSelectionType,
  value?: string | string[]
): boolean {
  if (selectionType === "multiple") {
    return Array.isArray(value) && value.length > 0
  }

  return typeof value === "string" && value.length > 0
}

export function getFilterChipCount(value?: string | string[]): number {
  if (Array.isArray(value)) {
    return value.length
  }

  return 0
}

export const filterChipRootBase =
  "inline-flex items-stretch rounded-lg bg-background text-100 leading-100"

export const filterChipSelectedBorder = "border border-solid border-border text-foreground"
export const filterChipUnselectedBorder =
  "border border-dashed border-border text-foreground"

export const filterChipDisabled = "pointer-events-none opacity-50"

export const filterChipTriggerBase =
  "inline-flex h-8 items-center gap-1 px-4 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20 disabled:cursor-not-allowed"

export const filterChipValueText = "font-normal text-muted-foreground"

export const filterChipCountPill =
  "inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-neutral-100 text-[10px] leading-300 font-medium text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"

export const filterChipIcon = "ml-2 size-3.5 shrink-0 text-[14px] leading-300 text-muted-foreground"

export const filterChipDivider = "my-1.5 w-px shrink-0 self-stretch bg-border"

export const filterChipClearButton =
  "inline-flex h-8 items-center justify-center rounded-r-full px-3 text-[14px] leading-300 text-muted-foreground hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20 disabled:cursor-not-allowed"
