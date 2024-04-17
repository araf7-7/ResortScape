import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../../hooks/UseAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading  } = UseAuth()
    
    const location = useLocation()
    if (loading){
        return <span className="loading item-center mx-auto text-center loading-spinner loading-lg"></span>
    }
    

    if (!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;