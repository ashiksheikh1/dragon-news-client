import React, { useEffect, useState } from 'react';

import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Home = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/news`)
            .then(res => res.json())
            .then(news => setNews(news))
    }, [])

    return (
        <div>
            <h2>this is home:{news.length}</h2>
            {
                news?.map(n => <NewsSummaryCart
                    key={n._id}
                    n={n}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Home;