import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa"

const Footer = () => {
    return ( 
        <footer className="bg-pink-950 text-white">
            <div className="mx-auto max-w-7xl py-6 px-6 lg:px-20 md:pt-10 md:pb-4 mt-32">
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20 mb-6 gap-4">
                    <div>
                        <div className="text-2xl font-bold mb-2">Zai<span className="text-pink-500">Cam</span></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa impedit dolores alias quo quam perferendis recusandae repellat tempore reiciendis doloremque, temporibus, perspiciatis mollitia nulla ex dolore? Excepturi a eum ipsa?</p>

                        <div className="flex justify-start items-center mt-4 gap-2">
                            <a href="">
                                <FaFacebookSquare size={32} className="hover:text-pink-300" />
                            </a>
                            <a href="">
                                <FaInstagramSquare size={32} className="hover:text-pink-300" />
                            </a>
                            <a href="">
                                <FaWhatsappSquare size={32} className="hover:text-pink-300" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Shop Address</h2>

                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63323.33191027605!2d108.23752409566218!3d-7.274002303795289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sid!4v1733135662522!5m2!1sen!2sid" width="100%" height="200" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
                <hr/>

                <h2 className="text-center mt-4">© 2027 ZaiCam. All rights reserved.</h2>
                
            </div>
        </footer>
    )
}
 
export default Footer