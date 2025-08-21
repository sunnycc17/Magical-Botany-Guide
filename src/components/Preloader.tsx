import { useEffect, useState } from "react";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First visit → show preloader
      setShowPreloader(true);

      // Mark as visited
      localStorage.setItem("hasVisited", "true");

      // Fade out after 2s
      const fadeTimer = setTimeout(() => setFadeOut(true), 2000);

      // Fully hide after fade animation (3s total)
      const hideTimer = setTimeout(() => setShowPreloader(false), 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, []);

  if (!showPreloader) return null;

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src="./symbol.png"
        alt="Loading…"
        className="w-24 h-24 animate-pulse drop-shadow-lg"
      />
    </div>
  );
}
