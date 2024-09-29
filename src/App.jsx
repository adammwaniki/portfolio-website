import About from "./components/About"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import DateTimeDisplay from "./components/DateTimeDisplay"


export default function App() {
  

  return (
    <>
      <div className="bg-[#FFFFF0] w-lvw">
        <DateTimeDisplay/>
        <HomePage/>
        <About/>
        <Projects/>
        <Blog/>
        <Navbar/>
      </div>
    </>
  )
}