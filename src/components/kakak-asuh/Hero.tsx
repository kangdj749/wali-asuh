"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import CTAButton from "@/components/CTAButton"
import { heroBlur } from "@/lib/image"

export default function HeroKakakAsuh() {
  const router = useRouter()
  const heroRef = useRef<HTMLElement | null>(null)
  const [showStickyCTA, setShowStickyCTA] = useState(false)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setShowStickyCTA(!entry.isIntersecting),
      { threshold: 0.25 }
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  const goToRegistrasi = (source: string) => {
    localStorage.setItem("referrer", source)
    router.push("/registrasi")
  }

  return (
    <>
      <section
        id="hero"
        ref={heroRef}
        className="relative flex min-h-[92vh] items-center"
      >
        <Image
          src="/wali-asuh.jpg"
          alt="Program Kakak Asuh & Beasiswa Pendidikan"
          fill
          priority
          placeholder="blur"
          blurDataURL={heroBlur()}
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full px-5 pt-28 pb-32">
          <div className="mx-auto max-w-xl text-center text-white md:text-left">
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Jadilah Kakak Asuh.
              <br />
              <span className="text-green-300">
                Jangan Biarkan Mereka Berhenti Sekolah.
              </span>
            </h1>

            <p className="mt-5 text-base text-white/90 md:text-lg">
              Mereka bukan malas.  
              Mereka hanya kehilangan ayah, ibu, dan penopang hidupnya.
            </p>

            <p className="mt-4 text-sm text-white/85 md:text-base">
              Bersama Anda, anak yatim, dhuafa, santri tahfizh, hingga pelajar
              berprestasi tetap belajar, menghafal Al-Qur’an, dan menjaga harapan.
            </p>

            <div className="mt-8 flex justify-center md:justify-start">
              <CTAButton
                source="hero_ads"
                label="Jadi Kakak Asuh Sekarang"
                size="lg"
                variant="outline-light"
                onClick={() => goToRegistrasi("hero_ads")}
              />
            </div>

            <p className="mt-6 text-xs text-white/70">
              Mulai dari Rp50.000/bulan <br />
              Dikelola lembaga resmi & amanah
            </p>
          </div>
        </div>
      </section>

      {showStickyCTA && (
        <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
          <div className="border-t border-green-100 bg-white/95 px-4 py-3 backdrop-blur shadow">
            <CTAButton
              source="sticky_ads"
              label="Jadi Kakak Asuh Sekarang"
              fullWidth
              variant="primary"
              onClick={() => goToRegistrasi("sticky_ads")}
            />
          </div>
        </div>
      )}
    </>
  )
}
