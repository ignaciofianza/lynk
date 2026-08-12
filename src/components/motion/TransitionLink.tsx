"use client";

import type {
  AnchorHTMLAttributes,
  MouseEvent,
} from "react";

import { usePageTransition } from "./PageTransitionProvider";

type TransitionLinkProps =
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export default function TransitionLink({
  href,
  children,
  onClick,
  target,
  ...props
}: TransitionLinkProps) {
  const {
    navigate,
    isTransitioning,
  } = usePageTransition();

  const handleClick = (
    event: MouseEvent<HTMLAnchorElement>,
  ) => {
    onClick?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      target === "_blank"
    ) {
      return;
    }

    event.preventDefault();

    if (!isTransitioning) {
      navigate(href);
    }
  };

  return (
    <a
      href={href}
      target={target}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}