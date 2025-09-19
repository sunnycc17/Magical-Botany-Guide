import { FC, useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FavouritePlantsList from "./components/FavouritePlantsList"; // 👈 new
import Footer from "./components/Footer";

import usePreloader from "./hooks/usePreloader";

const App: FC = () => {
  const showPreloader = usePreloader();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (showPreloader) return <Preloader />;

  return (
    <div>
      <Header />
      <HeroSection />
      {/* Favourite Plants Section */}
      <main
        className="container mx-auto p-4 relative bg-[#ddc190] 
        bg-[radial-gradient(circle_at_center,rgba(221,193,144,0.9)_60%,rgba(0,0,0,0.4)_100%)]"
      >
        <FavouritePlantsList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
