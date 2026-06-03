import Navbar from "./homepage/components/NavBar"

import HeroSection from "./homepage/components/HeroSection"
import Brands from "./homepage/components/Brands"
import ProductSection from "./homepage/components/ProductSection"
import Footer from "./homepage/components/Footer"
import OfferSection from "./homepage/components/OfferSection"

export default function HomePage() {
  
    return (
    <>
      <Navbar/>
      <HeroSection/>
      <Brands/>
      <ProductSection/>
      <OfferSection/>
      <Footer/>     
    </>
  )
}

