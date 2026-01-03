"use client"

import { forwardRef } from "react"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { trackEvent } from "@/lib/track"

export type CTAButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "outline-light"

export type CTAButtonSize = "sm" | "md" | "lg"

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  source: string
  amount?: number
  variant?: CTAButtonVariant
  size?: CTAButtonSize
  fullWidth?: boolean
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  (
    {
      label,
      source,
      amount,
      variant = "primary",
      size = "md",
      fullWidth = false,
      className,
      ...props
    },
    ref
  ) => {
    const router = useRouter()

    const handleClick = () => {
      // 🔥 simpan context CTA
      localStorage.setItem("cta_source", source)
      if (amount) {
        localStorage.setItem("donation_amount", amount.toString())
      }

      // 🔥 tracking
      trackEvent("cta_click", {
        source,
        amount,
        funnel: "kakak_asuh",
      })

      // 👉 selalu ke halaman registrasi
      router.push("/registrasi")
    }

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        className={cn(
          "rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500",
          fullWidth && "w-full",
          size === "sm" && "px-4 py-2 text-sm",
          size === "md" && "px-6 py-3 text-base",
          size === "lg" && "px-8 py-4 text-lg",
          variant === "primary" &&
            "bg-green-600 text-white hover:bg-green-700 shadow-md",
          variant === "secondary" &&
            "bg-green-100 text-green-800 hover:bg-green-200",
          variant === "ghost" &&
            "text-green-700 hover:underline",
          variant === "outline-light" &&
            "bg-white/90 text-green-700 border-2 border-green-400 hover:bg-green-600 hover:text-white",
          className
        )}
        {...props}
      >
        {label}
      </button>
    )
  }
)

CTAButton.displayName = "CTAButton"
export default CTAButton
