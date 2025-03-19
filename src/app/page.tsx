import About from "./components/About";
import Contact from "./components/Contact";
import Divider from "./components/Divider";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ScroolScaler from "./components/ScroolScaler";
import Skills from "./components/Skills";

const HomePage = () => {
  return (
    <div className="flex flex-col overflow-x-hidden pt-16 items-center gap-12 md:gap-28 w-full md:pl-48 lg:pl-52 p-4">
      <ScroolScaler />
      
      <Home />

      <Divider />

      <About />

      <Divider />

      <Education />

      <Divider />

      <Skills />

      <Divider />

      <Projects />

      <Divider />

      <Experience />

      <Divider />

      <Contact />



    </div>
  )
}

export default HomePage;
