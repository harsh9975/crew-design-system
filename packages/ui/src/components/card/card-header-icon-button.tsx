import * as React from "react"
import { Button } from "../button/button"

export interface CardHeaderIconButtonProps {
  icon: React.ComponentType<{ className?: string }>
  accessibilityLabel: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  isDisabled?: boolean
  className?: string
  testID?: string
}

export const CardHeaderIconButton = React.forwardRef<HTMLElement, CardHeaderIconButtonProps>(
  ({ icon, accessibilityLabel, onClick, isDisabled, className, testID }, ref) => {
    return (
      <Button
        ref={ref}
        variant="tertiary"
        color="primary"
        size="small"
        icon={icon}
        accessibilityLabel={accessibilityLabel}
        onClick={onClick}
        isDisabled={isDisabled}
        className={className}
        testID={testID}
      />
    )
  }
)

CardHeaderIconButton.displayName = "CardHeaderIconButton"
