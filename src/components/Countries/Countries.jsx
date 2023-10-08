import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from '../Country/Country';

const Countries = () => {
    const countries=useLoaderData();
    console.log(countries);
    return (
        <div>
            <h1>All Countries:{countries.length}</h1>
            <ul>
                {
                    countries.map(country=><Country
                    country={country}
                    ></Country>)
                }
            </ul>
        </div>
    );
};

export default Countries;