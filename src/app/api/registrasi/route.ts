import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const data = await req.json()

  await fetch(process.env.GOOGLE_SHEET_WEBHOOK!, {
    method: "POST",
    body: JSON.stringify(data),
  })

  return NextResponse.json({ success: true })
}
