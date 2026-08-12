import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const reasons = [
  {
    number: "01",
    title: "Entender antes de proponer",
    description:
      "Primero entendemos el problema, el contexto y lo que realmente necesitás. Después pensamos la solución.",
  },
  {
    number: "02",
    title: "Resolver sin complicar",
    description:
      "Buscamos soluciones claras, útiles y proporcionadas. Sin agregar tecnología o procesos porque sí.",
  },
  {
    number: "03",
    title: "Pensar a largo plazo",
    description:
      "Elegimos herramientas y decisiones que funcionen bien hoy y sigan teniendo sentido mañana.",
  },
];

export default function WhyLynk() {
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
            "
          >
            <div className="pt-3">
              <SectionLabel number="03">
                Por qué lynk
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
                  lg:text-[5.2rem]
                "
              >
                No se trata de usar
                <br className="hidden sm:block" />
                más tecnología.
                <br />
                Se trata de usarla
                <span className="ml-3 text-[#00B8E6]">
                  mejor.
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
                En lynk cada decisión parte de una necesidad concreta. La
                tecnología es la herramienta; el objetivo es que la solución
                realmente funcione.
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          {reasons.map((reason, index) => (
            <Reveal
              key={reason.number}
              delay={index * 0.06}
            >
              <article
                className="
                  group
                  grid gap-8
                  border-b border-black/10
                  py-12
                  transition-colors duration-300
                  hover:bg-[#0D1523]/[0.018]
                  lg:grid-cols-[70px_0.95fr_1fr]
                  lg:items-start
                  lg:px-3
                  lg:py-14
                "
              >
                <span
                  className="
                    pt-1
                    font-mono
                    text-sm
                    text-[#00B8E6]
                  "
                >
                  /{reason.number}
                </span>

                <h3
                  className="
                    max-w-xl
                    text-4xl font-semibold
                    leading-[0.96]
                    tracking-[-0.045em]
                    text-[#0D1523]
                    sm:text-5xl
                    lg:text-[3.4rem]
                  "
                >
                  {reason.title}
                </h3>

                <div>
                  <p
                    className="
                      max-w-xl
                      text-base leading-7
                      text-[#647586]
                      sm:text-lg
                    "
                  >
                    {reason.description}
                  </p>

                  <div
                    className="
                      mt-8
                      h-px w-10
                      bg-[#00B8E6]/40
                      transition-all duration-300
                      group-hover:w-20
                      group-hover:bg-[#00B8E6]
                    "
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}