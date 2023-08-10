import { Link } from "react-router-dom";
import style from './card.module.css';

export default function Card ({country}) {
    return (
        <div className={style.container}>
            <h1>{country.name}</h1>
            <Link to={`/detail/${country.id}`}>
                <img className={style.img} src={country.flag}/>
            </Link>
            <h2>{country.region}</h2>
        </div>
    )
}