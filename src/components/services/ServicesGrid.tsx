import {
  Camera,
  Code2,
  Cpu,
  Network,
} from "lucide-react";

import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

const services = [
  {
    number: "01",
    title: "Redes e infraestructura",
    description:
      "Diseño, instalación y mantenimiento de redes para empresas, comercios y hogares.",
    icon: Network,
    items: [
      "Cableado estructurado",
      "Wi-Fi y cobertura",
      "Routers y switches",
      "Diagnóstico de red",
    ],
  },
  {
    number: "02",
    title: "Seguridad y videovigilancia",
    description:
      "Soluciones de monitoreo y seguridad pensadas según las necesidades de cada espacio.",
    icon: Camera,
    items: [
      "Cámaras de seguridad",
      "Grabación y monitoreo",
      "Acceso remoto",
      "Instalación y configuración",
    ],
  },
  {
    number: "03",
    title: "Desarrollo web",
    description:
      "Sitios y soluciones digitales modernas, rápidas y adaptadas a cada proyecto.",
    icon: Code2,
    items: [
      "Sitios institucionales",
      "Aplicaciones web",
      "Landing pages",
      "Mantenimiento y mejoras",
    ],
  },
  {
    number: "04",
    title: "Equipos y soporte",
    description:
      "Soporte técnico, diagnóstico, armado y mantenimiento de equipos informáticos.",
    icon: Cpu,
    items: [
      "Armado de PCs",
      "Mantenimiento",
      "Diagnóstico",
      "Actualización de hardware",
    ],
  },
];

export default function ServicesGrid() {
  return (
    <section
      className="
        px-6 py-28
        sm:px-8
        lg:py-40
      "
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-10
              border-b border-black/10
              pb-14
              lg:grid-cols-[280px_1fr]
            "
          >
            <div className="pt-2">
              <SectionLabel number="01">
                Qué hacemos
              </SectionLabel>
            </div>

            <div>
              <h2
                className="
                  max-w-5xl
                  text-5xl font-semibold
                  leading-[0.94]
                  tracking-[-0.055em]
                  text-[#0D1523]
                  sm:text-6xl
                  lg:text-[5rem]
                "
              >
                Cuatro áreas.
                <br className="hidden sm:block" />
                Una misma forma de
                <span className="ml-3 text-[#00B8E6]">
                  conectar.
                </span>
              </h2>

              <p
                className="
                  mt-8 max-w-2xl
                  text-lg leading-8
                  text-[#647586]
                  sm:text-xl
                "
              >
                Desde infraestructura hasta desarrollo, combinamos distintas
                áreas para construir soluciones completas y coherentes.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="border-t border-black/10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal
                key={service.title}
                delay={index * 0.05}
              >
                <article
                  className="
                    group relative
                    grid gap-8
                    border-b border-black/10
                    py-12
                    transition-colors duration-300
                    hover:bg-[#0D1523]/[0.018]
                    lg:grid-cols-[70px_1fr_0.95fr_auto]
                    lg:items-start
                    lg:px-3
                    lg:py-14
                  "
                >
                  <span
                    className="
                      absolute bottom-0 left-0
                      h-px w-0
                      bg-[#00B8E6]
                      transition-all duration-500
                      group-hover:w-full
                    "
                  />

                  <span
                    className="
                      pt-1
                      font-mono
                      text-sm
                      text-[#00B8E6]
                    "
                  >
                    /{service.number}
                  </span>

                  <div>
                    <p
                      className="
                        text-xs font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#5A7C99]
                      "
                    >
                      Conectamos
                    </p>

                    <h2
                      className="
                        mt-4
                        max-w-xl
                        text-4xl font-semibold
                        leading-[0.96]
                        tracking-[-0.045em]
                        text-[#0D1523]
                        sm:text-5xl
                        lg:text-[3.4rem]
                      "
                    >
                      {service.title}
                    </h2>

                    <p
                      className="
                        mt-6 max-w-xl
                        text-base leading-7
                        text-[#647586]
                        sm:text-lg
                      "
                    >
                      {service.description}
                    </p>
                  </div>

                  <ul
                    className="
                      grid gap-3
                      text-base
                      text-[#31465B]
                      sm:grid-cols-2
                      lg:pt-8
                    "
                  >
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="
                          flex items-center gap-3
                        "
                      >
                        <span
                          className="
                            h-1.5 w-1.5
                            shrink-0
                            rounded-full
                            bg-[#00B8E6]
                          "
                        />

                        {item}
                      </li>
                    ))}
                  </ul>

                  <div
                    className="
                      relative
                      flex h-12 w-12
                      items-center justify-center
                      rounded-full
                      border border-black/10
                      text-[#31465B]
                      transition-all duration-300
                      group-hover:border-[#00B8E6]/50
                      group-hover:bg-[#00D5FF]/8
                      group-hover:text-[#00B8E6]
                    "
                  >
                    <span
                      className="
                        absolute -right-1 -top-1
                        h-2.5 w-2.5
                        rounded-full
                        bg-[#00D5FF]
                        opacity-0
                        transition-opacity duration-300
                        group-hover:opacity-100
                      "
                    />

                    <Icon size={21} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}