import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Faq = () => {
    useEffect(() => {
        Aos.init({ duration: 5000 })
    }, [])
        return (
            <div>
                <section className=" dark:text-gray-800 my-10">
                    <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                        <h2 className="mb-12 text-2xl font-semibold leading-none text-center sm:text-5xl" data-aos="fade-up">Frequently Asked Questions</h2>
                        <div className="flex text-xl flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer focus:underline custom-cursor-on-hover" data-aos="fade-up">What amenities does the resort offer?</summary>
                                <div className="px-4 pb-4" data-aos="fade-down">
                                    <p>Our resort offers a wide range of amenities including swimming pools, spa services, restaurants, bars, fitness center, water sports activities, kids club, and more. You can find detailed information about each amenity on our website.</p>
                                </div>
                            </details>
                            <details>
                                <summary data-aos="fade-up" className="py-2 outline-none cursor-pointer focus:underline custom-cursor-on-hover">Are there any dining options available at the resort?
                                </summary>
                                <div data-aos="fade-down" className="px-4 pb-4">
                                    <p>Yes, we have several dining options ranging from casual cafes to fine dining restaurants, offering a variety of cuisines to suit every palate. You can explore our dining options on our website.</p>
                                </div>
                            </details>
                            <details>
                                <summary data-aos="fade-up" className="py-2 outline-none cursor-pointer focus:underline custom-cursor-on-hover">Magni reprehenderit possimus debitis?</summary>
                                <div data-aos="fade-down" className="px-4 pb-4 space-y-2">
                                    <p>How can I make a reservation?</p>
                                    <p>Reservations can be made directly through our website by selecting your desired dates, accommodation type, and any additional services you may require. Alternatively, you can contact our reservations team for assistance.</p>
                                </div>
                            </details>
                        </div>
                    </div>
                </section>
            </div>
        );
    };


export default Faq;