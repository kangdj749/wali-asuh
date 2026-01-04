"use client"

import { motion } from "framer-motion"
import { Users, TrendingUp, CalendarClock } from "lucide-react"
import CTAButton from "../CTAButton"

const stats = [
  {
    icon: Users,
    value: "27 Anak",
    desc: "Yatim, dhuafa, santri tahfizh, dan pelajar berprestasi sedang dibina secara aktif.",
  },
  {
    icon: CalendarClock,
    value: "Setiap Semester",
    desc: "Anak dan mahasiswa baru datang dengan kebutuhan pendidikan yang semakin beragam.",
  },
  {
    icon: TrendingUp,
    value: "40+ Penerima Manfaat",
    desc: "Diperkirakan akan membutuhkan pendampingan rutin dalam waktu dekat.",
  },
]

export default function ScaleSection() {
  return (
    <section
      id="scale"
      className="bg-gradient-to-b from-green-50 to-white py-20"
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
            Bukan Satu atau Dua Anak. <br className="hidden md:block" />
            Jumlahnya Terus Bertambah.
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Program ini hadir untuk menjawab kebutuhan nyata anak-anak dan
            generasi muda dari keluarga dengan keterbatasan ekonomi.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-green-100 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
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

        {/* Closing Logic */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl text-center"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            📌 Artinya, program ini hanya bisa bertahan jika ada{" "}
            <span className="font-semibold">dukungan rutin</span> dari para{" "}
            <span className="font-semibold text-green-700">Kakak Asuh</span>.
            <br />
            Tanpa pendampingan berkelanjutan, semakin banyak anak yang kembali
            berada di titik rawan putus sekolah.
          </p>

          <div className="mt-8">
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
