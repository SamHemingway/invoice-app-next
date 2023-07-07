import VisuallyHidden from "../VisuallyHidden/MyAttempt";
import PropType from "prop-types";
import { wrapper } from "./Icon.css";

function Icon({ label, size, strokeWidth = 2, children, ...delegated }) {
  return (
    <div
      className={wrapper}
      style={{
        "--size": size + "px",
        "--stroke-width": strokeWidth + "px",
      }}
      {...delegated}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </div>
  );
}

Icon.propTypes = {
  label: PropType.string.isRequired,
  size: PropType.number,
  strokeWidth: PropType.number,
  children: PropType.node.isRequired,
};

export default Icon;
