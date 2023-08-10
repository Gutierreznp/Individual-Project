import style from './filters.module.css';

export default function Filters ({handleFilter}) {
    return (
        <div>
            <p className={style.titulo}>Filter By Continent: </p>
            <select onChange={handleFilter}>
                <option value="ShowAll">Show All</option>
                <option value="Antarctic">Antarctic</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}