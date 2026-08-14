"use client";

import { ArrowUpRight, Check, Mail } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjybogdq");

  return (
    <section
      className="
        px-6 py-24
        sm:px-8
        lg:py-32
      "
    >
      <div
        className="
          mx-auto grid max-w-7xl
          gap-16
          lg:grid-cols-[0.6fr_1.4fr]
          lg:gap-20
        "
      >
        <Reveal>
          <aside>
            <p
              className="
                text-sm font-semibold
                uppercase
                tracking-[0.16em]
                text-[#5A7C99]
              "
            >
              Hablemos
            </p>

            <h2
              className="
                mt-6
                max-w-md
                text-4xl font-semibold
                leading-[0.96]
                tracking-tighter
                text-[#0D1523]
                sm:text-5xl
              "
            >
              El primer paso es
              <span className="ml-2 text-[#00B8E6]">entender.</span>
            </h2>

            <p
              className="
                mt-7 max-w-md
                text-base leading-7
                text-[#647586]
                sm:text-lg
              "
            >
              No necesitás saber exactamente qué servicio contratar. Contanos
              qué querés hacer o qué problema tenés y arrancamos desde ahí.
            </p>

            <div
              className="
                mt-10
                border-t border-black/10
                pt-8
              "
            >
              <p
                className="
                  text-xs font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#5A7C99]
                "
              >
                Contacto
              </p>

              <div className="mt-5 space-y-4">
                <a
                  href="https://wa.me/59899123456"
                  target="_blank"
                  rel="noreferrer"
                  className="
      group flex w-fit
      items-center gap-2
      text-lg font-semibold
      text-[#0D1523]
      transition-colors duration-300
      hover:text-[#00B8E6]
    "
                >
                  <Image
                    src="/icons/whatsapp.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                  +598 99 123 456
                  <ArrowUpRight
                    size={16}
                    className="
        transition-transform duration-300
        group-hover:-translate-y-0.5
        group-hover:translate-x-0.5
      "
                  />
                </a>

                <a
                  href="mailto:contacto@lynk.uy"
                  className="
      group flex w-fit
      items-center gap-2
      text-lg font-semibold
      text-[#0D1523]
      transition-colors duration-300
      hover:text-[#00B8E6]
    "
                >
                  <Mail size={18} />
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

                <a
                  href="https://instagram.com/lynk.uy"
                  target="_blank"
                  rel="noreferrer"
                  className="
      group flex w-fit
      items-center gap-2
      text-lg font-semibold
      text-[#0D1523]
      transition-colors duration-300
      hover:text-[#00B8E6]
    "
                >
                  <Image
                    src="/icons/instagram.svg"
                    alt=""
                    width={18}
                    height={18}
                  />
                  @lynk.uy
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

              <div className="mt-7">
                <p
                  className="
      text-xs font-semibold
      uppercase
      tracking-[0.14em]
      text-[#5A7C99]
    "
                >
                  También estamos en
                </p>

                <div
                  className="
      mt-3 flex items-center gap-4
      text-sm font-semibold
      text-[#31465B]
    "
                >
                  <a
                    href="https://facebook.com/lynk.uy"
                    target="_blank"
                    rel="noreferrer"
                    className="
        transition-colors duration-300
        hover:text-[#00B8E6]
      "
                  >
                    Facebook
                  </a>

                  <span className="text-black/20">·</span>

                  <a
                    href="https://x.com/lynk.uy"
                    target="_blank"
                    rel="noreferrer"
                    className="
        transition-colors duration-300
        hover:text-[#00B8E6]
      "
                  >
                    X
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </Reveal>

        <Reveal delay={0.04}>
          <div
            className="
              rounded-2xl
              border border-black/10
              bg-white
              p-6
              shadow-[0_20px_60px_rgba(13,21,35,0.06)]
              sm:p-8
              lg:p-10
            "
          >
            {state.succeeded ? (
              <div
                className="
                  flex min-h-130
                  flex-col
                  justify-center
                "
              >
                <div
                  className="
                    flex h-12 w-12
                    items-center justify-center
                    rounded-full
                    bg-[#00D5FF]/10
                    text-[#00B8E6]
                  "
                >
                  <Check size={22} />
                </div>

                <h2
                  className="
                    mt-8
                    text-4xl font-semibold
                    leading-[0.96]
                    tracking-tighter
                    text-[#0D1523]
                    sm:text-5xl
                  "
                >
                  Mensaje enviado.
                </h2>

                <p
                  className="
                    mt-5 max-w-xl
                    text-lg leading-8
                    text-[#647586]
                  "
                >
                  Gracias por escribirnos. Recibimos tu mensaje y vamos a
                  revisarlo lo antes posible.
                </p>
              </div>
            ) : (
              <>
                <div
                  className="
                    border-b border-black/10
                    pb-7
                  "
                >
                  <p
                    className="
                      text-xs font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-[#5A7C99]
                    "
                  >
                    Formulario de contacto
                  </p>

                  <h3
                    className="
                      mt-3
                      text-2xl font-semibold
                      tracking-[-0.035em]
                      text-[#0D1523]
                      sm:text-3xl
                    "
                  >
                    Contanos un poco sobre tu proyecto.
                  </h3>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="
                    mt-8
                    space-y-7
                  "
                >
                  <div
                    className="
                      grid gap-7
                      sm:grid-cols-2
                    "
                  >
                    <Field
                      label="Nombre"
                      name="name"
                      type="text"
                      placeholder="Tu nombre"
                      required
                    />

                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="nombre@ejemplo.com"
                      required
                    />
                  </div>

                  <div
                    className="
                      grid gap-7
                      sm:grid-cols-2
                    "
                  >
                    <Field
                      label="Teléfono"
                      name="phone"
                      type="tel"
                      placeholder="+598 ..."
                    />

                    <div>
                      <label
                        htmlFor="type"
                        className="
                          text-sm font-semibold
                          text-[#31465B]
                        "
                      >
                        Tipo de consulta
                      </label>

                      <select
                        id="type"
                        name="type"
                        defaultValue=""
                        className="
                          mt-2.5 w-full
                          rounded-lg
                          border border-black/10
                          bg-[#F7F9FA]
                          px-4 py-3.5
                          text-base
                          text-[#0D1523]
                          outline-none
                          transition-all duration-200
                          focus:border-[#00B8E6]
                          focus:bg-white
                          focus:ring-3
                          focus:ring-[#00D5FF]/10
                        "
                      >
                        <option value="" disabled>
                          Seleccioná una opción
                        </option>

                        <option value="redes">Redes e infraestructura</option>

                        <option value="seguridad">
                          Seguridad y videovigilancia
                        </option>

                        <option value="desarrollo">Desarrollo web</option>

                        <option value="soporte">Equipos y soporte</option>

                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="
                        text-sm font-semibold
                        text-[#31465B]
                      "
                    >
                      ¿Qué necesitás?
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={7}
                      placeholder="Contanos brevemente qué querés hacer, qué problema tenés o qué necesitás resolver."
                      className="
                        mt-2.5 w-full
                        resize-none
                        rounded-lg
                        border border-black/10
                        bg-[#F7F9FA]
                        px-4 py-3.5
                        text-base leading-7
                        text-[#0D1523]
                        outline-none
                        transition-all duration-200
                        placeholder:text-[#5A7C99]/55
                        focus:border-[#00B8E6]
                        focus:bg-white
                        focus:ring-3
                        focus:ring-[#00D5FF]/10
                      "
                    />

                    <ValidationError
                      prefix="Mensaje"
                      field="message"
                      errors={state.errors}
                      className="
                        mt-2
                        text-sm
                        text-red-600
                      "
                    />
                  </div>

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="
                      text-sm
                      text-red-600
                    "
                  />

                  <ValidationError
                    errors={state.errors}
                    className="
                      text-sm
                      text-red-600
                    "
                  />

                  <div
                    className="
                      flex flex-col gap-5
                      border-t border-black/10
                      pt-7
                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    "
                  >
                    <p
                      className="
                        max-w-sm
                        text-sm leading-6
                        text-[#647586]
                      "
                    >
                      Usaremos estos datos únicamente para responder a tu
                      consulta.
                    </p>

                    <button
                      type="submit"
                      disabled={state.submitting}
                      className="
                        group inline-flex
                        w-fit items-center gap-3
                        rounded-lg
                        bg-[#0D1523]
                        px-5 py-3.5
                        text-base font-semibold
                        text-white
                        transition-all duration-300
                        hover:bg-[#00B8E6]
                        hover:text-[#07111A]
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                      "
                    >
                      {state.submitting ? "Enviando..." : "Enviar consulta"}

                      {!state.submitting && (
                        <ArrowUpRight
                          size={19}
                          className="
                            transition-transform duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      )}
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

function Field({ label, name, type, placeholder, required }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="
          text-sm font-semibold
          text-[#31465B]
        "
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="
          mt-2.5 w-full
          rounded-lg
          border border-black/10
          bg-[#F7F9FA]
          px-4 py-3.5
          text-base
          text-[#0D1523]
          outline-none
          transition-all duration-200
          placeholder:text-[#5A7C99]/55
          focus:border-[#00B8E6]
          focus:bg-white
          focus:ring-3
          focus:ring-[#00D5FF]/10
        "
      />
    </div>
  );
}
