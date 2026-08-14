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
        }, 400);
      }, 80);
    }, 250);
  };

  return (
    <TransitionContext.Provider
      value={{
        navigate,
        isTransitioning,
      }}
    >
      {children}

      {/* Cyan blur layer */}
      <motion.div
        initial={false}
        animate={{
          x: covered ? "0%" : "105%",
        }}
        transition={{
          duration: covered ? 0.28 : 0.34,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-9997
          bg-[#00D5FF]/35
          backdrop-blur-xl
        "
      />

      {/* Main navy panel */}
      <motion.div
        initial={false}
        animate={{
          clipPath: covered
            ? "inset(0% 0% 0% 0%)"
            : "inset(0% 0% 0% 100%)",
        }}
        transition={{
          duration: covered ? 0.38 : 0.38,
          ease: [0.76, 0, 0.24, 1],
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
            opacity-[0.055]
            bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)]
            bg-size-[18px_18px]
          "
        />

        {/* Soft cyan glow */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-105 w-105
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            bg-[#00D5FF]/12
            blur-[120px]
          "
        />

        {/* Secondary glow */}
        <div
          className="
            absolute -bottom-24 -right-24
            h-72 w-72
            rounded-full
            bg-[#00D5FF]/8
            blur-[100px]
          "
        />
      </motion.div>

      {/* Cyan leading edge */}
      <motion.div
        initial={false}
        animate={{
          x: covered ? "0%" : "100vw",
          opacity: covered ? 1 : 0,
        }}
        transition={{
          duration: covered ? 0.38 : 0.34,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="
          pointer-events-none
          fixed inset-y-0 right-0
          z-9999
          w-0.75
          bg-[#00D5FF]
          shadow-[0_0_30px_rgba(0,213,255,0.55)]
        "
      />

      {/* Branding */}
      <motion.div
        initial={false}
        animate={{
          opacity: covered ? 1 : 0,
          scale: covered ? 1 : 0.975,
          y: covered ? 0 : 8,
        }}
        transition={{
          duration: 0.2,
          delay: covered ? 0.12 : 0,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          fixed inset-0
          z-10000
          flex items-center
          justify-center
        "
      >
        <div className="text-center">
          <span
            className="
              text-sm font-semibold
              uppercase
              tracking-[0.35em]
              text-white
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