import * as React from "react"

/**
 * Generate initials from a name string
 * Examples:
 * - "John Doe" → "JD"
 * - "John" → "JO"
 * - "j" → "J"
 * - "" → ""
 */
export function getInitials(name: string): string {
  if (!name || typeof name !== "string") return ""
  
  const trimmedName = name.trim()
  if (!trimmedName) return ""
  
  // Split by spaces and filter empty strings
  const words = trimmedName.split(/\s+/).filter(Boolean)
  
  if (words.length === 0) return ""
  
  if (words.length === 1) {
    // Single word: take first 2 characters, uppercase
    return words[0].substring(0, 2).toUpperCase()
  }
  
  // Multiple words: take first character of first two words
  return (words[0][0] + words[1][0]).toUpperCase()
}

/**
 * Custom hook to track image loading status
 * Returns: "loading" | "loaded" | "error"
 */
export function useImageLoadStatus(src?: string) {
  const [status, setStatus] = React.useState<"loading" | "loaded" | "error">("loading")
  
  React.useEffect(() => {
    if (!src) {
      setStatus("error")
      return
    }
    
    setStatus("loading")
    
    const img = new Image()
    
    const handleLoad = () => setStatus("loaded")
    const handleError = () => setStatus("error")
    
    img.addEventListener("load", handleLoad)
    img.addEventListener("error", handleError)
    
    img.src = src
    
    // If image is already cached, it might have loaded synchronously
    if (img.complete) {
      if (img.naturalWidth === 0) {
        setStatus("error")
      } else {
        setStatus("loaded")
      }
    }
    
    return () => {
      img.removeEventListener("load", handleLoad)
      img.removeEventListener("error", handleError)
    }
  }, [src])
  
  return status
}
