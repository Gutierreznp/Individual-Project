import style from './filters.module.css';

export default function Filters ({handleFilter, handleFilterByActivity, activities}) {

    const checkActivity = {};

    const activitiesName = activities?.map((activitie) => {
        if(!checkActivity[activitie.name]) {
            checkActivity[activitie.name] = true;
            return activitie.name;
        }
        return null;
    }).filter(name => name !== null);

    return (
        <div className={style.container}>
            <p className={style.titulo}>Countries with an activity: </p>
            <select onChange={handleFilterByActivity}>
                {
                    activitiesName.length > 0 ? activitiesName.map(name => <option value={name}>{name}</option>) : null
                }
            </select>
            <p className={style.titulo}>Filter By Continent: </p>
            <select onChange={handleFilter}>
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