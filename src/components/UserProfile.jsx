import { toast } from "sonner";
import UseAuth from "../hooks/UseAuth";
import { updateProfile } from 'firebase/auth';
import { Helmet } from "react-helmet";


const UserProfile = () => {
    const { user, setUser } = UseAuth()

    const sumbit = async (e) => {
        e.preventDefault()
        const form = e.target
        const fullName = form.fullName.value

        const photo = form.photo.value
        await updateProfile(user, { displayName: fullName, photoURL: photo })
        toast.success("Update Done")
        // to show the updated profile img
        let userReplica = { ...user }
        userReplica.displayName = fullName
        userReplica.photoURL = photo

        setUser(userReplica)
    }
    return (
        <div>
            <h1 className="text-3xl my-10 text-center font-semibold">Update Your Profile Details</h1>
            <div className=" my-10 flex items-center justify-center text-center dark: dark:text-gray-800">

                <Helmet>

                    <title>Update Profile</title>
                </Helmet>
                <form onSubmit={sumbit} noValidate="" action="" className="flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-gray-800">
                    <label htmlFor="username" className="self-start text-xs font-semibold">Full Name</label>
                    <input name="fullName" defaultValue={user?.displayName} type="text" className="flex items-center h-12 px-4 mt-2 rounded dark:text-black focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" />
                    <label htmlFor="email" className="self-start mt-3 text-xs font-semibold">Email</label>
                    <input name="email" readOnly defaultValue={user?.email} type="text" className=" outline-none bg-slate-200 flex items-center h-12 px-4 mt-2 rounded dark:text-black focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" />
                    <label htmlFor="image" className="self-start mt-3 text-xs font-semibold">Image Url</label>
                    <input name="photo" defaultValue={user?.photoURL} type="text" className="flex items-center h-12 px-4 mt-2 rounded dark:text-black focus:outline-none focus:ring-2 focus:dark:border-violet-600 focus:dark:ring-violet-600" />
                    <button type="submit" className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Update</button>

                </form>
            </div>
        </div>


    );
};

export default UserProfile;