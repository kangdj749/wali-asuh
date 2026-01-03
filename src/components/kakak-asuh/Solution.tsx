"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  BookOpen,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react"
import CTAButton from "../CTAButton"

const solutions = [
  {
    icon: GraduationCap,
    title: "Biaya Pendidikan",
    desc: "Membantu SPP, perlengkapan sekolah, dan kebutuhan belajar anak.",
  },
  {
    icon: BookOpen,
    title: "Pembinaan Tahfizh",
    desc: "Pendampingan hafalan Al-Qur’an bersama ustadz pembina terpercaya.",
  },
  {
    icon: HeartHandshake,
    title: "Pendampingan Rutin",
    desc: "Monitoring perkembangan akademik, mental, dan spiritual anak.",
  },
  {
    icon: ShieldCheck,
    title: "Amanah & Transparan",
    desc: "Laporan rutin dan penyaluran dana yang jelas serta terverifikasi.",
  },
]

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="py-20 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto px-5 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Solusi Nyata untuk Masa Depan Mereka
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Program <span className="font-semibold">Kakak Asuh</span> hadir
            sebagai pendamping jangka panjang, bukan bantuan sesaat.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {solutions.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100/70 p-3">
                    <Icon className="h-7 w-7 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Bridge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <CTAButton
            source="solution"
            variant="secondary"
            label="Saya Ingin Menjadi Kakak Asuh"
            />
        </motion.div>
      </div>
    </section>
  )
}
