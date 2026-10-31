import { twMerge } from "tailwind-merge";
import Matcha from "../brand/Matcha";

const sizeClasses = {
  sm: "w-10",
  md: "w-14",
  lg: "w-20",
};

/** Loading: the mascot bobbing, never a generic spinner. */
export default function Spinner({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  return (
    <div
      className={twMerge("inline-flex justify-center", className)}
      role="status"
      aria-label="Loading"
    >
      <Matcha
        className={twMerge(
          "animate-float drop-shadow-[0_8px_16px_rgb(181_227_168/0.25)]",
          sizeClasses[size],
        )}
      />
    </div>
  );
}
