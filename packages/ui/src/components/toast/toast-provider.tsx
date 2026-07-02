import * as React from "react"
import { Alert, type AlertProps } from "../alert/alert"
import { cn } from "@/lib/utils"

export type ToastPosition = 
  | "top-left" 
  | "top-center" 
  | "top-right" 
  | "bottom-left" 
  | "bottom-center" 
  | "bottom-right"

export type Toast = Omit<AlertProps, "isDismissible" | "onDismiss"> & {
  id: string
  duration?: number
  position?: ToastPosition
}

type ToastContextValue = {
  toasts: Toast[]
  addToast: (toast: Omit<Toast, "id">) => string
  removeToast: (id: string) => void
  clearToasts: () => void
}

const ToastContext = React.createContext<ToastContextValue | undefined>(undefined)

const positionClasses: Record<ToastPosition, string> = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4",
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<Toast[]>([])

  const addToast = React.useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000,
      position: toast.position ?? "top-right",
    }

    setToasts((prev) => [newToast, ...prev])

    // Auto-dismiss
    if (newToast.duration && newToast.duration > 0) {
      setTimeout(() => {
        removeToast(id)
      }, newToast.duration)
    }

    return id
  }, [])

  const removeToast = React.useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const clearToasts = React.useCallback(() => {
    setToasts([])
  }, [])

  // Group toasts by position
  const toastsByPosition = React.useMemo(() => {
    const grouped: Partial<Record<ToastPosition, Toast[]>> = {}
    toasts.forEach((toast) => {
      const position = toast.position ?? "top-right"
      if (!grouped[position]) {
        grouped[position] = []
      }
      grouped[position]!.push(toast)
    })
    return grouped
  }, [toasts])

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearToasts }}>
      {children}
      {(Object.keys(toastsByPosition) as ToastPosition[]).map((position: ToastPosition) => {
        const positionToasts = toastsByPosition[position]
        const maxVisible = 3 // Show max 3 toasts in stack
        
        return (
          <div
            key={position}
            className={cn(
              "fixed z-50 pointer-events-none",
              "w-full max-w-md",
              positionClasses[position]
            )}
          >
            <div className="relative">
              {positionToasts?.slice(0, maxVisible).map((toast: Toast, index: number) => {
                const isTop = index === 0
                const scale = 1 - index * 0.05 // Each toast scales down by 5%
                const yOffset = index * 12 // Each toast moves down by 12px
                const opacity = 1 - index * 0.15 // Each toast fades slightly
                
                return (
                  <div
                    key={toast.id}
                    className={cn(
                      "pointer-events-auto absolute inset-x-0",
                      "transition-all duration-300 ease-out"
                    )}
                    style={{
                      transform: `translateY(${yOffset}px) scale(${scale})`,
                      opacity: opacity,
                      zIndex: maxVisible - index,
                      transformOrigin: position.includes('top') ? 'top' : 'bottom',
                    }}
                  >
                    <div
                      className={cn(
                        isTop && "animate-in fade-in slide-in-from-top-2 duration-300"
                      )}
                    >
                      <Alert
                        {...toast}
                        isDismissible
                        onDismiss={() => removeToast(toast.id)}
                        isFullWidth
                        maxWidth="100%"
                      />
                    </div>
                    {!isTop && (
                      <div
                        className="absolute inset-0 bg-background/30 backdrop-blur-[2px] rounded-large pointer-events-none"
                        style={{ zIndex: 1 }}
                      />
                    )}
                  </div>
                )
              })}
              {positionToasts && positionToasts.length > maxVisible && (
                <div
                  className="absolute inset-x-0 pointer-events-none"
                  style={{
                    transform: `translateY(${maxVisible * 12}px) scale(${1 - maxVisible * 0.05})`,
                    zIndex: 0,
                    transformOrigin: position.includes('top') ? 'top' : 'bottom',
                  }}
                >
                  <div className="bg-muted/50 backdrop-blur-sm rounded-large p-3 text-center">
                    <span className="text-xs text-muted-foreground font-medium">
                      +{positionToasts.length - maxVisible} more
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )
      })}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}
