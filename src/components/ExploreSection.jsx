import Image from "next/image"

export default function ExploreSection() {
  return (
    <section className="w-full bg-[rgba(210,225,255,0.5)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] py-[80px]">
      <div className="max-w-[1440px] mx-auto px-[104px]">
        {/* Section Title */}
        <h2 className="text-[40px] leading-[54px] font-black text-[#F5AB40] font-[var(--font-satoshi)]">
          What We’ll Explore
        </h2>

        {/* Subtitle */}
        <p className="mt-[24px] text-[25px] leading-[34px] font-medium text-black font-[var(--font-satoshi)]">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards Grid */}
        <div className="mt-[40px] grid grid-cols-3 gap-x-[36px] gap-y-[24px]">
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
    <div className="w-[389px] h-[203px] bg-white rounded-[8px] shadow-[0px_4px_34px_rgba(0,0,0,0.15)] p-[24px] font-[var(--font-satoshi)]">
      <div className="flex items-center gap-[16px]">
        <div className="w-[48px] h-[48px] flex items-center justify-center">
          <Image src={icon} alt="" width={48} height={48} />
        </div>
        <h3 className="text-[24px] leading-[30px] font-bold text-black">
          {title}
        </h3>
      </div>

      <p className="mt-[24px] text-[22px] leading-[30px] font-medium text-black">
        {desc}
      </p>
    </div>
  )
}
