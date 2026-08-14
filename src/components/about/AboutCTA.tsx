import { ArrowUpRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import TransitionLink from "@/components/motion/TransitionLink";

export default function AboutCTA() {
  return (
    <section
      className="
        border-t border-black/10
        px-6
        sm:px-8
      "
    >
      <Reveal
        className="
          mx-auto max-w-7xl
          py-16
          sm:py-20
          lg:py-24
        "
      >
        <div
          className="
            flex flex-col gap-10
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold
                uppercase
                tracking-[0.16em]
                text-[#5A7C99]
              "
            >
              /04 — Contacto
            </p>

            <h2
              className="
                mt-6
                max-w-4xl
                text-4xl font-semibold
                leading-[0.95]
                tracking-tighter
                text-[#0D1523]
                sm:text-5xl
                lg:text-[4.3rem]
              "
            >
              ¿Hacemos algo
              <span className="ml-2 text-[#00B8E6]">
                juntos?
              </span>
            </h2>

            <p
              className="
                mt-6 max-w-xl
                text-lg leading-8
                text-[#647586]
              "
            >
              Si tenés una idea, una necesidad o un problema para resolver,
              queremos conocerlo.
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
              text-lg font-semibold
              text-[#0D1523]
              transition-colors duration-300
              hover:border-[#00B8E6]
              hover:text-[#00B8E6]
            "
          >
            Hablemos

            <ArrowUpRight
              size={20}
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