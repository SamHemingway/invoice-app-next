import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import PropType from "prop-types";
import { wrapper } from "./Icon.css";

function Icon({
  label,
  size,
  colour,
  strokeWidth = 2,
  children,
  ...delegated
}) {
  return (
    <div
      className={wrapper}
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
        "--colour": colour,
      }}
      {...delegated}
    >
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      {children}
    </div>
  );
}

Icon.propTypes = {
  label: PropType.string.isRequired,
  size: PropType.number,
  colour: PropType.oneOfType([PropType.object, PropType.string]),
  strokeWidth: PropType.number,
  children: PropType.node.isRequired,
};

export default Icon;
