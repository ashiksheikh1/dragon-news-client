import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSidNav = () => {
    const { providerLogin } = useContext(AuthContext)
    const GoogleProvider = new GoogleAuthProvider()
    const handleGogoolSignIn = () => {
        providerLogin(GoogleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGogoolSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> log in with google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> login with github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h2>find us on</h2>
                <ListGroup>
                    <ListGroup.Item className='mb-2'> <FaFacebook></FaFacebook>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitter></FaTwitter> Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaWhatsapp></FaWhatsapp> Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item className='mb-2'> <FaTwitch></FaTwitch>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item className='mb-2'>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSidNav;