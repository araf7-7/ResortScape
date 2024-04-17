
import { useForm } from 'react-hook-form';
import UseAuth from "../hooks/UseAuth";
import { updateProfile } from "firebase/auth"
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {

    const { createUser, refetch, setRefetch, user, updateUserProfile } = UseAuth();
    const navigate = useNavigate()
    useEffect(() => {
        if (user?.photoURL) navigate("/")
    }, [navigate, user]
    )
    const location = useLocation()
    const from = location?.state || "/"
    const {
        register, handleSubmit, formState: { errors },
    } = useForm()
    const onSubmit = data => {
        const { email, password, FullName, image } = data
        console.log(FullName, image)
        createUser(email, password)

            .then(() => {
                updateUserProfile(FullName, image)
                    .then(() => {
                       
                            updateProfile( {
                                displayName: FullName, photoURL: image

                            }).then(() => {
                                setRefetch(!refetch)
                                navigate(from)
                            })
                        
                    })

                //     if (result.user) {
                //         updateProfile(result.user, {
                //             displayName: FullName, photoURL: image

                //         }).then(() => {
                //             setRefetch(!refetch)
                //             navigate(from)
                //         })

                //     }
                // })
            })
    }

    return (
        <div className="w-full mx-auto my-10 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
            <h1 className="text-2xl font-bold text-center">Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-6">
                <div className="space-y-1 text-sm">
                    <label htmlFor="FullName" className="block dark:text-gray-600">Full Name</label>
                    <input {...register("FullName", { required: true })} type="text" name="FullName" id="FullName" placeholder="Full Name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.FullName && <span>This field is required</span>}
                </div>
                <div className="space-y-1 text-sm">
                    <label htmlFor="email" className="block dark:text-gray-600">Email</label>
                    <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.email && <span>This field is required</span>}
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="img" className="block dark:text-gray-600">Image URL</label>
                    <input {...register("image")} type="text" name="image" id="img" placeholder="Image Url" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                </div>

                <div className="space-y-1 text-sm">
                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                    <input {...register("password", { required: true, })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                    {errors.password && <span>This field is required</span>}
                </div>

                <button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign Up</button>
            </form>
        </div>
    );
};

export default Register;
