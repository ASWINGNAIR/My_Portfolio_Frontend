import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import AswinPage from './Pages/AswinPage'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aswin' element={<AswinPage />} />
        <Route path='*' element={<PageNotFound />} />
       </Routes>
       <Footer />
    </>
  )
}

export default App
