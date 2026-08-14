"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";
import { motion } from "motion/react";
import {
  usePathname,
  useRouter,
} from "next/navigation";

type TransitionContextType = {
  navigate: (href: string) => void;
  isTransitioning: boolean;
};

const TransitionContext =
  createContext<TransitionContextType | null>(null);

const transitionEase = [0.76, 0, 0.24, 1] as const;

export function PageTransitionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] =
    useState(false);

  const [covered, setCovered] = useState(false);

  const navigate = (href: string) => {
    if (isTransitioning) {
      return;
    }

    if (href === pathname) {
      return;
    }

    setIsTransitioning(true);
    setCovered(true);

    window.setTimeout(() => {
      router.push(href);

      window.scrollTo({
        top: 0,
        behavior: "instant",
      });

      window.setTimeout(() => {
        setCovered(false);

        window.setTimeout(() => {
          setIsTransitioning(false);
        }, 320);
      }, 70);
    }, 260);
  };

  return (
    <TransitionContext.Provider
      value={{
        navigate,
        isTransitioning,
      }}
    >
      {children}

      {/* Cyan underlayer */}
      <motion.div
        initial={false}
        animate={{
          x: covered ? "0%" : "102%",
        }}
        transition={{
          duration: covered ? 0.24 : 0.3,
          ease: transitionEase,
        }}
        style={{
          willChange: "transform",
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-9997
          bg-[#00D5FF]
        "
      />

      {/* Main navy curtain */}
      <motion.div
        initial={false}
        animate={{
          x: covered ? "0%" : "100%",
        }}
        transition={{
          duration: covered ? 0.34 : 0.34,
          ease: transitionEase,
        }}
        style={{
          willChange: "transform",
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-9998
          overflow-hidden
          bg-[#0D1523]
        "
      >
        {/* Texture */}
        <div
          className="
            absolute inset-0
            opacity-[0.045]
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            bg-size-[20px_20px]
          "
        />

        {/* Desktop-only glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            hidden
            h-105 w-105
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#00D5FF]/10
            blur-[110px]
            md:block
          "
        />

        {/* Desktop-only secondary glow */}
        <div
          className="
            absolute -bottom-24 -right-24
            hidden
            h-72 w-72
            rounded-full
            bg-[#00D5FF]/7
            blur-[90px]
            md:block
          "
        />

        {/* Subtle edge glow */}
        <div
          className="
            absolute inset-y-0 left-0
            w-px
            bg-[#00D5FF]/60
            shadow-[0_0_24px_rgba(0,213,255,0.35)]
          "
        />
      </motion.div>

      {/* Branding */}
      <motion.div
        initial={false}
        animate={{
          opacity: covered ? 1 : 0,
          y: covered ? 0 : 6,
        }}
        transition={{
          duration: covered ? 0.18 : 0.14,
          delay: covered ? 0.1 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{
          willChange: "transform, opacity",
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-9999
          flex items-center
          justify-center
        "
      >
        <div className="text-center">
          <span
            className="
              text-xs font-semibold
              uppercase
              tracking-[0.32em]
              text-white
              sm:text-sm
              sm:tracking-[0.35em]
            "
          >
            Lynk
          </span>

          <div
            className="
              mx-auto mt-3
              h-px w-8
              bg-[#00D5FF]
            "
          />
        </div>
      </motion.div>
    </TransitionContext.Provider>
  );
}

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition debe usarse dentro de PageTransitionProvider",
    );
  }

  return context;
}