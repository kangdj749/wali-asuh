"use client"

import Link from "next/link"
import { CheckCircle, MessageCircle, ArrowLeft, HeartHandshake } from "lucide-react"

export default function TerimaKasihPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 px-5 py-16 flex items-center">
      <div className="mx-auto w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4 shadow-sm">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
          Terima Kasih, Kakak Asuh 🤍
        </h1>

        {/* Message */}
        <p className="mt-4 text-slate-600 leading-relaxed">
          Komitmen Anda telah kami terima.
          <br />
          Hari ini, Anda ikut{" "}
          <span className="font-semibold text-slate-800">
            menjaga masa depan anak yatim, dhuafa, santri tahfizh,
            serta siswa & mahasiswa berprestasi.
          </span>
        </p>

        {/* What Happens Next */}
        <div className="mt-6 rounded-2xl bg-green-50 px-4 py-4 text-sm text-green-800 leading-relaxed">
          <p className="font-semibold mb-1">
            Apa selanjutnya?
          </p>
          <p>
            Admin kami akan menghubungi Anda melalui WhatsApp
            untuk konfirmasi dan panduan proses donasi.
          </p>
        </div>

        {/* Actions */}
        <div className="mt-10 space-y-4">
          {/* WA */}
          <a
            href="https://wa.me/6281322817712"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            <MessageCircle className="h-5 w-5" />
            Chat Admin Sekarang
          </a>

          {/* Back */}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Halaman Utama
          </Link>
        </div>

        {/* Spiritual Closing */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500">
          <HeartHandshake className="h-4 w-4 text-green-600" />
          <p>
            Semoga setiap kebaikan ini menjadi pahala jariyah yang terus mengalir.
          </p>
        </div>
      </div>
    </main>
  )
}
