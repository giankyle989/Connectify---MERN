import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import UserProfile from "./pages/UserProfile"
import Login from "./pages/Login"
import Register from "./pages/Register"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Feed/>} path="/" />
          <Route element={<UserProfile/>} path="/profile" />
          <Route element={<Login/>} path="/login"/>
          <Route element={<Register/>} path="/register"/>
        </Routes>
      </Router>
    </>
  )
}

export default App
