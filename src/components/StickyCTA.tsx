"use client"

import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/track"
import { useEffect, useState } from "react"

export default function StickyCTA() {
  const [show, setShow] = useState(false)

  const amount = 50000
  const waNumber = "6281234567890"
  const message = encodeURIComponent(
    `Assalamu’alaikum, saya ingin menjadi Kakak Asuh dengan donasi Rp${amount.toLocaleString(
      "id-ID"
    )} / bulan.`
  )
  const waLink = `https://wa.me/${waNumber}?text=${message}`

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setShow(true)
      } else {
        setShow(false)
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
      <div className="bg-white border-t shadow-xl px-4 py-3 flex items-center gap-3">
        {/* Amount */}
        <div className="flex-1">
          <p className="text-xs text-slate-500">Mulai dari</p>
          <p className="text-lg font-bold text-green-700">
            Rp50.000<span className="text-sm font-normal"> / bulan</span>
          </p>
        </div>

        {/* CTA Button */}
        <Button
          className="rounded-xl px-6"
          onClick={() => {
            trackEvent("StickyDonateClick", {
              value: amount,
              currency: "IDR",
              campaign: "Kakak Asuh Tahfizh",
              source: "Sticky Mobile CTA",
            })

            window.open(waLink, "_blank")
          }}
        >
          Jadi Kakak Asuh
        </Button>
      </div>
    </div>
  )
}
