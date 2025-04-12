"use client"

import * as React from "react"

interface SlotProps {
  children?: React.ReactNode
}

const Slot = React.forwardRef<HTMLElement, SlotProps & React.HTMLAttributes<HTMLElement>>(
  ({ children, ...props }, ref) => {
    if (!children) {
      return null
    }

    // If the child is a function, call it with the props
    if (typeof children === "function") {
      return children(props)
    }

    // If the child is a React element, clone it with the props
    if (React.isValidElement(children)) {
      return React.cloneElement(children, {
        ...props,
        ref: ref ? mergeRefs([ref, (children as any).ref]) : (children as any).ref,
      })
    }

    // Otherwise, render the child as is
    return <>{children}</>
  },
)
Slot.displayName = "Slot"

// Helper function to merge refs
function mergeRefs<T>(refs: React.Ref<T>[]) {
  return (value: T) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(value)
      } else if (ref != null) {
        ;(ref as React.MutableRefObject<T>).current = value
      }
    })
  }
}

export { Slot }
