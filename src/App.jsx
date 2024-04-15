// import Course from "./components/Course"
import {Routes, Route} from "react-router-dom"
import Courses from "./course/Courses"
import Home from "./components/Home/Home"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Contact from "./components/Contact"

function App() {
  return (
   <div className="">
     <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/contact" element={<Contact />}/>

      <Route path="/login" element={<Login />}/>



     </Routes>
   </div>
  )
}

export default App
