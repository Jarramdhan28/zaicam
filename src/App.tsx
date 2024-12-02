import About from "./sections/about"
import Brand from "./sections/brand"
import Categories from "./sections/categories"
import Footer from "./sections/footer"
import Hero from "./sections/hero"
import Navbar from "./sections/navbar"
import Products from "./sections/product"
import Testimonials from "./sections/testimonials"

function App() {
    return (
        <>
            <Navbar/>
            <Hero/>
            <Brand/>
            <About/>
            <Categories/>
            <Products/>
            <Testimonials/>
            <Footer/>
        </>
    )
}

export default App
