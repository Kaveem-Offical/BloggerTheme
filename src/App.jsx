import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import React_to_Blogger from "./components/React_to_Blogger"
import Html_To_Blogger from "./components/Html_To_Blogger"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/react" element={<React_to_Blogger />} />
          <Route path="/static" element={<Html_To_Blogger />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
