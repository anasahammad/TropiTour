import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SpotByCountry = () => {
    const [allData, setAllData] = useState()
    const {countryName} = useParams()
    console.log(countryName);
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/spots/${}`)
    // }, [])
    return (
        <div>
            
        </div>
    );
};

export default SpotByCountry;