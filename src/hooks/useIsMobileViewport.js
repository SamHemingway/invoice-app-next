import React from "react";

export default function useIsMobileViewport() {
  const [isMobile, setIsMobile] = React.useState(true);

  React.useEffect(() => {
    if (!window) setIsMobile(true);

    function handleResize() {
      if (window.innerWidth > 900) {
        setIsMobile(false);
      } else if (window.innerWidth <= 900) {
        setIsMobile(true);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}
