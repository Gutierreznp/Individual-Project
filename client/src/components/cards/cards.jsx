import Card from "./card/card";
import style from './cards.module.css';

export default function Cards ({countries, firstIndex, lastIndex}) {
    return (
        <div className={style.cardscontainer}>
            {countries?.map((country) => <Card country = {country} key = {country.id} />).slice(firstIndex, lastIndex)}
        </div>
    )
}