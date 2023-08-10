import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './Detail.module.css';
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
    console.log(country);
    return (
        <div>
            <Navbar />
            <img src={country.flag}/>
            <h2>{country.name}</h2>
            <h2>Capital: {country.capital}</h2>
            <h3>Continente: {country.region}</h3>
            <h3>Sub Region: {country.subregion ? country.subregion : 'No tiene subregion'}</h3>
            <h4>Poblacion: {country.population}</h4>
            {
                country.Activities?.map((act) => {
                    return (<h3>
                        Name: {act.name}
                        Difficulty: {act.difficulty}
                        Duration: {act.duration}
                        Season: {act.season}
                    </h3>)
                })
            }
        </div>
    )
}