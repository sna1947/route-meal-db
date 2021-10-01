import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    const activeStyle={fontWeight: "bold", color: "red"}
    return (
       <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto m-3 ">
                    <NavLink className=' m-3' activeStyle={activeStyle} to="/meal">Meal</NavLink>
                    <NavLink className=' m-3' activeStyle={activeStyle} to="/header">Header</NavLink>
                    <NavLink className=' m-3' activeStyle={activeStyle} to="/restaurant">restaurant</NavLink>
                    <NavLink className=' m-3' activeStyle={activeStyle} to="/mealdetails">Mealdetails</NavLink>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default Header;