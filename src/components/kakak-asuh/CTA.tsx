"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, CreditCard } from "lucide-react"
import CTAButton from "../CTAButton"
import { trackEvent } from "@/lib/track"

const NOMINALS = [50000, 100000, 150000, 300000, 500000]

export default function CTASection() {
  const [amount, setAmount] = useState(50000)

  const handleSelectAmount = (nominal: number) => {
    setAmount(nominal)

    // simpan ke localStorage → dibaca halaman registrasi
    localStorage.setItem("donation_amount", nominal.toString())

    trackEvent("select_amount", {
      amount: nominal,
      source: "cta_final",
      campaign: "kakak_asuh_beasiswa",
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
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Mari Ambil Peran Hari Ini
          </h2>

          <p className="mt-5 text-lg text-white/90 leading-relaxed">
            Kita tidak bisa membantu semua orang.  
            <br />
            <span className="font-semibold">
              Tapi bersama, kita bisa mengubah hidup seseorang.
            </span>
          </p>

          {/* Nominal Selector */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {NOMINALS.map((nominal) => {
              const isActive = amount === nominal

              return (
                <button
                  key={nominal}
                  onClick={() => handleSelectAmount(nominal)}
                  className={`
                    relative rounded-2xl border px-5 py-4 text-center
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-white text-green-700 border-white shadow-lg scale-[1.04]"
                        : "border-white/30 bg-white/5 hover:bg-white/10"
                    }
                  `}
                >
                  <div className="text-lg font-extrabold">
                    Rp{nominal.toLocaleString("id-ID")}
                  </div>
                  <div className="mt-1 text-xs opacity-80">
                    per bulan
                  </div>

                  {isActive && (
                    <span className="absolute -top-2 right-2 rounded-full bg-green-600 px-2 py-0.5 text-[10px] font-semibold text-white shadow">
                      Dipilih
                    </span>
                  )}
                </button>
              )
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/90">
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

          {/* Primary CTA */}
          <div className="mt-12">
            <CTAButton
              source="cta_final"
              variant="primary"
              size="lg"
              fullWidth
              label={`Jadi Kakak Asuh • Rp${amount.toLocaleString(
                "id-ID"
              )}/bulan`}
            />
          </div>

          {/* Transfer Manual */}
          <div className="mt-10 rounded-2xl bg-white/10 border border-white/20 p-5 text-sm text-white/90">
            <div className="flex items-center justify-center gap-2 mb-3">
              <CreditCard className="h-4 w-4" />
              <span className="font-semibold">
                Atau transfer langsung ke:
              </span>
            </div>

            <div className="space-y-1">
              <p>
                💳 <span className="font-semibold">BSI</span> 711 411 411 6
              </p>
              <p>
                💳 <span className="font-semibold">BCA</span> 6395969793
              </p>
              <p className="text-xs opacity-80 mt-2">
                a.n Yayasan Graha Dhuafa Indonesia
              </p>
            </div>
          </div>

          {/* Closing Line */}
          <p className="mt-8 text-sm text-white/90 leading-relaxed">
            Bantuan kecil Anda,  
            <span className="font-semibold">
              {" "}menjadi harapan besar bagi masa depan mereka.
            </span>
            <br />
            Mari jadi Kakak Asuh. Mari kuatkan langkah mereka menuju masa depan
            yang lebih cerah.
          </p>

          <p className="mt-4 text-xs text-white/70">
            Donasi bersifat rutin dan dapat dihentikan kapan saja.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
