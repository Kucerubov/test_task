import React, {Component} from 'react';
import {Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import logo from './react-logo.png';
import {Route, Routes} from "react-router-dom";
import CoursesForm from "./ListCourses";
import CourseDetails from "./CoursesDetail";
import PreviewCourse from "./PreviewCourse";

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
                            <Nav.Link href="/">Home</Nav.Link>
                        </Nav>
                        <Form inline="true" >
                            <FormControl
                                type="text"
                                placeholder="search"
                                className="mr-sm-2"
                            />
                        </Form>
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