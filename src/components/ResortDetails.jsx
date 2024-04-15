import { useLoaderData, useParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { VscDebugBreakpointData } from "react-icons/vsc";
import { LuBadgeDollarSign } from "react-icons/lu";
import { GrStatusUnknown } from "react-icons/gr";
import { Helmet } from 'react-helmet';



const ResortDetails = () => {
    const resorts = useLoaderData();
    const { id } = useParams();

    const resort = resorts.find(resort => resort.id === id);
    console.log(resort)


    return (
        <div>
            <Helmet>
                <title>Resort Details</title>
            </Helmet>
            <div>

                <div className="hero min-h-screen">

                    <div className="mx-auto justify-center items-center">
                        <img
                            src={resort.image}
                            className="mt-12 rounded-lg w-[350px] lg:w-[700px] mx-auto  h-full bg-base-200 " />
                        <div className="card mx-5 lg:mx-[120px] gap-4 mt-8">

                            <h2 className="card-title font-bold text-2xl">{resort.estate_title}</h2>
                            <p className="text-[#131313CC] text-xl font-medium">{resort.segment_name}</p>
                            <h3 className="text-sm font medium">{resort.description}</h3>
                            <h2 className="card-title font-medium text-lg"> <FaLocationDot /> {resort.location} </h2>
                            <h2 className="card-title font-medium text-lg"><LuBadgeDollarSign /> {resort.price}</h2>
                            <h2 className="card-title font-medium text-lg"><GrStatusUnknown /> {resort.status}</h2>
                            <h2 className="card-title font-medium text-lg">Area:  {resort.area}</h2>


                            <div className=" text-[#131313CC] font-medium text-lg "> <h1>Facalites: </h1>
                                <div className="pl-2 gap-5 text-violet-500 text-base font-medium">
                                    <h1 className=" flex items-center  font-bold"><VscDebugBreakpointData /> {resort.facilities[0]}</h1>
                                    <h1 className="flex items-center font-bold"><VscDebugBreakpointData /> {resort.facilities[1]}</h1>
                                    <h1 className="flex items-center font-bold"><VscDebugBreakpointData /> {resort.facilities[2]}</h1>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResortDetails;