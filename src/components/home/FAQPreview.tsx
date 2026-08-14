import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";
import SectionLabel from "@/components/ui/SectionLabel";

const questions = [
  "¿Trabajan solo con empresas?",
  "¿Puedo contratar un servicio puntual?",
  "¿Trabajan proyectos que combinan varias áreas?",
];

export default function FAQPreview() {
  return (
    <section
      className="
        px-6 py-24
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
              <SectionLabel number="03">
                Preguntas frecuentes
              </SectionLabel>
            </div>

            <div>
              <div
                className="
                  grid gap-10
                  lg:grid-cols-[1fr_0.75fr]
                  lg:items-start
                "
              >
                <div>
                  <h2
                    className="
                      max-w-3xl
                      text-4xl font-semibold
                      leading-[0.96]
                      tracking-tighter
                      text-[#0D1523]
                      sm:text-5xl
                      lg:text-[4rem]
                    "
                  >
                    Algunas cosas que
                    <br />
                    quizás quieras
                    <span className="ml-2 text-[#00B8E6]">
                      saber.
                    </span>
                  </h2>

                  <TransitionLink
                    href="/faq"
                    className="
                      group mt-8
                      inline-flex items-center gap-3
                      border-b border-[#0D1523]
                      pb-1.5
                      text-base font-semibold
                      text-[#0D1523]
                      transition-colors
                      hover:border-[#00B8E6]
                      hover:text-[#00B8E6]
                    "
                  >
                    Ver todas las preguntas

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

                <div className="border-t border-black/10">
                  {questions.map((question, index) => (
                    <div
                      key={question}
                      className="
                        flex items-start gap-4
                        border-b border-black/10
                        py-5
                      "
                    >
                      <span
                        className="
                          pt-1
                          font-mono
                          text-xs
                          text-[#00B8E6]
                        "
                      >
                        /0{index + 1}
                      </span>

                      <p
                        className="
                          text-lg font-semibold
                          leading-snug
                          tracking-tight
                          text-[#31465B]
                        "
                      >
                        {question}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}