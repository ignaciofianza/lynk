import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutPreview() {
  return (
    <section
      className="
        relative overflow-hidden
        bg-[#0D1523]
        px-6 py-24
        text-white
        sm:px-8
        lg:py-32
      "
    >
      <div
        className="
          pointer-events-none
          absolute -right-40 top-1/2
          h-120 w-120
          -translate-y-1/2
          rounded-full
          bg-[#00D5FF]/7
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-12
              lg:grid-cols-[280px_1fr]
            "
          >
            <div className="pt-2">
              <SectionLabel number="02">
                Quiénes somos
              </SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-5xl
                  text-5xl font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-[5rem]
                "
              >
                Dos personas.
                <br />
                Una misma idea.
                <br />

                <span className="text-[#00D5FF]">
                  Lynk.
                </span>
              </h2>

              <div
                className="
                  mt-10 flex
                  max-w-4xl
                  flex-col gap-8
                  border-t border-white/10
                  pt-8
                  lg:flex-row
                  lg:items-end
                  lg:justify-between
                "
              >
                <p
                  className="
                    max-w-2xl
                    text-lg leading-8
                    text-white/60
                    sm:text-xl
                  "
                >
                  Lynk nace en Montevideo de una idea compartida: crear algo
                  distinto y reunir en una misma propuesta servicios que
                  normalmente se encuentran separados.
                </p>

                <TransitionLink
                  href="/nosotros"
                  className="
                    group inline-flex
                    w-fit shrink-0
                    items-center gap-3
                    border-b border-white/20
                    pb-1.5
                    text-base font-semibold
                    text-white
                    transition-colors duration-300
                    hover:border-[#00D5FF]
                    hover:text-[#00D5FF]
                  "
                >
                  Nuestra historia

                  <ArrowUpRight
                    size={19}
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
      </div>
    </section>
  );
}