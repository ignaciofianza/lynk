"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import TransitionLink from "@/components/motion/TransitionLink";

const links = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "/servicios",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {open && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={closeMenu}
          className="
            fixed inset-0 z-40
            bg-[#0D1523]/15
            backdrop-blur-[2px]
            md:hidden
          "
        />
      )}

      <header
        className="
          sticky top-0 z-50
          border-b border-black/8
          bg-[#F7F9FA]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto flex
            h-19 max-w-7xl
            items-center justify-between
            px-5
            sm:h-20 sm:px-8
          "
        >
          <TransitionLink
            href="/"
            aria-label="Ir al inicio de lynk"
            onClick={closeMenu}
            className="
              relative z-10
              flex shrink-0
              items-center
            "
          >
            <Image
              src="/images/lynk_logo-inverted.png"
              alt="lynk"
              width={52}
              height={52}
              priority
              className="
                h-11 w-11
                object-contain
                sm:h-12 sm:w-12
              "
            />
          </TransitionLink>

          <nav
            className="
              absolute left-1/2
              hidden -translate-x-1/2
              items-center gap-8
              md:flex
            "
          >
            {links.map((link) => {
              const active = isActive(
                link.href,
              );

              return (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className={`
                    group relative
                    py-2
                    text-sm font-medium
                    transition-colors
                    duration-300

                    ${
                      active
                        ? "text-[#0D1523]"
                        : "text-[#5A6C7D] hover:text-[#0D1523]"
                    }
                  `}
                >
                  {link.label}

                  <span
                    className={`
                      absolute
                      bottom-0 left-0
                      h-px
                      bg-[#00B8E6]
                      transition-all
                      duration-300

                      ${
                        active
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </TransitionLink>
              );
            })}
          </nav>

          <TransitionLink
            href="/contacto"
            className="
              group hidden
              items-center gap-2.5
              rounded-full
              border border-[#0D1523]/12
              bg-white/70
              px-5 py-2.5
              text-sm font-semibold
              text-[#0D1523]
              shadow-sm shadow-black/2
              transition-all duration-300
              hover:border-[#00B8E6]/50
              hover:bg-white
              hover:text-[#00B8E6]
              md:inline-flex
            "
          >
            Contacto

            <ArrowUpRight
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </TransitionLink>

          <button
            type="button"
            onClick={() =>
              setOpen(
                (current) => !current,
              )
            }
            aria-label={
              open
                ? "Cerrar menú"
                : "Abrir menú"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="
              relative z-10
              flex h-11 w-11
              items-center justify-center
              rounded-full
              border border-black/10
              bg-white/60
              text-[#0D1523]
              shadow-sm shadow-black/2
              transition-all duration-300
              hover:bg-white
              md:hidden
            "
          >
            {open ? (
              <X
                size={20}
                strokeWidth={1.8}
              />
            ) : (
              <Menu
                size={20}
                strokeWidth={1.8}
              />
            )}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`
            absolute
            left-0 right-0 top-full
            overflow-hidden
            border-b border-black/8
            bg-[#F7F9FA]
            shadow-xl
            shadow-[#0D1523]/5
            transition-all
            duration-300
            md:hidden

            ${
              open
                ? "max-h-155 opacity-100"
                : "pointer-events-none max-h-0 opacity-0"
            }
          `}
        >
          <nav
            className="
              mx-auto max-w-7xl
              px-5 pb-6 pt-3
              sm:px-8
            "
          >
            <div className="border-t border-black/8">
              {links.map(
                (link, index) => {
                  const active =
                    isActive(link.href);

                  return (
                    <TransitionLink
                      key={link.href}
                      href={link.href}
                      onClick={
                        closeMenu
                      }
                      className={`
                        group relative
                        flex items-center
                        justify-between
                        border-b
                        border-black/8
                        py-5
                        transition-colors
                        duration-300

                        ${
                          active
                            ? "text-[#00B8E6]"
                            : "text-[#0D1523]"
                        }
                      `}
                    >
                      <span
                        className="
                          text-[1.8rem]
                          font-semibold
                          leading-none
                          tracking-[-0.04em]
                        "
                      >
                        {link.label}
                      </span>

                      <span
                        className={`
                          font-mono
                          text-xs
                          transition-colors
                          duration-300

                          ${
                            active
                              ? "text-[#00B8E6]"
                              : "text-[#5A7C99] group-hover:text-[#00B8E6]"
                          }
                        `}
                      >
                        /0{index + 1}
                      </span>

                      <span
                        className={`
                          absolute
                          bottom-0 left-0
                          h-px
                          bg-[#00B8E6]
                          transition-all
                          duration-300

                          ${
                            active
                              ? "w-14"
                              : "w-0"
                          }
                        `}
                      />
                    </TransitionLink>
                  );
                },
              )}
            </div>

            <TransitionLink
              href="/contacto"
              onClick={closeMenu}
              className="
                group mt-6
                flex items-center
                justify-between
                rounded-2xl
                bg-[#0D1523]
                px-5 py-4
                text-base font-semibold
                text-white
                transition-colors
                hover:bg-[#31465B]
              "
            >
              Contactanos

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </TransitionLink>

            <div
              className="
                mt-6 flex
                items-center
                justify-between
                text-[10px]
                font-semibold uppercase
                tracking-[0.16em]
                text-[#5A7C99]
              "
            >
              <span>lynk.uy</span>
              <span>
                Montevideo, Uruguay
              </span>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}