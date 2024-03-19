import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Biography from "./components/Biography";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="font-roboto">
      <Navbar />
      <HeroSection />
      <Projects />
      <Biography />
      <ContactUs />
      <Footer />
    </div>
  );
}
