import { FILTER, GET_COUNTRIES, GET_COUNTRIES_BY_NAME, ORDER, POST_ACTIVITIES } from "./actions";

const initialState = {
    allCountries: [],
    copyCountries: [],
    activities: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                allCountries: action.payload,
                copyCountries: action.payload
            }
        case GET_COUNTRIES_BY_NAME:
            return {
                ...state,
                allCountries:action.payload,
                copyCountries:action.payload
            }
        case POST_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        case FILTER:
            const countriesFiltered = state.copyCountries.filter(country => country.region === action.payload);
            return {
                ...state,
                allCountries: action.payload === "ShowAll" ?
                [...state.copyCountries]
                : countriesFiltered
            }
        case ORDER:
            const countriesCopy = [...state.allCountries];
            if(action.payload === 'APopulation') {
                countriesCopy.sort((a, b) => a.population - b.population)
            } else if(action.payload === 'DPopulation') {
                countriesCopy.sort((a, b) => b.population - a.population)
            } else if(action.payload === 'AAlphabetic') {
                countriesCopy.sort((a, b) => a.name.localeCompare(b.name))
            } else if(action.payload === 'DAlphabetic') {
                countriesCopy.sort((a, b) => b.name.localeCompare(a.name))
            }
            return {
                ...state,
                allCountries: countriesCopy
            }
        // case FILTER_ACTIVITIES:
        //     const countriesFilter = state.copyCountries.filter(country => country.id === activities.countryId);
        //     return {
        //         ...state,
        //         allCountries: action.payload === "ShowAll" ?
        //         [...state.copyCountries]
        //         : countriesFilter
        //     }
        default:
            return {...state};
    }
}

export default reducer;