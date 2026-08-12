import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section
      className="
        px-6 py-28
        sm:px-8
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-10
              border-b border-black/10
              pb-16
              lg:grid-cols-[280px_1fr]
              lg:gap-10
            "
          >
            <div className="pt-3">
              <SectionLabel number="01">
                Servicios
              </SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-5xl
                  text-5xl font-semibold
                  leading-[0.94]
                  tracking-[-0.06em]
                  text-[#0D1523]
                  sm:text-6xl
                  lg:text-[5.1rem]
                "
              >
                Distintas necesidades.
                <br className="hidden sm:block" />
                Una misma forma de
                <span className="ml-3 text-[#00B8E6]">
                  resolverlas.
                </span>
              </h2>

              <p
                className="
                  mt-8 max-w-2xl
                  text-lg leading-8
                  text-[#647586]
                  sm:text-xl
                "
              >
                En lynk conectamos infraestructura, seguridad, desarrollo y
                soporte para construir soluciones que realmente tengan sentido
                para cada proyecto.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.04}
            >
              <TransitionLink
                href="/servicios"
                className="
                  group relative
                  grid gap-7
                  border-b border-black/10
                  py-12
                  transition-colors duration-300
                  hover:bg-[#0D1523]/[0.018]
                  lg:grid-cols-[70px_0.8fr_1fr_auto]
                  lg:items-center
                  lg:px-3
                  lg:py-14
                "
              >
                <span
                  className="
                    absolute bottom-0 left-0
                    h-px w-0
                    bg-[#00B8E6]
                    transition-all duration-500
                    group-hover:w-full
                  "
                />

                <span
                  className="
                    font-mono
                    text-sm
                    text-[#5A7C99]
                    transition-colors duration-300
                    group-hover:text-[#00B8E6]
                  "
                >
                  /{service.number}
                </span>

                <h3
                  className="
                    text-4xl font-semibold
                    leading-[0.96]
                    tracking-[-0.045em]
                    text-[#0D1523]
                    sm:text-5xl
                    lg:text-[3.6rem]
                  "
                >
                  {service.title}
                </h3>

                <p
                  className="
                    max-w-xl
                    text-base leading-7
                    text-[#647586]
                    sm:text-lg
                  "
                >
                  {service.description}
                </p>

                <span
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    border border-[#0D1523]/10
                    text-[#31465B]
                    transition-all duration-300
                    group-hover:border-[#00B8E6]/50
                    group-hover:bg-[#00D5FF]/8
                    group-hover:text-[#00B8E6]
                  "
                >
                  <ArrowUpRight
                    size={21}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </span>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}