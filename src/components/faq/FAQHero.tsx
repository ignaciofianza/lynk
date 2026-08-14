import Reveal from "@/components/motion/Reveal";

export default function FAQHero() {
  return (
    <section
      className="
        border-b border-black/10
        px-6
        sm:px-8
      "
    >
      <div
        className="
          mx-auto max-w-7xl
          pt-20 pb-16
          sm:pt-24
          sm:pb-20
          lg:pt-32
          lg:pb-24
        "
      >
        <Reveal>
          <div
            className="
              flex items-center
              justify-between gap-6
              border-b border-black/10
              pb-6
              sm:pb-8
            "
          >
            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.16em]
                text-[#5A7C99]
                sm:text-sm
                sm:tracking-[0.18em]
              "
            >
              Preguntas frecuentes
            </p>

            <span
              className="
                hidden
                font-mono
                text-xs
                text-[#5A7C99]
                sm:block
              "
            >
              FAQ
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div
            className="
              grid gap-8
              pt-10
              sm:gap-10
              sm:pt-12
              lg:grid-cols-[1.1fr_0.75fr]
              lg:items-end
              lg:gap-20
            "
          >
            <h1
              className="
                max-w-4xl
                text-[3rem]
                font-semibold
                leading-[0.9]
                tracking-[-0.055em]
                text-[#0D1523]
                min-[420px]:text-[3.5rem]
                sm:text-[4.5rem]
                md:text-[5.2rem]
                lg:text-[6.4rem]
              "
            >
              Respuestas claras
              para dudas
              <span className="ml-2 text-[#00B8E6] sm:ml-3">
                comunes.
              </span>
            </h1>

            <p
              className="
                max-w-xl
                text-base leading-7
                text-[#647586]
                sm:text-lg
                sm:leading-8
                lg:text-xl
              "
            >
              Reunimos algunas de las preguntas que suelen aparecer antes de
              empezar un proyecto con Lynk.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}