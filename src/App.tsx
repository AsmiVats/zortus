import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Home/Contact"
import Navbar from "./components/Header/Navbar"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  )
}

export default App
