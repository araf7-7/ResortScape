import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Customer = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])

    return (
        <div>
            <section className="lg:mx-auto mx-0 my-16">
                <div className="mx-1 lg:mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leading-none text-center" data-aos="fade-up" >What our customers are saying about us</h1>
                </div>
                <div className="w-[400px] lg:w-auto  mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center  lg:mx-0" data-aos="fade-up">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">Absolutely breathtaking! Our stay at the resort was nothing short of magical. From the stunning views to the impeccable service, every moment felt like a dream. The luxurious accommodations and array of amenities exceeded our expectations. We cant wait to return for another unforgettable experience.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                        <p>Eren Yeager</p>
                    </div>
                    <div className="flex flex-col items-center max-w-lg mx-12 lg:mx-0" data-aos="fade-up">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-300">
                                <path fill="currentColor" d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path fill="currentColor" d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">A paradise on earth! The resorts serene ambiance and pristine surroundings provided the perfect escape from the hustle and bustle of daily life. The staff went above and beyond to ensure our comfort, and the variety of activities offered kept us entertained throughout our stay. Truly a five-star experience that we will cherish forever.</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-300">
                                <path fill="currentColor" d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path fill="currentColor" d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-600"></span>
                        <p>Mikasa Arckerman</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Customer;