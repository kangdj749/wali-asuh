"use client"

import { motion } from "framer-motion"
import { Sparkles, Heart, Star } from "lucide-react"
import CTAButton from "../CTAButton"

const impacts = [
  {
    icon: Heart,
    title: "Tetap Bisa Sekolah",
    desc: "Biaya pendidikan terbantu sehingga anak tidak lagi terancam putus sekolah.",
  },
  {
    icon: Sparkles,
    title: "Hafalan Terjaga",
    desc: "Kebutuhan dasar terpenuhi, membuat mereka fokus menghafal Al-Qur’an.",
  },
  {
    icon: Star,
    title: "Tumbuh Lebih Percaya Diri",
    desc: "Pendampingan rutin membantu anak berkembang dengan arah yang jelas.",
  },
]

export default function ImpactSection() {
  return (
    <section
      id="impact"
      className="py-20 bg-gradient-to-b from-amber-50 to-white"
    >
      <div className="container mx-auto px-5 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-amber-700">
            Dampak Nyata dari Kepedulian Anda
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Setiap peran <span className="font-semibold">Kakak Asuh</span>{" "}
            menghadirkan perubahan yang benar-benar dirasakan anak binaan.
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {impacts.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-amber-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100/70">
                  <Icon className="h-7 w-7 text-amber-700" />
                </div>

                <h3 className="text-lg font-bold text-slate-800">
                  {item.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Closing + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-700">
            Kebaikan yang Anda mulai hari ini,  
            <span className="font-semibold text-amber-700">
              {" "}menjadi bekal masa depan mereka.
            </span>
          </p>

          <div className="mt-6">
            <CTAButton
              source="impact"
              label="Saya Siap Menjadi Kakak Asuh"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
