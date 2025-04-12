import type * as React from "react"

declare module "@radix-ui/react-tabs" {
  interface TabsProps {
    value?: string
    defaultValue?: string
    onValueChange?: (value: string) => void
    children?: React.ReactNode
  }

  interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

  interface TabsTriggerProps {
    value: string
    disabled?: boolean
    children?: React.ReactNode
  }

  interface TabsContentProps {
    value: string
    forceMount?: boolean
    children?: React.ReactNode
  }

  const Root: React.ForwardRefExoticComponent<
    TabsProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >
  const List: React.ForwardRefExoticComponent<TabsListProps & React.RefAttributes<HTMLDivElement>>
  const Trigger: React.ForwardRefExoticComponent<
    TabsTriggerProps &
      Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value"> &
      React.RefAttributes<HTMLButtonElement>
  >
  const Content: React.ForwardRefExoticComponent<
    TabsContentProps & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
  >
}
