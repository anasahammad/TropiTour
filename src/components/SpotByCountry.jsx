import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const SpotByCountry = () => {
    const [allData, setAllData] = useState()
    const {countryName} = useParams()
    console.log(countryName);
    useEffect(()=>{
        fetch(`http://localhost:5000/spots`)
        .then(res=> res.json())
        .then(data=> {
            setAllData(data)
        })
    }, [])

    const filterData = allData?.filter(item=> item.country=== countryName)
    console.log(filterData);
    return (
        <div>
            
        </div>
    );
};

export default SpotByCountry;