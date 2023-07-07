import PropType from "prop-types";
import { ICONS } from "../../../assets/ICONS";
import { wrapper } from "./IconCircle.css.ts";

function IconCircle({ icon, size, iconSize, strokeWidth = 2, ...delegated }) {
  const IconEl = ICONS[icon];
  return (
    <div
      className={wrapper}
      style={{
        "--size": size ? size + "px" : "100%",
        "--stroke-width": strokeWidth + "px",
        "--icon-size": iconSize && iconSize + "px",
      }}
      {...delegated}
    >
      {IconEl}
    </div>
  );
}

IconCircle.propTypes = {
  icon: PropType.string.isRequired,
  iconSize: PropType.number,
  strokeWidth: PropType.number,
};

export default IconCircle;
