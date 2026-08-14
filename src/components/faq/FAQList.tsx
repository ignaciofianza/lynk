import { Plus } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const faqGroups = [
  {
    title: "General",
    questions: [
      {
        question: "¿Trabajan solamente con empresas?",
        answer:
          "No. Trabajamos con empresas, comercios, hogares y proyectos de distintos tamaños. El alcance se define según cada necesidad.",
      },
      {
        question: "¿En qué zona trabajan?",
        answer:
          "Nuestra base está en Montevideo y trabajamos principalmente dentro de Uruguay. Para algunos servicios digitales también podemos trabajar de forma remota.",
      },
      {
        question: "¿Puedo consultar aunque todavía no tenga claro qué necesito?",
        answer:
          "Sí. Parte de nuestro trabajo es entender el problema antes de definir una solución. No necesitás llegar con una tecnología o servicio específico decidido.",
      },
    ],
  },
  {
    title: "Servicios",
    questions: [
      {
        question: "¿Puedo contratar un solo servicio?",
        answer:
          "Sí. Cada área puede trabajarse de forma independiente. Si el proyecto lo requiere, también podemos combinar varias dentro de una misma solución.",
      },
      {
        question: "¿Qué pasa si lo que necesito no aparece en la lista de servicios?",
        answer:
          "Contanos el caso. La lista resume nuestras principales áreas de trabajo, pero cada proyecto puede requerir una combinación o alcance diferente.",
      },
      {
        question: "¿Trabajan con equipos o instalaciones que ya existen?",
        answer:
          "Sí. Podemos evaluar infraestructura, equipos o sistemas existentes y definir si conviene mantenerlos, mejorarlos o reemplazarlos.",
      },
    ],
  },
  {
    title: "Proyectos",
    questions: [
      {
        question: "¿Cómo empieza un proyecto con Lynk?",
        answer:
          "Primero entendemos qué necesitás y el contexto del proyecto. A partir de eso definimos una propuesta y, una vez acordada, avanzamos con la implementación.",
      },
      {
        question: "¿Hacen presupuestos?",
        answer:
          "Sí. El presupuesto depende del alcance, materiales, equipamiento y trabajo necesario para cada proyecto.",
      },
      {
        question: "¿Ofrecen mantenimiento después de implementar una solución?",
        answer:
          "Sí, dependiendo del servicio. Podemos contemplar mantenimiento, soporte y mejoras posteriores cuando el proyecto lo requiera.",
      },
    ],
  },
];

export default function FAQList() {
  return (
    <section
      className="
        px-6 py-24
        sm:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <SectionLabel number="01">
          Preguntas
        </SectionLabel>

        <div className="mt-16">
          {faqGroups.map((group, groupIndex) => (
            <Reveal
              key={group.title}
              delay={groupIndex * 0.05}
            >
              <div
                className="
                  grid gap-8
                  border-t border-black/10
                  py-10
                  lg:grid-cols-[280px_1fr]
                  lg:gap-10
                "
              >
                <div>
                  <p
                    className="
                      text-xl font-semibold
                      tracking-[-0.035em]
                      text-[#0D1523]
                    "
                  >
                    {group.title}
                  </p>
                </div>

                <div>
                  {group.questions.map((item) => (
                    <details
                      key={item.question}
                      className="
                        group
                        border-b border-black/10
                      "
                    >
                      <summary
                        className="
                          flex cursor-pointer
                          list-none items-center
                          justify-between gap-8
                          py-6
                        "
                      >
                        <span
                          className="
                            text-xl font-semibold
                            leading-snug
                            tracking-[-0.03em]
                            text-[#0D1523]
                            sm:text-2xl
                          "
                        >
                          {item.question}
                        </span>

                        <Plus
                          size={20}
                          className="
                            shrink-0
                            text-[#5A7C99]
                            transition-transform duration-300
                            group-open:rotate-45
                            group-open:text-[#00B8E6]
                          "
                        />
                      </summary>

                      <div
                        className="
                          max-w-2xl
                          pb-6
                          text-base leading-7
                          text-[#647586]
                          sm:text-lg
                        "
                      >
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}