import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[160px] w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-base leading-relaxed text-neutral-900 placeholder:text-neutral-400",
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
Textarea.displayName = "Textarea"

export { Textarea }
