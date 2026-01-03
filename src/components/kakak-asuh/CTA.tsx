"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import CTAButton from "../CTAButton"
import { trackEvent } from "@/lib/track"

const NOMINALS = [50000, 100000, 250000]

export default function CTASection() {
  const [amount, setAmount] = useState(50000)

  const handleSelectAmount = (nominal: number) => {
    setAmount(nominal)

    // simpan ke localStorage untuk dibaca registrasi
    localStorage.setItem("donation_amount", nominal.toString())

    trackEvent("select_amount", {
      amount: nominal,
      source: "cta_final",
      campaign: "kakak_asuh_tahfizh",
    })
  }

  return (
    <section
      id="cta"
      className="py-24 bg-gradient-to-br from-emerald-600 to-green-700 text-white"
    >
      <div className="container mx-auto px-5 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Heading */}
          <h2 className="text-3xl font-extrabold leading-tight md:text-4xl">
            Saatnya Anda Menjadi Alasan
            <br className="hidden sm:block" />
            Mereka Terus Sekolah
          </h2>

          <p className="mt-5 text-lg text-white/90">
            Pilih dukungan bulanan dan jadilah{" "}
            <span className="font-semibold">Kakak Asuh</span>{" "}
            bagi anak yatim & dhuafa penghafal Al-Qur’an.
          </p>

          {/* Nominal Selector */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {NOMINALS.map((nominal) => {
              const isActive = amount === nominal

              return (
                <button
                  key={nominal}
                  onClick={() => handleSelectAmount(nominal)}
                  className={`
                    relative rounded-2xl border px-6 py-5 text-center
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-white text-green-700 border-white shadow-lg scale-[1.03]"
                        : "border-white/30 bg-white/5 hover:bg-white/10"
                    }
                  `}
                >
                  <div className="text-xl font-extrabold">
                    Rp{nominal.toLocaleString("id-ID")}
                  </div>
                  <div className="mt-1 text-sm opacity-80">
                    per bulan
                  </div>

                  {isActive && (
                    <span className="absolute -top-2 right-3 rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                      Dipilih
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-white/90 sm:grid-cols-3">
            {[
              "Laporan rutin & transparan",
              "Pendampingan terverifikasi",
              "Donasi aman & amanah",
            ].map((text) => (
              <div
                key={text}
                className="flex items-center justify-center gap-2"
              >
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>

          {/* Final CTA */}
          <div className="mt-12">
            <CTAButton
              source="cta_final"
              variant="primary"
              size="lg"
              fullWidth
              label={`Jadi Kakak Asuh • Rp${amount.toLocaleString("id-ID")}/bulan`}
            />
          </div>

          <p className="mt-6 text-xs text-white/80">
            Donasi bersifat rutin dan dapat dihentikan kapan saja.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
