import About from "./components/About"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import DateTimeDisplay from "./components/DateTimeDisplay"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


export default function App() {
  

  return (
    <>
      <Router basename="/portfolio-website">
        <div className="bg-[#FFFFF0] w-full">
          <DateTimeDisplay/>
          <Navbar/>
          <Routes>
            <Route path="/" element={<><HomePage />, <About />, <Projects />, <Blog /></>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}