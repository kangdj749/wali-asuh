"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Instagram, Facebook, HeartHandshake } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand & Trust */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <HeartHandshake className="w-6 h-6 text-green-300" />
              <h3 className="text-2xl font-bold">
                Program Kakak Asuh Tahfizh
              </h3>
            </div>

            <p className="text-green-100 text-sm md:text-base leading-relaxed max-w-md">
              Program pendampingan dan beasiswa pendidikan bagi anak-anak yatim &
              dhuafa, santri penghafal Al-Qur’an, serta siswa dan mahasiswa
              berprestasi agar tetap sekolah, berkembang optimal, dan tumbuh
              dalam lingkungan yang aman dan Qur’ani.
            </p>

            <p className="text-green-200 text-sm">
              Dikelola oleh{" "}
              <span className="font-semibold text-white">
                LAZ Graha Dhuafa Indonesia
              </span>{" "}
              — lembaga resmi dan amanah.
            </p>
          </motion.div>

          {/* Kontak & Sosial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold mb-3">
              Hubungi Kami
            </h4>

            <div className="flex items-center gap-3 text-green-100">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:gdhuafa@gmail.com"
                className="hover:underline"
              >
                gdhuafa@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3 text-green-100">
              <Phone className="w-5 h-5" />
              <a
                href="https://wa.me/6281322817712"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                +62 813-2281-7712 (WhatsApp)
              </a>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href="https://instagram.com/grahadhuafaorg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Graha Dhuafa Indonesia"
                className="hover:text-green-300 transition"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/gdi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Graha Dhuafa"
                className="hover:text-green-300 transition"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hashtag / Trust Signal */}
        <div className="text-center mb-8">
          <p className="text-green-100 text-sm">
            Program Pendidikan & Pendampingan Yatim, Dhuafa, dan Generasi Berprestasi
          </p>
          <p className="font-semibold text-green-50 mt-1">
            #KakakAsuhTahfizh &nbsp; #SedekahRutin &nbsp; #PahalaJariyah
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
          <p>
            © {new Date().getFullYear()} Yayasan Graha Dhuafa Indonesia.
            All rights reserved.
          </p>
          <p className="mt-2 md:mt-0">
            Dibangun dengan niat baik & amanah 🤍
          </p>
        </div>
      </div>
    </footer>
  )
}
