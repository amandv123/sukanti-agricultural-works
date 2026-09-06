import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Machinery from './components/Machinery'
import WhyChooseUs from './components/WhyChooseUs'
import Reviews from './components/Reviews'
import Owner from './components/Owner'
import Location from './components/Location'
import Contact from './components/Contact'
import Footer from './components/Footer'
import MobileActionBar from './components/MobileActionBar'

export default function App() {
  return (
    <div className="pb-14 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Machinery />
        <WhyChooseUs />
        <Reviews />
        <Owner />
        <Location />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  )
}
