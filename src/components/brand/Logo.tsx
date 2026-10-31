import { twMerge } from "tailwind-merge";
import Matcha from "./Matcha";

/** Logo: the mascot and the wordmark in the brand gradient. */
export default function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span
      className={twMerge("inline-flex items-center gap-1.5 select-none", className)}
    >
      <Matcha className="size-10 shrink-0" />
      {!compact && (
        <span className="text-brand text-2xl font-bold tracking-tight">
          matcha
        </span>
      )}
    </span>
  );
}
