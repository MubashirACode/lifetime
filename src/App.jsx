
import { AboutUs } from './components/AboutUs'
import { ContactUs } from './components/ContactUs'
import { Footer } from './components/Footer'

import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Pricing from './components/Pricing'
import Trainer from './components/Trainer'
import WhatsAppButton from './components/WhatsAppButton'



function App() {


  return (
    <>
      <div className="h-screen">
        <Navbar />
        <Hero />
        <AboutUs />
        <Trainer />
        <Pricing />
        <ContactUs />
        <Footer />


        <WhatsAppButton />
      </div>
    </>
  )
}

export default App
