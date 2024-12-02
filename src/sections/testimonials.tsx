import { useEffect, useState } from "react";
import Testi1 from "/images/testimonials/1.png";
import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import Aos from "aos";

const DataTestimonials = [
    {
        id: 1,
        image: Testi1,
        name: "Jajang Mulyadi",
        message: "The camera I purchased from Zaicam exceeded my expectations! The quality is outstanding",
    },
    {
        id: 2,
        image: Testi1,
        name: "Abdul Takhir",
        message: "Zaicam offers top-notch cameras at unbeatable prices. Highly recommended for any photography enthusiast!",
    },
    {
        id: 3,
        image: Testi1,
        name: "Budi Solasido",
        message: "The customer service at Zaicam is exceptional. They guided me to choose the perfect camera for my needs.",
    },
    {
        id: 4,
        image: Testi1,
        name: "Mail Bank",
        message: "Fast shipping, great communication, and an amazing product. Zaicam is the best place for camera shopping!",
    },
    {
        id: 5,
        image: Testi1,
        name: "Nanang Sarif",
        message: "I’m beyond satisfied with my purchase. The lens quality is incredible, and the service was excellent.",
    },
]

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const itemsPerSlide = window.innerWidth < 768 ? 1 : 3

    const groupedSlides = [];
    for (let i = 0; i < DataTestimonials.length; i += itemsPerSlide) {
        groupedSlides.push(DataTestimonials.slice(i, i + itemsPerSlide))
    }

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === groupedSlides.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? groupedSlides.length - 1 : prevIndex - 1
        )
    }

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div id="testimonials" className="mx-auto max-w-6xl space-y-6 px-6 sm:px-6 lg:px-8 my-12">
            <div 
                data-aos="zoom-out-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false" 
                className="text-center">
                <h2 className="text-4xl font-semibold">Testimonials</h2>
                <p>
                    Your satisfaction is our priority. See how Zaicam has helped photographers
                    capture their best moments.
                </p>
            </div>

            <div data-aos="zoom-out-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false" 
                className="relative mx-auto">
                <div className="flex items-center justify-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-2/4 transform -translate-y-1/2 text-pink-950 rounded-full p-3"
                    >
                        <IoMdArrowDropleftCircle size={28} />
                    </button>

                    <div className="flex justify-center mx-12 space-x-4">
                        {groupedSlides[currentIndex]?.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="shadow-md rounded-lg p-6 flex-1 max-w-sm border hover:bg-pink-100 hover:shadow-md transition duration-300 ease-in-out"
                            >
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-700"
                                />
                                <h3 className="text-lg font-bold text-center">
                                    {testimonial.name}
                                </h3>
                                <p className="mt-2 text-center">
                                    "{testimonial.message}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-pink-950 rounded-full p-3"
                    >
                        <IoMdArrowDroprightCircle size={28} />
                    </button>
                </div>

                <div className="mt-6 flex justify-center space-x-2">
                    {groupedSlides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 rounded-full ${currentIndex === index
                                ? "bg-pink-800"
                                : "bg-pink-400"
                                }`}
                            onClick={() => setCurrentIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
