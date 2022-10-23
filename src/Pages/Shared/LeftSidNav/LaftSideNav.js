import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LaftSideNav = () => {
    const [catagories, setCatagories] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/news-catagories')
            .then(res => res.json())
            .then(data => setCatagories(data))
    }, [])
    return (
        <div>
            <h2>all catagory:{catagories?.length}</h2>
            <div>
                {
                    catagories?.map(ctagory => <p key={ctagory.id}>
                        <Link to={`/category/${ctagory.id}`}>{ctagory.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LaftSideNav;