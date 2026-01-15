import Image from "next/image"
import RespondForm from "./RespondForm"

export default function Footer() {
  return (
    <footer className="relative bg-[#00FFFF] py-[80px] px-[16px] md:px-[48px] lg:px-[90px] overflow-hidden font-[var(--font-satoshi)]">
      
      {/* Background image */}
      <Image
        src="/unnamed.png"
        alt=""
        fill
        className="object-cover pointer-events-none select-none"
        priority
      />

      {/* Overlays (from code #2 for correct contrast) */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

      {/* Content layer (structure from code #1) */}
      <div className="relative z-10">
        
        {/* Headline */}
        <h2 className="text-white text-[28px] md:text-[36px] lg:text-[30px] leading-[38px] md:leading-[48px] lg:leading-[41px] font-black">
          Space is limited.
        </h2>

        {/* CTA */}
        <div className="mt-6">
          <RespondForm />
        </div>

        {/* Bottom row */}
        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-[16px]">
          <Image src="/logo.png" width={280} height={86} alt="Simplilearn" />

          <p className="text-white text-[14px] md:text-[16px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[27px] tracking-[0.02em]">
            © 2009–2025 – Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
