import { Helmet } from "react-helmet";
import UseAuth from "../hooks/UseAuth";


const Profile = () => {
    
    const { user } = UseAuth()
    return (
       
       <div className="max-w-md p-8 mx-auto my-12 rounded-lg shadow-2xl shadow-zinc-400  sm:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                 <Helmet>
            <title>Profile</title>
            </Helmet>
                <div className="flex-shrink-0  items-center mx-auto md:w-auto w-[150px] lg:w-[130px]  mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    {user.photoURL ? (
                        <img className="rounded-full " src={user?.photoURL} alt={user?.displayName} />
                    ) : (
                        <span>{user?.displayName?.charAt(0)}</span> // Display first character of the display name as fallback
                    )}
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Name: {user?.displayName}</h2>

                    </div>
                    <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                                <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                            </svg>
                            <span className="dark:text-gray-600">{user?.email}</span>
                        </span>

                    </div>
                </div>
            </div>
        
    );
};

export default Profile;