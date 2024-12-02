import { useEffect } from "react"
import Product1 from "/images/products/1.jpg"
import Product2 from "/images/products/2.jpg"
import Product3 from "/images/products/3.jpg"
import Product4 from "/images/products/4.jpg"
import Aos from "aos"

const DataProduct = [
    {
        id: 1,
        link: "#",
        image: Product1,
        productName: "Canon M80",
        description: "Lorem ipsum dolor sit amet consectetur...",
        normalPrice: "30.000.000",
       discountPrice: "28.999.999"
    },
    {
        id: 2,
        link: "#",
        image: Product2,
        productName: "GoPro Hero 9",
        description: "Lorem ipsum dolor sit amet consectetur...",
        normalPrice: "6.000.000",
       discountPrice: "4.999.999"
    },
    {
        id: 3,
        link: "#",
        image: Product3,
        productName: "Fujifilm M89",
        description: "Lorem ipsum dolor sit amet consectetur...",
        normalPrice: "76.000.000",
       discountPrice: "74.999.999"
    },
    {
        id: 4,
        link: "#",
        image: Product4,
        productName: "Nikon D5900",
        description: "Lorem ipsum dolor sit amet consectetur...",
        normalPrice: "15.000.000",
       discountPrice: "14.000.000"
    }
]

const Products = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return ( 
        <div className="mx-auto max-w-7xl space-y-6 px-6 lg:px-20 my-2 md:my-32">
            <div 
                data-aos="zoom-out-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false" 
                className="text-center mb-6">
                <h2 className="text-4xl font-semibold">Best Product</h2>
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DataProduct.map((data) => (
                    <div 
                        key={data.id}
                        className="relative w-full overflow-hidden rounded-lg bg-white shadow-md border"
                        >
                        <a href={data.link}>
                            <img className="h-40 w-full rounded-t-lg object-cover transition duration-300 ease-in-out hover:scale-110" src={data.image} alt="product image" />
                        </a>
                        <span className="absolute top-0 left-0 w-28 translate-y-4 -translate-x-6 -rotate-45 bg-pink-700 text-center text-sm text-white">Sale</span>
                        <div className="mt-4 px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-slate-900">{data.productName}</h5>
                            </a>

                            <p className="text-sm">{data.description}</p>
                            <div className="mt-2">
                                    <span className="text-sm pe-1" >Rp</span>
                                    <span className="text-2xl font-bold text-slate-900">
                                        {data.discountPrice}
                                    </span>
                                    <span className="text-[12px] text-normal ps-1 text-slate-900 line-through">
                                        {data.normalPrice}
                                    </span>
                            </div>

                            <div className="mt-2">
                                <a href={data.link} className="flex items-center justify-center rounded-md bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-pink-800 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                    Buy Now
                                </a>
                            </div>
                                
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Products;