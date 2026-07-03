import * as React from "react"

import { cn } from "@/lib/utils"

export interface DrawerHeaderAssetProps {
  src: string
  alt: string
  className?: string
  testID?: string
}

export const DrawerHeaderAsset = React.forwardRef<HTMLImageElement, DrawerHeaderAssetProps>(
  ({ src, alt, className, testID }, ref) => {
    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        data-testid={testID}
        className={cn("size-8 shrink-0 rounded-small object-cover", className)}
      />
    )
  }
)

DrawerHeaderAsset.displayName = "DrawerHeaderAsset"
