import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filter, getCountries, getCountriesByName, orderCountries } from "../../redux/actions";
import Cards from '../../components/cards/cards';
import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Pagination from "../../components/pagination/pagination";
import style from './Home.module.css';
import Filters from "../../components/filters/filters";
import Order from "../../components/order/order";


export default function Home () {

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.allCountries);

    const [searchCountry, setSearchCountry] = useState("");
    const [countriesPerPage, setCountriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [aux, setAux] = useState(false);

    const totalCountries = allCountries.length;
    const lastIndex = currentPage * countriesPerPage;
    const firstIndex = lastIndex - countriesPerPage;

    const handleChange = (event) => {
        event.preventDefault();
        setSearchCountry(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getCountriesByName(searchCountry));
        setSearchCountry("");
    }

    const handleFilter = (event) => {
        dispatch(filter(event.target.value))
    }
    
    const handleOrder = (event) => {
        dispatch(orderCountries(event.target.value))
        setAux(true);
    }

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={style.home}>
            <Navbar handleChange = {handleChange} handleSubmit = {handleSubmit} />
            <Filters handleFilter={handleFilter}/>
            <Order handleOrder={handleOrder}/>
            <Cards countries = {allCountries} lastIndex = {lastIndex} firstIndex = {firstIndex}/>
            <Pagination countriesPerPage = {countriesPerPage} currentPage = {currentPage} setCurrentPage = {setCurrentPage} totalCountries = {totalCountries}/>
        </div>
    )
}