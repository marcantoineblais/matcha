import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import SectionLabel from "./SectionLabel";

/** Subtle inset panel for read-only information. */
export default function InfoBox({
  label,
  children,
  className,
}: {
  label?: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "rounded-2xl bg-background/60 border border-border px-3 py-2.5",
        className,
      )}
    >
      {label && <SectionLabel className="mb-0.5">{label}</SectionLabel>}
      {children}
    </div>
  );
}
