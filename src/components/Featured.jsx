import Image from "next/image"

export default function Featured() {
  return (
    <section className="w-full bg-gradient-to-b from-[#1D4DF4] to-[#112D8E] py-[64px] md:py-[80px] lg:py-[96px]">
      <div className="max-w-[1440px] mx-auto px-[16px] md:px-[48px] lg:px-[100px]">

        {/* Title */}
        <h2 className="text-[28px] leading-[38px] md:text-[34px] md:leading-[46px] lg:text-[40px] lg:leading-[54px] font-black text-[#F5AB40] font-[var(--font-satoshi)]">
          Featured Speakers
        </h2>

        {/* Speakers */}
        <div className="mt-[48px] md:mt-[64px] lg:mt-[80px] space-y-[72px] md:space-y-[96px] lg:space-y-[120px]">

          <Speaker
            image="/RobLauber.png"
            name="Rob Lauber"
            bio="Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI."
          />

          <Speaker
            image="/Krishna.png"
            name="Krishna Kumar"
            bio="Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries."
          />

          <Speaker
            image="/sudipto.png"
            name="Sudipto Mitra"
            bio="Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models."
          />

        </div>

        {/* Callout */}
        <div className="mt-[72px] md:mt-[96px] lg:mt-[120px] relative rounded-[8px] overflow-hidden">

          <Image
            src="/b2b_home_lead_form_bg.png"
            alt=""
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/30" />

          <div className="relative z-10 p-[24px] md:p-[40px] lg:p-[60px]">
            <h3 className="text-[22px] leading-[30px] md:text-[26px] md:leading-[36px] lg:text-[30px] lg:leading-[41px] font-black text-[#00FFFF] font-[var(--font-satoshi)]">
              Additional Expert Perspectives
            </h3>

            <p className="mt-[12px] md:mt-[16px] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[35px] text-white font-[var(--font-satoshi)] max-w-[1100px]">
              Invited experts from leading consulting and enterprise learning organizations will contribute short perspectives, offering insight into how large organizations are evolving skills and leadership models in the AI era.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

function Speaker({ image, name, bio }) {
  return (
    <div className="flex flex-col lg:flex-row gap-[32px] md:gap-[48px] lg:gap-[60px] items-start">

      {/* Image Card */}
      <div className="relative w-full max-w-[340px] aspect-[340/325] bg-[#25286A] rounded-[8px] overflow-hidden flex-shrink-0">

        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, 340px"
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="max-w-[820px]">
        <h3 className="text-[22px] leading-[30px] md:text-[26px] md:leading-[36px] lg:text-[30px] lg:leading-[41px] font-black text-[#00FFFF] font-[var(--font-satoshi)]">
          {name}
        </h3>

        <p className="mt-[8px] md:mt-[12px] text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] lg:text-[24px] lg:leading-[35px] text-white font-[var(--font-satoshi)]">
          {bio}
        </p>
      </div>

    </div>
  )
}
