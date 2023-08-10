import { useState } from "react";
import { useDispatch } from "react-redux";
import { postActivities } from "../../redux/actions";
import validation from './validation';
import './Form.module.css';
import Navbar from "../../components/navbar/navbar";

export default function Form () {

    const dispatch = useDispatch();
    const [activitie, setActivitie] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countryId: ''
    })

    const [error, setError] = useState({});

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
        window.alert('Activity created successfully')
    }
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input name = "name" onChange = {handleChange} value = {activitie.name}/>
                    <p>{error.name && error.name}</p>
                </div>
                <div>
                    <label>Difficulty: </label>
                    <input name = "difficulty" onChange = {handleChange} value = {activitie.difficulty}/>
                    <p>{error.difficulty && error.difficulty}</p>
                </div>
                <div>
                    <label>Duration: </label>
                    <input placeholder = "Duration in hours.." name = "duration" onChange = {handleChange} value = {activitie.duration}/>
                    <p>{error.duration && error.duration}</p>
                </div>
                <div>
                    <label>Season</label>
                    <input name = "season" onChange = {handleChange} value = {activitie.season}/>
                    <p>{error.season && error.season}</p>
                </div>
                <div>
                    <label>Country</label>
                    <input name = "countryId" onChange = {handleChange} value = {activitie.countryId}/>
                    <p>{error.countryId && error.countryId}</p>
                </div>
                {Object.keys(error).length > 0 ? null : <button type="submit">Submit</button>}
            </form>
        </div>
    )
}