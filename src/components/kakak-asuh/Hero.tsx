"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import CTAButton from "@/components/CTAButton"
import { heroBlur } from "@/lib/image"
import { useRouter } from "next/navigation"



export default function HeroKakakAsuh() {
  const router = useRouter() // ✅ DI DALAM COMPONENT
  const heroRef = useRef<HTMLElement | null>(null)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  // ===== Scroll Observer: Hero → Sticky CTA =====
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyCTA(!entry.isIntersecting)
      },
      { threshold: 0.25 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-[92vh] flex items-center"
      >
        {/* Background */}
        <Image
          src="/wali-asuh.jpg"
          alt="Program Kakak Asuh Anak Yatim Tahfizh"
          fill
          priority
          placeholder="blur"
          blurDataURL={heroBlur()}
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full px-5 pt-28 pb-32">
          <div className="mx-auto max-w-xl text-white text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Satu Komitmen Anda,
              <br />
              <span className="text-green-300">
                Menjaga Masa Depan Anak Yatim Tahfizh
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-white/90 leading-relaxed">
              Dampingi anak yatim dan dhuafa penghafal Al-Qur’an agar tetap
              sekolah, menghafal, dan tumbuh dengan pendampingan yang layak.
            </p>

            {/* CTA HERO */}
            <div className="mt-8 flex justify-center md:justify-start">
              <CTAButton
                source="hero"
                label="Jadi Kakak Asuh Sekarang"
                size="lg"
                variant="outline-light"
              />
            </div>

            {/* Trust Microcopy */}
            <p className="mt-6 text-xs text-white/70 leading-relaxed">
              ✔ Sedekah rutin sesuai kemampuan <br />
              ✔ Dikelola lembaga resmi & amanah
            </p>
          </div>
        </div>
      </section>

      {/* ================= STICKY CTA (MOBILE) ================= */}
      {showStickyCTA && (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden">
          <div className="bg-white/95 backdrop-blur border-t border-green-100 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <CTAButton
              source="sticky_mobile"
              label="Jadi Kakak Asuh Sekarang"
              fullWidth
              variant="primary"
            />
          </div>
        </div>
      )}
    </>
  )
}
