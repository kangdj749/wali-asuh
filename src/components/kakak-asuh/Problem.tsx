"use client"

import { motion } from "framer-motion"
import {
  BookX,
  Home,
  Utensils,
  HeartCrack,
  GraduationCap,
} from "lucide-react"
import CTAButton from "../CTAButton"

const problems = [
  {
    icon: BookX,
    text: "Terancam putus sekolah karena keterbatasan biaya pendidikan.",
  },
  {
    icon: Utensils,
    text: "Kesulitan memenuhi kebutuhan makan, perlengkapan belajar, dan transportasi.",
  },
  {
    icon: Home,
    text: "Tinggal di rumah sempit dan tidak layak untuk belajar dengan tenang.",
  },
  {
    icon: GraduationCap,
    text: "Santri tahfizh menghafal Al-Qur’an tanpa nutrisi dan fasilitas yang memadai.",
  },
  {
    icon: HeartCrack,
    text: "Kehilangan orang tua atau penanggung nafkah utama.",
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="bg-gradient-to-b from-white to-red-50 py-20"
    >
      <div className="container mx-auto px-5 md:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-slate-800 md:text-4xl">
            Perjuangan yang Mereka Hadapi, Setiap Hari
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Banyak anak dan generasi muda berpotensi besar harus menghadapi
            kenyataan pahit sejak usia dini.
          </p>
        </motion.div>

        {/* Problem List */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-2xl border border-red-100 bg-white p-5 shadow-sm transition hover:shadow-md"
              >
                <div className="flex-shrink-0 rounded-xl bg-red-100/60 p-3">
                  <Icon className="h-6 w-6 text-red-600" />
                </div>
                <p className="text-slate-700 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Emotional Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-2xl text-center"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Mereka bukan kurang semangat. <br />
            Mereka bukan kurang usaha. <br />
            <span className="font-semibold text-red-600">
              Mereka hanya kekurangan satu hal:
              <br />
              pendamping yang mau bertahan bersama mereka.
            </span>
          </p>

          <p className="mt-4 text-base font-medium text-slate-800">
            Tanpa dukungan, mimpi mereka bisa berhenti — hari ini.
          </p>

          <div className="mt-8">
            <CTAButton
              source="problem"
              variant="ghost"
              label="Saya ingin membantu →"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
