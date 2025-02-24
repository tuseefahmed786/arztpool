import React from 'react'
import Navbar from './compoents/Navbar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FilterForm from './compoents/FilterForm.jsx'
import Page2 from './compoents/Page2.jsx'
// import Home from './page/Home.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
          <Route index element={<FilterForm />}/>
          <Route path='carefree' element={<Page2 />}/>
          </Route>
        </Routes>
      </BrowserRouter>



      
    </>
  )
}

export default App