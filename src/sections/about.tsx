import { useEffect } from "react";
import AboutImage from "/images/about.jpg";
import Aos from "aos";

const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="bg-pink-950">
            <div 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="mx-auto max-w-7xl space-y-6 sm:px-6 my-6 md:my-20 text-white py-14">
                <div className="flex flex-col-reverse lg:flex-row lg:justify-between items-center">
                    {/* Text Section */}
                    <div className="w-full text-center lg:text-left lg:w-1/2 lg:pr-10">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Affordable Prices, Top-Quality Products
                        </h2>
                        <p className="my-6">
                            Zaicam is your trusted partner for all your photography needs, offering a
                            wide range of cameras and accessories to inspire creativity.
                        </p>
                        <a
                            href="#"
                            className="underline text-white hover:text-gray-300"
                        >
                            Buy our products now
                        </a>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
                        <img
                            src={AboutImage}
                            alt="About Zaicam"
                            className="rounded-2xl w-11/12 md:w-10/12 lg:w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
