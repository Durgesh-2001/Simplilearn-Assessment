import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative w-full h-[693px] overflow-hidden font-[var(--font-satoshi)]">
      <Image
        src="/landing-img.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover pointer-events-none select-none"
      />

      {/* Figma gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(287deg,rgba(28,78,241,0.45)_-11%,rgba(26,60,182,0.45)_106%)] pointer-events-none" />

      {/* Logo */}
      <div className="absolute top-[54px] left-[16px] md:left-[48px] lg:left-[93px] z-20">
        <Image src="/logo.png" alt="Simplilearn" width={280} height={86} priority />
      </div>

      {/* Invite-Only */}
      <div className="absolute top-[207px] left-[16px] md:left-[48px] lg:left-[100px] z-20 w-[174px] h-[56px] rounded-[6px] bg-[#00FFFF] border border-black flex items-center justify-center">
        <span className="text-[25px] leading-[34px] font-bold text-[#25286A] drop-shadow">
          Invite-Only
        </span>
      </div>

      {/* Tagline */}
      <p className="absolute top-[220px] left-[220px] md:left-[300px] lg:left-[288px] z-20 text-[24px] leading-[28px] font-medium text-[#00FFFF]">
        An Executive Roundtable · Lunch
      </p>

      {/* Headline */}
      <h1
        className="absolute top-[281px] left-[16px] md:left-[48px] lg:left-[102px] w-full max-w-[771px] z-20 text-[#F5AB40] font-black text-[28px] md:text-[40px] lg:text-[46px] leading-[38px] md:leading-[52px] lg:leading-[62px]"
        style={{ textShadow: "0px 4px 4px rgba(0,0,0,0.25)" }}
      >
        The Skills That Matter Next:
        <br />
        <span className="font-medium">Preparing Your Workforce</span>
        <br />
        <span className="font-medium">& Leaders for the AI Era</span>
      </h1>

      {/* Date */}
      <div className="absolute top-[511px] left-[16px] md:left-[48px] lg:left-[102px] z-20 flex items-center gap-[24px]">
        <Image src="/calendar.svg" alt="" width={24} height={27} />
        <span className="text-[20px] md:text-[26px] lg:text-[30px] leading-[41px] font-black text-white">
          February 20, 2026
        </span>
      </div>

      {/* Location */}
      <div className="absolute top-[568px] left-[16px] md:left-[48px] lg:left-[102px] z-20 flex items-center gap-[24px]">
        <Image src="/location.svg" alt="" width={24} height={30} />
        <span className="text-[20px] md:text-[26px] lg:text-[30px] leading-[41px] font-black text-white">
          Chamberlain’s Steak & Fish House, Dallas
        </span>
      </div>

    </section>
  )
}
