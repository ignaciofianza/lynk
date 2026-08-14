import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const points = [
  {
    number: "01",
    title: "Formación",
    description:
      "Tenemos una base técnica que nos enseñó a entender la tecnología desde cómo funciona, no solamente desde cómo se usa.",
  },
  {
    number: "02",
    title: "Práctica",
    description:
      "Nuestra experiencia incluye desarrollo, hardware, soporte, diagnóstico y resolución de problemas reales.",
  },
  {
    number: "03",
    title: "Visión",
    description:
      "Trabajar con distintas áreas nos permite entender cómo una decisión puede afectar al resto del proyecto.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      className="
        bg-[#0D1523]
        px-6 py-24
        text-white
        sm:px-8
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-12
              lg:grid-cols-[280px_1fr]
            "
          >
            <div className="pt-2">
              <SectionLabel number="02">Nuestra base</SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-4xl
                  text-4xl font-semibold
                  leading-[0.95]
                  tracking-tighter
                  sm:text-5xl
                  lg:text-[4.2rem]
                "
              >
                Aprender haciendo cambia la forma de
                <span className="ml-2 text-[#00D5FF]">resolver.</span>
              </h2>

              <p
                className="
                  mt-7 max-w-2xl
                  text-lg leading-8
                  text-white/55
                "
              >
                Nuestra experiencia combina formación técnica con práctica real,
                trabajando con problemas que exigen entender antes de actuar.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="
              mt-14 grid
              border-t border-white/10
              lg:grid-cols-3
            "
          >
            {points.map((point) => (
              <article
                key={point.number}
                className="
                  border-b border-white/10
                  py-8
                  lg:border-b-0
                  lg:border-r
                  lg:px-8
                  lg:first:pl-0
                  lg:last:border-r-0
                  lg:last:pr-0
                "
              >
                <span
                  className="
                    font-mono
                    text-xs
                    text-[#00D5FF]
                  "
                >
                  /{point.number}
                </span>

                <h3
                  className="
                    mt-5
                    text-2xl font-semibold
                    tracking-[-0.035em]
                  "
                >
                  {point.title}
                </h3>

                <p
                  className="
                    mt-4
                    max-w-sm
                    text-base leading-7
                    text-white/50
                  "
                >
                  {point.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
