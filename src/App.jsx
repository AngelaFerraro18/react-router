import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post-list' element={<PostList />} />
          <Route path='/chi-siamo' element={<ChiSiamo />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
