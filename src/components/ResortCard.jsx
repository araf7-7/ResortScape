
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { LuBadgeDollarSign } from "react-icons/lu";
import { GrStatusUnknown } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'


const ResortCard = ({ resort }) => {
    const { estate_title, segment_name, image, status, area, facilities, location, price, description, id } = resort;
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div>
            <div data-aos="fade-up" className="card card-compact h-full w-auto lg:w-96 bg-base-100  border-2 rounded-lg p-5">
                <figure className="bg-[#F3F3F3] py-10"><img className=" rounded-xl" src={image} alt={segment_name} /></figure>

                <div className="card-body" data-aos="fade-up" >

                    <h2 className="card-title font-bold text-2xl">{estate_title}</h2>
                    <p className="text-[#131313CC] text-xl font-medium">{segment_name}</p>
                    <h3 className="text-sm font medium">{description}</h3>
                    <h2 className="card-title font-medium text-lg"> <FaLocationDot /> {location} </h2>
                    <h2 className="card-title font-medium text-lg"><LuBadgeDollarSign /> {price}</h2>
                    <h2 className="card-title font-medium text-lg"><GrStatusUnknown /> {status}</h2>
                    <h2 className="card-title font-medium text-lg">Area:  {area}</h2>


                    <div className=" text-[#131313CC] font-medium text-lg "> <h1>Facalites: </h1>
                        <div className="pl-2 gap-5 text-violet-500 text-base font-medium">
                            <h1 className=" flex items-center  font-bold"><VscDebugBreakpointData /> {facilities[0]}</h1>
                            <h1 className="flex items-center font-bold"><VscDebugBreakpointData /> {facilities[1]}</h1>
                            <h1 className="flex items-center font-bold"><VscDebugBreakpointData /> {facilities[2]}</h1>
                        </div>
                    </div>
                    <Link to={`/resort/${id}`}><button className="btn mt-3 w-[130px ] text-white bg-violet-500  hover:bg-violet-600 hover:text-white hover:border-violet-600">Explore More</button></Link>

                </div>
                <hr className="border-dashed" />

            </div>
        </div>
    );
};

export default ResortCard;