import { FC, useEffect, useState } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Plants, { Plant } from "./components/Plants";

import usePreloader from "./hooks/usePreloader";

const App: FC = () => {
  const showPreloader = usePreloader();
  const [selectedPlantId, setSelectedPlantId] = useState<number | null>(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (showPreloader) return <Preloader />;

  const handleSelectPlant = (plant: Plant) => {
    setSelectedPlantId(plant.id);
  };

  return (
    <>
      <Header onSelectPlant={handleSelectPlant} />

      <div
        className="relative bg-cover bg-center bg-fixed opacity-80"
        style={{ backgroundImage: "url('./moonlit-forest.png')" }}
      >
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />

          <h1 className="text-white text-4xl cormorant uppercase text-center p-6 m-5 underline underline-offset-8">
            Twilight Garden
          </h1>

          <main className="pt-28">
            <Plants selectedPlantId={selectedPlantId} />
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
