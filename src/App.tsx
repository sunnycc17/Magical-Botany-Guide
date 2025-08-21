import { useEffect, useState } from "react";
import "./index.css";
import PlantList from "./components/PlantList";
import Preloader from "./components/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fake loading time (2.5s), can be adjusted
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen text-white p-6">
      <h1
        className="cinzel-decorative-bold max-w-4xl sm:text-3xl font-bold text-center mb-12 lg:my-14 text-[#604b3a] border-[#4e311a] border p-4 bg-white/10 mx-auto"
        style={{ textShadow: "4px 5px 4px rgba(0,0,0,0.25)" }}
      >
        ꧁ Magical Botany Guide ꧂
      </h1>

      <div className="p-5 card text-center cormorant-garamond sm:text-xl my-6 lg:my-12 rounded-xl bg-[#987c55] text-sky-100/70 mx-auto max-w-4xl">
        Explore enchanted plants like a true botanist
      </div>


    </div>
  );
}

export default App;
