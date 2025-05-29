import Header from "components/sections/header"
import Hero from "components/sections/hero"
import Skills from "components/sections/skills"

function Home() {

  return (
    <div className="bg-white px-[80px] w-full">
      <Header />
      <Hero />
      <Skills />
    </div>
  )
}

export default Home
