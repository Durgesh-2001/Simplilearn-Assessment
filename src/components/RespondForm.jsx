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
            className="w-full md:w-auto md:min-w-[160px] lg:min-w-[251px] h-[48px] md:h-[56px] lg:h-[81px] rounded-[8px] bg-gradient-to-r from-[#F5AB40]/90 to-[#F5AB40] flex items-center justify-center cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed px-4 md:px-6 lg:px-8 flex-shrink-0"
        >
            <span className="text-[16px] md:text-[18px] lg:text-[29px] leading-[22px] md:leading-[24px] lg:leading-[39px] font-bold text-white font-[var(--font-satoshi)] whitespace-nowrap">
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
            className="relative flex flex-col gap-3 md:flex-row md:items-start md:gap-4 lg:gap-[23px]"
        >

           <div className="flex flex-col w-full md:flex-1 lg:max-w-[606px]">
              <div className={`w-full h-[48px] md:h-[56px] lg:h-[81px] bg-[rgba(231,231,231,0.2)] border rounded-[8px] flex items-center px-3 md:px-4 lg:px-[24px] gap-2 md:gap-3 lg:gap-[16px] ${emailError ? "border-red-500" : "border-[rgba(0,0,0,0.29)]"}`}>
                <img src="/mail.svg" alt="" width={24} height={24} className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 opacity-60 flex-shrink-0" />

                <input
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="Enter your work email"
                  className="flex-1 min-w-0 bg-transparent text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[27px] text-black placeholder:text-[rgba(0,0,0,0.4)] outline-none font-[var(--font-satoshi)]"
                />
              </div>
              {emailError && (
                <p className="mt-1 text-[12px] md:text-[14px] text-red-500 font-[var(--font-satoshi)]">{emailError}</p>
              )}
           </div>


            {/* Button */}
            <SubmitButton disabled={isInvalidEmail} />

            {state?.success && (
                <p className="text-[14px] text-green-600 font-[var(--font-satoshi)] md:absolute md:top-full md:left-0 md:mt-2" aria-live="polite">
                    Response recorded. Thank you!
                </p>
            )}
            {state?.error && (
                <p className="text-[14px] text-red-600 font-[var(--font-satoshi)] md:absolute md:top-full md:left-0 md:mt-2" aria-live="polite">
                    {state.error}
                </p>
            )}
        </form>
    )
}
