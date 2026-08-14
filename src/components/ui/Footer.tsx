import { ArrowUpRight } from "lucide-react";

import TransitionLink from "@/components/motion/TransitionLink";

const navigation = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "FAQ", href: "/faq" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer
      className="
        bg-[#070B12]
        px-6
        text-white
        sm:px-8
      "
    >
      <div className="mx-auto max-w-7xl">
        <div
          className="
            grid gap-16
            py-16
            lg:grid-cols-[1.15fr_0.45fr_0.55fr]
            lg:gap-20
            lg:py-20
          "
        >
          {/* Brand statement */}
          <div>
            <h2
              className="
                mt-6
                max-w-2xl
                text-4xl font-semibold
                leading-[0.96]
                tracking-tighter
                text-white
                sm:text-5xl
                lg:text-[4rem]
              "
            >
              Distintas áreas.
              <br />
              Una misma forma de
              <span className="ml-2 text-[#00D5FF]">resolver.</span>
            </h2>

            <p
              className="
                mt-6 max-w-xl
                text-base leading-7
                text-white/45
                sm:text-lg
              "
            >
              Redes, seguridad, desarrollo y soporte para proyectos que
              necesitan algo más que soluciones aisladas.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.16em]
                text-white/30
              "
            >
              Navegación
            </p>

            <nav
              className="
                mt-6 flex
                flex-col gap-3
              "
            >
              {navigation.map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className="
                    w-fit
                    text-base font-medium
                    text-white/65
                    transition-colors duration-300
                    hover:text-[#00D5FF]
                  "
                >
                  {item.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="
                text-xs font-semibold
                uppercase
                tracking-[0.16em]
                text-white/30
              "
            >
              Contacto
            </p>

            <div
              className="
                mt-6 flex
                flex-col gap-3
              "
            >
              <a
                href="mailto:contacto@lynk.uy"
                className="
                  group flex w-fit
                  items-center gap-2
                  text-base font-medium
                  text-white/65
                  transition-colors duration-300
                  hover:text-[#00D5FF]
                "
              >
                contacto@lynk.uy
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <a
                href="https://instagram.com/lynk.uy"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex w-fit
                  items-center gap-2
                  text-base font-medium
                  text-white/65
                  transition-colors duration-300
                  hover:text-[#00D5FF]
                "
              >
                @lynk.uy
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <a
                href="https://wa.me/59899123456"
                target="_blank"
                rel="noreferrer"
                className="
                  group flex w-fit
                  items-center gap-2
                  text-base font-medium
                  text-white/65
                  transition-colors duration-300
                  hover:text-[#00D5FF]
                "
              >
                WhatsApp
                <ArrowUpRight
                  size={15}
                  className="
                    transition-transform duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              <p
                className="
                  pt-2
                  text-sm
                  text-white/30
                "
              >
                Montevideo, Uruguay
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            flex flex-col gap-3
            border-t border-white/8
            py-5
            text-xs
            text-white/25
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>© 2026 Lynk. Derechos reservados sobre el contenido propio.</p>

          <div
            className="
              flex items-center gap-4
            "
          >
            <span>Montevideo · Uruguay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
