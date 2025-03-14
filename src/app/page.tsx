import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full md:pl-48 lg:pl-52 p-4">
      <Home />

      <About />

      <Education />

      <Skills />

      <Projects />

      <Experience />


      <Contact />



    </div>
  )
}

export default HomePage;
