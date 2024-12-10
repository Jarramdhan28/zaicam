import { useState } from "react";
import NavLink from "../components/navlink";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleLine } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return ( 
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white bg-opacity-80">
            <div className="mx-auto max-w-7xl space-y-6 px-4 lg:px-8 py-2">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">Zai<span className="text-pink-700">Cam</span></div>
                    
                    <div className="hidden md:flex">
                        <NavLink to="#hero" label="Home" />
                        <NavLink to="#about" label="About" />
                        <NavLink to="#categories" label="Categories"/>
                        <NavLink to="#bestProduct" label="Product"/>
                        <NavLink to="#testimonials" label="Testimonials"/>
                    </div>

                    <button className="md:hidden" onClick={toggleMenu}>
                        {!isOpen ? <TiThMenu size={24}/ > : <RiCloseCircleLine size={24} /> }
                    </button>
                </div>
            </div>

        {/* Mobile Menu */}
            {isOpen && (
            <div className="md:hidden">
                    <NavLink to="#hero" label="Home" />
                    <NavLink to="#about" label="About" />
                    <NavLink to="#categories" label="Categories" />
                    <NavLink to="#bestProduct" label="Product" />
                    <NavLink to="#testimonials" label="Testimonials" />
            </div>
        )}
    </nav>
    )
}
 
export default Navbar;