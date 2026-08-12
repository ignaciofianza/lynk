import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";

export default function ContactCTA() {
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
            grid gap-10
            lg:grid-cols-[1fr_auto]
            lg:items-end
          "
        >
          <div>
            <p
              className="
                text-sm font-semibold
                uppercase tracking-[0.16em]
                text-[#5A7C99]
              "
            >
              ¿Tenés un proyecto?
            </p>

            <h2
              className="
                mt-5
                max-w-4xl
                text-5xl font-semibold
                leading-[0.96]
                tracking-[-0.055em]
                text-[#0D1523]
                sm:text-6xl
                lg:text-7xl
              "
            >
              Hablemos de lo que{" "}
              <span
                className="
                  font-serif
                  inline-block
                  font-normal italic
                  tracking-[-0.02em]
                  text-[#00B8E6]
                "
              >
                necesitás.
              </span>
            </h2>

            <p
              className="
                mt-6
                max-w-xl
                text-base leading-7
                text-[#647586]
                sm:text-lg
              "
            >
              Contanos qué necesitás y vemos juntos la mejor forma de resolverlo.
            </p>
          </div>

          <Link
            href="/contacto"
            className="
              group inline-flex
              w-fit items-center gap-3
              rounded-full
              bg-[#0D1523]
              px-6 py-3.5
              text-sm font-semibold
              text-white
              transition-colors
              hover:bg-[#31465B]
            "
          >
            Contactanos

            <ArrowRight
              size={18}
              className="
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}