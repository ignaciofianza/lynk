import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
        relative overflow-hidden
        border-b border-black/8
      "
    >
      <div
        className="
          pointer-events-none
          absolute left-[35%] -top-45
          h-170 w-205
          rounded-full
          bg-[#00D5FF]/10
          blur-[150px]
        "
      />

      <div
        className="
          relative mx-auto
          grid min-h-197.5
          max-w-7xl
          items-center
          px-6 py-24
          sm:px-8
          lg:grid-cols-[1.15fr_0.55fr]
          lg:gap-24
          lg:py-28
        "
      >
        <div>
          <p
            className="
              mb-9
              text-sm font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5A7C99]
            "
          >
            Tecnología · Infraestructura · Uruguay
          </p>

          <h1
            className="
              max-w-5xl
              text-[4.6rem]
              font-semibold
              leading-[0.84]
              tracking-[-0.07em]
              text-[#0D1523]
              sm:text-[6rem]
              lg:text-[7.7rem]
            "
          >
            Tecnología que
            <br />
            conecta
            <br />

            <span>tu </span>

            <span
              className="
                font-serif
                font-normal italic
                tracking-tight
                text-[#00B8E6]
              "
            >
              negocio.
            </span>
          </h1>

          <p
            className="
              mt-10 max-w-2xl
              text-lg leading-8
              text-[#647586]
              sm:text-xl
            "
          >
            Redes, seguridad, infraestructura, desarrollo y soporte
            tecnológico para empresas, comercios y proyectos que necesitan
            soluciones confiables.
          </p>

          <div
            className="
              mt-10 flex flex-wrap
              items-center gap-7
            "
          >
            <Link
              href="/servicios"
              className="
                group inline-flex
                items-center gap-3
                rounded-full
                bg-[#0D1523]
                px-6 py-3.5
                text-sm font-semibold
                text-white
                transition-colors
                hover:bg-[#31465B]
              "
            >
              Ver servicios

              <ArrowRight
                size={18}
                className="
                  transition-transform duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

            <Link
              href="/contacto"
              className="
                text-sm font-semibold
                text-[#31465B]
                transition-colors
                hover:text-[#00B8E6]
              "
            >
              Hablemos →
            </Link>
          </div>
        </div>

        <aside
          className="
            mt-16
            border-l border-black/10
            pl-8
            lg:mt-24
          "
        >
          <p
            className="
              text-xs font-semibold
              uppercase
              tracking-[0.18em]
              text-[#5A7C99]
            "
          >
            Áreas
          </p>

          <div
            className="
              mt-8 space-y-5
              text-xl font-semibold
              leading-tight
              tracking-[-0.035em]
              text-[#31465B]
              lg:text-2xl
            "
          >
            <p>Redes e infraestructura</p>
            <p>Seguridad y cámaras</p>
            <p>Desarrollo web</p>
            <p>Equipos y soporte</p>
          </div>
        </aside>
      </div>
    </section>
  );
}