import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    number: "01",
    title: "Soluciones a medida",
    description:
      "No todos los proyectos necesitan lo mismo. Diseñamos cada solución según el contexto.",
  },
  {
    number: "02",
    title: "Atención cercana",
    description:
      "Trabajamos de forma directa, clara y sin intermediarios innecesarios.",
  },
  {
    number: "03",
    title: "Tecnología confiable",
    description:
      "Elegimos herramientas y soluciones pensadas para funcionar bien hoy y mañana.",
  },
];

export default function WhyLynk() {
  return (
    <section
      className="
        px-6 py-28
        sm:px-8
        lg:py-36
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="03">
          Por qué lynk
        </SectionLabel>

        <div
          className="
            mt-16 grid
            gap-0
            border-y border-black/10
            lg:grid-cols-3
          "
        >
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.number}
              delay={index * 0.08}
              className="
                group
                border-b border-black/10
                py-12
                transition-colors
                lg:border-b-0
                lg:border-r
                lg:px-10
                lg:py-14
                first:lg:pl-0
                last:lg:border-r-0
                last:lg:pr-0
              "
            >
              <span
                className="
                  font-mono
                  text-sm
                  text-[#00B8E6]
                "
              >
                /{reason.number}
              </span>

              <h3
                className="
                  mt-10
                  max-w-sm
                  text-3xl
                  font-semibold
                  leading-[1.05]
                  tracking-[-0.04em]
                  text-[#0D1523]
                  sm:text-4xl
                  lg:text-[2.6rem]
                "
              >
                {reason.title}
              </h3>

              <p
                className="
                  mt-6
                  max-w-sm
                  text-base
                  leading-7
                  text-[#647586]
                  sm:text-lg
                "
              >
                {reason.description}
              </p>

              <div
                className="
                  mt-10 h-px w-10
                  bg-[#00B8E6]/40
                  transition-all duration-300
                  group-hover:w-16
                  group-hover:bg-[#00B8E6]
                "
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}