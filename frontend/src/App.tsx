import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Feed from "./pages/Feed"
import UserProfile from "./pages/UserProfile"
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route element={<Feed/>} path="/" />
          <Route element={<UserProfile/>} path="/profile" />
        </Routes>
      </Router>
    </>
  )
}

export default App
