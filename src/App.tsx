import { useEffect, useState } from "react";
import "./index.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import PlantList from "./components/PlantList";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  const [showPreloader, setShowPreloader] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisited");

    if (!hasVisited) {
      // First visit → show preloader
      setShowPreloader(true);
      localStorage.setItem("hasVisited", "true");

      // Hide after 2.5s (to match Preloader fade)
      const timer = setTimeout(() => setShowPreloader(false), 2500);
      return () => clearTimeout(timer);
    }
  }, []);

  if (showPreloader) return <Preloader />;

  return (
    <div className="">
      <Header />
      <HeroSection />
      <PlantList />
      <Footer />
    </div>
  );
}

export default App;
