import About from "components/sections/about"
import ContactSection from "components/sections/contact"
import Experiences from "components/sections/experience"
import Footer from "components/sections/footer"
import Header from "components/sections/header"
import Hero from "components/sections/hero"
import Projects from "components/sections/projects"
import Releases from "components/sections/releases"
import Skills from "components/sections/skills"
import { useEffect, useState } from "react"

function Home() {
  const [activeSection, setActiveSection] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [

    { id: 'home', label: 'Home', hidden: true },
    { id: 'about', label: 'About Me'},
    { id: 'experiences', label: 'Experiences', hidden: true },
    { id: 'releases', label: 'Releases', hidden: true },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact Me' },
  ];

  // Handle URL hash changes and scrolling
  const scrollToSection = (sectionId: any) => {
    // Update URL hash
    window.history.pushState(null, '', `#${sectionId}`);

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Handle browser back/forward and direct URL access
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1); // Remove the #
    if (hash && navItems.find(item => item.id === hash)) {
      const element = document.getElementById(hash);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);

      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    handleHashChange(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection) {
      window.history.pushState(null, '', `#${activeSection}`);
    }
  }, [activeSection]);

  return (
    <main className="main-container ">
      <div className="bg-white" id="home" key="home">
        <Header sections={navItems} setActiveSection={scrollToSection} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <Hero />
      </div>
      <div className="bg-white" id="skills" key="skills">
        <Skills />
      </div>
      <div className="bg-black" id="experiences" key="experiences">
        <Experiences />
      </div>
      <div className="bg-white" id="about" key="about">
        <About />
      </div>
      <div className="bg-black" id="projects" key="projects">
        <Projects />
      </div>
      <div className="bg-white" id="releases" key="releases">
        <Releases />
      </div>
      <div className="bg-white" id="contact" key="contact">
        <ContactSection />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  )
}

export default Home
