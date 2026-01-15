import Image from "next/image"

export default function ExploreSection() {
  return (
    <section className="w-full bg-[rgba(210,225,255,0.5)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] py-12 md:py-16 lg:py-[80px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[104px]">
        {/* Section Title */}
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[44px] lg:leading-[54px] font-black text-[#F5AB40] font-[var(--font-satoshi)]">
          What We'll Explore
        </h2>

        {/* Subtitle */}
        <p className="mt-4 md:mt-5 lg:mt-[24px] text-[16px] md:text-[20px] lg:text-[25px] leading-[24px] md:leading-[28px] lg:leading-[34px] font-medium text-black font-[var(--font-satoshi)]">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards Grid */}
        <div className="mt-6 md:mt-8 lg:mt-[40px] flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-x-[36px] lg:gap-y-[24px]">
          <Card
            icon="/history.svg"
            title="Skills Decay"
            desc="every 2-3 years faster for technical skills"
          />

          <Card
            icon="/account_tree.svg"
            title="Manager Role Shift"
            desc="orchestrating people + AI agents"
          />

          <Card
            icon="/analytics.svg"
            title="Leaders + AI Co-Pilots"
            desc="requires sensemaking and systems thinking"
          />

          <Card
            icon="/verified.svg"
            title="Frontline Capability"
            desc="now depends on digital fluency"
          />

          <Card
            icon="/flowsheet.svg"
            title="Core Human Capabilities"
            desc="analytical reasoning and scenario planning"
          />

          <Card
            icon="/rocket.svg"
            title="Winning Organizations"
            desc="predict skills ahead of demand"
          />
        </div>
      </div>
    </section>
  )
}

function Card({ icon, title, desc }) {
  return (
    <div className="w-full md:max-w-[389px] h-auto min-h-[140px] md:min-h-[180px] lg:min-h-[203px] bg-white rounded-[8px] shadow-[0px_4px_34px_rgba(0,0,0,0.15)] p-4 md:p-5 lg:p-[24px] font-[var(--font-satoshi)]">
      <div className="flex items-center gap-3 md:gap-4 lg:gap-[16px]">
        <div className="w-10 h-10 md:w-11 md:h-11 lg:w-[48px] lg:h-[48px] flex items-center justify-center flex-shrink-0">
          <Image src={icon} alt="" width={48} height={48} className="w-full h-full" />
        </div>
        <h3 className="text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] md:leading-[26px] lg:leading-[30px] font-bold text-black">
          {title}
        </h3>
      </div>

      <p className="mt-4 md:mt-5 lg:mt-[24px] text-[16px] md:text-[18px] lg:text-[22px] leading-[24px] md:leading-[26px] lg:leading-[30px] font-medium text-black">
        {desc}
      </p>
    </div>
  )
}
