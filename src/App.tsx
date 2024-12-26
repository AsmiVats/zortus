import { Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Contact from "./pages/Contact/Contact"
import Navbar from "./components/Header/Navbar"
import SignIn from "./pages/Sign-in-up/SignIn"
import SignUp from "./pages/Sign-in-up/SignUp"

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
