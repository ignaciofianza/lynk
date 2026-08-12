import Reveal from "@/components/motion/Reveal";

const areas = [
  "Redes e infraestructura",
  "Seguridad y videovigilancia",
  "Desarrollo web",
  "Equipos y soporte",
];

export default function ServicesHero() {
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
          pt-24 pb-16
          sm:pt-28
          lg:pt-32
          lg:pb-20
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
              Servicios
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
              /01 — 04
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.04}>
          <div
            className="
              grid gap-12
              pt-12
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >
            <div>
              <h1
                className="
                  max-w-5xl
                  text-[4.5rem]
                  font-semibold
                  leading-[0.86]
                  tracking-[-0.065em]
                  text-[#0D1523]
                  sm:text-[6rem]
                  lg:text-[7.2rem]
                "
              >
                Tecnología
                <br />
                aplicada donde
                <br />

                <span className="text-[#00B8E6]">
                  hace falta.
                </span>
              </h1>
            </div>

            <div
              className="
                flex flex-col
                justify-between
                gap-14
                lg:pt-3
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
                Diseñamos e implementamos soluciones en infraestructura,
                seguridad, desarrollo y soporte para resolver necesidades
                concretas.
              </p>

              <p
                className="
                  max-w-lg
                  text-base leading-7
                  text-[#31465B]
                "
              >
                Cada proyecto puede involucrar una sola área o conectar varias
                entre sí. La solución se define según lo que realmente
                necesites.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="
              mt-20
              grid
              border-t border-black/10
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {areas.map((area, index) => (
              <div
                key={area}
                className="
                  group
                  border-b border-black/10
                  py-7
                  sm:odd:border-r
                  sm:odd:pr-6
                  sm:even:pl-6
                  lg:border-b-0
                  lg:border-r
                  lg:px-7
                  lg:first:pl-0
                  lg:last:border-r-0
                  lg:last:pr-0
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    text-[#00B8E6]
                  "
                >
                  /0{index + 1}
                </span>

                <p
                  className="
                    mt-4
                    max-w-60
                    text-xl font-semibold
                    leading-tight
                    tracking-[-0.035em]
                    text-[#31465B]
                    transition-colors duration-300
                    group-hover:text-[#0D1523]
                  "
                >
                  {area}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}