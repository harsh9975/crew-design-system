import {
  CircleAlert,
  CircleCheck,
  Info,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react"

import type { AlertColor } from "./alert-variants"

export const defaultAlertIcons: Record<AlertColor, LucideIcon> = {
  information: Info,
  negative: CircleAlert,
  notice: TriangleAlert,
  positive: CircleCheck,
  neutral: Info,
  primary: Info,
}
