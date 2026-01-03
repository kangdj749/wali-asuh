"use client"

import Link from "next/link"
import { CheckCircle, MessageCircle, ArrowLeft } from "lucide-react"

export default function TerimaKasihPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50 px-5 py-16 flex items-center">
      <div className="mx-auto w-full max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="rounded-full bg-green-100 p-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
          Terima Kasih 🤍
        </h1>

        {/* Message */}
        <p className="mt-4 text-slate-600">
          Komitmen Anda sebagai <b>Kakak Asuh</b> telah kami terima.
          <br />
          InsyaAllah, kebaikan ini menjadi jalan masa depan anak-anak yatim
          penghafal Al-Qur’an.
        </p>

        {/* Info */}
        <div className="mt-6 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-800">
          Tim kami akan menghubungi Anda melalui WhatsApp
          untuk proses selanjutnya.
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
            Hubungi Admin via WhatsApp
          </a>

          {/* Back */}
          <Link
            href="/"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 py-3 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Beranda
          </Link>
        </div>

        {/* Footnote */}
        <p className="mt-8 text-xs text-slate-400">
          Semoga Allah membalas setiap kebaikan Anda dengan keberkahan.
        </p>
      </div>
    </main>
  )
}
