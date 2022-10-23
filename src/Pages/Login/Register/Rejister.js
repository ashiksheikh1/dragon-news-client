import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Rejister = () => {
    const { creatUser, updateUserProfile, emailVerification } = useContext(AuthContext)
    const [error, setError] = useState()
    const [accepted, setAccepted] = useState()
    const hsndleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password)

        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL)
                handleEmailVerification()
                toast.success('pleasy verify your email')
            })
            .catch(erroe => {
                console.log(error)
                setError(erroe.message)
            })

        const handleUpdateUserProfile = (name, photoURL) => {
            const profile = {
                displayName: name,
                photoURL: photoURL
            }
            updateUserProfile(profile)
                .then(() => { })
                .catch(error => console.log(error))
        }
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    const handleEmailVerification = () => {
        emailVerification()
            .then(() => { })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <Form onSubmit={hsndleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>your name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>photo url</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>accepts<Link to='/terms'>terms and condition</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    register
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
        </div>
    );
};

export default Rejister;