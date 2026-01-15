"use client"

import { useActionState, useState } from "react"
import { useFormStatus } from "react-dom"
import { submitRSVP } from "../../app/actions"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function SubmitButton({ disabled }) {
    const { pending } = useFormStatus()

    return (
        <button
            type="submit"
            disabled={pending || disabled}
            aria-disabled={pending || disabled}
            className="w-[251px] h-[81px] rounded-[8px] bg-gradient-to-r from-[#F5AB40]/90 to-[#F5AB40] flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
            <span className="text-[29px] leading-[39px] font-bold text-white font-[var(--font-satoshi)]">
                {pending ? "Submitting…" : "RSVP Now"}
            </span>
        </button>
    )
}

export default function RespondForm() {
    const [state, action] = useActionState(submitRSVP, null)
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")

    const validateEmail = (value) => {
        if (!value) {
            setEmailError("")
            return
        }
        if (!EMAIL_REGEX.test(value)) {
            setEmailError("Please enter a valid email address")
        } else {
            setEmailError("")
        }
    }

    const handleEmailChange = (e) => {
        const value = e.target.value
        setEmail(value)
        validateEmail(value)
    }

    const isInvalidEmail = email.length > 0 && !EMAIL_REGEX.test(email)

    return (
        <form
            action={action}
            className="relative flex gap-[23px] ml-[104px] mt-[40px]"
        >

           <div className="flex flex-col">
              <div className={`w-[606px] h-[81px] bg-[rgba(231,231,231,0.2)] border rounded-[8px] flex items-center px-[24px] gap-[16px] ${emailError ? "border-red-500" : "border-[rgba(0,0,0,0.29)]"}`}>
                <img src="/mail.svg" alt="" width={24} height={24} className="opacity-60" />

                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your work email to confirm your attendance"
                  className="flex-1 bg-transparent text-[20px] leading-[27px] text-black placeholder:text-[rgba(0,0,0,0.4)] outline-none font-[var(--font-satoshi)]"
                />
              </div>
              {emailError && (
                <p className="mt-[4px] text-[14px] text-red-500 font-[var(--font-satoshi)]">{emailError}</p>
              )}
           </div>


            {/* Button */}
            <SubmitButton disabled={isInvalidEmail} />

            {state?.success && (
                <p className="pointer-events-none absolute top-[90px] left-0 text-green-600" aria-live="polite">
                    Response recorded. Thank you!
                </p>
            )}
            {state?.error && (
                <p className="pointer-events-none absolute top-[90px] left-0 text-red-600" aria-live="polite">
                    {state.error}
                </p>
            )}
        </form>
    )
}
