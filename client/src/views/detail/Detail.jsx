import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from './Detail.module.css';
import Navbar from "../../components/navbar/navbar";

export default function Detail () {

    const {id} = useParams();

    const [country, setCountry] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`).then(({data}) => {
            if(data.name) {
                setCountry(data);
            } else {
                window.alert('No existe este pais');
            }
        });
        return setCountry({});
    }, [id]);

    return (
        <div className={style.container}>
            <Navbar />
            <h1>{country.name}</h1>
            <h2>Capital: {country.capital}</h2>
            <img src={country.flag} alt={country.name}/>
            <h3>Continent: {country.region}</h3>
            <h3>Sub-Region: {country.subregion ? country.subregion : 'No subregion'}</h3>
            <h4>Population: {country.population}</h4>
            <hr></hr>
            <h2>Activities You Can Do</h2>
            <div className={style.activities}>
            {
                country.Activities?.map((act) => {
                    return (<div className={style.activity}>
                        <h3>Name: {act.name}</h3>
                        <p>Difficulty(1-5): {act.difficulty}</p>
                        <p>Duration: {act.duration}hs.</p>
                        <p>Season: {act.season}</p>     
                    </div>)
                })
            }
            </div>
        </div>
    )
}