export default function Agenda() {
  return (
    <section className="w-full py-[72px] md:py-[96px] lg:py-[120px] bg-[#00FFFF]">

      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[48px] lg:px-[104px]">

        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] font-black text-[#1D4DF4] font-[var(--font-satoshi)] mb-[32px] md:mb-[48px] lg:mb-[60px]">
          Event Agenda
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[24px] lg:gap-[34px]">

          <AgendaCard
            title="Welcome & Opening"
            desc="Sudipto Mitra, CRO Simplilearn
Why capability-building is now a board-level issue and what’s changing in the workforce landscape."
          />

          <AgendaCard
            title="Keynote:
What Enterprise Leaders Are Seeing on the Ground"
            desc="Rob Lauber, Former CLO McDonald’s
A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries."
          />

          <AgendaCard
            title="Lunch & Executive Conversation"
            desc="Industry Experts Invited
What large enterprise talent ecosystems are learning about capability-building at scale."
          />

        </div>
      </div>
    </section>
  )
}

function AgendaCard({ title, desc }) {
  return (
    <div className="w-full max-w-[390px] h-auto lg:h-[376px] bg-white rounded-[8px] shadow-[0px_4px_34px_rgba(0,0,0,0.15)] p-[20px] md:p-[24px] font-[var(--font-satoshi)]">

      <h3 className="text-[18px] leading-[26px] md:text-[20px] md:leading-[28px] lg:text-[24px] lg:leading-[32px] font-black text-[#1D4DF4]">
        {title}
      </h3>

      <p className="mt-[20px] md:mt-[28px] lg:mt-[40px] text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] lg:text-[20px] lg:leading-[30px] font-bold text-black whitespace-pre-line">
        {desc}
      </p>

    </div>
  )
}
