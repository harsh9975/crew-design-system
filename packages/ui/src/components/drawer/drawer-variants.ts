export type DrawerSide = "right" | "left" | "top" | "bottom"

export type DrawerHeaderColor =
  | "information"
  | "negative"
  | "neutral"
  | "notice"
  | "positive"

type DrawerSideStyles = {
  position: string
  openAnimation: string
  closedAnimation: string
}

export const drawerSideStyles: Record<DrawerSide, DrawerSideStyles> = {
  right: {
    position:
      "inset-y-0 right-0 h-full w-full max-w-[min(480px,90vw)] rounded-l-medium border-l border-border",
    openAnimation: "data-[state=open]:animate-drawer-in-right",
    closedAnimation: "data-[state=closed]:animate-drawer-out-right",
  },
  left: {
    position:
      "inset-y-0 left-0 h-full w-full max-w-[min(480px,90vw)] rounded-r-medium border-r border-border",
    openAnimation: "data-[state=open]:animate-drawer-in-left",
    closedAnimation: "data-[state=closed]:animate-drawer-out-left",
  },
  top: {
    position:
      "inset-x-0 top-0 w-full max-h-[min(480px,90vh)] rounded-b-medium border-b border-border",
    openAnimation: "data-[state=open]:animate-drawer-in-top",
    closedAnimation: "data-[state=closed]:animate-drawer-out-top",
  },
  bottom: {
    position:
      "inset-x-0 bottom-0 w-full max-h-[min(480px,90vh)] rounded-t-medium border-t border-border",
    openAnimation: "data-[state=open]:animate-drawer-in-bottom",
    closedAnimation: "data-[state=closed]:animate-drawer-out-bottom",
  },
}

export const drawerHeaderColorStyles: Record<DrawerHeaderColor, string> = {
  information: "bg-gradient-to-b from-brand-50 to-background",
  negative: "bg-gradient-to-b from-negative-50 to-background",
  neutral: "bg-gradient-to-b from-muted to-background",
  notice: "bg-gradient-to-b from-notice-50 to-background",
  positive: "bg-gradient-to-b from-positive-50 to-background",
}

export function getDrawerContentClassName(side: DrawerSide) {
  const styles = drawerSideStyles[side]
  return [
    "fixed z-[1001] flex flex-col bg-background shadow-lg outline-none",
    styles.position,
    styles.openAnimation,
    styles.closedAnimation,
  ].join(" ")
}
