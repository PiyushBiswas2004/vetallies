import type * as React from "react"

declare module "@radix-ui/react-slot" {
  interface SlotProps {
    children?: React.ReactNode
  }

  const Slot: React.ForwardRefExoticComponent<
    SlotProps & React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>
  >
}
