import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const process = [
  {
    number: "01",
    title: "Entendemos",
    description:
      "Analizamos qué necesitás, qué problema querés resolver y qué contexto tiene el proyecto.",
  },
  {
    number: "02",
    title: "Conectamos",
    description:
      "Definimos cómo encajan las herramientas, servicios y decisiones necesarias para llegar a una solución clara.",
  },
  {
    number: "03",
    title: "Resolvemos",
    description:
      "Implementamos, configuramos y dejamos todo funcionando para que la solución cumpla su objetivo.",
  },
];

export default function ProcessSection() {
  return (
    <section
      className="
        bg-[#0D1523]
        px-6 py-24
        text-white
        sm:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="02">
          Cómo trabajamos
        </SectionLabel>

        <Reveal>
          <div
            className="
              mt-14 grid gap-12
              lg:grid-cols-[1.1fr_0.7fr]
              lg:items-end
              lg:gap-20
            "
          >
            <h2
              className="
                max-w-5xl
                text-5xl font-semibold
                leading-[0.92]
                tracking-[-0.055em]
                sm:text-6xl
                lg:text-[5rem]
              "
            >
              Entender.
              <br />
              Conectar.
              <br />

              <span className="text-[#00D5FF]">
                Resolver.
              </span>
            </h2>

            <p
              className="
                max-w-xl
                text-lg leading-8
                text-white/55
                lg:justify-self-end
              "
            >
              Un proceso simple para llegar desde una necesidad concreta hasta
              una solución bien implementada.
            </p>
          </div>
        </Reveal>

        <div
          className="
            relative mt-20
            border-t border-white/10
          "
        >
          <div
            className="
              absolute left-0 top-0
              hidden h-px w-full
              bg-linear-to-r
              from-[#00D5FF]
              via-[#00D5FF]/40
              to-white/10
              lg:block
            "
          />

          <div className="grid lg:grid-cols-3">
            {process.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.06}
                className="
                  relative
                  border-b border-white/10
                  py-12
                  lg:border-b-0
                  lg:border-r
                  lg:px-10
                  lg:py-14
                  first:lg:pl-0
                  last:lg:border-r-0
                  last:lg:pr-0
                "
              >
                <div
                  className="
                    absolute -top-2 left-0
                    hidden h-4 w-4
                    rounded-full
                    border-4 border-[#0D1523]
                    bg-[#00D5FF]
                    lg:block
                  "
                />

                <span
                  className="
                    font-mono
                    text-sm
                    text-[#00D5FF]
                  "
                >
                  /{step.number}
                </span>

                <h3
                  className="
                    mt-8
                    text-4xl font-semibold
                    leading-[0.96]
                    tracking-[-0.045em]
                    sm:text-5xl
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-6 max-w-sm
                    text-base leading-7
                    text-white/55
                    sm:text-lg
                  "
                >
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}