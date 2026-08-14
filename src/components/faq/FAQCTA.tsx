import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";

export default function FAQCTA() {
  return (
    <section
      className="
        border-t border-black/10
        bg-[#F2F6F8]
        px-6
        sm:px-8
      "
    >
      <Reveal
        className="
          mx-auto max-w-7xl
          py-14
          sm:py-18
          lg:py-24
        "
      >
        <div
          className="
            flex flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
            lg:gap-12
          "
        >
          <div>
            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.14em]
                text-[#5A7C99]
                sm:text-sm
                sm:tracking-[0.16em]
              "
            >
              /02 — ¿Quedó alguna duda?
            </p>

            <h2
              className="
    mt-5
    max-w-4xl
    text-[2.6rem]
    font-semibold
    leading-[0.95]
    tracking-[-0.045em]
    text-[#0D1523]
    min-[420px]:text-[3rem]
    sm:text-[3.6rem]
    lg:text-[4.2rem]
  "
            >
              Preguntanos
              <br className="md:hidden" />
              <span className="text-[#00B8E6] md:ml-2">directamente.</span>
            </h2>

            <p
              className="
                mt-5
                max-w-xl
                text-base leading-7
                text-[#647586]
                sm:text-lg
                sm:leading-8
              "
            >
              Si tu pregunta no está acá, escribinos y vemos tu caso.
            </p>
          </div>

          <TransitionLink
            href="/contacto"
            className="
              group inline-flex
              w-fit shrink-0
              items-center gap-3
              border-b border-[#0D1523]
              pb-1.5
              text-base font-semibold
              text-[#0D1523]
              transition-colors duration-300
              hover:border-[#00B8E6]
              hover:text-[#00B8E6]
              sm:text-lg
            "
          >
            Contactanos
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
      </Reveal>
    </section>
  );
}
