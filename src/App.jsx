import About from "./components/About"
import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import Blog from "./components/Blog"
import Navbar from "./components/Navbar"
import DateTimeDisplay from "./components/DateTimeDisplay"
import { Routes, Route, Navigate } from "react-router-dom"

export default function App() {
  return (
    <div className="bg-[#FFFFF0] w-lvw">
      <Navbar />
      <DateTimeDisplay />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  )
}
