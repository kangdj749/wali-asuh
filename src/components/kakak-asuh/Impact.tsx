"use client"

import { motion } from "framer-motion"
import {
  Heart,
  Sparkles,
  Star,
  Users,
  BookOpenCheck,
  Landmark,
} from "lucide-react"
import CTAButton from "../CTAButton"

const impacts = [
  {
    icon: Heart,
    title: "Anak Yatim Tetap Sekolah",
    desc: "Mereka bisa belajar tanpa rasa takut akan biaya dan kebutuhan dasar.",
  },
  {
    icon: Sparkles,
    title: "Hafalan & Prestasi Terjaga",
    desc: "Santri mampu menghafal 1–5 juz, pelajar & mahasiswa berprestasi tetap melanjutkan pendidikan.",
  },
  {
    icon: Star,
    title: "Percaya Diri & Terarah",
    desc: "Pendampingan rutin membentuk mental, karakter, dan harapan masa depan.",
  },
]

const longTermImpacts = [
  {
    icon: BookOpenCheck,
    text: "Berilmu & berprestasi",
  },
  {
    icon: Landmark,
    text: "Berakhlak & Qur’ani",
  },
  {
    icon: Users,
    text: "Siap memberi manfaat bagi masyarakat",
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
            menghadirkan perubahan yang benar-benar dirasakan — hari ini,
            dan untuk masa depan mereka.
          </p>
        </motion.div>

        {/* Impact Cards — Individu */}
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

        {/* Dampak Kolektif */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-700">
            Puluhan anak tumbuh di lingkungan yang aman dan mendukung.  
            <br />
            Kebutuhan pendidikan dan gizi terpenuhi,  
            <span className="font-semibold text-amber-700">
              {" "}mereka lebih sehat, ceria, dan percaya diri.
            </span>
          </p>
        </motion.div>

        {/* Dampak Jangka Panjang */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {longTermImpacts.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-white border border-amber-100 px-4 py-3 shadow-sm"
                >
                  <Icon className="h-5 w-5 text-amber-700" />
                  <span className="text-slate-700 font-medium">
                    {item.text}
                  </span>
                </div>
              )
            })}
          </div>
        </motion.div>

        {/* Dampak Spiritual */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <blockquote className="italic text-slate-700 leading-relaxed">
            Rasulullah ﷺ bersabda:
            <br />
            <span className="font-semibold">
              “Aku dan orang yang menanggung anak yatim di surga seperti ini.”
            </span>
            <br />
            <span className="text-sm">(HR. Bukhari)</span>
          </blockquote>

          <p className="mt-6 text-slate-600">
            Setiap ayat yang mereka hafal,  
            setiap ilmu yang mereka pelajari —  
            <span className="font-semibold text-amber-700">
              {" "}mengalir sebagai pahala jariyah untuk Anda, InsyaAllah.
            </span>
          </p>

          <div className="mt-8">
            <CTAButton
              source="impact"
              size="lg"
              label="Saya Siap Menjadi Kakak Asuh"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
