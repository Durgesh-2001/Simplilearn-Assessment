import Image from "next/image"
import RespondForm from "./RespondForm"

export default function FinalCTA() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[104px] flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 lg:gap-12">

        {/* Left content */}
        <div className="w-full lg:max-w-[800px] font-[var(--font-satoshi)]">

          <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[32px] md:leading-[44px] lg:leading-[54px] font-black text-[#F5AB40]">
            Go behind the curtain with real examples and high-scale insights
          </h2>

          <p className="mt-6 md:mt-10 lg:mt-[60px] text-[18px] md:text-[22px] lg:text-[25px] leading-[26px] md:leading-[30px] lg:leading-[34px] font-medium text-black">
            You'll walk away with:
          </p>

          <ul className="mt-4 md:mt-5 lg:mt-[24px] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] font-medium text-black space-y-3 md:space-y-4 lg:space-y-[16px] list-disc ml-5 md:ml-6 lg:ml-[24px]">
            <li>A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.</li>
            <li>Insights from high-scale operating environments including the former CLO of McDonald’s.</li>
            <li>Signals for where capability gaps may already be forming in your organization.</li>
            <li>Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems.</li>
            <li>Actionable insights you can take straight into your next exec meeting.</li>
          </ul>

          <div className="mt-8 md:mt-12 lg:mt-[80px]">
            <RespondForm />
          </div>
        </div>

        {/* Right image - hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block relative w-full max-w-[570px] aspect-[570/611] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex-shrink-0">
          <Image
            src="/bg_removal.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 0vw, 570px"
            className="object-contain"
          />
        </div>

      </div>
    </section>
  )
}
