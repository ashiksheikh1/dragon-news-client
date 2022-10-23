import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCart from '../../Shared/NewsSummaryCart/NewsSummaryCart';

const Catagory = () => {
    const catagoryNews = useLoaderData()
    console.log(catagoryNews)
    return (
        <div>
            <h2>this is catagory: {catagoryNews?.length}</h2>
            {
                catagoryNews.map(news => <NewsSummaryCart
                    key={news._id}
                    n={news}
                ></NewsSummaryCart>)
            }
        </div>
    );
};

export default Catagory;