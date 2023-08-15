import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivities } from "../../redux/actions";
import validation from './validation';
import style from './Form.module.css';
import Navbar from "../../components/navbar/navbar";
import { getCountries } from "../../redux/actions";

export default function Form () {
    const allCountries = useSelector((state) => state.allCountries);

    const dispatch = useDispatch();
    
    const [activitie, setActivitie] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: ''
    })
    const [error, setError] = useState({});
    const [formComplete, setFormComplete] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;

        const newValue = name === 'duration' || name === 'difficulty' ? parseFloat(value) : value;
        setActivitie({
            ...activitie,
            [name]: newValue
        })
        setError(validation({
            ...activitie,
            [name]: newValue
        }))
        setFormComplete(true);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(postActivities(activitie));
        setActivitie({
            name: '',
            difficulty: '',
            duration: '',
            season: '',
            countryId: ''
        });
        setFormComplete(false)
        window.alert('Activity created successfully')
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <>
        <Navbar />
            <div className={style.container}>
            
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input name = "name" onChange = {handleChange} value = {activitie.name} placeholder = 'Name of the Activity..'/>
                    <p>{error.name && error.name}</p>
                </div>
                <div>
                    <label>Difficulty: </label>
                    <select onChange={handleChange} name = "difficulty">
                    <option value="0">None</option>
                    <option value="1">Very Easy</option>
                    <option value="2">Easy</option>
                    <option value="3">Moderate</option>
                    <option value="4">Difficult</option>
                    <option value="5">Very Difficult</option>
                    </select>
                    <p>{error.difficulty && error.difficulty}</p>
                </div>
                <div>
                    <label>Duration: </label>
                    <input placeholder = "Duration in hours.." name = "duration" onChange = {handleChange} value = {activitie.duration}/>
                    <p>{error.duration && error.duration}</p>
                </div>
                <div>
                    <label>Season: </label>
                    <select onChange={handleChange} name = "season">
                    <option>None</option>
                    <option value="Summer">Summer</option>
                    <option value="Winter">Winter</option>
                    <option value="Fall">Fall</option>
                    <option value="Spring">Spring</option>
                    </select>
                    <p>{error.season && error.season}</p>
                </div>
                <div>
                    <label>Country: </label>
                    <select onChange={handleChange} name = "countryId">
                    <option>None</option>
                    {
                        allCountries?.sort((a, b) => a.name.localeCompare(b.name)).map((country) => <option key={country.id} value={country.id}>{country.name}</option>)
                    }
                    </select>
                    <p>{error.countryId && error.countryId}</p>
                </div>
                {Object.keys(error).length > 0 || !formComplete ? null : <button type="submit">Submit</button>}
            </form>
            </div>
        </>
    )
}