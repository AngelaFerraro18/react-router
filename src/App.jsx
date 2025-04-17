import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import PostList from "./pages/PostList"
import ChiSiamo from "./pages/ChiSiamo"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/SinglePost"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/post-list' element={<PostList />} />
            <Route path='/post-list/:id' element={<SinglePost />} />
            <Route path='/chi-siamo' element={<ChiSiamo />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
