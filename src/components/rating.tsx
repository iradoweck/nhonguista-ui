"use client"

import * as React from "react"
import { Star } from "lucide-react"

import { cn } from "@/lib/utils"

export interface RatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number
  max?: number
  onValueChange?: (value: number) => void
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
} as const

function Rating({
  value = 0,
  max = 5,
  onValueChange,
  size = "md",
  className,
  ...props
}: RatingProps) {
  const [hoverValue, setHoverValue] = React.useState<number | null>(null)
  const isInteractive = !!onValueChange

  const displayValue = hoverValue ?? value

  return (
    <div
      className={cn("inline-flex items-center gap-0.5", className)}
      onMouseLeave={() => isInteractive && setHoverValue(null)}
      role={isInteractive ? "radiogroup" : "img"}
      aria-label={`Rating: ${value} out of ${max}`}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => {
        const starIndex = i + 1
        const filled = displayValue >= starIndex
        const halfFilled = !filled && displayValue >= starIndex - 0.5

        return (
          <button
            key={i}
            type="button"
            disabled={!isInteractive}
            className={cn(
              "relative transition-transform duration-150 disabled:cursor-default",
              isInteractive && "cursor-pointer hover:scale-110 active:scale-95"
            )}
            onClick={() => onValueChange?.(starIndex)}
            onMouseEnter={() => isInteractive && setHoverValue(starIndex)}
            tabIndex={isInteractive ? 0 : -1}
            aria-label={`${starIndex} star${starIndex > 1 ? "s" : ""}`}
          >
            {/* Background (empty) star */}
            <Star
              className={cn(
                sizeMap[size],
                "text-zinc-200 dark:text-zinc-700 transition-colors duration-150"
              )}
            />
            {/* Foreground (filled) star — clipped for half-star support */}
            {(filled || halfFilled) && (
              <Star
                className={cn(
                  sizeMap[size],
                  "absolute inset-0 fill-accent text-accent transition-colors duration-150"
                )}
                style={
                  halfFilled
                    ? { clipPath: "inset(0 50% 0 0)" }
                    : undefined
                }
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

export { Rating }
