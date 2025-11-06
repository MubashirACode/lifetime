
import { AboutUs } from './components/AboutUs'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'

import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Pricing from './components/Pricing'
import Trainer from './components/Trainer'



function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <Trainer />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App
