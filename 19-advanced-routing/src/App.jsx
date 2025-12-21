import React from 'react'
import Navbar from './compenents/Navbar'
import Footer from './compenents/Footer'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/about'
import Product from './pages/product'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Navigator from './compenents/Navigator'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navigator />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseId' element={<CourseDetails />} /> {/* Dynamic routing */}

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
          <Route path='kids' element={<Kids />} />
        </Route>



        <Route path='/*' element={<NotFound />} />

      </Routes>

      <Footer />
    </div>
  )
}

export default App
