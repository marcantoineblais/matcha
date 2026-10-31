"use client";

import { useEffect, useRef, useState } from "react";
import Mark from "../brand/Mark";

export default function SplashScreen({ id }: { id: string }) {
  const splashRef = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"intro" | "outro" | "done">("intro");

  // The app is hydrated: let the intro finish, then fade out
  useEffect(() => {
    const splash = splashRef.current;
    if (!splash) return;

    let cancelled = false;
    const isActive = splash.hasAttribute("data-active");
    const intro = isActive
      ? (splash.getAnimations?.({ subtree: true }) ?? [])
      : [];

    Promise.allSettled(intro.map((animation) => animation.finished)).then(
      () => {
        if (!cancelled) setPhase(isActive ? "outro" : "done");
      },
    );

    return () => {
      cancelled = true;
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      ref={splashRef}
      id={id}
      className="splash"
      data-phase={phase}
      aria-hidden="true"
      // The inline script sets data-active before paint
      suppressHydrationWarning
      onAnimationEnd={(e) => {
        if (e.target === e.currentTarget) setPhase("done");
      }}
    >
      <div className="splash-stage">
        <div className="splash-glow" />

        <div className="splash-mark">
          <span className="splash-ring" />
          <Mark className="splash-icon" steamClassName="splash-steam" />
        </div>

        <div className="splash-text">
          <p className="splash-name">matcha</p>
          <p className="splash-tagline">Mochi&apos;s mischievous companion</p>
        </div>
      </div>
    </div>
  );
}
