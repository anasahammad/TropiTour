import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SpotByCountry = () => {
    const [allData, setAllData] = useState()
    const {countryName} = useParams()
    console.log(countryName);
    
    return (
        <div>
            
        </div>
    );
};

export default SpotByCountry;