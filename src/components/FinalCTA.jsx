import Image from "next/image"
import RespondForm from "./RespondForm"

export default function FinalCTA() {
  return (
    <section className="w-full py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-[100px] flex justify-between items-start">

        {/* Left content */}
        <div className="max-w-[800px] font-[var(--font-satoshi)]">

          <h2 className="text-[40px] leading-[54px] font-black text-[#F5AB40]">
            Go behind the curtain with real examples and high-scale insights
          </h2>

          <p className="mt-[60px] text-[25px] leading-[34px] font-medium text-black">
            You’ll walk away with:
          </p>

          <ul className="mt-[24px] text-[20px] leading-[30px] font-medium text-black space-y-[16px] list-disc ml-[24px]">
            <li>A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.</li>
            <li>Insights from high-scale operating environments including the former CLO of McDonald’s.</li>
            <li>Signals for where capability gaps may already be forming in your organization.</li>
            <li>Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems.</li>
            <li>Actionable insights you can take straight into your next exec meeting.</li>
          </ul>

          <div className="mt-[80px]">
            <RespondForm />
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-[570px] h-[611px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <Image
            src="/bg_removal.png"
            alt=""
            fill
            className="object-contain"
          />
        </div>

      </div>
    </section>
  )
}
