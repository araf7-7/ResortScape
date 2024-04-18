import { useEffect, useState } from "react";
import ResortCard from "./ResortCard";


const ResortCards = () => {
    const [resorts, setResorts] = useState([]);

    useEffect(() => {
        fetch("./resort.json")
            .then(res => res.json())
            .then(data => setResorts(data));
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {resorts.map(resort => <ResortCard key={resort.id} resort={resort}></ResortCard>)}
            </div>
        </div>
    );
};

export default ResortCards;