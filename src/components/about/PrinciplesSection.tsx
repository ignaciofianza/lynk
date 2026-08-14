import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const principles = [
  {
    number: "01",
    title: "Entender primero",
    description:
      "Antes de recomendar una solución, buscamos entender qué problema hay que resolver.",
  },
  {
    number: "02",
    title: "Conectar las piezas",
    description:
      "Miramos el proyecto como un conjunto y no como una suma de elementos aislados.",
  },
  {
    number: "03",
    title: "Mantenerlo claro",
    description:
      "La tecnología puede ser compleja. Trabajar con nosotros no tiene por qué serlo.",
  },
  {
    number: "04",
    title: "Pensar a futuro",
    description:
      "Tomamos decisiones considerando estabilidad, mantenimiento y crecimiento.",
  },
];

export default function PrinciplesSection() {
  return (
    <section
      className="
        bg-[#F2F6F8]
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
              <SectionLabel number="03">
                Cómo pensamos
              </SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-4xl
                  text-5xl font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0D1523]
                  sm:text-6xl
                  lg:text-[4.8rem]
                "
              >
                Menos complejidad.
                <br />
                Más
                <span className="ml-3 text-[#00B8E6]">
                  criterio.
                </span>
              </h2>
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
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="
                  grid gap-5
                  border-b border-black/10
                  py-7
                  sm:grid-cols-[60px_0.7fr_1fr]
                  sm:items-start
                  sm:gap-8
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    text-[#00B8E6]
                  "
                >
                  /{principle.number}
                </span>

                <h3
                  className="
                    text-xl font-semibold
                    tracking-[-0.03em]
                    text-[#0D1523]
                    sm:text-2xl
                  "
                >
                  {principle.title}
                </h3>

                <p
                  className="
                    max-w-xl
                    text-base leading-7
                    text-[#647586]
                  "
                >
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}