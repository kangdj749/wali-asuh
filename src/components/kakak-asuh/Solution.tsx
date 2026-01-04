"use client"

import { motion } from "framer-motion"
import {
  GraduationCap,
  Utensils,
  Shirt,
  Brain,
  HeartPulse,
  Landmark,
  Home,
  ShieldCheck,
} from "lucide-react"
import CTAButton from "../CTAButton"

const supports = [
  {
    icon: Utensils,
    title: "Kebutuhan Makan & Dasar",
    desc: "Memenuhi biaya makan harian dan kebutuhan pokok agar anak bisa belajar dengan layak.",
  },
  {
    icon: GraduationCap,
    title: "Biaya Pendidikan",
    desc: "Mendukung biaya sekolah & kampus, termasuk administrasi dan kebutuhan akademik.",
  },
  {
    icon: Shirt,
    title: "Perlengkapan Belajar",
    desc: "Seragam, tas, sepatu, buku, dan alat tulis yang menunjang proses belajar.",
  },
  {
    icon: Brain,
    title: "Pembinaan Tahfizh & Akhlak",
    desc: "Pendampingan hafalan Al-Qur’an, pembinaan karakter, dan bimbingan mental.",
  },
  {
    icon: HeartPulse,
    title: "Kesehatan & Gizi Dasar",
    desc: "Pemeriksaan kesehatan, asupan gizi, dan perawatan dasar secara berkala.",
  },
  {
    icon: Landmark,
    title: "Kegiatan Keislaman",
    desc: "Halaqah, setoran hafalan, pembinaan adab, dan penguatan nilai keislaman.",
  },
  {
    icon: Home,
    title: "Mukim & Pendampingan",
    desc: "Fasilitas tinggal, lingkungan aman, serta pendampingan harian yang terarah.",
  },
]

export default function SolutionSection() {
  return (
    <section
      id="solution"
      className="bg-gradient-to-b from-white to-blue-50 py-20"
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
            Program Kakak Asuh & <br className="hidden md:block" />
            Beasiswa Pendidikan
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Donasi Anda bukan sekadar bantuan sesaat, melainkan{" "}
            <span className="font-semibold">
              pendampingan jangka panjang
            </span>{" "}
            bagi anak-anak dan generasi muda yang sedang berjuang.
          </p>
        </motion.div>

        {/* Support Items */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {supports.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-xl bg-blue-100/70 p-3">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-base font-bold text-slate-800">
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

        {/* System & Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-3xl rounded-2xl border border-blue-100 bg-white p-6 text-center shadow-sm"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-blue-100 p-3">
              <ShieldCheck className="h-6 w-6 text-blue-700" />
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            🔒 Donasi tidak diberikan langsung ke anak, melainkan dikelola oleh
            pengurus program untuk menjamin keberlanjutan.
            <br />
            📆 Komitmen fleksibel 3, 6, atau 12 bulan — mulai dari{" "}
            <span className="font-semibold">Rp50.000/bulan</span>.
            <br />
            👥 Bisa untuk individu, keluarga, komunitas, maupun patungan kantor.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Program ini dikelola di bawah{" "}
            <span className="font-semibold">
              LAZ Graha Dhuafa Indonesia
            </span>
            , lembaga resmi dengan laporan rutin dan pengelolaan amanah.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <CTAButton
            source="solution"
            variant="primary"
            size="lg"
            label="Saya Siap Menjadi Kakak Asuh"
          />
        </motion.div>
      </div>
    </section>
  )
}
