import { useEffect, useState } from "react";

export default function Preloader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // start fade out after 2s
    const timer = setTimeout(() => setFadeOut(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 grid place-items-center bg-black/80 transition-opacity duration-1000 ${
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
