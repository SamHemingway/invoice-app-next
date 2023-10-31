import { ICONS, IconsTypes } from "@/assets/ICONS.tsx";
import { wrapper } from "./IconCircle.css.ts";

type IconCircleTypes = {
  icon: IconsTypes;
  size: number;
  strokeWidth?: number;
  style?: any;
};

function IconCircle({
  icon,
  size,
  strokeWidth = 2,
  style,
  ...delegated
}: IconCircleTypes) {
  const IconEl = ICONS[icon];

  const cssVars = {
    "--size": size ? size + "px" : "100%",
    "--stroke-width": strokeWidth + "px",
  };

  return (
    <div
      className={wrapper}
      style={{ ...cssVars, ...style }}
      {...delegated}
    >
      {IconEl}
    </div>
  );
}

export default IconCircle;
