import Reveal from "@/components/motion/Reveal";

export default function ContactHero() {
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
          sm:pt-28
          sm:pb-20
          lg:pt-32
          lg:pb-24
        "
      >
        <Reveal>
          <div
            className="
              flex items-center justify-between gap-8
              border-b border-black/10
              pb-6
              sm:pb-8
            "
          >
            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5A7C99]
                sm:text-sm
              "
            >
              Contacto
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
              grid gap-10
              pt-10
              sm:gap-14
              sm:pt-12
              lg:grid-cols-[1.15fr_0.75fr]
              lg:gap-24
            "
          >
            <h1
              className="
                max-w-full
                text-[3.35rem]
                font-semibold
                leading-[0.88]
                tracking-[-0.06em]
                text-[#0D1523]
                sm:max-w-5xl
                sm:text-[5.8rem]
                lg:text-[7.2rem]
              "
            >
              Contanos qué
              <br />
              querés
              <br className="sm:hidden" />

              <span className="text-[#00B8E6] sm:ml-3">
                resolver.
              </span>
            </h1>

            <div
              className="
                flex flex-col
                justify-end
                gap-6
                lg:pb-2
              "
            >
              <p
                className="
                  max-w-xl
                  text-base leading-7
                  text-[#647586]
                  sm:text-xl
                  sm:leading-8
                "
              >
                Una idea, una necesidad o algo que no está funcionando como
                debería.
              </p>

              <p
                className="
                  max-w-lg
                  text-base leading-7
                  text-[#31465B]
                  sm:text-lg
                "
              >
                Contanos el contexto y vemos cómo podemos ayudarte.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}