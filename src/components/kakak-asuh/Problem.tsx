"use client"

import { motion } from "framer-motion"
import {
  BookX,
  Home,
  Footprints,
  Utensils,
  HeartCrack,
} from "lucide-react"
import CTAButton from "../CTAButton"

const problems = [
  {
    icon: BookX,
    text: "Berisiko putus sekolah karena tidak mampu memenuhi biaya pendidikan.",
  },
  {
    icon: Utensils,
    text: "Asupan gizi tidak mencukupi, menyulitkan mereka tumbuh dan menghafal Al-Qur’an.",
  },
  {
    icon: Home,
    text: "Tinggal di tempat yang sempit dan kurang layak untuk belajar dengan tenang.",
  },
  {
    icon: Footprints,
    text: "Menempuh perjalanan jauh setiap hari demi tetap bisa bersekolah.",
  },
  {
    icon: HeartCrack,
    text: "Kehilangan orang tua dan tidak memiliki penanggung kebutuhan harian.",
  },
]

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="py-20 bg-gradient-to-b from-white to-red-50"
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
            Tantangan Nyata yang Mereka Hadapi
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Mereka punya semangat dan potensi.  
            <span className="font-semibold text-red-600">
              {" "}Namun hidup belum berpihak.
            </span>
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {problems.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 rounded-2xl border border-red-100 bg-white p-5 shadow-sm hover:shadow-md transition"
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

        {/* Closing Narrative */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 text-center max-w-2xl mx-auto"
        >
          <p className="text-slate-700 text-lg">
            Jika dibiarkan, masa depan mereka bisa berhenti di sini.  
            <br />
            <span className="font-semibold text-red-600">
              Padahal, satu uluran tangan bisa mengubah segalanya.
            </span>
          </p>

          <div className="mt-6">
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
