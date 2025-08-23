import { useEffect, useState } from "react";

const usePreloader = (duration: number = 2500): boolean => {
  const [showPreloader, setShowPreloader] = useState<boolean>(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      setShowPreloader(true);
      localStorage.setItem("hasVisited", "true");

      const timer = window.setTimeout(() => setShowPreloader(false), duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  return showPreloader;
};

export default usePreloader;
