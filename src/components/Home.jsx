import Banner from "./Banner";
import Customer from "./Customer";
import ResortCards from "./ResortCards";
import { Helmet } from 'react-helmet';


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>Home</title>
            </Helmet>
            <Banner></Banner>
            <ResortCards></ResortCards>
            <Customer></Customer>
        </div>
    );
};

export default Home;