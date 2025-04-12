import type * as React from "react"

declare module "@radix-ui/react-avatar" {
  interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {}

  interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    onLoadingStatusChange?: (status: "idle" | "loading" | "loaded" | "error") => void
  }

  interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

  const Root: React.ForwardRefExoticComponent<AvatarProps & React.RefAttributes<HTMLDivElement>>
  const Image: React.ForwardRefExoticComponent<AvatarImageProps & React.RefAttributes<HTMLImageElement>>
  const Fallback: React.ForwardRefExoticComponent<AvatarFallbackProps & React.RefAttributes<HTMLDivElement>>
}
