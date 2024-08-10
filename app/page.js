import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar />
      <div className="container mx-auto px-12 sm:px-20">
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
