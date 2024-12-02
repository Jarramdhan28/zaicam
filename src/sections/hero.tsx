import { useEffect } from "react";
import heroImg from "/images/hero.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="bg-pink-100">
            <div className="mx-auto max-w-7xl space-y-6 py-6 px-6 lg:px-8 pt-16">
                <div 
                    data-aos="zoom-out-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" 
                    data-aos-mirror="true"
                    data-aos-once="false"
                    className="flex flex-col-reverse md:flex-row justify-center items-center">
                    {/* Text Section */}
                    <div className="w-full text-center md:text-left md:w-1/2 space-y-4">
                        <h2 className="text-3xl md:text-5xl font-semibold mb-3">
                            Find the best Camera and Capture Every Moment
                        </h2>
                        <p className="text-base md:text-lg">
                            Find a wide range of cameras and accessories for all your photography
                            needs. Everything you need is at Zaicam.
                        </p>
                        <a
                            href="#"
                            className="inline-block bg-pink-700 text-white px-6 py-3 rounded-md hover:bg-pink-900"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="w-full flex justify-center md:justify-end md:w-1/2">
                        <img
                            src={heroImg}
                            alt="hero-image"
                            className="w-10/12 md:w-9/12 lg:w-8/12"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
