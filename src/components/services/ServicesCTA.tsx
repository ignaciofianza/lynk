import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";

export default function ServicesCTA() {
  return (
    <section
      className="
        border-t border-black/8
        bg-[#F2F6F8]
        px-6
        sm:px-8
      "
    >
      <Reveal
        className="
          mx-auto max-w-7xl
          py-20
          sm:py-24
          lg:py-32
        "
      >
        <div
          className="
            grid gap-14
            lg:grid-cols-[0.28fr_1fr]
            lg:gap-16
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold
                uppercase
                tracking-[0.16em]
                text-[#5A7C99]
              "
            >
              /03 — ¿Algo distinto?
            </p>
          </div>

          <div>
            <h2
              className="
                max-w-5xl
                text-5xl font-semibold
                leading-[0.92]
                tracking-[-0.06em]
                text-[#0D1523]
                sm:text-6xl
                lg:text-[5.5rem]
              "
            >
              No todo entra
              <br className="hidden sm:block" />
              en una lista de
              <span className="ml-3 text-[#00B8E6]">
                servicios.
              </span>
            </h2>

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
                  Si tenés una necesidad particular, contanos el problema.
                  Podemos combinar distintas áreas de lynk y pensar una solución
                  específica para tu proyecto.
                </p>

                <p
                  className="
                    mt-5
                    text-sm font-medium
                    text-[#5A7C99]
                  "
                >
                  Una necesidad · Distintas piezas · Una solución
                </p>
              </div>

              <TransitionLink
                href="/contacto"
                className="
                  group inline-flex
                  w-fit items-center gap-3
                  border-b border-[#0D1523]
                  pb-1.5
                  text-lg font-semibold
                  text-[#0D1523]
                  transition-colors duration-300
                  hover:border-[#00B8E6]
                  hover:text-[#00B8E6]
                "
              >
                Contanos tu caso

                <ArrowUpRight
                  size={20}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </TransitionLink>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}