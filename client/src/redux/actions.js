import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_BY_NAME = 'GET_COUNTRIES_BY_NAME';
export const POST_ACTIVITIES = 'POST_ACTIVITIES';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
// export const FILTER_ACTIVITIES = 'FILTER_ACTIVITIES';


export const getCountries = () => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3001/countries');
        const { data } = response;
        return dispatch({
            type: 'GET_COUNTRIES',
            payload: data
        })
    }
}

export const getCountriesByName = (value) => {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:3001/countries/name?country=${value}`);
        const { data } = response;
        return dispatch({
            type: 'GET_COUNTRIES_BY_NAME',
            payload: data
        })
    }
}

export const postActivities = (activitie) => {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:3001/activities', activitie);
        const { data } = response;
        return dispatch({
            type: 'POST_ACTIVITIES',
            payload: data.activity
        })
    }
}

export const filter = (continent) => {
    return {
        type: FILTER,
        payload: continent
    }
}

export const orderCountries = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}
