import About from "./components/About"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"


export default function App() {
  

  return (
    <>
      <div className="bg-[#FFFFF0]">
        <HomePage/>
        <About/>
        <Projects/>
        <Blog/>
        <Navbar/>
      </div>
    </>
  )
}