import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="grid grid-cols-2 lg:mx-2 mt-4 mx-3 md:mt-24">
            <div className=" md:w-[554px] col-span-2 lg:col-span-1 items-center content-center">
                <div className="lg:pl-4">
                    <p className="font-bold">Your Gateway to Luxury Retreats</p>
                    <p className='md:text-7xl text-3xl mt-2 font-light font-serif' data-aos="fade-left">Find The Best Resorts For Your Holiday</p>
                    <p className='md:text-xl text-base text-gray-500 md:mt-5' data-aos="fade-right">Welcome to ResortScape, your premier destination for indulging in the worlds most luxurious retreats. Dive into a realm where relaxation meets extravagance, where every detail is crafted to cater to your desire for ultimate comfort and rejuvenation.</p>
                    <button className="btn mt-3 w-[130px] btn-outline text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600">Explore More</button>
                </div>
            </div>
            <div className="lg:col-span-1 col-span-2 bg-white">
                <Swiper
                    pagination={
                        { clickable: true }}
                    modules={[Autoplay, Pagination]}
                    loop={true}
                    autoplay={
                        { delay: 2001 }
                    }>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/7nQG98w/photo-1561501900-3701fa6a0864.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/gzmQcQ5/photo-1584132967334-10e028bd69f7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/gzmQcQ5/photo-1584132967334-10e028bd69f7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/gzmQcQ5/photo-1584132967334-10e028bd69f7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/YBBxMCW/premium-photo-1669050695617-03cfe6ec763f.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/YRJVpnG/photo-1617859047452-8510bcf207fd.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img className='w-auto h-auto rounded-lg' src="https://i.ibb.co/jHD9pXX/premium-photo-1681922761648-d5e2c3972982.jpg" alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;