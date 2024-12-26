import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Header/Navbar"
import SignIn from "./pages/Sign-in-up/SignIn"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App
