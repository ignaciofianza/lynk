import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/motion/TransitionLink";

const areas = [
  "Redes e infraestructura",
  "Seguridad y cámaras",
  "Desarrollo web",
  "Equipos y soporte",
];

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-black/8
      "
    >
      <div
        className="
          pointer-events-none
          absolute left-[32%] -top-52
          h-180 w-220
          rounded-full
          bg-[#00D5FF]/10
          blur-[160px]
        "
      />

      <div
        className="
          relative mx-auto
          grid min-h-205
          max-w-7xl
          items-center
          gap-16
          px-6 py-24
          sm:px-8
          lg:grid-cols-[1.2fr_0.5fr]
          lg:gap-24
          lg:py-28
        "
      >
        <div>
          <div
            className="
              mb-9
              flex items-center gap-4
            "
          >
            <span
              className="
                text-sm font-semibold
                tracking-[-0.02em]
                text-[#0D1523]
              "
            >
              Lynk
            </span>

            <span className="h-px w-8 bg-[#00B8E6]" />

            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5A7C99]
              "
            >
              Tecnología · Infraestructura · Uruguay
            </p>
          </div>

          <h1
            className="
              max-w-5xl
              text-[4.7rem]
              font-semibold
              leading-[0.84]
              tracking-[-0.07em]
              text-[#0D1523]
              sm:text-[6.1rem]
              lg:text-[7.8rem]
            "
          >
            Conectamos
            <br />

            <span className="text-[#00B8E6]">
              tecnología
            </span>

            <br />
            con tu negocio.
          </h1>

          <div
            className="
              mt-12 grid gap-10
              border-t border-black/10
              pt-8
              lg:grid-cols-[1fr_auto]
              lg:items-end
            "
          >
            <div>
              <p
                className="
                  max-w-2xl
                  text-lg leading-8
                  text-[#647586]
                  sm:text-xl
                "
              >
                Redes, seguridad, infraestructura, desarrollo y soporte
                tecnológico para empresas y proyectos que necesitan soluciones
                confiables.
              </p>

              <p
                className="
                  mt-5
                  text-sm font-medium
                  text-[#31465B]
                "
              >
                <span className="font-semibold text-[#00B8E6]">
                  Lynk
                </span>{" "}
                conecta las piezas para que todo funcione mejor.
              </p>
            </div>

            <div
              className="
                flex flex-wrap
                items-center gap-6
              "
            >
              <TransitionLink
                href="/servicios"
                className="
                  group inline-flex
                  items-center gap-3
                  border-b border-[#0D1523]
                  pb-1.5
                  text-base font-semibold
                  text-[#0D1523]
                  transition-colors duration-300
                  hover:border-[#00B8E6]
                  hover:text-[#00B8E6]
                "
              >
                Ver servicios

                <ArrowUpRight
                  size={19}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </TransitionLink>

              <TransitionLink
                href="/contacto"
                className="
                  text-base font-semibold
                  text-[#5A7C99]
                  transition-colors duration-300
                  hover:text-[#0D1523]
                "
              >
                Hablemos
              </TransitionLink>
            </div>
          </div>
        </div>

        <aside
          className="
            border-l border-black/10
            pl-8
            lg:mt-24
          "
        >
          <p
            className="
              text-xs font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5A7C99]
            "
          >
            Lo que conectamos
          </p>

          <div className="mt-8">
            {areas.map((area, index) => (
              <div
                key={area}
                className="
                  flex items-start gap-4
                  border-b border-black/8
                  py-5
                  first:pt-0
                "
              >
                <span
                  className="
                    pt-1
                    font-mono
                    text-xs
                    text-[#00B8E6]
                  "
                >
                  /0{index + 1}
                </span>

                <p
                  className="
                    text-xl font-semibold
                    leading-tight
                    tracking-[-0.035em]
                    text-[#31465B]
                    lg:text-2xl
                  "
                >
                  {area}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}