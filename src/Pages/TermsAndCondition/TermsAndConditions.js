import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>here is our terms amd conditions </h2>
            <p>go back registation:<Link to='/register'>registater</Link></p>
        </div>
    );
};

export default TermsAndConditions;