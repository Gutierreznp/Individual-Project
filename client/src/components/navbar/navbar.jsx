import { Link, useLocation } from "react-router-dom";
import style from './navbar.module.css';
import welcomeImage from '../../assets/Fondo de kisspng-welcome-ladies-and-gentlemen-youtube-dailymotion-welcome-5abc9314040f08 eliminado.5373172915223078600166.png'

export default function Navbar ({handleChange, handleSubmit, searchCountry}) {

    const location = useLocation();
    return (
        <div className={style.containernav}>
        <div className={style.navbar}>
            
            <button className={style.link}>
                <Link className={style.link1} to='/home'>Home</Link>
            </button>
            {
                location.pathname === '/form' ? <h1 className={style.title}>Create a New Activity!</h1> : null
            }
            <button className={style.link}>
                <Link className={style.link1} to='/form'>Create Activities</Link>
            </button>
            {
                location.pathname === '/home' && <form>
                <input className={style.input} onChange = {(event) => handleChange(event)} type= 'search' placeholder="Search..." value = {searchCountry}/>
                <button className={style.button} type="submit" onClick={handleSubmit}>Search</button>
            </form>
            }
        </div>
        {
                location.pathname !== '/form' ? <img className={style.img} src={welcomeImage}></img> : null
            }
        </div>
    )
}