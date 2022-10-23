import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import LaftSideNav from '../Pages/Shared/LeftSidNav/LaftSideNav';
import RightSidNav from '../Pages/Shared/RightSideNav/RightSidNav';

const Main = () => {
    return (
        <div>
            <Container>
                <Header></Header>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LaftSideNav></LaftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSidNav></RightSidNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;