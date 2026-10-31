import { twMerge } from "tailwind-merge";
import Matcha from "./Matcha";

/**
 * The mark: the mascot on its rounded gradient square, as on the app icon
 * (src/app/icon.svg). The splash shows it at the size of the launch icon.
 */
export default function Mark({
  className,
  steamClassName,
}: {
  className?: string;
  steamClassName?: string;
}) {
  return (
    <span
      className={twMerge(
        "grid place-items-center rounded-[25%] bg-[linear-gradient(135deg,var(--color-lime),var(--color-matcha)_50%,var(--color-mint))]",
        className,
      )}
    >
      <Matcha
        className="size-[85%]"
        steam="#2f6b2a"
        steamClassName={steamClassName}
      />
    </span>
  );
}
