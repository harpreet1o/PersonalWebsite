import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Biography from "./components/Biography";

export default function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <HeroSection />
      <Projects />
      <Biography />
    </div>
  );
}
