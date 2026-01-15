import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] md:min-h-[650px] lg:min-h-[700px] overflow-hidden">
      
      {/* Background */}
      <Image
        src="/landing-img.png"
        alt=""
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-[linear-gradient(287deg,rgba(28,78,241,0.45)_-11%,rgba(26,60,182,0.45)_106%)]" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[104px] flex flex-col justify-center py-12 md:py-16 lg:py-20">

        {/* Logo */}
        <div className="mb-4 md:mb-5 lg:mb-6">
          <Image
            src="/logo.png"
            alt="Simplilearn"
            width={280}
            height={86}
            className="w-[120px] h-auto md:w-[180px] lg:w-[280px]"
          />
        </div>

        {/* Invite pill */}
        <div className="mb-3 md:mb-4">
          <span className="inline-flex items-center justify-center bg-[#00FFFF] text-[#25286A] font-bold text-[14px] md:text-[18px] lg:text-[25px] px-3 md:px-4 py-1.5 md:py-2 rounded-[6px]">
            Invite-Only
          </span>
        </div>

        {/* Tagline */}
        <p className="text-[#00FFFF] text-[16px] md:text-[20px] lg:text-[24px] font-bold mb-3 md:mb-4">
          An Executive Roundtable · Lunch
        </p>

        {/* Headline */}
        <h1 className="text-[#F5AB40] text-[24px] md:text-[36px] lg:text-[46px] leading-[32px] md:leading-[48px] lg:leading-[62px] font-black max-w-full md:max-w-[600px] lg:max-w-[771px] mb-4 md:mb-5 lg:mb-6">
          The Skills That Matter Next: Preparing Your Workforce & Leaders for the AI Era
        </h1>

        {/* Date + Location */}
        <div className="space-y-2 md:space-y-3 text-white font-black">
          <div className="flex items-center gap-2 md:gap-3 text-[14px] md:text-[20px] lg:text-[30px]">
            <Image src="/calendar.svg" width={18} height={18} alt="" className="w-4 h-4 md:w-5 md:h-5 lg:w-[18px] lg:h-[18px]" />
            February 20, 2026
          </div>

          <div className="flex items-center gap-2 md:gap-3 text-[14px] md:text-[20px] lg:text-[30px]">
            <Image src="/location.svg" width={18} height={18} alt="" className="w-4 h-4 md:w-5 md:h-5 lg:w-[18px] lg:h-[18px] flex-shrink-0" />
            <span>Chamberlain's Steak & Fish House, Dallas</span>
          </div>
        </div>

      </div>
    </section>
  )
}
