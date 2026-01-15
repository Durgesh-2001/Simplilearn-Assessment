import Image from "next/image"
import RespondForm from "./RespondForm"

export default function Footer() {
  return (
    <footer className="relative bg-[#00FFFF] py-12 md:py-16 lg:py-[80px] overflow-hidden font-[var(--font-satoshi)]">
      
      {/* Background image */}
      <Image
        src="/unnamed.png"
        alt=""
        fill
        className="object-cover pointer-events-none select-none"
        priority
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />

      {/* Content layer */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[104px]">
        
        {/* Headline */}
        <h2 className="text-white text-[24px] md:text-[28px] lg:text-[30px] leading-[32px] md:leading-[38px] lg:leading-[41px] font-black">
          Space is limited.
        </h2>

        {/* CTA */}
        <div className="mt-4 md:mt-6">
          <RespondForm />
        </div>

        {/* Bottom row */}
        <div className="mt-10 md:mt-12 lg:mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-[16px]">
          <Image 
            src="/logo.png" 
            width={280} 
            height={86} 
            alt="Simplilearn" 
            className="w-[160px] md:w-[200px] lg:w-[280px] h-auto"
          />

          <p className="text-white text-[12px] md:text-[14px] lg:text-[20px] leading-[18px] md:leading-[20px] lg:leading-[27px] tracking-[0.02em]">
            © 2009–2025 – Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
