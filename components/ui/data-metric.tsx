import { cn } from "@/lib/utils"

export interface DataMetricProps {
  value: string | number
  label?: string
  description?: string
  variant?: "default" | "accent" | "large"
  className?: string
}

export function DataMetric({
  value,
  label,
  description,
  variant = "default",
  className,
}: DataMetricProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <span className="text-label text-accent">
          {label}
        </span>
      )}
      <div
        className={cn(
          "font-mono tracking-tight",
          variant === "large" && "text-data-highlight text-accent",
          variant === "accent" && "text-3xl md:text-4xl font-bold text-accent",
          variant === "default" && "text-2xl md:text-3xl font-semibold text-foreground"
        )}
      >
        {value}
      </div>
      {description && (
        <p className="text-body-s text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
