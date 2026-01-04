"use client"

import { useState, useEffect, Suspense } from "react"
import { useForm, SubmitHandler, UseFormRegisterReturn } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, HeartHandshake } from "lucide-react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

/* ================= SCHEMA ================= */
const formSchema = z.object({
  nama: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  nohp: z
    .string()
    .min(8, "Nomor terlalu pendek")
    .regex(/^[0-9+]+$/, "Hanya angka & +"),
  nominal: z.string().min(1, "Pilih nominal sedekah"),
  metode: z.string().min(1, "Pilih metode pembayaran"),
  komitmen: z.boolean().refine((val) => val === true, {
    message: "Wajib menyetujui komitmen",
  }),
  referrer: z.string().optional(),
})

type FormValues = z.infer<typeof formSchema>

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxcii1m6RvDIqbu3HjvGusBh1eI2w4Su5WnrWCuhIME8ikaHoZEHz6BrE0xNRNLzaCmLA/exec"

/* ================= WRAPPER ================= */
export default function RegistrasiSectionWrapper() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Memuat form…</div>}>
      <RegistrasiSection />
    </Suspense>
  )
}

/* ================= MAIN ================= */
function RegistrasiSection() {
  const router = useRouter()
  const [submitting, setSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      komitmen: false,
    },
  })

  /* ===== Ambil data CTA ===== */
  useEffect(() => {
    const storedNominal = localStorage.getItem("donation_amount")
    if (storedNominal) setValue("nominal", storedNominal)

    const params = new URLSearchParams(window.location.search)
    const ref = params.get("ref") || localStorage.getItem("referrer")
    if (ref) {
      setValue("referrer", ref)
      localStorage.setItem("referrer", ref)
    }
  }, [setValue])

  /* ================= SUBMIT ================= */
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (submitting) return
    setSubmitting(true)

    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as any),
      })

      if (!res.ok) throw new Error("Gagal submit")

      toast.success("Terima kasih 🤍", {
        description: "Admin kami akan menghubungi Anda via WhatsApp.",
      })

      window.gtag?.("event", "complete_registration", {
        funnel: "kakak_asuh",
      })
      window.fbq?.("track", "CompleteRegistration")

      setTimeout(() => {
        router.push("/terima-kasih")
      }, 1200)
    } catch {
      toast.error("Gagal mengirim", {
        description: "Silakan coba kembali 🙏",
      })
    } finally {
      setSubmitting(false)
    }
  }

  /* ================= UI ================= */
  return (
    <section
      id="registrasi"
      className="scroll-mt-24 bg-gradient-to-b from-green-50 via-white to-green-50 px-4 py-20"
    >
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-xl md:p-10">
          <h2 className="text-center text-3xl font-bold text-green-700">
            Daftar Jadi Kakak Asuh
          </h2>

          <p className="mt-3 text-center text-sm text-gray-600 leading-relaxed">
            Dukungan Anda membantu{" "}
            <span className="font-semibold">
              anak yatim, dhuafa, santri tahfizh,
              serta siswa & mahasiswa berprestasi
            </span>{" "}
            tetap sekolah, sehat, dan tumbuh berkarakter.
          </p>

          <div className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-xs text-green-700">
            Donasi dikelola oleh <strong>LAZ Graha Dhuafa Indonesia</strong>.
            Aman, transparan, dan bisa dihentikan kapan saja.
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 space-y-6"
          >
            <FormInput
              label="Nama Lengkap"
              register={register("nama")}
              error={errors.nama?.message}
            />
            <FormInput
              label="Email"
              type="email"
              register={register("email")}
              error={errors.email?.message}
            />
            <FormInput
              label="No WhatsApp Aktif"
              register={register("nohp")}
              error={errors.nohp?.message}
            />

            <FormSelect
              label="Nominal Sedekah / Bulan"
              register={register("nominal")}
              error={errors.nominal?.message}
              options={[
                { label: "Rp 50.000", value: "50000" },
                { label: "Rp 100.000", value: "100000" },
                { label: "Rp 150.000", value: "150000" },
                { label: "Rp 300.000", value: "300000" },
                { label: "Rp 500.000", value: "500000" },
              ]}
            />

            <FormSelect
              label="Metode Pembayaran"
              register={register("metode")}
              error={errors.metode?.message}
              options={[
                { label: "Transfer Bank", value: "bank" },
                { label: "E-Wallet (OVO / GoPay / DANA)", value: "ewallet" },
              ]}
            />

            {/* Komitmen */}
            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                {...register("komitmen")}
                className="mt-1 accent-green-600"
              />
              <span>
                Saya bersedia menjadi Kakak Asuh dengan sedekah rutin
                sesuai kemampuan, dan memahami komitmen ini bersifat fleksibel.
              </span>
            </label>
            {errors.komitmen && (
              <p className="text-sm text-red-500">
                {errors.komitmen.message}
              </p>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60"
            >
              {submitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Mengirim…
                </>
              ) : (
                <>
                  <HeartHandshake className="h-5 w-5" />
                  Daftar Jadi Kakak Asuh
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

/* ================= HELPERS ================= */

interface FormInputProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  type?: string
}

function FormInput({
  label,
  register,
  error,
  type = "text",
}: FormInputProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        {...register}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}

interface FormSelectProps {
  label: string
  register: UseFormRegisterReturn
  error?: string
  options: { label: string; value: string }[]
}

function FormSelect({
  label,
  register,
  error,
  options,
}: FormSelectProps) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        {...register}
        className="w-full rounded-xl border border-green-200 px-4 py-2.5 outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">-- Pilih {label} --</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
}
