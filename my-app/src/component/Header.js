import React, {Component} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from './react-logo.png';
import {Link, Route, Routes} from "react-router-dom";
import CoursesForm from "./ListCourses";
import CourseDetails from "./CoursesDetail";

class Header extends Component {

    render() {
        return (
            <>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            height="30"
                            width="30"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/">Home</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                <Routes>
                    <Route path="/" element={<CoursesForm/>}/>
                    <Route path="/course/:id" element={<CourseDetails />} />
                </Routes>
            </>
        );
    }
}
export default Header;