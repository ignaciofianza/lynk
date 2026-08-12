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
        lg:py-36
      "
    >
      <div
        className="
          pointer-events-none
          absolute -right-40 top-1/2
          h-130 w-130
          -translate-y-1/2
          rounded-full
          bg-[#00D5FF]/8
          blur-[140px]
        "
      />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel number="02">
          Quiénes somos
        </SectionLabel>

        <Reveal>
          <div
            className="
              mt-14 grid gap-14
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-24
            "
          >
            <div>
              <h2
                className="
                  max-w-4xl
                  text-5xl font-semibold
                  leading-[0.92]
                  tracking-[-0.055em]
                  sm:text-6xl
                  lg:text-[5.4rem]
                "
              >
                Lynk nace para hacer
                <br />
                la tecnología
                <span className="ml-3 text-[#00D5FF]">
                  más simple.
                </span>
              </h2>
            </div>

            <div className="lg:pt-2">
              <p
                className="
                  max-w-xl
                  text-lg leading-8
                  text-white/70
                  sm:text-xl
                "
              >
                Somos una propuesta tecnológica enfocada en redes,
                infraestructura, seguridad, desarrollo y soporte.
              </p>

              <p
                className="
                  mt-6 max-w-xl
                  text-base leading-7
                  text-white/50
                  sm:text-lg
                "
              >
                Trabajamos con empresas, comercios y proyectos que necesitan
                resolver problemas concretos, desde mejorar una red hasta
                implementar una solución digital completa.
              </p>

              <TransitionLink
                href="/nosotros"
                className="
                  group mt-9
                  inline-flex items-center gap-3
                  border-b border-white/20
                  pb-1.5
                  text-base font-semibold
                  text-white
                  transition-colors duration-300
                  hover:border-[#00D5FF]
                  hover:text-[#00D5FF]
                "
              >
                Conocé más sobre Lynk[]

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
        </Reveal>

        <Reveal delay={0.08}>
          <div
            className="
              mt-20 grid
              border-t border-white/10
              lg:grid-cols-[0.7fr_1fr_1fr]
            "
          >
            <div
              className="
                border-b border-white/10
                py-8
                lg:border-b-0
                lg:border-r
                lg:pr-10
              "
            >
              <p
                className="
                  text-xs font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                "
              >
                Base
              </p>

              <p
                className="
                  mt-4
                  text-2xl font-semibold
                  tracking-[-0.035em]
                  text-white
                "
              >
                Montevideo, Uruguay
              </p>
            </div>

            <div
              className="
                border-b border-white/10
                py-8
                lg:border-b-0
                lg:border-r
                lg:px-10
              "
            >
              <p
                className="
                  text-xs font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                "
              >
                Qué hacemos
              </p>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-xl font-semibold
                  leading-snug
                  tracking-[-0.03em]
                  text-white
                "
              >
                Infraestructura, seguridad, desarrollo y soporte tecnológico.
              </p>
            </div>

            <div
              className="
                py-8
                lg:pl-10
              "
            >
              <p
                className="
                  text-xs font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white/35
                "
              >
                Enfoque
              </p>

              <p
                className="
                  mt-4
                  max-w-sm
                  text-xl font-semibold
                  leading-snug
                  tracking-[-0.03em]
                  text-white
                "
              >
                Resolver necesidades reales con tecnología bien aplicada.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}