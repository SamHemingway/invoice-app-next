import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import { wrapper } from "./Icon.css";

type IconType = {
  label: string;
  size?: number;
  colour?: string;
  strokeWidth?: number;
  children: React.ReactNode;
};

function Icon({
  label,
  size,
  colour,
  strokeWidth = 2,
  children,
  ...delegated
}: IconType) {
  return (
    <div
      className={wrapper}
      style={
        {
          "--size": size + "px",
          "--stroke-width": strokeWidth + "px",
          "--colour": colour,
        } as React.CSSProperties
      }
      {...delegated}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </div>
  );
}

export default Icon;
