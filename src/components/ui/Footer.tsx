import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        border-t border-white/10
        bg-[#070B12]
        px-6 text-white
        sm:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid gap-16
            py-16
            lg:grid-cols-[1.25fr_0.75fr]
            lg:items-end
            lg:py-20
          "
        >
          <div>
            <Image
              src="/images/lynk_primary-nobg.png"
              alt="lynk"
              width={220}
              height={90}
              className="
                h-auto
                w-37,5
                object-contain
              "
            />

            <p
              className="
                mt-8 max-w-2xl
                text-4xl font-semibold
                leading-none
                tracking-[-0.045em]
                text-white
                sm:text-5xl
              "
            >
              Tecnología pensada para{" "}
              <span
                className="
                  font-serif
                  inline-block
                  font-normal italic
                  tracking-[-0.02em]
                  text-[#00D5FF]
                "
              >
                conectar mejor.
              </span>
            </p>

            <p
              className="
                mt-6 max-w-xl
                text-base leading-7
                text-white/55
              "
            >
              Redes, seguridad, infraestructura, desarrollo y soporte
              tecnológico desde Montevideo, Uruguay.
            </p>
          </div>

          <div
            className="
              grid gap-12
              sm:grid-cols-2
              lg:justify-self-end
              lg:gap-16
            "
          >
            <div>
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-[0.18em]
                  text-white/35
                "
              >
                Navegación
              </p>

              <nav
                className="
                  mt-6 flex flex-col
                  gap-3
                  text-base font-medium
                  text-white/70
                "
              >
                <Link
                  href="/servicios"
                  className="transition-colors hover:text-[#00D5FF]"
                >
                  Servicios
                </Link>

                <Link
                  href="/nosotros"
                  className="transition-colors hover:text-[#00D5FF]"
                >
                  Nosotros
                </Link>

                <Link
                  href="/faq"
                  className="transition-colors hover:text-[#00D5FF]"
                >
                  FAQ
                </Link>

                <Link
                  href="/contacto"
                  className="transition-colors hover:text-[#00D5FF]"
                >
                  Contacto
                </Link>
              </nav>
            </div>

            <div>
              <p
                className="
                  text-xs font-semibold
                  uppercase tracking-[0.18em]
                  text-white/35
                "
              >
                Contacto
              </p>

              <div
                className="
                  mt-6 space-y-3
                  text-base text-white/70
                "
              >
                <p>Montevideo, Uruguay</p>

                <a
                  href="mailto:contacto@lynk.uy"
                  className="
                    group inline-flex items-center gap-2
                    transition-colors
                    hover:text-[#00D5FF]
                  "
                >
                  contacto@lynk.uy

                  <ArrowUpRight
                    size={16}
                    className="
                      transition-transform duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col gap-4
            border-t border-white/10
            py-5
            text-xs text-white/30
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <span>© 2026 lynk.</span>
          <span>lynk.uy</span>
        </div>
      </div>
    </footer>
  );
}