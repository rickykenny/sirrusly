import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const appContentContainer = document.getElementById("app-content");
    if (appContentContainer) {
      appContentContainer.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
