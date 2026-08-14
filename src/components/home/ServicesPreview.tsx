import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/services";

export default function ServicesPreview() {
  return (
    <section
      className="
        px-6 py-24
        sm:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-10
              lg:grid-cols-[280px_1fr]
            "
          >
            <div className="pt-2">
              <SectionLabel number="01">
                Servicios
              </SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-4xl
                  text-5xl font-semibold
                  leading-[0.95]
                  tracking-[-0.055em]
                  text-[#0D1523]
                  sm:text-6xl
                  lg:text-[4.7rem]
                "
              >
                Cuatro áreas.
                <br />
                Una sola
                <span className="ml-3 text-[#00B8E6]">
                  mirada.
                </span>
              </h2>

              <p
                className="
                  mt-7 max-w-2xl
                  text-lg leading-8
                  text-[#647586]
                "
              >
                Trabajamos distintas áreas de forma independiente o combinadas,
                según lo que necesite cada proyecto.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="
              mt-14
              border-t border-black/10
            "
          >
            {services.map((service) => (
              <TransitionLink
                key={service.title}
                href="/servicios"
                className="
                  group
                  flex items-center
                  justify-between gap-8
                  border-b border-black/10
                  py-7
                "
              >
                <div
                  className="
                    flex items-center
                    gap-6
                  "
                >
                  <span
                    className="
                      font-mono
                      text-xs
                      text-[#00B8E6]
                    "
                  >
                    /{service.number}
                  </span>

                  <h3
                    className="
                      text-2xl font-semibold
                      tracking-[-0.035em]
                      text-[#0D1523]
                      transition-colors duration-300
                      group-hover:text-[#00B8E6]
                      sm:text-3xl
                    "
                  >
                    {service.title}
                  </h3>
                </div>

                <ArrowUpRight
                  size={20}
                  className="
                    shrink-0
                    text-[#5A7C99]
                    transition-all duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:text-[#00B8E6]
                  "
                />
              </TransitionLink>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex justify-end">
            <TransitionLink
              href="/servicios"
              className="
                group inline-flex
                items-center gap-3
                border-b border-[#0D1523]
                pb-1
                text-base font-semibold
                text-[#0D1523]
                transition-colors
                hover:border-[#00B8E6]
                hover:text-[#00B8E6]
              "
            >
              Explorar servicios

              <ArrowUpRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </TransitionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}