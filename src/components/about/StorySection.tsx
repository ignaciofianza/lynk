import Reveal from "@/components/motion/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";

export default function StorySection() {
  return (
    <section
      className="
        px-6 py-24
        sm:px-8
        lg:py-32
      "
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div
            className="
              grid gap-10
              lg:grid-cols-[280px_1fr]
            "
          >
            <div className="pt-2">
              <SectionLabel number="01">
                La idea
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
                  lg:text-[4.9rem]
                "
              >
                Vimos muchas soluciones.
                <br />
                Lo que faltaba era
                <span className="ml-3 text-[#00B8E6]">
                  unirlas.
                </span>
              </h2>

              <div
                className="
                  mt-12 grid gap-10
                  border-t border-black/10
                  pt-8
                  lg:grid-cols-2
                  lg:gap-16
                "
              >
                <p
                  className="
                    text-xl leading-8
                    text-[#31465B]
                    sm:text-2xl
                    sm:leading-9
                  "
                >
                  Redes por un lado. Cámaras por otro. Desarrollo, equipos y
                  soporte en proveedores distintos.
                </p>

                <div>
                  <p
                    className="
                      text-base leading-7
                      text-[#647586]
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    Lynk nace de la idea de reunir esas áreas bajo una misma
                    mirada. No porque todo proyecto necesite todo, sino porque
                    muchas veces las partes están más conectadas de lo que
                    parecen.
                  </p>

                  <p
                    className="
                      mt-6
                      text-base leading-7
                      text-[#647586]
                      sm:text-lg
                      sm:leading-8
                    "
                  >
                    Así podemos entender el problema como un conjunto y definir
                    qué hace falta realmente, sin obligar al cliente a coordinar
                    soluciones aisladas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}