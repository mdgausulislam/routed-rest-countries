import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    
    return (
        <div>
           <li>{country.name.common}</li>
           <Link to={`./country/${country.cca3}`}>Details</Link>
        </div>
    );
};

export default Country;