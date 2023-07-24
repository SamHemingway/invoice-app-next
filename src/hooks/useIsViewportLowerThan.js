import React from "react";

export default function useIsViewportLowerThan(pixel) {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    if (!window) setIsMobile(true);

    function handleResize() {
      if (window.innerWidth > pixel) {
        setIsMobile(false);
      } else if (window.innerWidth <= pixel) {
        setIsMobile(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pixel]);

  return isMobile;
}
