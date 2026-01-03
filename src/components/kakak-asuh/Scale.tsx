"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, CalendarClock } from "lucide-react"
import CTAButton from "../CTAButton"

const stats = [
  {
    icon: Users,
    value: "27 Anak",
    desc: "Yatim & dhuafa penghafal Al-Qur’an sedang dibina secara aktif.",
  },
  {
    icon: CalendarClock,
    value: "Setiap Semester",
    desc: "Jumlah anak bertambah seiring masuknya tahun ajaran baru.",
  },
  {
    icon: TrendingUp,
    value: "40+ Anak",
    desc: "Diproyeksikan membutuhkan pendampingan pada tahun mendatang.",
  },
]

export default function ScaleSection() {
  return (
    <section
      id="scale"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
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
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Dampak Program Terus Bertumbuh
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Semakin banyak anak yang membutuhkan pendampingan jangka panjang,
            bukan bantuan sesaat.
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {stats.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm hover:shadow-md transition"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100/70">
                  <Icon className="h-7 w-7 text-green-700" />
                </div>

                <h3 className="text-2xl font-extrabold text-green-700">
                  {item.value}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Logic + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 max-w-3xl mx-auto text-center"
        >
          <p className="text-lg text-slate-700">
            Artinya, kebutuhan <span className="font-semibold">Kakak Asuh</span>{" "}
            akan terus meningkat.  
            <br />
            <span className="font-semibold text-green-700">
              Dukungan rutin memastikan pendidikan mereka tetap berjalan.
            </span>
          </p>

          <div className="mt-6">
            <CTAButton
              source="scale"
              variant="secondary"
              label="Ambil Peran Sekarang"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
