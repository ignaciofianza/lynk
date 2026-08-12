import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutPreview() {
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
      <div
        className="
          mx-auto grid max-w-7xl
          gap-14
          lg:grid-cols-[0.4fr_1fr]
        "
      >
        <SectionLabel number="02">Quiénes somos</SectionLabel>

        <Reveal>
          <h2
            className="
    max-w-4xl
    text-4xl font-semibold
    leading-none
    tracking-tighter
    sm:text-5xl
    lg:text-6xl
  "
          >
            Tecnología bien hecha,
            <br />
            <span
              className="
      font-serif
      mt-1 inline-block
      font-normal italic
      tracking-[-0.02em]
      text-[#00D5FF]
    "
            >
              sin complicaciones.
            </span>
          </h2>

          <p
            className="
              mt-8 max-w-2xl
              text-lg leading-8
              text-white/60
            "
          >
            En lynk buscamos acercar soluciones tecnológicas modernas y
            confiables, trabajando de forma directa con cada cliente y cada
            proyecto.
          </p>

          <Link
            href="/nosotros"
            className="
              group mt-10
              inline-flex items-center gap-3
              text-sm font-semibold
              text-[#00D5FF]
            "
          >
            Conocé lynk
            <ArrowRight
              size={18}
              className="
                transition-transform
                group-hover:translate-x-1
              "
            />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
