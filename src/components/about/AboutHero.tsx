import Reveal from "@/components/motion/Reveal";

export default function AboutHero() {
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
          pt-24 pb-20
          sm:pt-28
          lg:pt-32
          lg:pb-24
        "
      >
        <Reveal>
          <div
            className="
              flex items-center justify-between gap-8
              border-b border-black/10
              pb-8
            "
          >
            <p
              className="
                text-sm font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5A7C99]
              "
            >
              Nosotros
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
              Montevideo · Uruguay
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div
            className="
              grid gap-14
              pt-12
              lg:grid-cols-[1.15fr_0.75fr]
              lg:gap-24
            "
          >
            <h1
              className="
                max-w-5xl
                text-[4.4rem]
                font-semibold
                leading-[0.86]
                tracking-[-0.065em]
                text-[#0D1523]
                sm:text-[5.8rem]
                lg:text-[7.2rem]
              "
            >
              Dos personas.
              <br />
              Una misma idea.
              <br />

              <span className="text-[#00B8E6]">
                Lynk.
              </span>
            </h1>

            <div
              className="
                flex flex-col
                justify-end
                gap-7
                lg:pb-2
              "
            >
              <p
                className="
                  max-w-xl
                  text-lg leading-8
                  text-[#647586]
                  sm:text-xl
                "
              >
                Lynk nace entre dos amigos con el deseo de crear algo propio y
                hacer las cosas de una manera diferente.
              </p>

              <p
                className="
                  max-w-lg
                  text-base leading-7
                  text-[#31465B]
                  sm:text-lg
                "
              >
                Desde Montevideo, construimos una marca pensada para crecer
                junto a cada proyecto.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}