import About from "components/sections/about"
import ContactSection from "components/sections/contact"
import Experiences from "components/sections/experience"
import Footer from "components/sections/footer"
import Header from "components/sections/header"
import Hero from "components/sections/hero"
import Projects from "components/sections/projects"
import Releases from "components/sections/releases"
import Skills from "components/sections/skills"

function Home() {

  return (
    <main className="main-container">
      <div className="bg-white">
        <Header />
        <Hero />
        <Skills />
      </div>
      <div className="bg-black">
        <Experiences />
      </div>
      <div className="bg-white">
        <About />
      </div>
      <div className="bg-black">
        <Projects />
      </div>
      <div className="bg-white">
        <Releases />
        <ContactSection />
      </div>
      <div className="bg-black">
        <Footer />
      </div>
    </main>
  )
}

export default Home
