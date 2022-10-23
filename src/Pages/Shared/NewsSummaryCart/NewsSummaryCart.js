import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { BsBookmark } from "react-icons/bs";
import { FaEye, FaShareAlt, FaStar } from 'react-icons/fa';
const NewsSummaryCart = ({ n }) => {
    // console.log(n)
    const { details, title, rating, image_url, total_view, _id, author } = n
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-items-center' >
                <div className='d-flex'>
                    <div className='me-3'>
                        <Image
                            roundedCircle="true"
                            src={author?.img}
                            style={{ height: '60px' }}
                        ></Image>
                    </div>
                    <div>
                        <p className='mb-0'>{author?.name}</p>
                        <p>{author?.published_date}</p>
                    </div>
                </div>
                <div>
                    <BsBookmark className='me-2'></BsBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>


            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <>
                    {
                        details.length > 250 ?
                            <p>{details.slice(0, 250) + "..."}<Link to={`/news/${_id}`}>redmore</Link></p>
                            :
                            <p>{details}</p>
                    }
                </>
            </Card.Body>
            <Card.Footer className=" d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center'>
                    <FaStar className='text-warning me-2'></FaStar>
                    {rating.number}
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCart;