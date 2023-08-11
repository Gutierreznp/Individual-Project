import { Link, useLocation } from "react-router-dom";
import style from './navbar.module.css';

export default function Navbar ({handleChange, handleSubmit}) {

    const location = useLocation();
    return (
        <div className={style.navbar}>
            {
                location.pathname !== '/form' ? <h1 className={style.title}>Welcome!!</h1> : null
            }
            <button className={style.link}>
                <Link to='/home'>Home</Link>
            </button>
            {
                location.pathname === '/form' ? <h1 className={style.title}>Create a New Activity!</h1> : null
            }
            <button className={style.link}>
                <Link to='/form'>Create Activities</Link>
            </button>
            {
                location.pathname === '/home' && <form onChange = {(event) => handleChange(event)} >
                <input className={style.input} type= 'search' placeholder="Search..." />
                <button className={style.button} type="submit" onClick={handleSubmit}>Search</button>
            </form>
            }
        </div>
    )
}