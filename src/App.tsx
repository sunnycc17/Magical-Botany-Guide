import { useEffect, useState } from "react";
import "./index.css";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

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
    <div className="">
      <Header />

      <PlantList />
    </div>
  );
}

export default App;
