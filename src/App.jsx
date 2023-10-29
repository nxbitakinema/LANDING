import './App.css'
import { useState } from 'react'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import InfoOne      from './components/InfoOne'
import InfoTwo      from './components/InfoTwo'
import CTA          from './components/CTA'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <InfoOne />
      <InfoTwo />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App
