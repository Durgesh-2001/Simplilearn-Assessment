import Hero from "@/components/Hero"
import RespondForm from "@/components/RespondForm"
import Story from "@/components/Story"
import ExploreSection from "@/components/ExploreSection"
import Featured from "@/components/Featured"
import FinalCTA from "@/components/FinalCTA"
import Agenda from "@/components/Agenda"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <>
      <Hero />
      <section className="w-full bg-white py-8 md:py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-12 lg:px-[104px]">
          <RespondForm />
        </div>
      </section>
      <Story />
      <ExploreSection>
</ExploreSection>
      <Featured />
      <FinalCTA />
      <Agenda />
      <Footer />
    </>
  )
}
