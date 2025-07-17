import About from "components/sections/about"
import ContactSection from "components/sections/contact"
import Experiences from "components/sections/experience"
import Header from "components/sections/header"
import Hero from "components/sections/hero"
import Projects from "components/sections/projects"
import Releases from "components/sections/releases"
import Skills from "components/sections/skills"

function Home() {

  return (
    <>
      <div className="bg-white px-[80px] w-full">
        <Header />
        <Hero />
        <Skills />
      </div>
      <div className="bg-black px-[80px] w-full">
        <Experiences />
      </div>
      <div className="bg-white px-[80px] w-full">
        <About />
      </div>
      <div className="bg-black px-[80px] w-full">
        <Projects />
      </div>
      <div className="bg-white px-[80px] w-full">
        <Releases />
        <ContactSection />
      </div> 

      

    </>
  )
}

export default Home
