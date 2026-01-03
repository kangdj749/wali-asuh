"use client"

import { useEffect, useState } from "react"
import CTAButton from "@/components/CTAButton"

export default function StickyCTAMobile() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const cta = document.getElementById("cta")
    if (!cta) return

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.4 }
    )

    observer.observe(cta)
    return () => observer.disconnect()
  }, [])

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="mx-4 mb-4 rounded-2xl shadow-xl bg-white">
        <CTAButton
          source="sticky"
          label="Jadi Kakak Asuh Sekarang"
          className="w-full rounded-2xl"
        />
      </div>
    </div>
  )
}
