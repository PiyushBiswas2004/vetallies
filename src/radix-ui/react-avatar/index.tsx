"use client"

import * as React from "react"

const Root = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
))
Root.displayName = "AvatarRoot"

const Image = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement> & {
    onLoadingStatusChange?: (status: "idle" | "loading" | "loaded" | "error") => void
  }
>(({ className, onLoadingStatusChange, ...props }, ref) => {
  const [status, setStatus] = React.useState<"idle" | "loading" | "loaded" | "error">("idle")

  React.useEffect(() => {
    onLoadingStatusChange?.(status)
  }, [status, onLoadingStatusChange])

  return (
    <img
      ref={ref}
      className={className}
      onLoad={() => setStatus("loaded")}
      onError={() => setStatus("error")}
      {...props}
    />
  )
})
Image.displayName = "AvatarImage"

const Fallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={className} {...props} />,
)
Fallback.displayName = "AvatarFallback"

export { Root, Image, Fallback }
