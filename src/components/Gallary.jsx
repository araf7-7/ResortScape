import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import { Helmet } from 'react-helmet';
const Gallary = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div>
             <Helmet>
                <title>Gallery</title>
            </Helmet>
            <h1 className="mt-10 text-3xl mx-auto text-center text-black">Explore The Beauty Of Our Resorts</h1>
            <p className="my-5  text-xl text-center mx-auto text-black" data-aos="fade-up" >Embark on a journey to explore the breathtaking beauty of our resorts. <br /> Indulge in luxurious accommodations, breathtaking landscapes, and unparalleled hospitality</p>
            <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
                <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                    <img src="https://i.ibb.co/C6RBWZG/photo-1580740220982-31bc86c3ca89.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
                    <img alt=""  className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/Cz44Pv0/photo-1580915404203-0a64616b60da.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/WcskDGS/photo-1561811358-21aef14f0551.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/kDKMW5P/photo-1561409037-c7be81613c1f.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/v1yF18q/premium-photo-1675745329954-9639d3b74bbf.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/1s74P0x/photo-1573663520878-8c38b10264fc.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/L6PLkxX/photo-1548983615-9e5c3349b637.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/YkcF9Nc/photo-1574691250077-03a929faece5.jpg" />
                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/MSg3NNW/photo-1571003123771-bd6a099dd83a.jpg" />
                    <img src="https://i.ibb.co/zQDckqt/photo-1500514966906-fe245eea9344.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
                </div>
            </section>
        </div>
    );
};

export default Gallary;