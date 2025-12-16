import { useState } from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import Home from './Home'
import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BacktoTop'
import ContactPage from './Contact';
import ProductPage from './ProductList';
import AboutProduct from './OurProduct';
import IngredientsPage from './IngredientsPage'
import SearchNotFound from './SearchNotFound';
import ScrollToTop from './ScrollToTop';

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <BackToTop/>
    <ScrollToTop/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/about' element={<AboutProduct/>}/>
      <Route path='/ingredients' element={<IngredientsPage/>}/>
      <Route path='/searchnotfound' element={<SearchNotFound/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
