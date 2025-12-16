import React from 'react'
import HeroSection from './Hero'
import AboutUs from './Aboutus'
import Categories from './Categories'
import Benefits from './Benefits'
import ProductIngredients from './Ingredients'
import Testimonials from './Testimonial'
import ContactUsSection from './ContactSection';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <AboutUs/>
    <Categories/>
    <Benefits/>
    <ProductIngredients/>
    <Testimonials/>
    <ContactUsSection/>
    </>
  )
}

export default Home