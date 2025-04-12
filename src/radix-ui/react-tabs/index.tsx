"use client"

import * as React from "react"

const TabsContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
}>({
  value: "",
  onValueChange: () => {},
})

interface TabsProps {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  children?: React.ReactNode
}

const Root = React.forwardRef<HTMLDivElement, TabsProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ value, defaultValue, onValueChange, children, ...props }, ref) => {
    const [tabValue, setTabValue] = React.useState(value || defaultValue || "")

    React.useEffect(() => {
      if (value !== undefined) {
        setTabValue(value)
      }
    }, [value])

    const handleValueChange = React.useCallback(
      (newValue: string) => {
        setTabValue(newValue)
        onValueChange?.(newValue)
      },
      [onValueChange],
    )

    return (
      <TabsContext.Provider value={{ value: tabValue, onValueChange: handleValueChange }}>
        <div ref={ref} {...props}>
          {children}
        </div>
      </TabsContext.Provider>
    )
  },
)
Root.displayName = "Tabs"

const List = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((props, ref) => (
  <div ref={ref} role="tablist" {...props} />
))
List.displayName = "TabsList"

interface TriggerProps {
  value: string
  disabled?: boolean
  children?: React.ReactNode
}

const Trigger = React.forwardRef<
  HTMLButtonElement,
  TriggerProps & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value">
>(({ value, disabled, children, ...props }, ref) => {
  const { value: selectedValue, onValueChange } = React.useContext(TabsContext)
  const isSelected = selectedValue === value

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isSelected}
      data-state={isSelected ? "active" : "inactive"}
      disabled={disabled}
      onClick={() => onValueChange(value)}
      {...props}
    >
      {children}
    </button>
  )
})
Trigger.displayName = "TabsTrigger"

interface ContentProps {
  value: string
  forceMount?: boolean
  children?: React.ReactNode
}

const Content = React.forwardRef<HTMLDivElement, ContentProps & React.HTMLAttributes<HTMLDivElement>>(
  ({ value, forceMount, children, ...props }, ref) => {
    const { value: selectedValue } = React.useContext(TabsContext)
    const isSelected = selectedValue === value

    if (!isSelected && !forceMount) {
      return null
    }

    return (
      <div ref={ref} role="tabpanel" data-state={isSelected ? "active" : "inactive"} hidden={!isSelected} {...props}>
        {children}
      </div>
    )
  },
)
Content.displayName = "TabsContent"

export { Root, List, Trigger, Content }
