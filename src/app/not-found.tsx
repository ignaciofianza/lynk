import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/motion/TransitionLink";

export default function NotFound() {
  return (
    <main
      className="
        flex min-h-[calc(100vh-80px)]
        items-center
        px-6
        sm:px-8
      "
    >
      <div
        className="
          mx-auto w-full max-w-7xl
          py-20
        "
      >
        <div
          className="
            grid gap-14
            border-t border-black/10
            pt-10
            lg:grid-cols-[0.35fr_1fr]
            lg:gap-20
          "
        >
          <div>
            <p
              className="
                font-mono
                text-sm
                text-[#00B8E6]
              "
            >
              /404
            </p>
          </div>

          <div>
            <h1
              className="
                max-w-5xl
                text-[4.5rem]
                font-semibold
                leading-[0.86]
                tracking-[-0.065em]
                text-[#0D1523]
                sm:text-[6rem]
                lg:text-[7rem]
              "
            >
              Esta conexión
              <br />
              no lleva a
              <span className="ml-3 text-[#00B8E6]">
                ningún lado.
              </span>
            </h1>

            <div
              className="
                mt-10 flex flex-col gap-8
                border-t border-black/10
                pt-8
                lg:flex-row
                lg:items-end
                lg:justify-between
              "
            >
              <p
                className="
                  max-w-xl
                  text-lg leading-8
                  text-[#647586]
                  sm:text-xl
                "
              >
                La página que buscás no existe, cambió de dirección o nunca
                estuvo conectada.
              </p>

              <TransitionLink
                href="/"
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
                Volver al inicio

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
          </div>
        </div>
      </div>
    </main>
  );
}