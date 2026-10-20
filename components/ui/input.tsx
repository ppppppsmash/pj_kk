import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border border-line bg-background px-4 text-base text-foreground placeholder:text-subtle",
          "transition-[border-color,box-shadow] duration-150",
          "focus-visible:outline-none focus-visible:border-kouka focus-visible:ring-4 focus-visible:ring-kouka/15",
          "aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus-visible:ring-red-500/15",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
