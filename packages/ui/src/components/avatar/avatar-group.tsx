import * as React from "react"
import { cn } from "@/lib/utils"
import { Avatar, type AvatarProps } from "./avatar"

export interface AvatarGroupProps {
  /**
   * Array of avatar configurations
   */
  avatars: AvatarProps[]
  
  /**
   * Maximum number of avatars to display before showing "+N"
   * @default 4
   */
  max?: number
  
  /**
   * Size of all avatars in the group
   * @default "medium"
   */
  size?: "xsmall" | "small" | "medium" | "large" | "xlarge"
  
  /**
   * Variant of all avatars in the group
   * @default "circle"
   */
  variant?: "circle" | "square"
  
  /**
   * Additional CSS classes
   */
  className?: string
  
  /**
   * Callback when the "+N" indicator is clicked
   */
  onMoreClick?: () => void
}

const sizeClasses = {
  xsmall: "size-6",
  small: "size-8",
  medium: "size-10",
  large: "size-12",
  xlarge: "size-16",
}

const textSizeClasses = {
  xsmall: "text-[9px]",
  small: "text-[10px]",
  medium: "text-75",
  large: "text-100",
  xlarge: "text-200",
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  (
    {
      avatars,
      max = 4,
      size = "medium",
      variant = "circle",
      className,
      onMoreClick,
    },
    ref
  ) => {
    const visibleAvatars = avatars.slice(0, max)
    const remainingCount = Math.max(0, avatars.length - max)
    
    return (
      <div
        ref={ref}
        className={cn("flex items-center -space-x-4", className)}
      >
        {visibleAvatars.map((avatar, index) => (
          <Avatar
            key={index}
            {...avatar}
            size={size}
            variant={variant}
            className={avatar.className}
          />
        ))}
        
        {remainingCount > 0 && (
          <div
            className={cn(
              "inline-flex items-center justify-center shrink-0",
              "font-medium select-none",
              "bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-100",
              variant === "circle" ? "rounded-round" : "rounded-medium",
              sizeClasses[size],
              textSizeClasses[size],
              onMoreClick && "cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
            )}
            onClick={onMoreClick}
          >
            +{remainingCount}
          </div>
        )}
      </div>
    )
  }
)

AvatarGroup.displayName = "AvatarGroup"
