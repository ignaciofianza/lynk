import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/motion/TransitionLink";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-black/8
        px-6
        sm:px-8
      "
    >
      <div
        className="
          pointer-events-none
          absolute left-[35%] -top-52
          h-180 w-220
          rounded-full
          bg-[#00D5FF]/9
          blur-[160px]
        "
      />

      <div
        className="
          relative mx-auto
          flex min-h-190
          max-w-7xl
          items-center
          py-24
          lg:min-h-200
          lg:py-28
        "
      >
        <div className="w-full max-w-6xl">
          <div
            className="
              mb-9 flex
              items-center gap-4
            "
          >
            <span
              className="
                text-sm font-semibold
                tracking-[-0.02em]
                text-[#0D1523]
              "
            >
              Lynk
            </span>

            <span className="h-px w-8 bg-[#00B8E6]" />

            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.18em]
                text-[#5A7C99]
              "
            >
              Montevideo · Uruguay
            </p>
          </div>

          <h1
            className="
              max-w-5xl
              text-[4.6rem]
              font-semibold
              leading-[0.84]
              tracking-[-0.07em]
              text-[#0D1523]
              sm:text-[6rem]
              lg:text-[7.8rem]
            "
          >
            Unimos lo que
            <br />
            otros dejan
            <br />

            <span className="text-[#00B8E6]">
              separado.
            </span>
          </h1>

          <div
            className="
              mt-12
              flex max-w-4xl
              flex-col gap-8
              border-t border-black/10
              pt-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            <p
              className="
                max-w-2xl
                text-lg leading-8
                text-[#647586]
                sm:text-xl
              "
            >
              Redes, seguridad, desarrollo y soporte bajo una misma mirada.
              Una forma más simple de resolver necesidades que normalmente
              terminan repartidas entre distintos proveedores.
            </p>

            <div
              className="
                flex shrink-0
                flex-wrap items-center gap-6
              "
            >
              <TransitionLink
                href="/servicios"
                className="
                  group inline-flex
                  items-center gap-3
                  border-b border-[#0D1523]
                  pb-1.5
                  text-base font-semibold
                  text-[#0D1523]
                  transition-colors duration-300
                  hover:border-[#00B8E6]
                  hover:text-[#00B8E6]
                "
              >
                Ver servicios

                <ArrowUpRight
                  size={19}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </TransitionLink>

              <TransitionLink
                href="/nosotros"
                className="
                  text-base font-semibold
                  text-[#5A7C99]
                  transition-colors duration-300
                  hover:text-[#0D1523]
                "
              >
                Conocé Lynk
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}