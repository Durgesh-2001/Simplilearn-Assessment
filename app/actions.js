"use server"

import { z } from "zod"
import { createRSVP } from "@/lib/airtable"

const schema = z.object({
  email: z.string().email(),
})

export async function submitRSVP(prev, formData) {
  const email = formData.get("email")

  // Fail fast on invalid input
  const parsed = schema.safeParse({ email })
  if (!parsed.success) {
    return { error: "Invalid email address" }
  }

  // Fire-and-forget – response returns immediately
  createRSVP(email)

  return { success: true }
}
