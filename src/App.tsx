import { FC, useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Preloader from "./components/Preloader";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection"; // <-- make sure this is imported
import Footer from "./components/Footer";

import usePreloader from "./hooks/usePreloader";
import Plants from "./components/Plants";

const App: FC = () => {
  const showPreloader = usePreloader();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  if (showPreloader) return <Preloader />;

  return (
    <>
      <Header />

      {/* Parallax background wrapper */}
      <div
        className="relative bg-cover bg-center bg-fixed opacity-80"
        style={{ backgroundImage: "url('./moonlit-forest.png')" }}
      >
        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <h1 className="text-white text-4xl cormorant uppercase text-center p-6 m-5 underline underline-offset-8">
            {" "}
            Twilight Garden{" "}
          </h1>
          <Plants />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default App;
