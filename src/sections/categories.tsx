import Aos from "aos";
import { useEffect } from "react";
import { FaCamera, FaCameraRetro } from "react-icons/fa";
import { RiCamera3Fill } from "react-icons/ri";

const DataCategories = [
    {
        id: 1,
        title: "DSLR Cameras",
        description: "Explore our high-quality DSLR cameras for capturing stunning shots.",
        icon: <FaCamera size={32} className="fill-pink-950" />,
    },
    {
        id: 2,
        title: "Mirrorless Cameras",
        description: "Compact and powerful cameras for modern photographers.",
        icon: <FaCameraRetro size={32} className="fill-pink-950" />,
    },
    {
        id: 3,
        title: "Action Cameras",
        description: "Perfect cameras to capture your adventurous moments.",
        icon: <RiCamera3Fill size={32} className="fill-pink-950" />,
    },
]

const Categories = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return ( 
    <div id="categories" className="mx-auto max-w-7xl space-y-6 px-6 lg:px-20 my-12 md:my-32">
            <div 
                data-aos="zoom-out-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="text-center">
            <h2 className="text-4xl font-semibold">Product Categories</h2>
            <p>Trusted by Thousands of Photography Enthusiasts</p>
        </div>

            <div 
                data-aos="zoom-out-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DataCategories.map((category, index) => (
                    <div
                        key={category.id}
                        className="border rounded-lg bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden hover:bg-pink-100 hover:shadow-md transition duration-300 ease-in-out"
                    >
                        <div className="w-24 h-24 bg-pink-700 rounded-full absolute -right-5 -top-7">
                            <p className="absolute bottom-6 left-7 text-white text-2xl">
                                {String(index + 1).padStart(2, "0")}
                            </p>
                        </div>

                        <div className="w-12">{category.icon}</div>
                        <h1 className="font-bold text-xl">{category.title}</h1>
                        <p className="text-sm text-zinc-500 leading-6">{category.description}</p>
                    </div>
                ))}
            </div>  
        </div>
     );
}
 
export default Categories;