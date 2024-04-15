import { Outlet } from "react-router-dom";
import Header from "./Header";
import Foot from "./Foot";







const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Foot></Foot>

        </div>
    );
};

export default Root;